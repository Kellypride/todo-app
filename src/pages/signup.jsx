import React from "react";
import SignInImg from "../assets/signin.png";
import Input from "../components/input";
import { GiBoltEye } from "react-icons/gi";
import Button from "../components/button";

const SignUp = () => {
  return (
    <div className="flex flex-col  gap-32 py-9 px-5 bg-slate-950 font-robot">
      <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-3">
          <div className=" flex flex-col py-4 gap-4">
            <Input
              placeholder="Email"
              className=" bg-zinc-800 text-slate-200"
              type="text"
              // onChange={handleOnChange}
            />
            <Input
              iconPosition="right"
              icon={<GiBoltEye size={48} color={"#cbd5e1"} />}
              placeholder="Password"
              className=" bg-zinc-800 text-slate-200"
              type="text"
              // onChange={handleOnChange}
            />
          </div>
          <p className="text-right text-xs">
            <span className="text-gray-100 font-light">
              Forgotten password?
            </span>
            <span className="text-cyan-200">Resset password</span>
          </p>
        </div>
      </div>
      <Button
        text="Sign Up"
        className="py-4 px-4 bg-cyan-200 text-gray-800 rounded-full "
      />
    </div>
  );
};

export default SignUp;
