import React from "react";
import Input from "../components/input";
import { GiBoltEye } from "react-icons/gi";
import Button from "../components/button";
const SignIn = () => {
  return (
    <div className=" flex flex-col gap-10 py-9 px-5 bg-slate-950 font-robot ">
      <h1 className="font-bold text-2xl text-center text-gray-100 ">
        Let's get started
      </h1>
      <div className="flex flex-col gap-44">
        <div className="flex flex-col gap-3">
          <div className=" flex flex-col py-4 gap-6">
            <Input
              placeholder="Enter user name"
              className=" bg-zinc-800 text-slate-200"
              type="text"
              // onChange={handleOnChange}
            />
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
            <Input
              iconPosition="right"
              icon={<GiBoltEye size={48} color={"#cbd5e1"} />}
              placeholder="Confirm Password"
              className=" bg-zinc-800 text-slate-200"
              type="text"
              // onChange={handleOnChange}
            />
          </div>
          <p className="text-right text-xs">
            <span className="text-gray-100 font-light">
              Already have an account?
            </span>
            <span className="text-cyan-200">Sign In</span>
          </p>
        </div>

        <Button
          text="Sign Up"
          className="py-4 px-4 bg-cyan-200 text-gray-800 rounded-full "
        />
      </div>
    </div>
  );
};

export default SignIn;
