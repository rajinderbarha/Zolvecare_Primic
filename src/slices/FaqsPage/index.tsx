import Footer from "@/GlobalComponents/Footer";
import NavBar_OtherRoutes from "@/GlobalComponents/Navbar_OtherRoutes";
import FaqsSection from "@/components/Faq/FaqsSection";
import { Content } from "@prismicio/client";
import {SliceComponentProps } from "@prismicio/react";

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
    <NavBar_OtherRoutes />
    <FaqsSection/>
    <Footer />
    </section>
  );
};

export default FaqsPage;
