import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductsCard = () => {
  const [prod, setprod] = useState([])

  const b = prod.slice(-8)

  useEffect(() => {
    fetch('http://localhost:3000/getdata').then((resp) => resp.json()).then((data) => {
      setprod(data)
    })
  }, [])

  return (
    <div className="px-5 md:px-8 mb-9">
      <h3 className="font-semibold text-xl">Recent Products</h3>
      <div className=" my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
        {b.map((item, index) => {
          return (
            <Link to={item.name} key={index}>
              <div className="h-200px xs:h-[238px] md:h-[365px] border border-[#c7c7c7] py-2 rounded-[4px] bg-[#ffffff]">
                <div className="flex items-center justify-between px-1">
                  <div className="relative w-12 h-8 overflow-hidden">
                    <i className="fa fa-tag text-[34px] text-red-600 rotate-[134deg]"></i>
                    <span className="absolute top-[10px] left-2 text-[11px] font-semibold text-white">
                      {`10%`}
                    </span>
                  </div>
                  <div>
                    <i className="fa fa-heart text-[#1BAB6E] hover:bg-black p-[5px] hover:rounded-md transition-[bg] duration-100"></i>
                  </div>
                </div>
                <div className="w-full h-20 xs:h-28 md:h-48">
                  <img
                    src={item.image}
                    alt={`${item.name} Image`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[105px]">
                  <div className="px-2">
                    <p className="truncate text-ellipsis text-[10px] text-[#999999] h-[15px]">
                      {item.description}
                    </p>
                    <h5 className="text-sm font-bold truncate text-ellipsis max-h-5 max-w-[150px] md:max-w-[280px]">
                      {item.name}
                    </h5>
                  </div>
                  <div className="bg-[#fafafa] px-2">
                    <div>
                      <i className="fa fa-star text-[#1bab6e] text-[10px]">
                        <span className="text-[#9e9e9e] px-1">{`( ${item.rating} )`}</span>
                      </i>
                      <span className="text-[#9e9e9e] text-[10px]">
                        Free Shipping
                      </span>
                    </div>
                    <div className="flex items-center md:items-start">
                      <h3 className="font-bold">{`PKR ${item.discountprice}`}</h3>
                      <span className="text-xs text-[#707070] mx-3">
                        <del>{`PKR ${item.actualprice}`} </del>
                      </span>
                    </div>
                    <div className="my-0.5 hidden md:block">
                      <button className="text-center w-full bg-[#1bab6e] hover:bg-[#32996e] text-white font-semibold rounded-md py-2 transition-all duration-200">
                        <i className="fa fa-shopping-cart"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
