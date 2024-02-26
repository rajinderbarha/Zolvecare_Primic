import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react';
import FreeDemo_Btn from '@/components/Homepage/FreeDemo_Btn';
const Pricesec = async () => {
   const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
   const HomepageDocumentation = await client.getSingle("homepagedocumentation");

   return (
      <div>
         <div className='Pricing' id='Pricing'>
            <div className='container_x'>
               <PrismicRichText field={HomepageDocumentation.data.pricesec_h2} components={{
                  heading2: ({ children }) => (
                     <h2 className="font-semibold md:mb-16 text-center mb-8">{children}</h2>
                  )
               }} />

               <div className='  grid items-center md:gap-8 gap-4 md:grid-cols-3 grid-cols-1'>
                  <div className='Pricing_box bg-white'>
                     <PrismicRichText field={HomepageDocumentation.data.pricesec_starter_h4} components={{
                        heading4: ({ children }) => (
                           <h4 className="font-semibold py-4 px-6">{children}</h4>
                        )
                     }} />
                     <div className='md:p-8 p-6'>
                        <PrismicRichText field={HomepageDocumentation.data.pricesec_starter_h3} components={{
                           heading3: ({ children }) => (
                              <h3 className="font-semibold mb-4">{children}</h3>
                           )
                        }} />
                        <PrismicRichText field={HomepageDocumentation.data.pricesec_starter_ptag} components={{
                           paragraph: ({ children }) => (
                              <p className="pb-4 border-b font-normal">{children}</p>
                           )
                        }} />
                        <PrismicRichText field={HomepageDocumentation.data.pricesec_starter_h5} components={{
                           heading5: ({ children }) => (
                              <p className="font-semibold my-4">{children}</p>
                           )
                        }} />
                        <ul className='pricing_list pb-4 border-b mb-4'>
                           {HomepageDocumentation.data.pricesec_starter_ul?.map((item, index) => (
                              <li key={`HomepageDocumentation_1${index}`}> <PrismicRichText field={item.pricesec_starter_li} /></li>
                           ))}
                        </ul>

                        <FreeDemo_Btn name="Get started for free" className="Free_Demo_price" />
                     </div>
                  </div>



                  <div className='Pricing_box_2  bg-white'>
                     <PrismicRichText field={HomepageDocumentation.data.pricesec_professional_h4} components={{
                        heading4: ({ children }) => (
                           <h4 className="font-semibold py-4 px-6">{children}</h4>
                        )
                     }} />
                     <div className='md:p-8 p-6'>
                        <PrismicRichText field={HomepageDocumentation.data.pricesec_professional_h3} components={{
                           heading3: ({ children }) => (
                              <h3 className="font-semibold mb-4">{children}</h3>
                           )
                        }} />
                        <PrismicRichText field={HomepageDocumentation.data.pricesec_professional_ptag} components={{
                           paragraph: ({ children }) => (
                              <p className="pb-4 border-b font-normal">{children}</p>
                           )
                        }} />
                        <PrismicRichText field={HomepageDocumentation.data.pricesec_professional_h5} components={{
                           heading5: ({ children }) => (
                              <p className="font-semibold my-4">{children}</p>
                           )
                        }} />
                        <ul className='pricing_list pb-4 border-b mb-4'>
                           {HomepageDocumentation.data.pricesec_professional_ul?.map((item, index) => (
                              <li key={`HomepageDocumentation_2${index}`}> <PrismicRichText field={item.pricesec_professional_li} /></li>
                           ))}
                        </ul>
                        <FreeDemo_Btn name="Get started " className="Free_Demo_price"/>
                     </div>
                  </div>










                  <div className='Pricing_box  bg-white'>
                     <PrismicRichText field={HomepageDocumentation.data.pricesec_custom_h4} components={{
                        heading4: ({ children }) => (
                           <h4 className="font-semibold py-4 px-6">{children}</h4>
                        )
                     }} />
                     <div className='md:p-8 p-6'>
                        <PrismicRichText field={HomepageDocumentation.data.pricesec_custom_h3} components={{
                           heading3: ({ children }) => (
                              <h3 className="font-semibold mb-4">{children}</h3>
                           )
                        }} />
                        <PrismicRichText field={HomepageDocumentation.data.pricesec_custom_ptag} components={{
                           paragraph: ({ children }) => (
                              <p className="pb-4 border-b font-normal">{children}</p>
                           )
                        }} />
                        <PrismicRichText field={HomepageDocumentation.data.pricesec_custom_h5} components={{
                           heading5: ({ children }) => (
                              <p className="font-semibold my-4">{children}</p>
                           )
                        }} />
                        <ul className='pricing_list pb-4 border-b mb-4'>
                           {HomepageDocumentation.data.pricesec_custom_ul?.map((item, index) => (
                              <li key={`HomepageDocumentation_2${index}`}> <PrismicRichText field={item.pricesec_custom_li} /></li>
                           ))}

                        </ul>
                        <FreeDemo_Btn name="Contacy Us" className="Free_Demo_price"/>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Pricesec
