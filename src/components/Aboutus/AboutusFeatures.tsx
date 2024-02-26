import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextImage } from '@prismicio/next';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import Aboutus_heading, { Aboutus_Paragraph } from './Reusable';


const AboutusFeatures = async () => {
  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const AboutsPageFeatures = await client.getSingle("aboutspagefeatures");


  const components: JSXMapSerializer = {      //A map of Rich Text block types to React Components. It is used to render Rich Text or Title fields.

    heading4: ({ children }) => (
      <Aboutus_heading h4as='h4' >
        {children}
      </Aboutus_heading>
    ),
    paragraph: ({ children }) => (
      <Aboutus_Paragraph Ptagas='p'>
        {children}
      </Aboutus_Paragraph>
    ),
  
  }
  
  return (
    <>
      <div className='platform'>
        <h2 className='mx-auto text-center md:mb-24 mb-12 font-semibold'>The platform aims to enhance the efficiency of healthcare practices by offering features such as:</h2>
        <div className='container_platform mx-auto'>
          <div className='md:gap-24 gap-6 grid '>
            <div className='md:gap-24 gap-6 grid md:grid-cols-2 grid-cols-1'>
              {AboutsPageFeatures.data.aboutus_feature_1.map((item, index) => (


                <div key={`feature_1_${index}`} className='platform_box items-start md:flex block gap-8'>

                  <PrismicNextImage field={item.aboutus_featureimg1} className='w-6xl md:mb-0 mb-4' />

                  <div className='platform_box_text'>
                    <PrismicRichText
                      field={item.aboutus_featureh4tag_1}
                      components={components}
                    />
                    <PrismicRichText
                      field={item.aboutus_featureptag_1}
                      components={components}
                    />
                  </div>
                </div>
              ))}

              {AboutsPageFeatures.data.aboutus_feature_2.map((item, index) => (



                <div key={`feature_2_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg2} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_2} components={components} />
                    <PrismicRichText field={item.aboutus_featureptag_2} components={components} />
                  </div>
                </div>
              ))}
            </div>



            <div className='md:gap-24 gap-6 grid md:grid-cols-2 grid-cols-1'>
              {AboutsPageFeatures.data.aboutus_feature_3.map((item, index) => (


                <div key={`feature_3_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg3} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_3} components={components} />
                    <PrismicRichText field={item.aboutus_featureptag_3} components={components} />
                  </div>
                </div>
              ))}


              {AboutsPageFeatures.data.aboutus_feature_4.map((item, index) => (


                <div key={`feature_4_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg4} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_4} components={components} />
                    <PrismicRichText field={item.aboutus_featureptag_4} components={components} />
                  </div>
                </div>
              ))}

            </div>
            <div className='md:gap-24 gap-6 grid md:grid-cols-2 grid-cols-1'>

              {AboutsPageFeatures.data.aboutus_feature_5.map((item, index) => (


                <div key={`feature_5_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg5} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_5} components={components} />
                    <PrismicRichText field={item.aboutus_featureptag_5} components={components} />
                  </div>
                </div>
              ))}


              {AboutsPageFeatures.data.aboutus_feature_6.map((item, index) => (


                <div key={`feature_6_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg6} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_6} components={components} />
                    <PrismicRichText field={item.aboutus_featureptag_6} components={components} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>



    </>
  )
}

export default AboutusFeatures





