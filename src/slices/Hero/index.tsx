import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicText } from "@prismicio/react";
import { RichText } from "@/components/BlogHomepage/RichText";
import { PrismicNextImage } from "@prismicio/next";
import FreeDemo_Btn from "@/components/Homepage/FreeDemo_Btn";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>

      <div className='About_banner gradient_bg_blog'>
        <div className="container_Abanner mx-auto">
          <div className='md:flex block  gap-x-24 items-center'>
            <div className='About_banner_img md:mb-0 mb-12 '>
              <PrismicNextImage
                field={slice.primary.image}
                sizes="100vw"

              />
            </div>
            <div className='About_banner_text'>
              <h2 className='md:mb-6 mb-2 font-semibold '> <PrismicText field={slice.primary.title} /></h2>
              <div className="md:mb-16 mb:6 md:text-lg text-base font-normal leading-8"> <RichText field={slice.primary.description} /></div>
              <FreeDemo_Btn name="Start a demo" className="Free_Demo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
