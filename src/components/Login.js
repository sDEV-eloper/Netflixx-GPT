import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";
import { AVATAR, NETFLIX_BG } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [message, setMessage] = useState("");
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null)
  const handleClickButton = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setMessage(message);
    if (!message) {
      if (isSignInForm) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("logged in: ", user);
            navigate("/browse")
          })
          .catch((error) => {
            setMessage("User not found")

          });
      } else {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR
          }).then(()=>{
            const {uid, email, displayName, photoURL}=auth.currentUser
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
     
          })
          .then(()=>{

            navigate("/browse")
          }).catch((error)=>{
            setMessage(Error)
          });
        })
        .catch((error) => {
            setMessage("Enter Valid details")
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={NETFLIX_BG}
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-75 p-8 rounded-md w-1/3"
      >
        <p className="text-white font-medium text-4xl p-4">
          {isSignInForm ? "Sign In" : "Sign up"}{" "}
        </p>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 m-2 rounded bg-zinc-800 text-white  "
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or Phone Number"
          className="p-4 m-2 rounded bg-zinc-800 text-white  "
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 m-2 rounded bg-zinc-800 text-white"
        />
        <button
          onClick={handleClickButton}
          className=" p-4 mt-8 mx-2 bg-[#ff3737] rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <div className="p-2">
          <input type="checkbox" size={4} />
          <label className="text-white font-md p-2 ">Remember me</label>
        </div>
        <div>
          <p className="text-red-400 text-md font-bold">{message} </p>
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
