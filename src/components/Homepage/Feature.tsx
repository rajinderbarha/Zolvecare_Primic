import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next' // PrismicNextLink is useful for internal linking bcz it can access the id of the link from the prismic document(settings) with some extra features that next/link
import Link from 'next/link'
import { PrismicRichText } from '@prismicio/react'
import GetStartedsec from './GetStartedsec'

const Feature = async () => {

  const client = createClient()       //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const Homepagelanding = await client.getSingle("landing")     // here settings is API id //// here we are fetching our settings from Settings document(whose type is single when we created) of Custom types in the Prismic  //Queries a single document from the Prismic repository for a specific custom type.//@returns The singleton document for the custom type, if a matching document exists. 
  // console.log("Homepagelanding",Homepagelanding)
  // console.log("Homepagelanding", Homepagelanding.data.featureboxes[0])



  return (

    <>
      <section className='Features'>
      <div className='container_x'>
        <PrismicRichText field={Homepagelanding.data.feature_heading2} components={{
                      heading2: ({ children }) => (
                        <h2 className="xl:mb-20 text-center mx-auto font-semibold sm:mb-10">{children}</h2>
                      )
                    }} />
                      <div className='Features_box grid md:grid-cols-2 sm:grid-cols-1	 md:gap-y-16 gap-y-12 gap-x-8'>
        {Homepagelanding.data.featureboxes.map((item,index) => (
          <ul className='relative Features_boxs' key={`featurE${index}`}>
            <li>
              <PrismicNextImage field={item.count1} className='absolute bottom-0 left-0 w-auto'/>
              <PrismicNextImage field={item.featureicon1} className="mb-4 relative z-10 w-auto"/>
              

              <PrismicRichText field={item.featureheading3} components={{
                      heading3: ({ children }) => (
                        <h3 className="mb-4 relative z-10  font-semibold">{children}</h3>
                      )
                    }} />
                     <PrismicRichText field={item.featureparagraph} components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal relative z-10">{children}</p>
                      )
                    }} />
            </li>
          </ul>
        ))
        }
        </div>
        </div>
      </section>


     <GetStartedsec/>
    </>


  )
}

export default Feature