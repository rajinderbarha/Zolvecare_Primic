import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'
import React from 'react'
import { createClient } from '@/prismicio'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { FaqSection_AnsParagraph, FaqSection_QuestionParagraph } from './Reusable'


const FaqsSection = async () => {
    const client = createClient()       //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
    const FaqPage = await client.getSingle("allfaqs")


    const componentsQues: JSXMapSerializer = {      //A map of Rich Text block types to React Components. It is used to render Rich Text or Title fields.
        paragraph: ({ children }) => (
            <FaqSection_QuestionParagraph Ptagas='p'>
                {children}
            </FaqSection_QuestionParagraph>
        ),
    }
    const components: JSXMapSerializer = {      //A map of Rich Text block types to React Components. It is used to render Rich Text or Title fields.
        paragraph: ({ children }) => (
            <FaqSection_AnsParagraph Ptagas='p'>
                {children}
            </FaqSection_AnsParagraph>
        ),
    }

    return (

        <div className='Faq_sec'>

            <div className='container_x'>
                <PrismicRichText field={FaqPage.data.faq_sec_h3} components={{
                    heading3: ({ children }) => (
                        <h3 className='font-semibold border-b text-center md:mb-12 md:py-12 py-6 mb-6'>
                            {children}
                        </h3>
                    ),
                }} />
                <PrismicRichText field={FaqPage.data.faq_sec_h2} components={{
                    heading2: ({ children }) => (
                        <h2 className='font-semibold mb-6'>
                            {children}
                        </h2>
                    ),
                }} />

                <Accordion type="single" collapsible className="w-full">
                    {FaqPage.data.faq_sec_ques_answer_1.map((item, index) => (


                        <AccordionItem value="item-1" key={`faqSection${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}

                    {FaqPage.data.faq_sec_ques_answer_2.map((item, index) => (


                        <AccordionItem value="item-2" key={`faqSection_2${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                    {FaqPage.data.faq_sec_ques_answer_3.map((item, index) => (


                        <AccordionItem value="item-3" key={`faqSection_3${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag}components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}



                    {FaqPage.data.faq_sec_ques_answer_4.map((item, index) => (


                        <AccordionItem value="item-4" key={`faqSection_4${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues}/></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}

                    {FaqPage.data.faq_sec_ques_answer_5.map((item, index) => (


                        <AccordionItem value="item-5" key={`faqSection_5${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}


                    {FaqPage.data.faq_sec_ques_answer_6.map((item, index) => (


                        <AccordionItem value="item-6" key={`faqSection_2${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues}/></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}




                    {FaqPage.data.faq_sec_ques_answer_7.map((item, index) => (


                        <AccordionItem value="item-7" key={`faqSection_7${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}





                    {FaqPage.data.faq_sec_ques_answer_8.map((item, index) => (


                        <AccordionItem value="item-8" key={`faqSection_8${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}



                    {FaqPage.data.faq_sec_ques_answer_9.map((item, index) => (


                        <AccordionItem value="item-9" key={`faqSection_2${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues}/></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}


                    {FaqPage.data.faq_sec_ques_answer_10.map((item, index) => (


                        <AccordionItem value="item-10" key={`faqSection_2${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}



                    {FaqPage.data.faq_sec_ques_answer_11.map((item, index) => (


                        <AccordionItem value="item-11" key={`faqSection_2${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}



                    {FaqPage.data.faq_sec_ques_answer_12.map((item, index) => (


                        <AccordionItem value="item-12" key={`faqSection_2${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}



                    {FaqPage.data.faq_sec_ques_answer_13.map((item, index) => (


                        <AccordionItem value="item-13" key={`faqSection_2${index}`}>

                            <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={componentsQues} /></AccordionTrigger>
                            <AccordionContent>
                                <PrismicRichText field={item.faq_sec_answer1_ptag} components={components} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default FaqsSection
