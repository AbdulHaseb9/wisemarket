import React from 'react'

export const Shopprice = () => {
    return (
        <div className='px-5 md:px-8'>
            <h3 className="font-semibold text-xl">Shop By Price</h3>
            <div className='my-7 grid grid-cols-2 md:grid-cols-5'>
                <button className='border px-3 py-2 mx-1 rounded-lg font-semibold bg-[#1bab6e] text-white my-1'>PKR 0 to PKR 25000</button>
                <button className='border px-3 py-2 mx-1 rounded-lg font-semibold bg-[#d3f9e9] hover:bg-[#1bab6e] hover:text-white my-1'>PKR 25000 to PKR 50000</button>
                <button className='border px-3 py-2 mx-1 rounded-lg font-semibold bg-[#d3f9e9] hover:bg-[#1bab6e] hover:text-white my-1'>PKR 50000 to PKR 100000</button>
                <button className='border px-3 py-2 mx-1 rounded-lg font-semibold bg-[#d3f9e9] hover:bg-[#1bab6e] hover:text-white my-1'>PKR 100000 to PKR 200000</button>
                <button className='border px-3 py-2 mx-1 rounded-lg font-semibold bg-[#d3f9e9] hover:bg-[#1bab6e] hover:text-white my-1'>PKR 200000 to PKR 300000</button>
            </div>
        </div>
    )
}
