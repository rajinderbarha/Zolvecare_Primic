import { PrismicRichText } from '@prismicio/react'
import React from 'react'
import { createClient } from '@/prismicio'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
const FaqsSection = async() => {
    const client = createClient()       //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
  const FaqPage = await client.getSingle("allfaqs") 
  
  return (
    // <div>
    // <PrismicRichText field={FaqPage.data.faq_sec_h2} />
    // <PrismicRichText field={FaqPage.data.faq_sec_h3} />
    // </div>
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
                    {FaqPage.data.faq_sec_ques_answer_1.map(item => (

                   
                    <AccordionItem value="item-1">

                        <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
                            paragraph: ({ children }) => (
                                <p >
                                    {children}
                                </p>
                            ),
                        }} /></AccordionTrigger>
                        <AccordionContent>
                            <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
                                paragraph: ({ children }) => (
                                    <p >
                                        {children}
                                    </p>
                                ),
                            }} />
                        </AccordionContent>
                    </AccordionItem>
                     ))}

                   {FaqPage.data.faq_sec_ques_answer_2.map(item => (

                   
                    <AccordionItem value="item-2">

                        <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
                            paragraph: ({ children }) => (
                                <p >
                                    {children}
                                </p>
                            ),
                        }} /></AccordionTrigger>
                        <AccordionContent>
                            <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
                                paragraph: ({ children }) => (
                                    <p >
                                        {children}
                                    </p>
                                ),
                            }} />
                        </AccordionContent>
                    </AccordionItem>
                     ))}
                     {FaqPage.data.faq_sec_ques_answer_3.map(item => (

                   
<AccordionItem value="item-3">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}



{FaqPage.data.faq_sec_ques_answer_4.map(item => (

                   
<AccordionItem value="item-4">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}

{FaqPage.data.faq_sec_ques_answer_5.map(item => (

                   
<AccordionItem value="item-5">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}


{FaqPage.data.faq_sec_ques_answer_6.map(item => (

                   
<AccordionItem value="item-6">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}




{FaqPage.data.faq_sec_ques_answer_7.map(item => (

                   
<AccordionItem value="item-7">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}





{FaqPage.data.faq_sec_ques_answer_8.map(item => (

                   
<AccordionItem value="item-8">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}



{FaqPage.data.faq_sec_ques_answer_9.map(item => (

                   
<AccordionItem value="item-9">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}


{FaqPage.data.faq_sec_ques_answer_10.map(item => (

                   
<AccordionItem value="item-10">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}



{FaqPage.data.faq_sec_ques_answer_11.map(item => (

                   
<AccordionItem value="item-11">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}



{FaqPage.data.faq_sec_ques_answer_12.map(item => (

                   
<AccordionItem value="item-12">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}



{FaqPage.data.faq_sec_ques_answer_13.map(item => (

                   
<AccordionItem value="item-13">

    <AccordionTrigger className='text-left'> <PrismicRichText field={item.faq_sec_ques1_ptag} components={{
        paragraph: ({ children }) => (
            <p >
                {children}
            </p>
        ),
    }} /></AccordionTrigger>
    <AccordionContent>
        <PrismicRichText field={item.faq_sec_answer1_ptag} components={{
            paragraph: ({ children }) => (
                <p >
                    {children}
                </p>
            ),
        }} />
    </AccordionContent>
</AccordionItem>
 ))}
                </Accordion>
            </div>
        </div>
  )
}

export default FaqsSection
// 