import React, { useState } from "react";
import Input from "../components/input";
import { GiBoltEye } from "react-icons/gi";
import SignInImg from "../assets/signin.png";
import Button from "../components/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: null, // To store any errors
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setFormData((prevData) => ({ ...prevData, error: null })); // Clear previous errors

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      // Handle successful sign-in (e.g., redirect to another page)
      console.log("User signed in successfully:", userCredential.user);
    } catch (error) {
      setFormData((prevData) => ({ ...prevData, error: error.message }));
      console.error("Sign in error:", error);
    }
  };

  return (
    <div className="flex flex-col  gap-2 py-9 px-5 bg-slate-950 font-robot">
      <div className="flex flex-col gap-x-4 items-center">
        <h1 className="font-bold text-2xl text-center text-gray-100">
          Welcome Back
        </h1>
        <img
          src={SignInImg}
          alt="signInImage"
          className=" rounded-lg h-60 w-60 border-2 object-fit object-center border-cyan-200"
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-32">
        <div className="flex flex-col gap-3">
          <div className=" flex flex-col py-4 gap-4">
            <Input
              placeholder="Email"
              className=" bg-zinc-800 text-slate-200"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              iconPosition="right"
              icon={<GiBoltEye size={48} color={"#cbd5e1"} />}
              placeholder="Password"
              className=" bg-zinc-800 text-slate-200"
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <p className="text-right text-xs">
            <span className="text-gray-100 font-light">
              Forgotten password?
            </span>
            <span className="text-cyan-200">Resset password</span>
          </p>
        </div>
        <Button
          text="Sign In"
          className="py-4 px-4 bg-cyan-200 text-gray-800 rounded-full "
        />
      </form>
    </div>
  );
};

export default SignIn;
