import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

const ShortcutSection = async() => {
    const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
    const AboutsPageFeatures = await client.getSingle("aboutspagefeatures"); 
  return (
    <section>
    <div className='container_shortcut md:px-0 px-3  mx-auto'>
        <div className='shortcut md:p-0 p-5'>
            {AboutsPageFeatures.data.about_shortcut_section.map(item => (

           
            <div className='md:gap-16 gap-8 block items-center justify-center md:flex'>
                
                <PrismicNextImage field={item.shortcut_image} className='w-6xl md:mb-0 mb-4' />
                {/* <img src={Sort} alt='' /> */}
                <div className='shortcut_text'>
                <PrismicRichText
           field={item.shortcut_h2}
          components={{
            heading2: ({ children }) => (
              <h2 className="mb-4 font-semibold text-2xl">
                {children}
              </h2>
            ),
          }}
        />
                    {/* <h2 className='mb-10 text-white'>Your shortcut to healthcare brilliance. Try our free demo!</h2> */}
                    {/* Free  demo */}
                </div>
                
            </div>
             ))}
        </div>
    </div>
</section>
  )
}

export default ShortcutSection
