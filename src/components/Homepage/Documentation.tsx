import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"; // PrismicNextLink is useful for internal linking bcz it can access the id of the link from the prismic document(settings) with some extra features that next/link
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

const Documentation = async () => {
  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const HomepageHomepageDocumentation = await client.getSingle(
    "homepagedocumentation"
  ); // here settings is API id //// here we are fetching our settings from Settings document(whose type is single when we created) of Custom types in the Prismic  //Queries a single document from the Prismic repository for a specific custom type.//@returns The singleton document for the custom type, if a matching document exists.
  // console.log("HomepageHomepageDocumentation",HomepageHomepageDocumentation)
  //   console.log("landing", landing.data.featureboxes[0])

  return (
    <div>
      <div>
        <PrismicRichText
          field={HomepageHomepageDocumentation.data.documentationh2}
          components={{
            heading2: ({ children }) => (
              <h2 className="xl:mb-20 text-center mx-auto font-semibold sm:mb-10">
                {children}
              </h2>
            ),
          }}
        />
        <section>
          {HomepageHomepageDocumentation.data.documentationcontent.map(
            (item) => (
              <ul
                key={Math.random.toString()}
                className="relative Features_boxs"
              >
                <li>
                  <PrismicRichText
                    field={item.documentation_efficiencyptag}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal relative z-10">{children}</p>
                      ),
                    }}
                  />

                  <PrismicRichText
                    field={item.documentationh3tag}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className="mb-4 relative z-10  font-semibold">
                          {children}
                        </h3>
                      ),
                    }}
                  />

                  <PrismicRichText
                    field={item.documentation_ptag}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal relative z-10">{children}</p>
                      ),
                    }}
                  />
                </li>
              </ul>
            )
          )}
          <PrismicNextImage
            field={HomepageHomepageDocumentation.data.documentation_mobileimg1}
            className=""
          />
        </section>

        <div>
          <PrismicNextImage
            field={HomepageHomepageDocumentation.data.documentation_vector1}
          />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
