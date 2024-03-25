import React from 'react'
import warrantyimg from "../../assets/images/Assured/warranty.svg"
import bestpriceimg from "../../assets/images/Assured/bestprice.svg"
import checkimg from "../../assets/images/Assured/checkwarranty.svg"
import freeshippingimg from "../../assets/images/Assured/freeshipping.svg"
import iphoneimg from "../../assets/images/iphone.svg"
import { Link } from 'react-router-dom'

export const Assured = () => {
    return (
        <div className='px-5 md:px-8 py-7 bg-[#F2F2F2]'>
            <div className='w-full py-5 lg:flex gap-10'>
                <div className='w-full lg:w-3/12 text-justify'>
                    <h4 className='text-lg font-bold'>Hey,<span className='text-[#1bab6e]'> Condition Explained</span> by Wisemarket</h4>
                    <p className='text-sm'>The mobile phones we offer come in 4 different conditions. These conditions are <strong>Brand New, As New, Good, </strong> and <strong>Fair.</strong>Pick your favorite one, depending on your price range.
                    </p>
                </div>
                <div className='w-full lg:w-9/12 mt-6 lg:mt-0'>
                    <div className='w-full grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                        <div className='w-full flex justify-center items-center'>
                            <div className='border-[5px] h-32 w-[130px] rounded-full flex justify-center items-end hover:border-[#1bab6e] cursor-pointer relative hover:bg-[#d4f4e6] group'>
                                <img src={iphoneimg} alt="iphone image" className='w-12' />
                                <div className='absolute -bottom-[5px] bg-[#eaeaea] px-2 group-hover:bg-[#1bab6e] group-hover:text-white text-sm rounded-md flex items-center gap-2 py-[2px]'>
                                    <svg className="group-hover:fill-white fill-black" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M10.6429 6.00096C10.2204 6.00096 9.82294 5.77598 9.60795 5.416L8.00055 2.75117L6.39566 5.416C6.17817 5.77848 5.78069 6.00346 5.35822 6.00346C5.24573 6.00346 5.13323 5.98846 5.02574 5.95596L1.60096 4.97603V9.42575C1.60096 9.79322 1.85094 10.1132 2.20592 10.2007L7.61058 11.5531C7.86556 11.6156 8.13305 11.6156 8.38553 11.5531L13.7952 10.2007C14.1502 10.1107 14.4002 9.79072 14.4002 9.42575V4.97603L10.9754 5.95346C10.8679 5.98596 10.7554 6.00096 10.6429 6.00096ZM15.9576 3.19614L14.6701 0.6263C14.5926 0.47131 14.4251 0.381316 14.2527 0.403814L8.00055 1.20126L10.2929 5.00352C10.3879 5.16101 10.5779 5.23601 10.7554 5.18601L15.7026 3.7736C15.9501 3.70111 16.07 3.42612 15.9576 3.19614ZM1.33097 0.6263L0.0435554 3.19614C-0.0714374 3.42612 0.0510549 3.70111 0.296039 3.7711L5.24323 5.18351C5.42072 5.23351 5.6107 5.15851 5.7057 5.00102L8.00055 1.20126L1.74595 0.403814C1.57346 0.383816 1.40847 0.47131 1.33097 0.6263Z"></path>
                                    </svg>
                                    Brand New</div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className='border-[5px] h-32 w-[130px] rounded-full flex justify-center items-end hover:border-[#1bab6e] cursor-pointer relative hover:bg-[#d4f4e6] group'>
                                <img src={iphoneimg} alt="iphone image" className='w-12' />
                                <div className='absolute -bottom-[5px] bg-[#eaeaea] px-2 group-hover:bg-[#1bab6e] group-hover:text-white text-sm rounded-md flex items-center gap-2 py-[2px]'>
                                    <svg className="group-hover:fill-white fill-black" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M10.6475 4.7106L10.8891 4.744C12.2723 4.9358 13.2039 4.4854 12.9595 3.7432C12.7149 3.00141 12.7149 1.78681 12.9595 1.04501C13.2041 0.302807 12.2723 -0.147593 10.8891 0.0442069L9.78167 0.198007C8.99887 0.306407 8.29887 0.670607 7.83707 1.14981C7.71907 0.825606 7.47167 1.04621 6.99867 1.04621C6.52567 1.04621 6.27807 0.825406 6.16007 1.14981C5.69847 0.670607 4.99827 0.306407 4.21567 0.198007L3.10827 0.0442069C1.72487 -0.147593 0.793074 0.302807 1.03747 1.04501C1.28247 1.78681 1.28247 3.00141 1.03747 3.7432C0.792874 4.4854 1.72487 4.9358 3.10827 4.744L3.34967 4.7106C3.01947 6.0102 2.35167 7.5784 0.998474 8.8H3.59847V12C3.59847 12 5.82747 8.8332 6.24087 3.8094C6.37887 3.9286 6.61427 3.783 6.99867 3.783C7.38287 3.783 7.61827 3.9284 7.75627 3.8094C8.16967 8.8332 10.3985 12 10.3985 12V8.8H12.9985C11.6453 7.5784 10.9775 6.0102 10.6475 4.7106ZM4.16107 4.2294L3.05367 4.3832C2.86007 4.41 2.67287 4.4236 2.49667 4.4236C1.88387 4.4236 1.54387 4.2648 1.43027 4.1164C1.39247 4.0674 1.26747 3.957 1.37607 3.8532C2.66207 2.62341 6.02227 3.23301 6.02227 3.23301C5.63247 3.7262 4.93607 4.122 4.16107 4.2294ZM9.83627 4.2294C9.06127 4.122 8.36487 3.726 7.97487 3.23301C7.97487 3.23301 11.3355 2.62321 12.6209 3.8532C12.7299 3.9572 12.6045 4.0674 12.5669 4.1164C12.4533 4.2648 12.1133 4.4236 11.5005 4.4236C11.3243 4.4236 11.1369 4.41 10.9435 4.3832L9.83627 4.2294Z"></path>
                                    </svg>
                                    As New</div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className='border-[5px] h-32 w-[130px] rounded-full flex justify-center items-end hover:border-[#1bab6e] cursor-pointer relative hover:bg-[#d4f4e6] group'>
                                <img src={iphoneimg} alt="iphone image" className='w-12' />
                                <div className='absolute -bottom-[5px] bg-[#eaeaea] px-2 group-hover:bg-[#1bab6e] group-hover:text-white text-sm rounded-md flex items-center gap-2 py-[2px]'>
                                    <svg className="group-hover:fill-white fill-black" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M13.0009 0.54541H3.00085L0.000854492 3.52062L8.00085 11.4545L16.0009 3.52062L13.0009 0.54541ZM9.70085 7.38838L8.00085 6.49582L6.30085 7.38838L6.60085 5.50409L5.20085 4.11566L7.10085 3.81814L8.00085 2.13219L8.90085 3.91731L10.8009 4.21483L9.40085 5.50409L9.70085 7.38838Z"></path>
                                    </svg>
                                    Excellent</div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className='border-[5px] h-32 w-[130px] rounded-full flex justify-center items-end hover:border-[#1bab6e] cursor-pointer relative hover:bg-[#d4f4e6] group'>
                                <img src={iphoneimg} alt="iphone image" className='w-12' />
                                <div className='absolute -bottom-[5px] bg-[#eaeaea] px-2 group-hover:bg-[#1bab6e] group-hover:text-white text-sm rounded-md flex items-center gap-2 py-[2px]'>
                                    <svg className="group-hover:fill-white fill-black" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" fillRule='evenodd' clipRule="evenodd" d="M0.453674 5.04098H3.36265C3.61277 5.04098 3.81706 5.24605 3.81706 5.49694V11.544C3.81706 11.7942 3.61277 12 3.36265 12H0.453674C0.203556 12 -0.000732422 11.7949 -0.000732422 11.544V5.49694C-0.000732422 5.24605 0.203556 5.04098 0.453674 5.04098ZM1.7765 9.43125C2.09808 9.43125 2.35907 9.69224 2.35907 10.0138C2.35907 10.3354 2.09808 10.5964 1.7765 10.5964C1.45492 10.5964 1.19393 10.3354 1.19393 10.0138C1.19393 9.69224 1.45492 9.43125 1.7765 9.43125ZM6.94353 0.504687C7.18277 -0.71017 9.17206 0.408369 9.30333 2.36736C9.34217 2.96625 9.28081 3.663 9.13322 4.4421H11.9762C13.1584 4.4887 14.1899 5.33538 13.4613 6.725C13.6276 7.33088 13.6524 8.04162 13.2011 8.32203C13.2578 9.27822 12.993 9.87012 12.4982 10.3377C12.4655 10.8162 12.3638 11.2419 12.1331 11.5681C11.7509 12.1072 11.4418 11.9783 10.8405 11.9783H6.04015C5.2797 11.9783 4.86491 11.7701 4.367 11.1456V5.79988C5.79858 5.41305 6.55903 3.45561 6.94353 2.17007V0.504687Z"></path>
                                    </svg>
                                    Good</div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className='border-[5px] h-32 w-[130px] rounded-full flex justify-center items-end hover:border-[#1bab6e] cursor-pointer relative hover:bg-[#d4f4e6] group'>
                                <img src={iphoneimg} alt="iphone image" className='w-12' />
                                <div className='absolute -bottom-[5px] bg-[#eaeaea] px-2 group-hover:bg-[#1bab6e] group-hover:text-white text-sm rounded-md flex items-center gap-2 py-[2px]'>
                                    <svg className="group-hover:fill-white fill-black" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M11.9998 6.49745L10.6688 4.98108L10.8543 2.97381L8.88521 2.52654L7.8543 0.791992L5.99976 1.58836L4.14521 0.791992L3.1143 2.52654L1.14521 2.96836L1.33066 4.97563L-0.000244141 6.49745L1.33066 8.01381L1.14521 10.0265L3.1143 10.4738L4.14521 12.2084L5.99976 11.4065L7.8543 12.2029L8.88521 10.4684L10.8543 10.0211L10.6688 8.01381L11.9998 6.49745ZM4.90885 9.22472L2.72703 7.0429L3.49612 6.27381L4.90885 7.68108L8.50339 4.08654L9.27248 4.86108L4.90885 9.22472Z"></path>
                                    </svg>
                                    Fair</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-7'>
                <h2 className='text-xl font-semibold'>Wisemarket Assured <span className='text-sm text-[#1bab6e]'>(Want to know more?)</span></h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-1 my-8'>
                    <div className='bg-[#D4F4E6] py-6 px-5 flex gap-2 rounded-md'>
                        <div>
                            <img src={warrantyimg} />
                        </div>
                        <div>
                            <h4 className='font-bold'>12 Months Free Warranty</h4>
                            <Link to={'/'} className='text-xs text-[#1bab6e] underline'>Only for brand new mobile</Link>
                        </div>
                    </div>
                    <div className='bg-[#D4F4E6] py-6 px-5 flex gap-2 rounded-md'>
                        <div>
                            <img src={bestpriceimg} />
                        </div>
                        <div>
                            <h4 className='font-bold'>Best Price Guaranteeed</h4>
                            <Link to={'/'} className='text-xs text-[#1bab6e] underline'>some of the latest price</Link>
                        </div>
                    </div>
                    <div className='bg-[#D4F4E6] py-6 px-5 flex gap-2 rounded-md'>
                        <div>
                            <img src={checkimg} />
                        </div>
                        <div>
                            <h4 className='font-bold'>14 Day Check Warranty</h4>
                            <Link to={'/'} className='text-xs text-[#1bab6e] underline'>Piece of mind and money</Link>
                        </div>
                    </div>
                    <div className='bg-[#D4F4E6] py-6 px-5 flex gap-2 rounded-md'>
                        <div>
                            <img src={freeshippingimg} />
                        </div>
                        <div>
                            <h4 className='font-bold'>
                                Free Express Shipping</h4>
                            <Link to={'/'} className='text-xs text-[#1bab6e] underline'>Country wide shipping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
