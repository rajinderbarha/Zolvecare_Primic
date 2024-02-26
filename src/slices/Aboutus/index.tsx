import Faq_sec_bottom from "@/GlobalComponents/Faq_sec_bottom";
import Footer from "@/GlobalComponents/Footer";
import NavBar from "@/GlobalComponents/Navbar_Homepage";
import NavBar_OtherRoutes from "@/GlobalComponents/Navbar_OtherRoutes";
import Pricesec from "@/GlobalComponents/Pricesec";
import AboutusFeatures from "@/components/Aboutus/AboutusFeatures";
import ShortcutSection from "@/components/Aboutus/ShortcutSection";
import FreeDemo_Btn from "@/components/Homepage/FreeDemo_Btn";
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
      <NavBar_OtherRoutes />

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
                <PrismicRichText field={slice.primary.aboutus_h2tag} components={{
                  heading2: ({ children }) => (
                    <h2 className="md:mb-6 mb-2 font-semibold">{children}</h2>
                  )
                }} />
                <PrismicRichText field={slice.primary.aboutus_para} components={{
                  paragraph: ({ children }) => (
                    <p className="md:mb-16 mb-6 md:text- lg text-base font-normal leading-8">{children}</p>
                  )
                }} />
                <FreeDemo_Btn name="Start a demo"  className="Free_Demo"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutusFeatures />
      <div className="Pricesec_ShortcutSection_BG">
        <Pricesec /> <ShortcutSection />
      </div>
      <Faq_sec_bottom />
      <Footer />
    </>

  );
};

export default Aboutus;
