import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setSuccess(false);
    setError("");

    signInUser(email, password)
      .then((userCredential) => {
        console.log("Successfully login", userCredential);
        event.target.reset();
        navigate(location.state ? location.state : "/");
        setSuccess(true);
      })
      .catch((error) => {
        console.log("Error happened", error.message);
        setError(error.code);
      });
  };

  return (
    <>
      <div className="card bg-base-100 mx-auto w-full max-w-lg shrink-0 shadow-lg rounded-md">
        <div className="card-body p-[60px]">
          <div className="py-10 border-b">
            <h1 className="text-4xl font-bold text-center text-primary">
              Login your account
            </h1>
          </div>
          <form onSubmit={handleLogIn} className="py-8">
            <fieldset className="fieldset">
              {/* email field  */}
              <label className="label text-xl text-primary font-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="input w-full bg-base-200 border-0 outline-0"
                placeholder="Enter your email address"
              />
              {/* password field  */}
              <label className="label text-xl text-primary font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input w-full bg-base-200 border-0 outline-0"
                placeholder="Enter your password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Login
              </button>
              {success && <p className="text-green-400">Login Successfully</p>}
              {error && <p className="text-red-400">{error}</p>}
              <p>
                Don't have an account? Please{" "}
                <Link to="/auth/register" className="underline text-blue-400">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
