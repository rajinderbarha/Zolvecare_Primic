import Footer from "@/GlobalComponents/Footer";
import NavBar from "@/GlobalComponents/Navbar";
import FaqsSection from "@/components/Faq/FaqsSection";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FaqsPage`.
 */
export type FaqsPageProps = SliceComponentProps<Content.FaqsPageSlice>;

/**
 * Component for "FaqsPage" Slices.
 */
const FaqsPage = ({ slice }: FaqsPageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    {/* <PrismicRichText field={slice.primary.faqh2tag} /> */}
    <NavBar />
    <FaqsSection/>
    <Footer />
    </section>
  );
};

export default FaqsPage;
