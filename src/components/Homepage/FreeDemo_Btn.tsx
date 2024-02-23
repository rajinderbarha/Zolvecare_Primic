"use client"
import React, { useState } from 'react'
import Image from 'next/image';

interface ButtonProp {
    name: string;
    // age: number;
    // isStudent: boolean;
}


const FreeDemo_Btn: React.FC<ButtonProp> = (props) => {
    const [popup, Setpopup] = useState(false)
    const [emailSubmit, SetEmailSubmit] = useState(false)
    const showToggleHandler = () => {
        Setpopup(true)
        SetEmailSubmit(false)
    }
    // const hideToggleHandler = () => {
    //     Setpopup(false)
    // }

    const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Setpopup(false)
        SetEmailSubmit(true)
    };

    return (
        <div>
            <button className='Free_Demo' onClick={showToggleHandler}>{props.name}</button>

            {popup &&
                <div className="stap">
                    <div className="stap_1_img">

                        <Image
                            className=" w-full mx-auto"
                            src="/Image/poup1.png"
                            alt="logos"
                            width={996}
                            height={721}
                        />

                    </div>
                    <div className="start_demo">
                        <div className="demo_start">
                            {!emailSubmit ?
                                <div>
                                    <h2>Start your demo!</h2>
                                    <p>Join our exclusive waiting list for the Zolvecare demo.
                                        Your journey to streamlined, efficient practices starts here!</p>
                                    <div className="form_stap">
                                        <form onSubmit={formHandler}>
                                            <h3>Sign up for a demo to get your free access!</h3>
                                            <div className="form_block">
                                                <label>Email address</label>
                                                <input type="email" name="email" placeholder="jane@example.com" />
                                                <button type='submit'>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                : <div className="stap">
                                    <div className="stap_1_img">
                                    <Image
                            className=" w-full mx-auto"
                            src="/Image/poup1.png"
                            alt="stap_img"
                            width={996}
                            height={721}
                        />

                                    </div>
                                    <div className="start_demo">
                                        <div className="demo_start">
                                            <h2>Ready for your demo?</h2>
                                            <p>Reserve your seat for the Zolvecare demo – Pick your date and dive into the future of healthcare!</p>

                                            <h3 className='calendly mb-6'>Select a Date & Time</h3>

                                            <iframe src="https://calendly.com/acmesales?embed_domain=lively-works-524013.framer.app&amp;embed_type=Inline" width="100%" height="450px" ></iframe>
                                        </div>
                                    </div>
                                </div>}




                        </div>

                    </div>
                </div>
            }



        </div>
    );
}

export default FreeDemo_Btn;