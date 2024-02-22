import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { RichText } from "./RichText";
import { Content } from "@prismicio/client";

export const PostCard = ({
  post,
}: {
  post: Content.BlogPostDocument;
}): JSX.Element => {
  const { data } = post;

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
                    <PrismicRichText field={data.posttag1} components={{
                    heading6: ({ children }) => (
                       <h6 className="px-4 py-2 font-medium">{children}</h6>
                    )
                  }}/>
                    <PrismicRichText field={data.posttag2} components={{
                    heading6: ({ children }) => (
                       <h6 className="px-4 py-2 font-medium">{children}</h6>
                    )
                  }}/>
                    <PrismicRichText field={data.posttag3} components={{
                    heading6: ({ children }) => (
                       <h6 className="px-4 py-2 font-medium">{children}</h6>
                    )
                  }}/>
                    <PrismicRichText field={data.posttag4} components={{
                    heading6: ({ children }) => (
                       <h6 className="px-4 py-2 font-medium">{children}</h6>
                    )
                  }}/>
                      {/* <h6 className='px-4 py-2 font-medium'>Zolvecare</h6>
                      <h6 className='px-4 py-2 font-medium'>Zolvecare</h6>
                      <h6 className='px-4 py-2 font-medium'>Zolvecare</h6>
                      <h6 className='px-4 py-2 font-medium'>Zolvecare</h6> */}
                    </div>
                   
                    <div className="text-lg font-normal">
                    <RichText field={data.description}  />
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
