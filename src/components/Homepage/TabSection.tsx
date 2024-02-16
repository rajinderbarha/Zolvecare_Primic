import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"; // PrismicNextLink is useful for internal linking bcz it can access the id of the link from the prismic document(settings) with some extra features that next/link
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import { Card } from "../ui/card";
import FreeDemo_Btn from "./FreeDemo_Btn";





const TabSection = async () => {
  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const HomepageDocumentation = await client.getSingle(
    "homepagedocumentation"
  );

  const Homepagelanding = await client.getSingle("landing")  //     we accessing this for below buttton 

  return (
    <div>


      {/* start */}
      <div className='Tabs '>
        <div className='container_Tabs'>
          {/* <h2 className='mb-8 mb:md-16 text-center mx-auto font-semibold'>This is how easy it is to use Zolvecare. Easy, Simple and Accurate</h2> */}
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

            {HomepageDocumentation.data.tab_section_start_session.map(item => (
              <TabsContent value="Start_Session">

                <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                  <div className='tabs-image'>

                    <PrismicNextImage
                      field={item.tab_section_start_session_mobileimg}
                      className=""
                    />
                  </div>
                  <div className='tabs_cont'>
                    <PrismicRichText field={item.tab_section_start_session_h3}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className="md:mb-5 mb-3 font-semibold">
                            {children}
                          </h3>
                        ),
                      }} />

                    <PrismicRichText field={item.tab_section_start_session_ptag} components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal mb-10">
                          {children}
                        </p>
                      ),
                    }} />
                    <button  className='Free_Demo'>Free Demo</button>
                    {/* <FreeDemo_Btn /> */}

                  </div>

                </div>

              </TabsContent>
            ))}













            {HomepageDocumentation.data.tab_section_start_recording.map(item => (


              <TabsContent value="Start_Recording" className="bg-none">

                <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                  <div className='tabs-image'>
                    <PrismicNextImage
                      field={item.start_recording_mobile_img}
                      className=""
                    />
                  </div>
                  <div className='tabs_cont'>
                    <PrismicRichText field={item.start_recording_h3}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className="md:mb-5 mb-3 font-semibold">
                            {children}
                          </h3>
                        ),
                      }} />
                    <PrismicRichText field={item.start_recording_ptag} components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal mb-10">
                          {children}
                        </p>
                      ),
                    }} />
<button  className='Free_Demo'>Free Demo</button>
                  {/* <FreeDemo_Btn /> */}
                  </div>

                </div>

              </TabsContent>
            ))}













            {HomepageDocumentation.data.tab_section_sumary.map(item => (



              <TabsContent value="Generated_Summary">

                <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                  <div className='tabs-image'>
                    <PrismicNextImage
                      field={item.ai_summary_mobile_img}
                      className=""
                    />
                  </div>
                  <div className='tabs_cont'>
                    <PrismicRichText field={item.summary_h3}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className="md:mb-5 mb-3 font-semibold">
                            {children}
                          </h3>
                        ),
                      }} />
                    <PrismicRichText field={item.summary_ptag} components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal mb-10">
                          {children}
                        </p>
                      ),
                    }} />
                    <button  className='Free_Demo'>Free Demo</button>

{/* <FreeDemo_Btn /> */}
                  </div>

                </div>

              </TabsContent>




            ))}











            {HomepageDocumentation.data.tab_section_sendto_patient.map(item => (


              <TabsContent value="Send_Patient">

                <div className='tabs_main grid items-center gap-y-12 md:grid-cols-2 grid-cols-1'>
                  <div className='tabs-image'>
                    <PrismicNextImage
                      field={item.sendtopatient_mobile_img}
                      className=""
                    />
                  </div>
                  <div className='tabs_cont'>

                    <PrismicRichText field={item.patient_h3}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className="md:mb-5 mb-3 font-semibold">
                            {children}
                          </h3>
                        ),
                      }} />
                    <PrismicRichText field={item.patient_ptag} components={{
                      paragraph: ({ children }) => (
                        <p className="font-normal mb-10">
                          {children}
                        </p>
                      ),
                    }} />
                    <button  className='Free_Demo'>Free Demo</button>

{/* <FreeDemo_Btn /> */}
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
