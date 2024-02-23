import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react';
import FreeDemo_Btn from './FreeDemo_Btn';

const Awaits = async () => {
    const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
    const HomepageDocumentation = await client.getSingle("homepagedocumentation");
    return (
        <div>
            <div className='Awaits border-b'>
                <div className='container_x'>
                    <div className='Awaits_box relative'>
                        <PrismicNextImage field={HomepageDocumentation.data.awaits_img} className="w-auto md:absolute relative top-0 right-0" />

                        <PrismicRichText field={HomepageDocumentation.data.awaits_text} components={{
                            paragraph: ({ children }) => (
                                <p className="font-semibold md:mb-12">{children}</p>
                            )
                        }} />
                        <FreeDemo_Btn name="Get a free demo " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awaits
