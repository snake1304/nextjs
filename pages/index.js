import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import { getData } from "../utils/fetchData";
import ProductItem from "../components/product/ProductItem";
import filterSearch from "../utils/filterSearch";
import { useRouter } from "next/router";
import Filter from "../components/Filter";
import Link from "next/dist/client/link";
import SliderIndex from "../components/SliderIndex";
import SliderVertical from "../components/SliderVertical";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = (props) => {
  const [products, setProducts] = useState(props.products);

  const [isCheck, setIsCheck] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const [category, setCategory] = useState("");

  const { categories } = state;

  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1);
  }, [router.query]);

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  const handleCheckALL = () => {
    products.forEach((product) => (product.checked = !isCheck));
    setProducts([...products]);
    setIsCheck(!isCheck);
  };
  // const handleCategory = (e) => {
  //   console.log("dddd", e);
  // };
  const handleDeleteAll = () => {
    let deleteArr = [];
    products.forEach((product) => {
      if (product.checked) {
        deleteArr.push({
          data: "",
          id: product._id,
          title: "Delete all selected products?",
          type: "DELETE_PRODUCT",
        });
      }
    });

    dispatch({ type: "ADD_MODAL", payload: deleteArr });
  };

  const handleLoadmore = () => {
    setPage(page + 1);
    filterSearch({ router, page: page + 1 });
  };

  return (
    <>
      <div className="home_page">
        <Head>
          <title>Home Page</title>
        </Head>

        <div className="row">
          <div className="col-sm-9">
            <SliderIndex />
          </div>
          <div className="col-sm-3">
            <SliderVertical />
          </div>
        </div>
        <Filter state={state} />

        {/* {categories.map((item) => (
          <Link href={`/category/${item._id}`}>
            <h1 key={item._id} style={{ cursor: "pointer" }}>
              {item.name}
            </h1>
          </Link>
        ))} */}

        {auth.user && auth.user.role === "admin" && (
          <div
            className="delete_all btn btn-danger mt-2"
            style={{ marginBottom: "-10px" }}
          >
            <input
              type="checkbox"
              checked={isCheck}
              onChange={handleCheckALL}
              style={{
                width: "25px",
                height: "25px",
                transform: "translateY(8px)",
              }}
            />

            <button
              className="btn btn-danger ml-2"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={handleDeleteAll}
            >
              DELETE ALL
            </button>
          </div>
        )}
        <div className="products">
          {products.length === 0 ? (
            <h2>No Products</h2>
          ) : (
            products.map((product) => (
              <ProductItem
                key={product._id}
                product={product}
                handleCheck={handleCheck}
              />
            ))
          )}
        </div>
        {props.result < page * 8 ? (
          ""
        ) : (
          <button
            className="btn btn-outline-secondary d-block mx-auto mb-4"
            onClick={handleLoadmore}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const category = query.category || "all";
  const sort = query.sort || "";
  const search = query.search || "all";
  const gt = query.gt;
  const lt = query.lt;

  const res = await getData(
    `product?limit=${
      page * 8
    }&category=${category}&sort=${sort}&title=${search}&price=$gt=600`
  );
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result,
    }, // will be passed to the page component as props
  };
}

export default Home;
