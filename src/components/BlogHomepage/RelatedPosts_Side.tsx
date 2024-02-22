import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { RichText } from "./RichText";
import { Content } from "@prismicio/client";

export const RelatedPosts_Side = ({
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

                                <div className=' md:flex block gap-8' >
                                    <div className='blog_box'>
                                        <PrismicNextImage
                                            field={data.featured_image}
                                            sizes="100vw"
                                            className="rounded-md"
                                        />

                                        <p className=' my-4 date_blogs_RelatedPosts font-normal'>by Zolvecare • {new Date(data?.publication_date || "").toLocaleDateString()}</p>

                                        <h2 className='font-semibold'><PrismicText field={data.title} /></h2>

                                      

                                        <div className="blog_p ">
                                            <RichText field={data.description} />
                                        </div>

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
