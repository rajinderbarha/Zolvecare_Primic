"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

interface ButtonProp {
    name: string;
    className:string
}

const FreeDemo_Btn: React.FC<ButtonProp> = (props) => {
    const [popup, setPopup] = useState(false);
    const [emailSubmit, setEmailSubmit] = useState(false);
    const [popupPageData, setPopupPageData] = useState<any | null>(null); // Adjust the type as per your Prismic document structure

    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const popupPage = await client.getSingle("popup");
            setPopupPageData(popupPage);
        };
        fetchData();
    }, []);

    const showToggleHandler = () => {
        setPopup(true);
        setEmailSubmit(false);
    };

    const hideToggleHandler = () => {
        setPopup(false);
    };

    const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmailSubmit(true);
    };

    const ClosePopupButton = () => {
        return <button onClick={hideToggleHandler} className='popup_close'>x</button>;
    };

    return (
        <div>
            <button className={props.className} onClick={showToggleHandler}>{props.name}</button>
            {popup && popupPageData && (
                <div className="stap">
                    <div className="stap_1_img">
                        <PrismicNextImage field={popupPageData.data.freedemo_btn_img} className="w-full mx-auto" width={996} height={721} />
                    </div>
                    <div className="start_demo">
                        <div className="demo_start">
                            <ClosePopupButton />
                            {!emailSubmit ? (
                                <div>
                                    <PrismicRichText field={popupPageData.data.freedemo_btn_h2tag_1} components={{
                                        heading2: ({ children }) => (
                                            <h2 className="">{children}</h2>
                                        )
                                    }} />
                                    <PrismicRichText field={popupPageData.data.freedemo_btn_ptag_1} components={{
                                        paragraph: ({ children }) => (
                                            <p className="">{children}</p>
                                        )
                                    }} />
                                    <div className="form_stap">
                                        <form onSubmit={formHandler}>
                                            <PrismicRichText field={popupPageData.data.freedemo_btn_h3tag_1} components={{
                                                heading3: ({ children }) => (
                                                    <h3 className="">{children}</h3>
                                                )
                                            }} />
                                            <div className="form_block">
                                                <label>Email address</label>
                                                <input type="email" name="email" placeholder="jane@example.com" />
                                                <button type='submit'>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                <div className="stap">
                                    <div className="stap_1_img">
                                        <PrismicNextImage field={popupPageData.data.freedemo_btn_img} className="w-full mx-auto" width={996} height={721} />
                                    </div>
                                    <div className="start_demo">
                                        <ClosePopupButton />
                                        <div className="demo_start">
                                            <PrismicRichText field={popupPageData.data.freedemo_btn_h2tag_2} components={{
                                                heading2: ({ children }) => (
                                                    <h2 className="">{children}</h2>
                                                )
                                            }} />
                                            <PrismicRichText field={popupPageData.data.freedemo_btn_ptag_2} components={{
                                                paragraph: ({ children }) => (
                                                    <p className="">{children}</p>
                                                )
                                            }} />
                                            <PrismicRichText field={popupPageData.data.freedemo_btn_h3tag_2} components={{
                                                heading3: ({ children }) => (
                                                    <h3 className="calendly mb-6">{children}</h3>
                                                )
                                            }} />
                                            <iframe src="https://calendly.com/acmesales?embed_domain=lively-works-524013.framer.app&amp;embed_type=Inline" width="100%" height="450px" ></iframe>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FreeDemo_Btn;






