import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next"; // PrismicNextLink is useful for internal linking bcz it can access the id of the link from the prismic document(settings) with some extra features that next/link
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import FreeDemo_Btn from "./FreeDemo_Btn";
import Homepage_Documentationh3, { Homepage_Documentation_Ptag } from "./Reusable";

const TabSection = async () => {
  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const HomepageDocumentation = await client.getSingle("homepagedocumentation");

  const components_PH3tag: JSXMapSerializer = {      //A map of Rich Text block types to React Components. It is used to render Rich Text or Title fields.
    paragraph: ({ children }) => (
      <Homepage_Documentation_Ptag Ptagas='p' className="mb-10">
        {children}
      </Homepage_Documentation_Ptag>
    ),
    heading3: ({ children }) => (
      <Homepage_Documentationh3 h3as='h3' className="md:mb-5 mb-3 font-semibold">
        {children}
      </Homepage_Documentationh3>
    ),
  }


  return (
    <div>
      {/* start */}
      <div className='Tabs ' id="How_it_works">
        <div className='relative z-30 container_Tabs'>
          <PrismicRichText
            field={HomepageDocumentation.data.tab_sectionh2}
            components={{
              heading2: ({ children }) => (
                <h2 className="mb-8 mb:md-16 text-center mx-auto font-semibold">
                  {children}
                </h2>
              ),
            }}
          />

          <Tabs defaultValue="Start_Session" className="  ">

            <TabsList className="grid tabs_main_btn relative z-30 bg-transparent h-auto w-full mb-6 md:mb-16 md:grid-cols-4 grid-cols-1">
              <TabsTrigger value="Start_Session">Start Session</TabsTrigger>
              <TabsTrigger value="Start_Recording">Start Recording</TabsTrigger>
              <TabsTrigger value="Generated_Summary">Generated Summary</TabsTrigger>
              <TabsTrigger value="Send_Patient">Send to Patient</TabsTrigger>
            </TabsList>

            {HomepageDocumentation.data.tab_section_start_session.map((item, index) => (
              <TabsContent value="Start_Session" key={`TabSection_1${index}`}>
                <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                  <div className='tabs-image'>
                    <PrismicNextImage
                      field={item.tab_section_start_session_mobileimg}
                      className=""
                    />
                  </div>
                  <div className='tabs_cont'>
                    <PrismicRichText field={item.tab_section_start_session_h3}
                      components={components_PH3tag} />

                    <PrismicRichText field={item.tab_section_start_session_ptag} components={components_PH3tag} />
                    <FreeDemo_Btn name="Start a demo" className="Free_Demo" />
                  </div>
                </div>
              </TabsContent>
            ))}


            {HomepageDocumentation.data.tab_section_start_recording.map((item, index) => (
              <TabsContent value="Start_Recording" className="bg-none" key={`TabSection_2${index}`}>
                <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                  <div className='tabs-image'>
                    <PrismicNextImage
                      field={item.start_recording_mobile_img}
                      className=""
                    />
                  </div>
                  <div className='tabs_cont'>
                    <PrismicRichText field={item.start_recording_h3}
                      components={components_PH3tag} />
                    <PrismicRichText field={item.start_recording_ptag} components={components_PH3tag} />
                    <FreeDemo_Btn name="Start a demo" className="Free_Demo"/>
                  </div>
                </div>
              </TabsContent>
            ))}


            {HomepageDocumentation.data.tab_section_sumary.map((item, index) => (
              <TabsContent value="Generated_Summary" key={`TabSection_3${index}`}>

                <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                  <div className='tabs-image'>
                    <PrismicNextImage
                      field={item.ai_summary_mobile_img}
                      className=""
                    />
                  </div>
                  <div className='tabs_cont'>
                    <PrismicRichText field={item.summary_h3}
                      components={components_PH3tag} />
                    <PrismicRichText field={item.summary_ptag} components={components_PH3tag} />
                    <FreeDemo_Btn name="Start a demo" className="Free_Demo" />
                  </div>
                </div>
              </TabsContent>
            ))}


            {HomepageDocumentation.data.tab_section_sendto_patient.map((item, index) => (
              <TabsContent value="Send_Patient" key={`TabSection_4${index}`}>
                <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                  <div className='tabs-image'>
                    <PrismicNextImage
                      field={item.sendtopatient_mobile_img}
                      className=""
                    />
                  </div>
                  <div className='tabs_cont'>
                    <PrismicRichText field={item.patient_h3}
                      components={components_PH3tag} />
                    <PrismicRichText field={item.patient_ptag} components={components_PH3tag} />
                    <FreeDemo_Btn name="Start a demo" className="Free_Demo"/>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
