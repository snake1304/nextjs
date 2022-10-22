import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { getData } from "../../utils/fetchData";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DetailProduct = (props) => {
  const router = useRouter();
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);
  const [productWithCate, setProductWithCate] = useState([]);

  useEffect(() => {
    setProductWithCate(props.products);
  }, []);
  console.log("products:", productWithCate);

  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const handleClick = () => {
    window.location.reload();
    return router.push("/");
  };
  return (
    <>
      <div className="row detail_page">
        <Head>
          <title>Detail Product</title>
        </Head>

        <div className="col-md-6" style={{ marginTop: "30px" }}>
          <img
            src={product.images[tab].url}
            alt={product.images[tab].url}
            className="d-block img-thumbnail rounded mt-4 w-100"
            style={{ height: "450px" }}
          />

          <div className="row mx-0" style={{ cursor: "pointer" }}>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.url}
                className={`img-thumbnail rounded ${isActive(index)}`}
                style={{ height: "80px", width: "20%" }}
                onClick={() => setTab(index)}
              />
            ))}
          </div>
        </div>

        <div className="col-md-6 mt-3">
          <h2
            className="text-uppercase"
            style={{ marginTop: "54px", textAlign: "center" }}
          >
            {product.title}
          </h2>
          <h4 className="text-danger" style={{ marginTop: "20px" }}>
            ${product.price}
          </h4>

          <div
            className="row mx-0 d-flex justify-content-between"
            style={{ marginTop: "20px" }}
          >
            {product.inStock > 0 ? (
              <h6 className="text-secondary">In Stock: {product.inStock}</h6>
            ) : (
              <h6 className="text-secondary">Out Stock</h6>
            )}

            <h6 className="text-secondary">Sold: {product.sold}</h6>
          </div>
          <div className="my-2">
            <p>
              <a
                className="btn btn-outline-secondary"
                data-toggle="collapse"
                style={{ width: "100%", marginTop: "10px" }}
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Description
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">{product.description}</div>
            </div>
          </div>

          <div className="my-2">
            <p>
              <a
                className="btn btn-outline-secondary"
                data-toggle="collapse"
                style={{ width: "100%" }}
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Content
              </a>
            </p>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">{product.content}</div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-dark d-block my-3 px-5"
            onClick={() => dispatch(addToCart(product, cart))}
          >
            Add to cart
          </button>
        </div>
      </div>
      <label style={{ marginTop: "50px" }}>
        <h5 style={{ margin: "auto" }}>Relate Products</h5>
      </label>
      <div className="sliderCustom">
        <Slider {...settings}>
          {productWithCate.map((product) => (
            <Link href={`/product/${product._id}`}>
              <div
                className="card"
                style={{
                  cursor: "pointer",
                  width: "200px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <img
                  className="card-img-top"
                  style={{ width: "100%" }}
                  src={product.images[0].url}
                  alt={product.images[0].url}
                />
                <div class="card-body">
                  <h6
                    className="card-title text-capitalize"
                    title={product.title}
                  >
                    {product.title}
                  </h6>
                  <div className="row justify-content-between mx-0">
                    <h7 className="text-danger">${product.price}</h7>
                    {product.inStock > 0 ? (
                      <h7 className="text-danger">
                        In Stock: {product.inStock}
                      </h7>
                    ) : (
                      <h7 className="text-danger">Out Stock</h7>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export async function getServerSideProps({ query, params: { id } }) {
  const page = query.page || 1;
  const category = query.category || "all";
  const sort = query.sort || "";
  const search = query.search || "all";

  const res = await getData(`product/${id}`);
  const cateID = res.product.category;
  // server side rendering

  const res1 = await getData(
    `product?limit=${page * 6}&category=${cateID}&sort="oldest"&title=${search}`
  );
  return {
    props: { product: res.product, products: res1.products }, // will be passed to the page component as props
  };
}

export default DetailProduct;
