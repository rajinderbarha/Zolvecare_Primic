import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react';

const Awaits = async () => {
    const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
    const HomepageDocumentation = await client.getSingle("homepagedocumentation");
    console.log("HomepageDocumentation", HomepageDocumentation)
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

                        <button className='Free_Demo'>Get a free demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awaits
