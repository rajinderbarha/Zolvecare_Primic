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
      {/* <section className='Features'>
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
                    
                     <PrismicRichText field={item.documentation_testimonialh6tag} components={{
                      heading6: ({ children }) => (
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
      </section> */}
      <div className='clint relative '>
      {HomepageDocumentation.data.documentation_testimonial.map((item) => (
        <div className='container_clint lg:flex block gap-y-8 relative z-30 md:gap-x-16'>
          <PrismicNextImage field={item.documentation_testimonialbgimage} className='clint_img_absolute absolute top-28  left-16 hidden lg:block'/>
          <div className='clint_img  relative z-30'>
          <PrismicNextImage field={item.documentation_testimonialimage} className=""/>
          </div>
          <div className='clint_img_text ps-0 md:ps-20 md:pt-20 pt-14 z-30 relative'>
            <PrismicNextImage field={HomepageDocumentation.data.documentation_testimonial_smallicon} className="absolute top-0 left-0"/>
            <PrismicRichText field={item.documentation_testimonialpara1} components={{
                      paragraph: ({ children }) => (
                        <p className="">{children}</p>
                      )
                    }} />
            {/* <p>Zolvecare has transformed the way I handle medical documentation. The AI-driven automation streamlines the process, saving me valuable time and reducing administrative burden. </p> */}
            <PrismicRichText field={item.documentation_testimonialh6tag} components={{
                      heading6: ({ children }) => (
                        <h6 className="font-bold mt-4 mb-2">{children}</h6>
                      )
                    }} />
            {/* <h6 className='font-bold mt-4 mb-2'>Dr. Emily Rodriguez, Internal Medicine</h6> */}
            <PrismicRichText field={item.documentation_testimonialpara3} components={{
                      paragraph: ({ children }) => (
                        <p className="clint_name">{children}</p>
                      )
                    }} />
            {/* <p className='clint_name'>Harmony Medical Associates</p> */}
          </div>
        </div>
         ))
        }
      </div>
    </>
  )
}

export default TestimonialSection