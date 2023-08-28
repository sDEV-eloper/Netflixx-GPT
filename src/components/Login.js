import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleSignInForm = () => {
    console.log("Before", isSignInForm);
    setIsSignInForm(!isSignInForm);
    console.log("AFter", isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>

      <form className="absolute flex flex-col bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-75 p-8 rounded-md w-1/3">
        <p className="text-white font-medium text-4xl p-4">
          {isSignInForm ? "Sign In" : "Sign up"}{" "}
        </p>
        { !isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 m-2 rounded bg-zinc-800  "
        />}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 m-2 rounded bg-zinc-800  "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 rounded bg-zinc-800"
        />
        <button className=" p-4 mt-8 mx-2 bg-[#ff3737] rounded-md">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <div className="p-2">
          <input type="checkbox" size={4} />
          <label className="text-white font-md p-2 ">Remember me</label>
        </div>
        <div className="mt-8">
          <p className="text-gray-500">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}
            <span
              onClick={handleSignInForm}
              className=" p-2 text-md font-md text-white cursor-pointer"
            >
                {isSignInForm ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
