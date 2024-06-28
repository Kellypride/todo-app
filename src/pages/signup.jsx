import { useState } from "react";
import Input from "../components/input";
import { GiBoltEye } from "react-icons/gi";
import Button from "../components/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import db, { auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const { email, password } = formData;
    console.log("Form data before submit", formData);

    if (password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User creation successful
        console.log("User created successfully:", userCredential.user);
        // setDoc(db., {name: formData.userName, email: formData.email, password: formData.password})

        // Add user data to Firestore (users collection)
        const userRef = collection(db, "users");
        addDoc(userRef, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
          .then(() => {
            console.log("User data added to Firestore successfully!");
            // Handle successful user creation
            alert("User created successfully!");
          })
          .catch((error) => {
            console.error("Error adding user data to Firestore:", error);
            // Handle errors related to Firestore write operation
          });
      })
      .catch((error) => {
        // Handle errors during user creation
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorMessage);

        // Display a user-friendly error message based on the error code
        if (errorCode === "auth/weak-password") {
          alert("Password is too weak. Please choose a stronger password.");
        } else if (errorCode === "auth/email-already-in-use") {
          alert("Email address already in use. Please try a different email.");
        } else if (errorCode === "auth/invalid-email") {
          alert("Please enter a valid email address.");
        } else {
          alert("An error occurred during signup. Please try again.");
        }
      });
  }

  return (
    <div className=" flex flex-col gap-10 py-9 px-5 bg-slate-950 font-robot ">
      <h1 className="font-bold text-2xl text-center text-gray-100 ">
        Let's get started
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-44">
        <div className="flex flex-col gap-3">
          <div className=" flex flex-col py-4 gap-6">
            <Input
              placeholder="Enter user name"
              className=" bg-zinc-800 text-slate-200"
              type="text"
              name="name"
              value={formData.userName}
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              className=" bg-zinc-800 text-slate-200"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              iconPosition="right"
              icon={<GiBoltEye size={48} color={"#cbd5e1"} />}
              placeholder="Password"
              className=" bg-zinc-800 text-slate-200"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              iconPosition="right"
              icon={<GiBoltEye size={48} color={"#cbd5e1"} />}
              placeholder="Confirm Password"
              className=" bg-zinc-800 text-slate-200"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
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
          className="py-4 px-4 bg-cyan-200 text-gray-800 rounded-full"
        />
      </form>
    </div>
  );
};

export default SignUp;
