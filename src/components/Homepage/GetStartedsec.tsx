import { PrismicRichText } from '@prismicio/react'
import React from 'react'
import { createClient } from '@/prismicio'

const GetStartedsec = async() => {
    const client = createClient()       //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
    const Homepagelanding = await client.getSingle("landing")     // here settings is API id //// here we are fetching our settings from Settings document(whose type is single when we created) of Custom types in the Prismic  //Queries a single document from the Prismic repository for a specific custom type.//@returns The singleton document for the custom type, if a matching document exists. 
  return (
    
       <div className='Started_Now'>
            <div className='container_x'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                    <div>

                    </div>
                    <div className='Started_Btn'>
                        
                        <PrismicRichText field={Homepagelanding.data.getstartedh2} components={{
                    heading2: ({ children }) => (
                       <h2 className="mb-5 font-semibold">{children}</h2>
                    )
                  }}/>
                         <PrismicRichText field={Homepagelanding.data.getstartedparagraph}  components={{
                      paragraph: ({ children }) => (
                        <p className="mb-5 font-normal text-white">{children}</p>
                      )
                    }}/>
                        <button className='Free_Demo'>Get a free demo</button>
                    </div>
                </div>
            </div>
           {/**Add a Background Image here  either below or normal reactjsx */}
      {/* <PrismicNextImage field={data.getstartedbgimage} /> */}

   
        {/**Add a button here  either below or normal reactjsx */}
           {/* <PrismicNextLink field={Homepagelanding.data.getstartedlinkbtn} style={{backgroundColor:"lightblue"}}>{<>{Homepagelanding.data.getstartedbtnlabel}</>}</PrismicNextLink> */}

    </div>
  )
}

export default GetStartedsec
