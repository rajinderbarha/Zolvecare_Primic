import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/prismicio';
import { PrismicImage, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
async function Footer() {

    const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
    const Footer = await client.getSingle("footer");

    return (
        <div className='Footer'>


            <footer className="">
                <div className="w-full max-w-screen-xl mx-auto  md:py-8">
                    <div className="">
                        <ul className="flex flex-wrap  md:gap-10 gap-5 items-center mb-6 justify-center text-sm font-medium  sm:mb-10">
                            {Footer.data.links.map((item, index) => {
                                return (
                                    <li key={`footer_1${index}`} >
                                        <PrismicNextLink field={item.link}><PrismicRichText field={item.label}></PrismicRichText></PrismicNextLink>

                                    </li>
                                )
                            })}


                        </ul>
                        <div className=' flex  justify-center gap-4' >
                            {Footer.data.popup_play_appstore_link.map((item, index) => (

                                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" key={`footer_2${index}`}>
                                    <PrismicNextImage field={item.googleplaystore_img} className="w-auto" width={120} height={40} />
                                    <PrismicNextImage field={item.appstore_img} className="w-auto" width={120} height={40} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <PrismicRichText field={Footer.data.copyright} components={{
                                    paragraph: ({ children }) => (
                                        <p className="me-4 font-medium md:me-6">{children}</p>
                                    )
                                }} />
                            </li>

                        </ul>
                        {/* Loop through each social link */}
                        <div className='flex gap-4'>
                            {Footer.data.social_links.map((item, index) => (
                                <PrismicNextLink
                                    key={index}
                                    field={item.link}
                                    className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                                >
                                    <PrismicNextImage
                                        field={item.icon} // Assuming each item in social_links has an 'icon' field
                                        className="w-auto"
                                        width={140}
                                        height={20}
                                    />
                                </PrismicNextLink>
                            ))}
                        </div>

                    </div>
                </div>
            </footer>


        </div>
    )
}
export default Footer