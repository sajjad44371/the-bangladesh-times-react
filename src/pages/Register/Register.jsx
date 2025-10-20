import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

const Register = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const [terms, setTerms] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photoURL = event.target.photo.value;
    const password = event.target.password.value;

    // console.log(name, email, photoURL, password);

    // create user
    createUser(email, password)
      .then((userCredential) => {
        console.log("Successfully created user", userCredential);
        event.target.reset();
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            console.log("Created");
            navigate("/");
          })
          .catch((error) => {
            console.log(error.code);
          });
      })
      .catch((error) => {
        console.log("Error happened", error.message);
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
          <form onSubmit={handleRegister} className="py-8">
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
                required
              />
              {/* photo field  */}
              <label className="label text-xl text-primary font-semibold">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="input w-full bg-base-200 border-0 outline-0"
                placeholder="Enter your photo URL"
                required
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
                required
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
                required
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
              <button
                type="submit"
                className="btn btn-primary mt-4"
                disabled={!terms}
              >
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
