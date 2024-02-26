import React from 'react'
import { Card } from "../ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import { createClient } from '@/prismicio';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Homepage_Documentationh3, { Homepag_Slider_Ptag } from './Reusable';
async function Slider() {
    const client = createClient(); //Creates a Prismic client for the project's repository. The client is used to query(fetch) content from the Prismic API
    const HomepageShadcn = await client.getSingle("homepageshadcn");


    const components: JSXMapSerializer = {      //A map of Rich Text block types to React Components. It is used to render Rich Text or Title fields.

        heading3: ({ children }) => (
            <Homepage_Documentationh3 h3as='h3' >
                {children}
            </Homepage_Documentationh3>
        ),
        paragraph: ({ children }) => (
            <Homepag_Slider_Ptag Ptagas='p'>
                {children}
            </Homepag_Slider_Ptag>
        ),

    }
    return (
        <div className='Slider border-b'>
            <div className='container_Slider'>
                <PrismicRichText field={HomepageShadcn.data.carousel_shadcn_h2} components={{
                    heading2: ({ children }) => (
                        <h2 className="font-semibold md:mb-16 text-center mb-8">
                            {children}
                        </h2>
                    ),
                }} />

                <Carousel className="w-full ">
                    <CarouselContent className="-ml-1 ">

                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                            {HomepageShadcn.data.carouselshadcn_first.map((item, index) => (


                                <div className='sliditem' key={`slider_1${index}`} >
                                    <Card className="p-10 border-0 bg-transparent shadow-none" >
                                        <div className='mb-6 clint_img_slider gap-6 flex items-center'>
                                            <PrismicNextImage
                                                field={item.first_image}
                                                className="w-auto rounded-full "
                                                width={48}
                                                height={48}
                                            />
                                            <PrismicRichText field={item.first_h3tag} components={components} />
                                        </div>
                                        <PrismicRichText field={item.first_ptag} components={components} />
                                    </Card>
                                </div>
                            ))}
                        </CarouselItem>


                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                            {HomepageShadcn.data.carouselshadcn_second.map((item, index) => (
                                <div className='sliditem' key={`slider_2${index}`}>
                                    <Card className="bg-transparent p-10 border-0 shadow-none" >
                                        <div className='mb-6 clint_img_slider gap-6 flex items-center'>
                                            <PrismicNextImage
                                                field={item.second_image}
                                                className="w-auto rounded-full"
                                                width={48}
                                                height={48}
                                            />
                                            <PrismicRichText field={item.second_h3tag} components={components} />
                                        </div>
                                        <PrismicRichText field={item.second_ptag} components={components} />
                                    </Card>
                                </div>
                            ))}
                        </CarouselItem>


                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                            {HomepageShadcn.data.carouselshadcn_third.map((item, index) => (
                                <div className='sliditem' key={`slider_3${index}`}>
                                    <Card className="bg-transparent p-10 border-0 shadow-none" >
                                        <div className='mb-6 clint_img_slider gap-6 flex items-center'>
                                            <PrismicNextImage
                                                field={item.third_image}
                                                className="w-auto rounded-full"
                                                width={48}
                                                height={48}
                                            />
                                            <PrismicRichText field={item.third_h3tag} components={components} />
                                        </div>
                                        <PrismicRichText field={item.third_ptag} components={components} />
                                    </Card>
                                </div>
                            ))}
                        </CarouselItem>


                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                            {HomepageShadcn.data.carouselshadcn_fourth.map((item, index) => (
                                <div className='sliditem' key={`slider_4${index}`}>
                                    <Card className="bg-transparent p-10 border-0 shadow-none" >
                                        <div className='mb-6 clint_img_slider gap-6 flex items-center'>
                                            <PrismicNextImage
                                                field={item.fourth_image}
                                                className="w-auto rounded-full"
                                                width={48}
                                                height={48}
                                            />
                                            <PrismicRichText field={item.fourth_h3tag} components={components} />
                                        </div>
                                        <PrismicRichText field={item.fourth_ptag} components={components} />
                                    </Card>
                                </div>
                            ))}
                        </CarouselItem>


                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default Slider
