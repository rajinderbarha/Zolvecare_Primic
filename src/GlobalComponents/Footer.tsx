import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Footer() {
    return (
        <div className='Footer'>


            <footer className="">
                <div className="w-full max-w-screen-xl mx-auto  md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap md:gap-10 gap-5 items-center mb-6 text-sm font-medium  sm:mb-0 ">
                            <li>
                              <Link href={"/Aboutus"} className=' font-medium md:me-6'>About Us</Link> 
                            </li>
                            <li>
                                <a href="#" className="   font-medium md:me-6">Blog</a>
                            </li>
                            <li>
                            <Link href="/FAQ" className=' font-medium  md:me-6'>FAQ</Link> 
                            </li>
                            <li>
                                <a href="#" className="  font-medium">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="  font-medium">Privacy Policy & Terms of Service</a>
                            </li>
                        </ul>
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image
                                className="w-auto "
                                src="/Image/Logos_move/Google.png"
                                alt="logos"
                                width={120}
                                height={40}
                            />
                            <Image
                                className="w-auto  "
                                src="/Image/Logos_move/Store_Badge.png"
                                alt="logos"
                                width={120}
                                height={40}
                            />
                        </a>

                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="  me-4 font-medium md:me-6">Copyright © 2024. Zolvecare</a>
                            </li>
                            
                        </ul>
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image
                                className="w-auto "
                                src="/Image/Logos_move/Social_Media.svg"
                                alt="logos"
                                width={140}
                                height={20}
                            />
                           
                        </a>

                    </div></div>
            </footer>


        </div>
    )
}
export default Footer