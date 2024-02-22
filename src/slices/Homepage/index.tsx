import Awaits from "@/components/Homepage/Awaits";
import Documentation from "@/components/Homepage/Documentation";
import Faq_sec from "@/GlobalComponents/Faq_sec";
import Feature from "@/components/Homepage/Feature";
import Footer from "@/GlobalComponents/Footer";
import Heading from "@/components/Homepage/Heading";
import Logomove from "@/components/Homepage/Logomove";
import NavBar from "@/GlobalComponents/Navbar";
import Pricesec from "@/GlobalComponents/Pricesec";
import Slider from "@/components/Homepage/Slider";
import TabSection from "@/components/Homepage/TabSection";
import TestimonialSection from "@/components/Homepage/TestimonialSection";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import GetStartedsec from "@/components/Homepage/GetStartedsec";
import FreeDemo_Btn from "@/components/Homepage/FreeDemo_Btn";

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






export type HomepageProps = SliceComponentProps<Content.HomepageSlice>;

/**
 * Component for "Homepage" Slices.
*/
const Homepage = ({ slice }: HomepageProps): JSX.Element => {
  return (

    <>
   
      {slice.variation === "default" && (

        <>
         <NavBar/>
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

            <Documentation/>
            <TestimonialSection/>
            <TabSection/>
        <Pricesec />
        <Awaits />
        <Slider />
        <Faq_sec />
     <Footer />
          </section>

        </>

      )}
     
    </>

  );
};

export default Homepage;
