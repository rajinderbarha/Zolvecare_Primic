import { createClient } from "@/prismicio";
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import React from 'react'

 const TestimonialSection = async() => {

  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const HomepageDocumentation = await client.getSingle( "homepagedocumentation"); 
console.log("HomepageDocumentation",HomepageDocumentation)

  return (
    <>
      <section className='Features'>
      <div className='container_x'>
      
                      <div className='Features_box grid md:grid-cols-2 sm:grid-cols-1	 md:gap-y-16 gap-y-12 gap-x-8'>
        {HomepageDocumentation.data.documentation_testimonial.map((item) => (
          <ul className='relative Features_boxs'>
            <li>
              <PrismicNextImage field={item.documentation_testimonialbgimage} className='absolute bottom-0 left-0 w-auto'/>
              <PrismicNextImage field={item.documentation_testimonialimage} className="mb-4 relative z-10 w-auto"/>

                <div>
              <PrismicNextImage field={HomepageDocumentation.data.documentation_testimonial_smallicon} className="mb-4 relative z-10 w-auto"/>
              

                     <PrismicRichText field={item.documentation_testimonialpara1} components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal relative z-10">{children}</p>
                      )
                    }} />
                    
                     <PrismicRichText field={item.documentation_testimonialpara2} components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal relative z-10">{children}</p>
                      )
                    }} />
                     <PrismicRichText field={item.documentation_testimonialpara3} components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal relative z-10">{children}</p>
                      )
                    }} />
                    </div>
            </li>
          </ul>
        ))
        }
        </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialSection