import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Page`.
 */
export type PageProps = SliceComponentProps<Content.PageSlice>;

/**
 * Component for "Page" Slices.
 */
const Page = ({ slice }: PageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for page (variation: {slice.variation}) Slices
    </section>
  );
};

export default Page;
