import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';


const AboutusFeatures = async () => {
  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const AboutsPageFeatures = await client.getSingle("aboutspagefeatures");
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
                      components={{
                        heading4: ({ children }) => (
                          <h4 className="mb-4 font-semibold text-2xl">
                            {children}
                          </h4>
                        ),
                      }}
                    />
                    <PrismicRichText
                      field={item.aboutus_featureptag_1}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="md:text-lg text-base font-normal leading-8">
                            {children}
                          </p>
                        ),
                      }}
                    />
                  </div>
                </div>
              ))}

              {AboutsPageFeatures.data.aboutus_feature_2.map((item, index) => (



                <div key={`feature_2_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg2} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_2} components={{
                      heading4: ({ children }) => (
                        <h4 className="mb-4 font-semibold text-2xl"> {children}</h4>
                      ),
                    }} />
                    <PrismicRichText field={item.aboutus_featureptag_2} components={{
                      paragraph: ({ children }) => (<p className="md:text-lg text-base font-normal leading-8">{children}</p>
                      ),
                    }} />
                  </div>
                </div>
              ))}
            </div>



            <div className='md:gap-24 gap-6 grid md:grid-cols-2 grid-cols-1'>
              {AboutsPageFeatures.data.aboutus_feature_3.map((item, index) => (


                <div key={`feature_3_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg3} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_3} components={{
                      heading4: ({ children }) => (
                        <h4 className="mb-4 font-semibold text-2xl"> {children}</h4>
                      ),
                    }} />
                    <PrismicRichText field={item.aboutus_featureptag_3} components={{
                      paragraph: ({ children }) => (<p className="md:text-lg text-base font-normal leading-8">{children}</p>
                      ),
                    }} />
                  </div>
                </div>
              ))}


              {AboutsPageFeatures.data.aboutus_feature_4.map((item, index) => (


                <div key={`feature_4_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg4} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_4} components={{
                      heading4: ({ children }) => (
                        <h4 className="mb-4 font-semibold text-2xl"> {children}</h4>
                      ),
                    }} />
                    <PrismicRichText field={item.aboutus_featureptag_4} components={{
                      paragraph: ({ children }) => (<p className="md:text-lg text-base font-normal leading-8">{children}</p>
                      ),
                    }} />
                  </div>
                </div>
              ))}

            </div>
            <div className='md:gap-24 gap-6 grid md:grid-cols-2 grid-cols-1'>

              {AboutsPageFeatures.data.aboutus_feature_5.map((item, index) => (


                <div key={`feature_5_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg5} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_5} components={{
                      heading4: ({ children }) => (
                        <h4 className="mb-4 font-semibold text-2xl"> {children}</h4>
                      ),
                    }} />
                    <PrismicRichText field={item.aboutus_featureptag_5} components={{
                      paragraph: ({ children }) => (<p className="md:text-lg text-base font-normal leading-8">{children}</p>
                      ),
                    }} />
                  </div>
                </div>
              ))}


              {AboutsPageFeatures.data.aboutus_feature_6.map((item, index) => (


                <div key={`feature_6_${index}`} className='platform_box items-start md:flex block gap-8'>
                  <PrismicNextImage field={item.aboutus_featureimg6} className='w-6xl md:mb-0 mb-4' />
                  <div className='platform_box_text'>
                    <PrismicRichText field={item.aboutus_featureh4tag_6} components={{
                      heading4: ({ children }) => (
                        <h4 className="mb-4 font-semibold text-2xl"> {children}</h4>
                      ),
                    }} />
                    <PrismicRichText field={item.aboutus_featureptag_6} components={{
                      paragraph: ({ children }) => (<p className="md:text-lg text-base font-normal leading-8">{children}</p>
                      ),
                    }} />
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
