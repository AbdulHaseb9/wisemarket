import React from 'react'
import img1 from "../../assets/images/brands/brand(1).png"
import img2 from "../../assets/images/brands/brand(2).png"
import img3 from "../../assets/images/brands/brand(3).png"
import img4 from "../../assets/images/brands/brand(4).png"
import img5 from "../../assets/images/brands/brand(5).png"


export const Brands = () => {

    const brandimg = [
        {
            imgsrc: img1
        },
        {
            imgsrc: img2
        },
        {
            imgsrc: img3
        },
        {
            imgsrc: img4
        },
        {
            imgsrc: img5
        },
    ]

    return (
        <div className='px-5 md:px-8 bg-[#fafafa]'>
            <h3 className="font-semibold text-xl">Shop by favourite Brands</h3>
            <div className='w-full grid grid-cols-2 md:grid-cols-5 my-5'>
                {brandimg.map((item, index) => {
                    return (
                        <div key={index} className='border bg-[#ffffff] flex items-center justify-center py-5'>
                            <img src={item.imgsrc} alt='name' className='w-20' />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
