import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../components/ui/sheet"

import Link from 'next/link';
import FreeDemo_Btn from '../components/Homepage/FreeDemo_Btn';
import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

async function NavBar_OtherRoutes() {
    const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
    const HomepageNavbar_otherRoutes = await client.getSingle("navbar_otherroutes");

    return (

        <Sheet>
            {HomepageNavbar_otherRoutes.data.navbar_otherroutes.map((item, index) => (


                <header className="bg-white sticky_header" key={`header${index}`}>
                    <nav
                        className="mx-auto flex nav_bar items-center justify-between"
                        aria-label="Global"
                    >
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <PrismicNextImage field={item.zolvecare_logo} className="h-8 w-auto" width={100} height={100} />
                            </a>
                        </div>

                        <div className="flex lg:hidden">

                            <SheetTrigger type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md text-gray-700">
                                <span className="sr-only">Open main menu</span>
                                <PrismicNextImage field={item.menu_logo_nav} className="h-12 w-12 w-auto" width={52}
                                    height={52} />

                            </SheetTrigger>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-16">
                            <PrismicNextLink field={item.home_link} className=" nav_link font-medium ">Home</PrismicNextLink>
                            <PrismicNextLink field={item.aboutus_link} className=" nav_link font-medium  "> About </PrismicNextLink>
                            <PrismicNextLink field={item.blog_link} className=" nav_link font-medium  ">Blog</PrismicNextLink>
                            <PrismicNextLink field={item.faqs_link} className=" nav_link font-medium  ">FAQs</PrismicNextLink>
                        </div>
                        <div className="hidden lg:flex items-center gap-8 lg:flex-1 lg:justify-end">
                            <PrismicNextLink field={item.sign_up_link} className=" nav_link font-medium  ">Sign Up</PrismicNextLink>

                            <FreeDemo_Btn name={"Free Demo"} />
                        </div>
                    </nav>
                    {/* Mobile menu, show/hide based on menu open state. */}
                    <SheetContent>
                        <div className="lg:hidden" role="dialog" aria-modal="true">

                            <div className="fixed inset-0 z-10" />
                            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <PrismicNextImage field={item.zolvecare_logo} className="h-8 w-auto" width={100} height={100} />
                                    </a>

                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            <PrismicNextLink field={item.home_link} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</PrismicNextLink>

                                            <PrismicNextLink field={item.aboutus_link} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"> About</PrismicNextLink>

                                            <PrismicNextLink field={item.blog_link} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</PrismicNextLink>
                                            <PrismicNextLink field={item.faqs_link} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">FAQs</PrismicNextLink>
                                        </div>
                                        <div className="py-6 items-center flex gap-4">
                                            <PrismicNextLink field={item.sign_up_link} className=" nav_link font-medium  ">Sign Up</PrismicNextLink>

                                        </div> <FreeDemo_Btn name={"Free Demo"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </header>
            ))}
        </Sheet>


    )
}

export default NavBar_OtherRoutes
