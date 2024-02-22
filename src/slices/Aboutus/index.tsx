import Faq_sec from "@/GlobalComponents/Faq_sec";
import Footer from "@/GlobalComponents/Footer";
import NavBar from "@/GlobalComponents/Navbar";
import Pricesec from "@/GlobalComponents/Pricesec";
import AboutusFeatures from "@/components/Aboutus/AboutusFeatures";
import ShortcutSection from "@/components/Aboutus/ShortcutSection";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Aboutus`.
 */
export type AboutusProps = SliceComponentProps<Content.AboutusSlice>;

/**
 * Component for "Aboutus" Slices.
 */
const Aboutus = ({ slice }: AboutusProps): JSX.Element => {
  return (
    <>    
    <NavBar />
    
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='About_banner'>
            <div className="container_Abanner mx-auto">
                <div className='md:flex block  gap-x-24 items-center'>
                    <div className='About_banner_img md:mb-0 mb-12 '>
                      
                    <PrismicNextImage field={slice.primary.aboutus_mobile_img1} className="image_banner mx-auto" />
                    </div>
                    <div className='About_banner_text'>
                    <PrismicRichText  field={slice.primary.aboutus_h2tag}  components={{
                    heading2: ({ children }) => (
                       <h2 className="md:mb-6 mb-2 font-semibold">{children}</h2>
                    )
                  }}/>
                        <PrismicRichText  field={slice.primary.aboutus_para}  components={{
                    paragraph: ({ children }) => (
                       <p className="md:mb-16 mb-6 md:text- lg text-base font-normal leading-8">{children}</p>
                    )
                  }}/>
                        <button className='Free_Demo'>Start a demo</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <AboutusFeatures />
    <div className="Pricesec_ShortcutSection_BG">
    <Pricesec/> <ShortcutSection/>
    </div>
    <Faq_sec />
     <Footer />
    </>

  );
};

export default Aboutus;
