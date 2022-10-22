import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import { useRouter } from "next/router";

const Register = () => {
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", userData);

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);

  return (
    <div>
      <Head>
        <title>Register Page</title>
      </Head>

      {/* <form
        className="mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>

        <p className="my-2">
          Already have an account?{" "}
          <Link href="/signin">
            <a style={{ color: "crimson" }}>Login Now</a>
          </Link>
        </p>
      </form> */}

      <section className="vh-100" style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-5 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card"
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#f8f9fa6e",
                  height: "630px",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://i.pinimg.com/originals/d3/f8/10/d3f81017090b5bfa809768f5578c719b.jpg"
                      alt="login form"
                      class="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem", height: "629px" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center pb-1">
                          <img
                            className="logo"
                            style={{ width: "200px", margin: "auto  " }}
                            src="https://res.cloudinary.com/snake1304/image/upload/v1665301995/FlowerLuv.vn_adobe_express_paghj0.svg"
                          ></img>
                        </div>

                        <h5
                          className="fw-normal  pb-3"
                          state={{ letterSpacing: "1px" }}
                        >
                          Sign up your account
                        </h5>
                        <div className="form-outline ">
                          <input
                            className="form-control form-control-lg"
                            aria-describedby="emailHelp"
                            onChange={handleChangeInput}
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                          />
                          <label className="form-label" for="form2Example17">
                            Name
                          </label>
                        </div>
                        <div className="form-outline ">
                          <input
                            type="email"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline ">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            name="password"
                            value={password}
                            onChange={handleChangeInput}
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="form-outline">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            onChange={handleChangeInput}
                            id="exampleInputPassword2"
                            name="cf_password"
                            value={cf_password}
                          />
                          <label className="form-label" for="form2Example27">
                            Confirm Password
                          </label>
                        </div>

                        <div className="pt-1 mt-4">
                          <button type="submit" className="btn btn-dark w-100">
                            Register
                          </button>
                        </div>

                        <p
                          className="mb-5 pb-lg-2 mt-3"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link href="/signin">
                            <a style={{ color: "crimson" }}>Login Now</a>
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
