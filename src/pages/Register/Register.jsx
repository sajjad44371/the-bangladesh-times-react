import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [terms, setTerms] = useState(false);
  return (
    <>
      <div className="card bg-base-100 mx-auto w-full max-w-lg shrink-0 shadow-lg rounded-md">
        <div className="card-body p-[60px]">
          <div className="py-10 border-b">
            <h1 className="text-4xl font-bold text-center text-primary">
              Login your account
            </h1>
          </div>
          <form className="py-8">
            <fieldset className="fieldset">
              {/* name field  */}
              <label className="label text-xl text-primary font-semibold">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="input w-full bg-base-200 border-0 outline-0"
                placeholder="Enter your name"
              />
              {/* photo field  */}
              <label className="label text-xl text-primary font-semibold">
                Photo URL
              </label>
              <input
                type="text"
                name="name"
                className="input w-full bg-base-200 border-0 outline-0"
                placeholder="Enter your photo URL"
              />
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
              {/* terms  */}
              <div>
                <label className="label mt-5">
                  <input
                    type="checkbox"
                    name="terms"
                    className="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                  />
                  Accept Term & Conditions
                </label>
              </div>
              <button className="btn btn-primary mt-4" disabled={!terms}>
                Register
              </button>
              <p>
                Already have an account? Please{" "}
                <Link to="/auth/login" className="underline text-blue-400">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
