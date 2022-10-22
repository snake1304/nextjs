import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";
import Link from "next/link";
import { getData } from "../../utils/fetchData";
import Filter from "../../components/Filter";
import filterSearch from "../../utils/filterSearch";
import React from "react";

const ProductsForID = (props) => {
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [productWithCate, setProductWithCate] = useState([]);

  useEffect(() => {
    setProducts(props.products);
  }, []);
  console.log("product:", products);

  useEffect(() => {
    const pros = products.filter((item) => item.category === router.query.id);
    console.log("product cate:", pros);
    setProductWithCate(pros);
    console.log("product with cate:", productWithCate);
  }, []);

  const handleLoadmore = () => {
    setPage(page + 1);
    filterSearch({ router, page: page + 1 });
  };

  return (
    <div>
      <div className="products">
        {products.length === 0 ? (
          <h2>No Products</h2>
        ) : (
          products.map((product) => (
            <div className="card" style={{ width: "16rem", cursor: "pointer" }}>
              <Link href={`/product/${product._id}`}>
                <img
                  className="card-img-top"
                  src={product.images[0].url}
                  alt={product.images[0].url}
                />
              </Link>

              <div className="card-body">
                <Link href={`/product/${product._id}`}>
                  <h5
                    className="card-title text-capitalize"
                    title={product.title}
                  >
                    {product.title}
                  </h5>
                </Link>

                <div className="row justify-content-between mx-0">
                  <h6 className="text-danger">${product.price}</h6>
                  {product.inStock > 0 ? (
                    <h6 className="text-danger">In Stock: {product.inStock}</h6>
                  ) : (
                    <h6 className="text-danger">Out Stock</h6>
                  )}
                </div>
                <div className="row justify-content-between mx-0">
                  <button
                    className="btn"
                    style={{
                      marginLeft: "5px",
                      flex: 1,
                      background: "#f79f8e",
                      fontWeight: "600",
                      color: "white",
                    }}
                    disabled={product.inStock === 0 ? true : false}
                    onClick={() => dispatch(addToCart(product, cart))}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
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
  );
};
export async function getServerSideProps({ query, params: { id } }) {
  const page = query.page || 1;
  const category = query.category || "all";
  const sort = query.sort || "";
  const search = query.search || "all";

  const res = await getData(
    `product?limit=${page * 8}&category=${id}&sort=${sort}&title=${search}`
  );
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result,
    }, // will be passed to the page component as props
  };
}
export default ProductsForID;
