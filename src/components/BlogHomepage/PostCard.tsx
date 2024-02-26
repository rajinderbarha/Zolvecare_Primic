import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { RichText } from "./RichText";
import { Content } from "@prismicio/client";
import { BlogHomepage_Heading } from "./BlogHomepage_Heading";

export const PostCard = ({
  post,
}: {
  post: Content.BlogPostDocument;
}): JSX.Element => {
  const { data } = post;


  const components: JSXMapSerializer = {      //A map of Rich Text block types to React Components. It is used to render Rich Text or Title fields.

    heading6: ({ children }) => (
      <BlogHomepage_Heading h6as='h6' >
        {children}
      </BlogHomepage_Heading>
    ),

  }

  return (
    <>
      <PrismicLink document={post} className="">
        <div className='Blogs_items px-4   mb-4'>
          <div className='Blogs_items_con'>
            <div className='grid gap-5 grid-cols-3 '>
              <div className=' pb-8 col-span-3 border-b'>
                <h2 className='font-semibold'><PrismicText field={data.title} /></h2>
                <p className='md:my-10 my-4 date_blogs font-normal'>by Zolvecare • {new Date(data?.publication_date || "").toLocaleDateString()}</p>

                <div className=' md:flex block gap-8' >
                  <div className='blog_box'>
                    <PrismicNextImage
                      field={data.featured_image}
                      sizes="100vw"
                      className="rounded-md"
                    />


                    <div className='categories my-8 gap-2 flex-wrap flex'>
                      <PrismicRichText field={data.posttag1} components={components} />
                      <PrismicRichText field={data.posttag2} components={components} />
                      <PrismicRichText field={data.posttag3} components={components} />
                      <PrismicRichText field={data.posttag4} components={components} />

                    </div>

                    <div className="text-lg font-normal">
                      <RichText field={data.description} />
                    </div>

                  </div>
                  <div className='icons text-center md:block flex gap-4 md:mt-0 mt-6'>
                    <p className='mb-4 font-semibold'>Share</p>
                    <PrismicNextImage
                      field={data.icon_3}
                      sizes="100vw"
                      className='mb-4 w-6  md:mx-auto'
                    />
                    <PrismicNextImage
                      field={data.icon_1}
                      sizes="100vw"
                      className='mb-4 w-6  md:mx-auto'
                    />
                    <PrismicNextImage
                      field={data.icon_2}
                      sizes="100vw"
                      className='mb-4 w-6  md:mx-auto'
                    />


                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </PrismicLink>
    </>

  );
};
