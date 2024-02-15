import React from 'react'
import { Card } from "../ui/card"
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
function Slider() {
    return (
        <div className='Slider border-b'>
            <div className='container_Slider'>
                <h2 className='font-semibold md:mb-16 text-center mb-8'>The doctors said about Zolvecare</h2>
                <Carousel className="w-full ">
                    <CarouselContent className="-ml-1 ">

                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                            <div className='sliditem'>
                                <Card className="p-10 border-0 bg-transparent shadow-none" >
                                    <div className='mb-6 clint_img gap-6 flex items-center'>
                                        <Image
                                            className="w-auto "
                                            src="/Image/Features/clint.png"
                                            alt="logos"
                                            width={48}
                                            height={48}
                                        />
                                        <h3 className='font-semibold'> hgDr. Smith, General Practitioner</h3>
                                    </div>
                                    <p className='font-normal'>&quot;Zolvecare has been a game-changer for my practice. The AI-driven automation has drastically reduced my documentation time, allowing me to focus more on patient care. It&apos;s intuitive, efficient, and has truly elevated my workflow.&quot;</p>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                        <div className='sliditem'>
                                <Card className="bg-transparent p-10 border-0 shadow-none" >
                                    <div className='mb-6 clint_img gap-6 flex items-center'>
                                        <Image
                                            className="w-auto "
                                            src="/Image/Features/clint.png"
                                            alt="logos"
                                            width={48}
                                            height={48}
                                        />
                                        <h3 className='font-semibold'>Dr. Smith, General Practitioner</h3>
                                    </div>
                                    <p className='font-normal'>&quot;Zolvecare has been a game-changer for my practice. The AI-driven automation has drastically reduced my documentation time, allowing me to focus more on patient care. It&apos;s intuitive, efficient, and has truly elevated my workflow.&quot;</p>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                        <div className='sliditem'>
                                <Card className="bg-transparent p-10 border-0 shadow-none" >
                                    <div className='mb-6 clint_img gap-6 flex items-center'>
                                        <Image
                                            className="w-auto "
                                            src="/Image/Features/clint.png"
                                            alt="logos"
                                            width={48}
                                            height={48}
                                        />
                                        <h3 className='font-semibold'>Dr. Smith, General Practitioner</h3>
                                    </div>
                                    <p className='font-normal'>&quot;Zolvecare has been a game-changer for my practice. The AI-driven automation has drastically reduced my documentation time, allowing me to focus more on patient care. It&apos;s intuitive, efficient, and has truly elevated my workflow.&quot;</p>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                        <div className='sliditem'>
                                <Card className="bg-transparent p-10 border-0 shadow-none" >
                                    <div className='mb-6 clint_img gap-6 flex items-center'>
                                        <Image
                                            className="w-auto "
                                            src="/Image/Features/clint.png"
                                            alt="logos"
                                            width={48}
                                            height={48}
                                        />
                                        <h3 className='font-semibold'>last Dr. Smith, General Practitioner</h3>
                                    </div>
                                    <p className='font-normal'>&quot;Zolvecare has been a game-changer for my practice. The AI-driven automation has drastically reduced my documentation time, allowing me to focus more on patient care. It&apos;s intuitive, efficient, and has truly elevated my workflow.&quot;</p>
                                </Card>
                            </div>
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
