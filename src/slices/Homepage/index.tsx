import Feature from "@/components/Feature";
import Heading from "@/components/Heading";
import Logomove from "@/components/Logomove";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Homepage`.
 */


const components: JSXMapSerializer = {      //A map of Rich Text block types to React Components. It is used to render Rich Text or Title fields.

  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="text-7xl	mb-4 text-center font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-lg mb-4 text-center font-semibold">
      {children}
    </p>
  ),

}


// const client  =  createClient()
// const  repeatableBannerImagesSection =  client.getSingle("home_page")



export type HomepageProps = SliceComponentProps<Content.HomepageSlice>;

/**
 * Component for "Homepage" Slices.
*/
const Homepage = ({ slice }: HomepageProps): JSX.Element => {
  return (

    <>
      {slice.variation === "default" && (

        <>
          <section className="Banner"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
          >
            <div className='benner_Home'>
              <div className='Beener-bg'>
                <div className='container_benner'>
                  <div className='Benner_intro'>

                    <PrismicRichText field={slice.primary.banner_heading} components={{
                      heading1: ({ children }) => (
                        <h1 className="text-7xl	mb-4 text-center font-semibold">{children}</h1>
                      )
                    }} />

                    <PrismicRichText field={slice.primary.banner_paragraph} components={{
                      paragraph: ({ children }) => (
                        <p className="mx-auto text-lg mb-4 text-center font-medium">{children}</p>
                      )
                    }} /></div>
                  <div className='Benner_img'>

                    <PrismicNextImage field={slice.primary.banner_image} className="image_banner mx-auto" />

                  </div>
                  <div className='benner_blenk'>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section>
            <Logomove />

            <Feature/>
          </section>

        </>

      )}
      <section className='Features'>
        {/* <div className='container_x'>
          <PrismicRichText field={slice.primary.heading2} components={{
            heading2: ({ children }) => (
              <h2 className="xl:mb-20 text-center mx-auto font-semibold sm:mb-10">{children}</h2>
            )
          }} />


          <div className='Features_box grid md:grid-cols-2 sm:grid-cols-1	 md:gap-y-16 gap-y-12 gap-x-8'>



              <div className='relative Features_boxs'>
               
                <PrismicNextImage field={slice.primary.banner_background_image1} className="absolute bottom-0 left-0 w-auto" />
                <PrismicNextImage field={slice.primary.banner_background_image2} className="mb-4 relative z-10 w-auto" />
                <PrismicRichText field={slice.primary.banner_heading3} components={{
                  heading3: ({ children }) => (
                    <h3 className="xl:mb-20 text-center mx-auto font-semibold sm:mb-10">{children}</h3>
                  )
                }} />
                <PrismicRichText field={slice.primary.banner_para} components={{
                  paragraph: ({ children }) => (
                    <p className="xl:mb-20 text-center mx-auto font-semibold sm:mb-10">{children}</p>
                  )
                }} />

              </div> <div className='relative Features_boxs'>
              
                <PrismicNextImage field={slice.primary.banner_background_image1} className="absolute bottom-0 left-0 w-auto" />
                <PrismicNextImage field={slice.primary.banner_background_image2} className="mb-4 relative z-10 w-auto" />
                <PrismicRichText field={slice.primary.banner_heading3} components={{
                  heading3: ({ children }) => (
                    <h3 className="xl:mb-20 text-center mx-auto font-semibold sm:mb-10">{children}</h3>
                  )
                }} />
                <PrismicRichText field={slice.primary.banner_para} components={{
                  paragraph: ({ children }) => (
                    <p className="xl:mb-20 text-center mx-auto font-semibold sm:mb-10">{children}</p>
                  )
                }} />

              </div>
              
          
          </div>
        </div> */}






      </section>
    </>

  );
};

export default Homepage;
