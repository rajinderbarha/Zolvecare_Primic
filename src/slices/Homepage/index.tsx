import Awaits from "@/components/Homepage/Awaits";
import Documentation from "@/components/Homepage/Documentation";
import Faq_sec_bottom from "@/GlobalComponents/Faq_sec_bottom";
import Feature from "@/components/Homepage/Feature";
import Footer from "@/GlobalComponents/Footer";
import Logomove from "@/components/Homepage/Logomove";
import NavBar from "@/GlobalComponents/Navbar_Homepage";
import Pricesec from "@/GlobalComponents/Pricesec";
import Slider from "@/components/Homepage/Slider";
import TabSection from "@/components/Homepage/TabSection";
import TestimonialSection from "@/components/Homepage/TestimonialSection";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {  PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Homepage`.
 */

export type HomepageProps = SliceComponentProps<Content.HomepageSlice>;

/**
 * Component for "Homepage" Slices.
*/
const Homepage = ({ slice }: HomepageProps): JSX.Element => {
  return (

    <>

      {slice.variation === "default" && (

        <>
          <NavBar />
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

            <Feature />

            <Documentation />
            <TestimonialSection />
            <TabSection />
            <Pricesec />
            <Slider />
            <Awaits />
            <Faq_sec_bottom />
            <Footer />
          </section>

        </>

      )}

    </>

  );
};

export default Homepage;
