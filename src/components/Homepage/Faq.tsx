import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
async function Faq_sec() {
    const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
    const HomepageShadcn = await client.getSingle("homepageshadcn");
    return (
        <div className='Faq_sec'>
            <div className='container_x'>
                <PrismicRichText field={HomepageShadcn.data.faq_sec_h2} components={{
                    heading2: ({ children }) => (
                        <h2 className='font-semibold mb-6'>
                            {children}
                        </h2>
                    ),
                }} />
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">

                        <AccordionTrigger className='text-left'> <PrismicRichText field={HomepageShadcn.data.faq_sec_ques1_ptag} components={{
                            paragraph: ({ children }) => (
                                <p >
                                    {children}
                                </p>
                            ),
                        }} /></AccordionTrigger>
                        <AccordionContent>
                            <PrismicRichText field={HomepageShadcn.data.faq_sec_answer1_ptag} components={{
                                paragraph: ({ children }) => (
                                    <p >
                                        {children}
                                    </p>
                                ),
                            }} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-left'><PrismicRichText field={HomepageShadcn.data.faq_sec_ques2_ptag} components={{
                            paragraph: ({ children }) => (
                                <p >
                                    {children}
                                </p>
                            ),
                        }} /></AccordionTrigger>
                        <AccordionContent>
                            <PrismicRichText field={HomepageShadcn.data.faq_sec_answer2_ptag} components={{
                                paragraph: ({ children }) => (
                                    <p >
                                        {children}
                                    </p>
                                ),
                            }} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='text-left'>
                            <PrismicRichText field={HomepageShadcn.data.faq_sec_ques3_ptag} components={{
                            paragraph: ({ children }) => (
                                <p>
                                    {children}
                                </p>
                            ),
                        }} /></AccordionTrigger>
                        <AccordionContent>
                            <PrismicRichText field={HomepageShadcn.data.faq_sec_answer3_ptag} components={{
                                paragraph: ({ children }) => (
                                    <p>
                                        {children}
                                    </p>
                                ),
                            }} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Faq_sec
