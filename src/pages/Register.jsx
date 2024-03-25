import React, { useState } from "react";
import loginimg from "../assets/images/login.svg"
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export const Register = () => {

  const [productData, setProductData] = useState({
    firstname: "",
    lastname: "",
    email_phone: "",
    password: "",
    confirmpassword: ""
  });

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    for (const key in productData) {
      if (!productData[key]) {
        toast.error("Please fill all fields properly.");
        return;
      }
    }
    if (productData.password !== productData.confirmpassword) {
      toast.error('Please Check both password are same')
      return;
    }
    try {
      const api = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      })
      const resp = await api.json()
      if (api.status == 402) {
        return toast.error("Email Already Exist")
      } if (api.status != 404) {
        toast.success(resp)
        return navigate('/login')
      } else {
        return toast.error("error")
      }
    } catch (error) {
    }
  };

  return (
    <>
      <div><Toaster /></div>
      <div className="px-8 bg-white">
        <div className="flex w-full">
          <div className="md:w-full lg:w-1/2 py-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Login to your wisemarket Account</h2>
              <p className="text-sm mb-6">Get access to your Orders. Wishlist and Recommendations</p>
            </div>
            <div className="flex justify-center">
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter First Name" className="my-3 border-black border-2 px-2 py-1" minLength={3} onChange={(e) =>
                  setProductData({ ...productData, firstname: e.target.value })} />
                <input type="text" placeholder="Enter Last Name" className="my-3 border-black border-2 px-2 py-1" minLength={3} onChange={(e) =>
                  setProductData({ ...productData, lastname: e.target.value })} />
                <input type="email" placeholder="Enter Your Email" className="my-3 border-black border-2 px-2 py-1" minLength={3} onChange={(e) =>
                  setProductData({ ...productData, email_phone: e.target.value })} />
                <input type="password" placeholder="Password" className="my-3 border-black border-2 px-2 py-1" minLength={5} onChange={(e) =>
                  setProductData({ ...productData, password: e.target.value })} />
                <input type="password" placeholder="Password" className="my-3 border-black border-2 px-2 py-1" minLength={5} onChange={(e) =>
                  setProductData({ ...productData, confirmpassword: e.target.value })} />
                <input type="submit" className="bg-gray-300 block px-3 py-1 cursor-pointer" />
              </form>
            </div>
          </div>
          <div className="md:w-full lg:w-1/2 bg-[#fafafa] py-6">
            <img src={loginimg} alt="Discount on Login" className="w-[70%] mx-[70px]" />
          </div>
        </div>
      </div>;
    </>
  )
};
