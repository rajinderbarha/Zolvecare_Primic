import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import FreeDemo_Btn from '../Homepage/FreeDemo_Btn';

const ShortcutSection = async () => {
  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const AboutsPageFeatures = await client.getSingle("aboutspagefeatures");
  return (
    <section>
      <div className='container_shortcut md:px-0 px-3  mx-auto'>
        <div className='shortcut md:p-0 p-5'>
          {AboutsPageFeatures.data.about_shortcut_section.map((item, index) => (


            <div key={`shortcut_1_${index}`} className='md:gap-16 gap-8 block items-center justify-center md:flex'>

              <PrismicNextImage field={item.shortcut_image} className='w-6xl md:mb-0 mb-4' />
              <div className='shortcut_text'>
                <PrismicRichText
                  field={item.shortcut_h2}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="mb-10 text-white">
                        {children}
                      </h2>
                    ),
                  }}
                />
                <FreeDemo_Btn name='Start a demo'  className="Free_Demo"/>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShortcutSection
