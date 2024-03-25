import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();

  const [logininfo, setlogininfo] = useState({
    email_phone: "",
    password: "",
  });

  const handlelogin = async () => {
    try {
      const api = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logininfo),
      });
      const resp = await api.json();
      if (api.status >= 404) {
        return toast.error(resp);
      }
      localStorage.setItem("token", JSON.stringify(resp));
      toast.success("Successfully Login!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center flex-col items-center py-5 ">
      <div>
        <Toaster />
      </div>
      <div className="w-60 py-6 px-4 border m-10">
        <div className="flex flex-col justify-center items-center">
          <input
            type="email"
            placeholder="Enter Your Email address"
            className="my-5 p-3 border"
            onChange={(e) =>
              setlogininfo({ ...logininfo, email_phone: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="my-5 p-3 border"
            onChange={(e) =>
              setlogininfo({ ...logininfo, password: e.target.value })
            }
          />
          <button
            className="border-black border-2 px-7 py-1 rounded-md font-semibold transition-all duration-250 hover:text-white hover:bg-black"
            onClick={handlelogin}
          >
            Login
          </button>
        </div>
        <div className="my-5 text-center">
          <p>if you are new here</p>
          <Link to={"register"} className="text-blue-400">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
