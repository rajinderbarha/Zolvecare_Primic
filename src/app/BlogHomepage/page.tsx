import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PostCard } from "@/components/BlogHomepage/PostCard";
import { Navigation } from "@/components/BlogHomepage/Navigation";
import NavBar from "@/GlobalComponents/Navbar";
import Footer from "@/GlobalComponents/Footer";
import { RelatedPosts_Side } from "@/components/BlogHomepage/RelatedPosts_Side";

/**
 * This component renders your homepage.
 *
 * Use Next's generateMetadata function to render page metadata.
 *
 * Use the SliceZone to render the content of the page.
 */

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const home = await client.getByUID("page", "bloghomepage");

//   return {
//     title: prismic.asText(home.data.title),
//     description: home.data.meta_description,
//     openGraph: {
//       title: home.data.meta_title || undefined,
//       // images: [
//       //   {
//       //     url: home.data.meta_image.url || "",
//       //   },
//       // ],
//     },
//   };
// }

export default async function BlogHomepage() {
  // The client queries content from the Prismic API
  const client = createClient();

  // Fetch the content of the home page from Prismic
  const home = await client.getByUID("page", "bloghomepage");

  // Get all of the blog_post documents created on Prismic ordered by publication date
  const posts = await client.getAllByType("blog_post", {
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return (
    <>
      {/* <Navigation client={client} /> */}
      <NavBar />

      <SliceZone slices={home.data.slices} components={components} />
      <div className="container-blogs">
        <div className="grid gap-2  grid-cols-3">
          <div className="lg:col-span-2 col-span-3">
            <div className="blogs_posts">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <section className="blogs_posts lg:block hidden">
            <h2 className=" font-semibold text-2xl ms-2 mb-4">Related Post</h2>
            {posts.map((post) => (
              <RelatedPosts_Side key={post.id} post={post} />
            ))}
          </section>
        </div>
      </div>
      <Footer />


    </>
  );
}



















