import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"; // PrismicNextLink is useful for internal linking bcz it can access the id of the link from the prismic document(settings) with some extra features that next/link
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";





const TabsSection = async () => {
  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const HomepageDocumentation = await client.getSingle(
    "homepagedocumentation"
  ); 

  const Homepagelanding = await client.getSingle("landing")  //     we accessing this for below buttton 

  return (
    <div>
      <div>
      <PrismicRichText
          field={HomepageDocumentation.data.tab_sectionh2}
          components={{
            heading2: ({ children }) => (
              <h2 className="xl:mb-20 text-center mx-auto font-semibold sm:mb-10">
                {children}
              </h2>
            ),
          }}
        />

        <div>

            {/* <div>           // here btn and label will be placed
            {HomepageDocumentation.data.tab_section_multi_buttons.map(item => (
                 <PrismicNextLink
                 field={item.tab_section_multi_btnlink}
               >
                {item.tab_section_multibtnlabel}
               </PrismicNextLink>
        ))}
           
                

            </div> */}

            <div>
                <div>
                    <div>
                <div>
                <PrismicNextImage
            field={HomepageDocumentation.data.tab_section_mobileimage}
            className=""
          />
                </div>

                <div>

                <PrismicRichText field={HomepageDocumentation.data.tab_section_h3} />

                <PrismicRichText field={HomepageDocumentation.data.tab_section_ptag} />





                    <div>

                   
                 {/* <div>           here btn and label will be placed 
            {HomepageDocumentation.data.tab_section_singlebtn.map(item => (
                 <PrismicNextLink
                 field={item.tab_section_single_btnlink}
               >
               <>{item.tab_section_single_btnlabel}</>
               </PrismicNextLink>
        ))}
           
                

            </div> */}
                    </div>
                </div>
            </div>
            </div>
            </div>

        </div>

      </div>



    </div>
  );
};

export default TabsSection;
