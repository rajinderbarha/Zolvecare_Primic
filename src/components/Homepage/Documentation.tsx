import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"; // PrismicNextLink is useful for internal linking bcz it can access the id of the link from the prismic document(settings) with some extra features that next/link
import Link from "next/link";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import FreeDemo_Btn from "./FreeDemo_Btn";
import {Homepage_Documentation_Ptag, Homepage_Documentation_Ptag_blue} from "./Reusable";
import Homepage_Documentationh3 from "./Reusable";

const Documentation = async () => {
  const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const HomepageDocumentation = await client.getSingle("homepagedocumentation");

  const components: JSXMapSerializer = {      //A map of Rich Text block types to React Components. It is used to render Rich Text or Title fields.

    heading3: ({ children }) => (
      <Homepage_Documentationh3 h3as='h3' className="my-3">
        {children}
      </Homepage_Documentationh3>
    ),
    paragraph: ({ children }) => (
      <Homepage_Documentation_Ptag_blue Ptagas='p'>
        {children}
      </Homepage_Documentation_Ptag_blue>
    ),
    
  }
  
   const components_Ph3tag: JSXMapSerializer = {      //A map of Rich Text block types to React Components. It is used to render Rich Text or Title fields.
    paragraph: ({ children }) => (
      <Homepage_Documentation_Ptag Ptagas='p'>
        {children}
      </Homepage_Documentation_Ptag>
    ),
    heading3: ({ children }) => (
      <Homepage_Documentationh3 h3as='h3' >
        {children}
      </Homepage_Documentationh3>
    ),
  
  }
  return (
    <>


      <div className='Benefits' id="Benefits">
        <div className='container_Benefits'>

          <PrismicRichText
            field={HomepageDocumentation.data.documentationh2}
            components={{
              heading2: ({ children }) => (
                <h2 className="md:mb-16 text-center font-semibold  mb-10 mx-auto">
                  {children}
                </h2>
              ),
            }}
          />

          <div className='Benefits_health'>
            {/* sec 1 */}
            <div className='grid items-center md:gap-16 gap-6 md:grid-cols-2 grid-cols-1'>
              <div className='Efficiency'>
                {HomepageDocumentation.data.documentationefficiency.map(
                  (item,index) => (
                    <ul
                      key={`HomepageDocumentation1${index}`}
                      className=""
                    >
                      <li>
                        <PrismicRichText
                          field={item.documentation_efficiencyptag}
                          components={components}
                        />

                        <PrismicRichText
                          field={item.documentationh3tag}
                          components={components}
                        />

                        <PrismicRichText
                          field={item.documentation_ptag}
                          components={components_Ph3tag}
                        />
                      </li>
                    </ul>
                  )
                )}
              </div>
              <div className='Efficiency_img'>
                <PrismicNextImage
                  field={HomepageDocumentation.data.documentation_parallelmobileimg2}
                  className="w-full"
                />
              </div>
            </div>
            <div className='next_vector my-8 text-center  md:block hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 556 161" fill="none">
                <path d="M553.472 160.234C553.343 160.771 552.803 161.101 552.266 160.972L543.516 158.868C542.979 158.739 542.648 158.199 542.777 157.662C542.906 157.125 543.446 156.794 543.983 156.924L551.762 158.794L553.632 151.016C553.761 150.479 554.301 150.148 554.838 150.277C555.375 150.406 555.706 150.946 555.576 151.483L553.472 160.234ZM2.5 0C2.5 4.93188 4.13922 11.4771 7.43066 19.0443C10.7151 26.5953 15.6171 35.1006 22.0731 43.9355C34.9851 61.6055 54.0783 80.546 78.7748 95.7738C128.133 126.208 199.913 141.842 289.601 102.767L290.399 104.601C200.087 143.948 127.617 128.24 77.7252 97.4762C52.7967 82.1053 33.5149 62.9833 20.4582 45.1155C13.9298 36.1815 8.94891 27.549 5.59668 19.842C2.2514 12.1512 0.5 5.31812 0.5 0H2.5ZM289.601 102.767C379.887 63.4321 445.839 77.5279 489.234 101.559C510.911 113.563 526.93 128.029 537.531 139.494C542.832 145.227 546.781 150.213 549.408 153.77C550.721 155.548 551.704 156.97 552.36 157.949C552.688 158.439 552.935 158.819 553.1 159.077C553.183 159.206 553.245 159.305 553.287 159.372C553.308 159.406 553.324 159.432 553.335 159.449C553.341 159.458 553.345 159.465 553.348 159.47C553.349 159.472 553.351 159.474 553.351 159.475C553.352 159.477 553.353 159.478 552.5 160C551.647 160.522 551.647 160.522 551.647 160.522C551.646 160.521 551.646 160.52 551.645 160.518C551.643 160.515 551.639 160.509 551.635 160.502C551.625 160.487 551.611 160.464 551.592 160.433C551.553 160.371 551.494 160.278 551.416 160.155C551.258 159.908 551.019 159.54 550.699 159.062C550.059 158.107 549.093 156.71 547.799 154.958C545.211 151.452 541.308 146.525 536.063 140.852C525.57 129.504 509.714 115.187 488.266 103.309C445.411 79.5773 380.113 65.5153 290.399 104.601L289.601 102.767Z" fill="url(#paint0_linear_2365_53339)" />
                <defs>
                  <linearGradient id="paint0_linear_2365_53339" x1="552.5" y1="80" x2="1.5" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A1C4FD" />
                    <stop offset="1" stopColor="#F0FAFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* sec 2 */}
            <div className='grid items-center my-12 md:my-0  md:gap-16 gap-6 md:grid-cols-2 grid-cols-1'>
              <div className=' md:block hidden  Efficiency_img'>

                <PrismicNextImage
                  field={HomepageDocumentation.data.documentation_ai_image}
                  className="w-full"
                />

              </div>
              <div className='Efficiency'>

                {HomepageDocumentation.data.documentation_ai_content.map(
                  (item,index) => (
                    <ul
                    key={`HomepageDocumentation2${index}`}
                      className=""
                    >
                      <li>
                        <PrismicRichText
                          field={item.documentation_ai_para1}
                          components={components}
                        />

                        <PrismicRichText
                          field={item.documentation_ai_h3tag}
                          components={components}
                        />

                        <PrismicRichText
                          field={item.documentation_ai_para2}
                          components={components_Ph3tag}
                        />
                      </li>
                    </ul>
                  )
                )}







              </div>
              <div className='Efficiency_img md:hidden block '>
                <PrismicNextImage
                  field={HomepageDocumentation.data.documentation_ai_vector2}
                  className="w-full"
                />

              </div>

            </div>
            <div className='next_vector my-8  md:block hidden text-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 162" fill="none">
                <path d="M4.88865 161.508C5.16921 161.984 5.78229 162.142 6.25801 161.861L14.0102 157.289C14.4859 157.009 14.6441 156.396 14.3635 155.92C14.083 155.444 13.4699 155.286 12.9942 155.567L6.10335 159.631L2.0393 152.74C1.75874 152.264 1.14566 152.106 0.669943 152.386C0.194231 152.667 0.0360312 153.28 0.316595 153.756L4.88865 161.508ZM587.403 0.468047C582 9.06848 568.022 23.514 547.197 39.102C526.4 54.6698 498.851 71.3201 466.377 84.3638C401.436 110.449 316.851 122.095 227.159 81.8881L226.341 83.7132C316.648 124.196 401.814 112.452 467.123 86.2197C499.774 73.1045 527.474 56.3639 548.396 40.7031C569.291 25.0624 583.5 10.4415 589.097 1.53195L587.403 0.468047ZM227.159 81.8881C182.035 61.6602 145.538 56.4095 116.16 59.9853C86.7734 63.5622 64.5866 75.9618 48.0789 90.8999C31.5813 105.829 20.7627 123.286 14.0701 136.996C10.7224 143.853 8.4033 149.781 6.91992 153.999C6.17815 156.108 5.64512 157.79 5.2968 158.947C5.12264 159.526 4.99463 159.974 4.90979 160.278C4.86737 160.431 4.83574 160.547 4.81452 160.626C4.80391 160.666 4.7959 160.696 4.79045 160.717C4.78772 160.727 4.78564 160.735 4.78418 160.741C4.78346 160.743 4.78284 160.746 4.78248 160.747C4.78202 160.749 4.78172 160.75 5.75 161C6.71828 161.25 6.71829 161.25 6.71846 161.249C6.71873 161.248 6.71905 161.247 6.71958 161.245C6.72064 161.241 6.72233 161.234 6.72466 161.225C6.72931 161.208 6.73651 161.181 6.74629 161.144C6.76586 161.071 6.79578 160.961 6.83642 160.815C6.91772 160.523 7.04191 160.089 7.21198 159.523C7.55214 158.393 8.07575 156.74 8.80662 154.662C10.2685 150.506 12.5588 144.651 15.8674 137.873C22.4872 124.312 33.1686 107.09 49.4209 92.3829C65.6631 77.6849 87.4762 65.4914 116.402 61.9707C145.336 58.4489 181.464 63.5959 226.341 83.7132L227.159 81.8881Z" fill="url(#paint0_linear_2365_53533)" />
                <defs>
                  <linearGradient id="paint0_linear_2365_53533" x1="37.2499" y1="83.3151" x2="588.25" y2="83.3151" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A1C4FD" />
                    <stop offset="1" stopColor="#EEFAFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>







            {/* sec 3 */}
            <div className='grid items-center  md:gap-16 gap-6 md:grid-cols-2 grid-cols-1'>
              <div className='Efficiency'>

                {HomepageDocumentation.data.documentation_optimizing_content.map(
                  (item,index) => (
                    <ul
                    key={`HomepageDocumentation3${index}`}
                    // className="relative Features_boxs"
                    >
                      <li>
                        <PrismicRichText
                          field={item.documentation_optimizing_para1}
                          components={components}
                        />

                        <PrismicRichText
                          field={item.documentation_optimizing_h3tag}
                          components={components}
                        />

                        <PrismicRichText
                          field={item.documentation_optimizing_para2}
                          components={components_Ph3tag}
                        />
                        
                      </li>
                    </ul>
                  )
                )}



              </div>
              <div className='Efficiency_img'>

                <PrismicNextImage
                  field={HomepageDocumentation.data.documentation_parallelmobileimg2}
                  className="w-full"
                />


              </div>


            </div>
            <div className="text-center md:mt-16 mt-8 w-full">
              <FreeDemo_Btn name={"Get a free demo"} className="Free_Demo"/>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Documentation;
