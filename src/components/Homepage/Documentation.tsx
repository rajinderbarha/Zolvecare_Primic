import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"; // PrismicNextLink is useful for internal linking bcz it can access the id of the link from the prismic document(settings) with some extra features that next/link
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

const Documentation = async () => {
  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const HomepageDocumentation = await client.getSingle(
    "homepagedocumentation"
  ); 

  const Homepagelanding = await client.getSingle("landing")  //     we accessing this for below buttton 

  return (
    <div>
      <div>
        <PrismicRichText
          field={HomepageDocumentation.data.documentationh2}
          components={{
            heading2: ({ children }) => (
              <h2 className="xl:mb-20 text-center mx-auto font-semibold sm:mb-10">
                {children}
              </h2>
            ),
          }}
        />
        <section>
          {HomepageDocumentation.data.documentationefficiency.map(
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
            field={HomepageDocumentation.data.documentation_parallelmobileimg1}
            className=""
          />
        </section>

        <div>
          <PrismicNextImage
            field={HomepageDocumentation.data.documentation_vector1}
          />
        </div>
      </div>









      <div>

      <PrismicNextImage
            field={HomepageDocumentation.data.documentation_ai_image}
            className=""
          />

  
        <section>
          {HomepageDocumentation.data.documentation_ai_content.map(
            (item) => (
              <ul
                key={Math.random.toString()}
                className="relative Features_boxs"
              >
                <li>
                  <PrismicRichText
                    field={item.documentation_ai_para1}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal relative z-10">{children}</p>
                      ),
                    }}
                  />

                  <PrismicRichText
                    field={item.documentation_ai_h3tag}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className="mb-4 relative z-10  font-semibold">
                          {children}
                        </h3>
                      ),
                    }}
                  />

                  <PrismicRichText
                    field={item.documentation_ai_para2}
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
         
        </section>

        <div>
        <PrismicNextImage
            field={HomepageDocumentation.data.documentation_ai_vector2}
          />
        </div>
      </div>












 
      <div>
       
        <section>
          {HomepageDocumentation.data.documentation_optimizing_content.map(
            (item) => (
              <ul
                key={Math.random.toString()}
                className="relative Features_boxs"
              >
                <li>
                  <PrismicRichText
                    field={item.documentation_optimizing_para1}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal relative z-10">{children}</p>
                      ),
                    }}
                  />

                  <PrismicRichText
                    field={item.documentation_optimizing_h3tag}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className="mb-4 relative z-10  font-semibold">
                          {children}
                        </h3>
                      ),
                    }}
                  />

                  <PrismicRichText
                    field={item.documentation_optimizing_para2}
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
            field={HomepageDocumentation.data.documentation_parallelmobileimg2}
            className=""
          />
        </section>

        <div>

          {/**Add a button here  either below or normal reactjsx */}
           {/* <PrismicNextLink field={Homepagelanding.data.getstartedlinkbtn} style={{backgroundColor:"lightblue"}}>{<>{Homepagelanding.data.getstartedbtnlabel}</>}</PrismicNextLink> */}
        </div>


      </div> 














    </div>
  );
};

export default Documentation;
