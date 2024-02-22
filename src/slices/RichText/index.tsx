// import { Content } from "@prismicio/client";
// import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

// /**
//  * Props for `RichText`.
//  */
// export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

// /**
//  * Component for "RichText" Slices.
//  */
// const RichText = ({ slice }: RichTextProps): JSX.Element => {
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >
//       Placeholder component for rich_text (variation: {slice.variation}) Slices
//     </section>
//   );
// };

// export default RichText;




// ./src/slices/RichText/index.tsx

import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/components/BlogHomepage/RichText";

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichTextSlice({ slice }: RichTextProps) {
  return (
    <section className="flex flex-col gap-2">
      <RichText field={slice.primary.content} />
    </section>
  );
}
