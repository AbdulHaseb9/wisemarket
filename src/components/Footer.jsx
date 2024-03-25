import React from 'react'
import footerlogo from "../assets/images/footerlogo.png"
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='bg-[#1F2323] py-7 px-6'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 xl:w-1/5'>
                    <img src={footerlogo} alt="WiseMarketLogo" />
                    <p className='text-white mt-3 mb-5'>WiseMarket PK</p>
                    <ul>
                        <li className='flex items-center gap-2 my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.6C0 2.504 2.504 0 5.6 0C8.696 0 11.2 2.504 11.2 5.6C11.2 9.8 5.6 16 5.6 16C5.6 16 0 9.8 0 5.6ZM5.6 1.6C3.392 1.6 1.6 3.392 1.6 5.6C1.6 7.88 3.936 11.368 5.6 13.504C7.296 11.352 9.6 7.904 9.6 5.6C9.6 3.392 7.808 1.6 5.6 1.6ZM7.59983 5.59999C7.59983 6.70456 6.7044 7.59999 5.59983 7.59999C4.49526 7.59999 3.59983 6.70456 3.59983 5.59999C3.59983 4.49542 4.49526 3.59999 5.59983 3.59999C6.7044 3.59999 7.59983 4.49542 7.59983 5.59999Z" fill="#757575"></path></svg>
                            <Link className='text-sm text-white'>40-L Johar Town Lahore</Link>
                        </li>
                        <li className='flex items-center gap-2 my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3.99958 0.223898C5.01153 0.961829 5.7775 1.99862 6.4297 2.95128L6.94089 3.70283C7.09963 3.93484 7.17226 4.21504 7.14622 4.49494C7.12017 4.77485 6.99709 5.03684 6.79827 5.23558L5.7118 6.32204L5.82638 6.56562C6.10681 7.13369 6.59075 7.95174 7.31907 8.68086C7.82198 9.17618 8.38894 9.60194 9.00485 9.9468L9.2989 10.1046L9.5609 10.2344L9.67788 10.2881L10.7635 9.20166C10.9631 9.0024 11.2262 8.87953 11.5071 8.85449C11.7879 8.82945 12.0687 8.90383 12.3003 9.06465L13.1127 9.62791C14.0358 10.2769 14.9996 11.0164 15.7488 11.9763C15.8783 12.1429 15.9607 12.3412 15.9873 12.5505C16.0139 12.7598 15.9839 12.9724 15.9002 13.1661C15.2296 14.7309 13.5326 16.0634 11.7675 15.9977L11.5271 15.9848L11.3404 15.9688L11.1337 15.9448L10.9086 15.9143L10.6642 15.8735L10.403 15.8222L10.1258 15.7605L9.83252 15.6852L9.52404 15.5971L9.20195 15.4929C7.72288 14.9913 5.84561 14.0058 3.91945 12.0797C1.9941 10.1543 1.00859 8.27704 0.507026 6.79797L0.402866 6.47588L0.314731 6.16741L0.239416 5.87416L0.17692 5.59693C0.158869 5.51011 0.142042 5.42303 0.126443 5.33573L0.0863813 5.09136L0.0543322 4.86621L0.0310966 4.65949L0.015072 4.47281L0.0022524 4.23244C-0.0626471 2.47294 1.28422 0.763926 2.8418 0.0965031C3.02927 0.0155526 3.23457 -0.0152677 3.43754 0.00706651C3.64052 0.0294007 3.8342 0.104122 3.99958 0.223898ZM3.25684 1.67252C2.39792 2.12121 1.56625 3.14678 1.60391 4.17315L1.61993 4.43595L1.63756 4.6002L1.66079 4.78449L1.69284 4.9872L1.73371 5.20914L1.78579 5.4479L1.84988 5.7043L1.9268 5.97591L2.01814 6.26275C2.05179 6.3605 2.08705 6.46066 2.12551 6.56321L2.2489 6.87729L2.38991 7.20339C2.89308 8.31069 3.71354 9.60708 5.05399 10.9467C6.39365 12.2864 7.69003 13.1076 8.79733 13.6108L9.12343 13.7518L9.43751 13.8752C9.54007 13.9137 9.64022 13.9489 9.73797 13.9826L10.0248 14.0739L10.2972 14.1508L10.5528 14.2149L10.7916 14.267L11.0135 14.3079L11.217 14.3399L11.4013 14.364L11.5648 14.38L11.8276 14.396C12.8403 14.4337 13.8739 13.6068 14.321 12.7591C13.7505 12.0901 13.0422 11.5412 12.261 10.9884L11.6617 10.571L11.5095 10.7304L11.1842 11.0853L11.0119 11.2664C10.5424 11.7448 9.99436 12.151 9.33736 11.8858L9.15628 11.8097L8.93514 11.7103L8.81175 11.6518L8.54094 11.5164L8.24368 11.3562C7.49143 10.9375 6.79952 10.4187 6.18693 9.81379C5.58207 9.20119 5.06321 8.50929 4.64457 7.75704L4.48432 7.46059L4.34811 7.18897L4.19107 6.84444L4.11415 6.66176C3.86497 6.04562 4.2079 5.52562 4.64617 5.07533L4.82564 4.89906L5.27193 4.48803L5.43217 4.3358L5.05319 3.78055C4.48993 2.9633 3.93949 2.22617 3.25604 1.67172L3.25684 1.67252ZM10.5184 3.10431L10.6113 3.11473C11.1945 3.2176 11.7302 3.50248 12.1416 3.92852C12.5529 4.35456 12.8189 4.89989 12.9012 5.48636C12.9306 5.68922 12.8811 5.89561 12.7629 6.06309C12.6448 6.23056 12.4669 6.34638 12.2659 6.38672C12.065 6.42706 11.8562 6.38884 11.6825 6.27994C11.5089 6.17103 11.3836 5.99972 11.3324 5.80124L11.314 5.7091C11.2818 5.47923 11.1836 5.26361 11.0315 5.0883C10.8794 4.91299 10.6797 4.78548 10.4567 4.72119L10.3325 4.69315C10.1313 4.65749 9.95133 4.54631 9.82939 4.38235C9.70746 4.2184 9.65277 4.01405 9.67651 3.81111C9.70026 3.60817 9.80064 3.42197 9.95712 3.29058C10.1136 3.1592 10.3144 3.09257 10.5184 3.10431ZM10.524 0.66858C11.799 0.66858 13.0217 1.17507 13.9233 2.07662C14.8249 2.97818 15.3313 4.20095 15.3313 5.47595C15.3311 5.68016 15.2529 5.87659 15.1127 6.02508C14.9725 6.17358 14.7809 6.26294 14.5771 6.27491C14.3732 6.28688 14.1725 6.22055 14.0159 6.08947C13.8593 5.9584 13.7586 5.77248 13.7345 5.56969L13.7289 5.47595C13.7292 4.66223 13.4198 3.87891 12.8636 3.28501C12.3073 2.69111 11.5459 2.33116 10.7339 2.27825L10.524 2.27104C10.3115 2.27104 10.1077 2.18662 9.95742 2.03636C9.80716 1.8861 9.72275 1.68231 9.72275 1.46981C9.72275 1.25731 9.80716 1.05351 9.95742 0.903254C10.1077 0.752995 10.3115 0.66858 10.524 0.66858Z" fill="#757575"></path>
                            </svg>
                            <Link className='text-sm text-white'>+923 111 109 473</Link>
                        </li>
                        <li className='flex items-center gap-2 my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 14" fill="none">
                                <path d="M0 1.75C0 1.28587 0.184374 0.840752 0.512563 0.512563C0.840752 0.184374 1.28587 0 1.75 0H15.75C16.2141 0 16.6592 0.184374 16.9874 0.512563C17.3156 0.840752 17.5 1.28587 17.5 1.75V12.25C17.5 12.7141 17.3156 13.1592 16.9874 13.4874C16.6592 13.8156 16.2141 14 15.75 14H1.75C1.28587 14 0.840752 13.8156 0.512563 13.4874C0.184374 13.1592 0 12.7141 0 12.25V1.75ZM3.07912 1.75L8.75 6.71212L14.4209 1.75H3.07912ZM15.75 2.91287L9.32663 8.53388C9.16706 8.67368 8.96214 8.75075 8.75 8.75075C8.53786 8.75075 8.33294 8.67368 8.17337 8.53388L1.75 2.91287V12.25H15.75V2.91287Z" fill="#757575"></path>
                            </svg>
                            <Link className='text-sm text-white'>support@wisemarket.com.pk</Link>
                        </li>
                    </ul>
                </div>
                <div className='text-white mt-5 w-1/3 md:w-1/4 xl:w-1/5'>
                    <h3 className=''>Quick Links</h3>
                    <ul className='mt-5 leading-5'>
                        <li className='cursor-pointer text-sm'>About us</li>
                        <li className='cursor-pointer text-sm'>FAQ's</li>
                        <li className='cursor-pointer text-sm'>Contact US</li>
                        <li className='cursor-pointer text-sm'>Blog</li>
                    </ul>
                </div>
                <div className='text-white mt-5 w-1/3 md:w-1/4 xl:w-1/5'>
                    <h3 className=''>Services</h3>
                    <ul className='mt-5 leading-5'>
                        <li className='cursor-pointer text-sm'>Return Policy</li>
                        <li className='cursor-pointer text-sm'>Privacy Policy</li>
                        <li className='cursor-pointer text-sm'>Refund-&-Shipping</li>
                        <li className='cursor-pointer text-sm'>Warranty</li>
                    </ul>
                </div>
                <div className='text-white mt-5 w-1/3 xl:w-1/5'>
                    <h3 className=''>My Account</h3>
                    <ul className='mt-5 leading-5'>
                        <li className='cursor-pointer text-sm'>Sign in</li>
                        <li className='cursor-pointer text-sm'>View Cart</li>
                        <li className='cursor-pointer text-sm'>My Wishlist</li>
                        <li className='cursor-pointer text-sm'>Help</li>
                        <li className='cursor-pointer text-sm'><Link to={'Account'}>Account</Link></li>
                    </ul>
                </div>
                <div className='mt-5 xl:w-1/5'>
                    <div className='w-52'>
                        <button className='px-4 py-1 rounded-md bg-[#1bab6e] text-white'>Become a Vendor</button>
                        <p className='text-sm text-white mt-5'>Reach millions of customers nationwide through wisemarket. A leading smart devices platform in Pakistan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}