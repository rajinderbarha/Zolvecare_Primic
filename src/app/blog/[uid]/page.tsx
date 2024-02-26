// import { Metadata } from "next";
// import { notFound } from "next/navigation";

// import { PrismicRichText, SliceZone } from "@prismicio/react";
// import * as prismic from "@prismicio/client";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";
// import { PrismicNextImage } from "@prismicio/next";
// import { RichText } from "@/components/BlogHomepage/RichText";
// import Footer from "@/GlobalComponents/Footer";
// import { RelatedPosts_bottom } from "@/components/BlogHomepage/Relateposts_Bottom";
// import NavBar_OtherRoutes from "@/GlobalComponents/Navbar_OtherRoutes";

// type Params = { uid: string };

// /**
//  * This page renders a Prismic Document dynamically based on the URL.
//  */

// export async function generateMetadata({
//   params,
// }: {
//   params: Params;
// }): Promise<Metadata> {
//   const client = createClient();
//   const page = await client
//     .getByUID("blog_post", params.uid)
//     .catch(() => notFound());

//   return {
//     title: prismic.asText(page.data.title),
//     description: page.data.meta_description,
//     openGraph: {
//       title: page.data.meta_title || undefined,
//       images: [
//         {
//           url: page.data.meta_image.url || "",
//         },
//       ],
//     },
//   };
// }

// export default async function Page({ params }: { params: Params }) {
//   const client = createClient();

//   // Fetch the current blog post page being displayed by the UID of the page
//   const page = await client
//     .getByUID("blog_post", params.uid)
//     .catch(() => notFound());

//   /**
//    * Fetch all of the blog posts in Prismic (max 2), excluding the current one, and ordered by publication date.
//    *
//    * We use this data to display our "recommended posts" section at the end of the blog post
//    */
//   const posts = await client.getAllByType("blog_post", {
//     predicates: [prismic.filter.not("my.blog_post.uid", params.uid)],
//     orderings: [
//       { field: "my.blog_post.publication_date", direction: "desc" },
//       { field: "document.first_publication_date", direction: "desc" },
//     ],
//     limit: 5,
//   });

//   // Destructure out the content of the current page
//   const { slices, title, publication_date, description, featured_image, posttag1, posttag2, posttag3, posttag4 } =
//     page.data;

//   return (
//     <>
//       <NavBar_OtherRoutes />

//       <div className="Blogs_main">
//         {/* <Navigation client={client} /> */}

//         {/* Display the "hero" section of the blog post */}

//         <div className="">
//           <div className='Blogs_items px-4   mb-4'>
//             <div className='Blogs_items_con_x'>
//               <div className='grid gap-5 grid-cols-3 '>
//                 <div className=' pb-8 col-span-3 border-b'>
//                   <div className='font-semibold blogs_title'> <RichText field={title} /></div>
//                   <div className='md:my-10 my-4 date_blogs font-normal'>by Zolvecare • {new Date(publication_date || "").toLocaleDateString()}</div>
//                   <div className=' md:flex block gap-8' >
//                     <div className=''>
//                       <PrismicNextImage
//                         field={featured_image}
//                         sizes="100vw"
//                         className="w-full rounded-md"
//                       />

//                       <div className='categories my-8 gap-2 flex-wrap flex'>
//                       <PrismicRichText field={posttag1} components={{
//                         heading6: ({ children }) => (
//                           <h6 className="px-4 py-2 font-medium">{children}</h6>
//                         )
//                       }} />
//                       <PrismicRichText field={posttag2} components={{
//                         heading6: ({ children }) => (
//                           <h6 className="px-4 py-2 font-medium">{children}</h6>
//                         )
//                       }} />
//                       <PrismicRichText field={posttag3} components={{
//                         heading6: ({ children }) => (
//                           <h6 className="px-4 py-2 font-medium">{children}</h6>
//                         )
//                       }} />
//                       <PrismicRichText field={posttag4} components={{
//                         heading6: ({ children }) => (
//                           <h6 className="px-4 py-2 font-medium">{children}</h6>
//                         )
//                       }} />
                       
//                       </div>
//                       <div className='text-lg my-4 font-normal'> <RichText field={description} /></div>

//                       <div className="rich_text_blogs">
//                         <SliceZone slices={slices} components={components} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>

//             </div>
//           </div>

//         </div>
//         <div className="RelatedPosts_bottom pt-4 md:pt-10">
//           <h2 className=" font-semibold text-2xl ms-2 md:my-10 my-4">Related Post</h2>
//           <div className="grid md:grid-cols-3 grid-cols-1 ">

//             {posts.map((post) => (
//               <RelatedPosts_bottom key={post.id} post={post} />
//             ))}

//           </div>
//         </div>
//         {/* <Navigation client={client} /> */}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export async function generateStaticParams() {
//   const client = createClient();

//   /**
//    * Query all Documents from the API, except the homepage.
//    */
//   const pages = await client.getAllByType("blog_post");

//   /**
//    * Define a path for every Document.
//    */
//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }









import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/components/BlogHomepage/RichText";
import Footer from "@/GlobalComponents/Footer";
import { RelatedPosts_bottom } from "@/components/BlogHomepage/Relateposts_Bottom";
import NavBar_OtherRoutes from "@/GlobalComponents/Navbar_OtherRoutes";

type Params = { uid: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.uid).catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.uid).catch(() => notFound());
  const posts = await client.getAllByType("blog_post", {
    predicates: [prismic.filter.not("my.blog_post.uid", params.uid)],
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    limit: 5,
  });

  const { slices, title, publication_date, description, featured_image, posttag1, posttag2, posttag3, posttag4 } =
    page.data;

  return (
    <>
      <NavBar_OtherRoutes />
      <div className="Blogs_main">
        <div className="">
          <div className='Blogs_items px-4 mb-4'>
            <div className='Blogs_items_con_x'>
              <div className='grid gap-5 grid-cols-3 '>
                <div className='pb-8 col-span-3 border-b'>
                  <div className='font-semibold blogs_title'> <RichText field={title} /></div>
                  <div className='md:my-10 my-4 date_blogs font-normal'>by Zolvecare • {new Date(publication_date || "").toLocaleDateString()}</div>
                  <div className=' md:flex block gap-8'>
                    <div className=''>
                      <PrismicNextImage
                        field={featured_image}
                        sizes="100vw"
                        className="w-full rounded-md"
                      />
                      <div className='categories my-8 gap-2 flex-wrap flex'>
                        {[posttag1, posttag2, posttag3, posttag4].map((tag, index) => (
                          <PrismicRichText key={index} field={tag} components={{
                            heading6: ({ children }) => (
                              <h6 className="px-4 py-2 font-medium">{children}</h6>
                            )
                          }} />
                        ))}
                      </div>
                      <div className='text-lg my-4 font-normal'> <RichText field={description} /></div>
                      <div className="rich_text_blogs">
                        <SliceZone slices={slices} components={components} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="RelatedPosts_bottom pt-4 md:pt-10">
          <h2 className="font-semibold text-2xl ms-2 md:my-10 my-4">Related Post</h2>
          <div className="grid md:grid-cols-3 grid-cols-1">
            {posts.map((post) => (
              <RelatedPosts_bottom key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");
  return pages.map((page) => ({ uid: page.uid }));
}
