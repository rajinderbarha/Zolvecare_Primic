"use client"
import React, { useState, useEffect } from 'react';
import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';


const SignUp = () => {
    const [signupBtn, setSignupBtn] = useState(false);
    const [signupData, setSignupData] = useState<any>(null); // Use any as initial state type

    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const signup = await client.getSingle("signup");
            setSignupData(signup);
        };

        fetchData();
    }, []);

    const showToggleHandler = () => {
        setSignupBtn(true);
    };

    const hideToggleHandler = () => {
        setSignupBtn(false);
    };

    const ClosePopupButton = () => {
        return <button onClick={hideToggleHandler} className='popup_close'>x</button>;
    };

    return (
        <div>
              <button className='nav_link font-medium' onClick={showToggleHandler}>{"Sign Up"}</button> 
        {signupBtn && signupData &&
        <div className="stap">
          <div className="stap_1_img">
                    <PrismicNextImage field={signupData.data.mainimg} className=" " />

          </div>
          <div className="start_demo">
              <div className="demo_start_account">
          
            
                <div className='Create_account'>
                    <ClosePopupButton />
                    <PrismicNextImage field={signupData.data.signup_zolvecarelogo} className=" img_logo_sibg" />
                    <PrismicRichText field={signupData.data.signup_h3tag} components={{
                        heading3: ({ children }) => (
                            <h3 className="font-semibold md:mt-10 mt-4 mb-6 text-center">{children}</h3>
                        )
                    }} />
                    <PrismicRichText field={signupData.data.signup_ptag_1} components={{
                        paragraph: ({ children }) => (
                            <p className="mt-2 text-center mb-6">{children}</p>
                        )
                    }} />
                     <form>
                <label className='account_label font-normal '>Full name</label>                <input className='account_input font-normal mb-3.5 mt-2' type='text ' name='name' placeholder='Dr. Sarah Smith' />

                 <label className='account_label font-normal'>Email</label>
                <input type='text' className='account_input font-normal mt-2 mb-3.5' name='name' placeholder='dr.sarah-smith@gmail.com' />

                 <label className='account_label font-normal'>Password</label>
                <input type='text' className='account_input font-normal mt-2 mb-3.5' name='name' placeholder='••••••••••' />

                <label className='account_label font-normal'>Confirm password</label>
                 <input type='text' className='account_input font-normal mt-2 mb-3.5' name='name' placeholder='••••••••••' />


                <input type='checkbox' /> <label>Remember me</label>

                <input type='submit' className='account_button  mt-4' />
            </form>
                    <PrismicRichText field={signupData.data.signup_h6tag} components={{
                        heading6: ({ children }) => (
                            <h6 className="mt-6 md:mb-12 mb-6 text-center">{children}</h6>
                        )
                    }} />
                    <div className='Create_account_OR mb-10'>
                        <div className='line_or'></div>
                        <p className='font-bold'>OR</p>
                    </div>
                    <div className='flex gap-6 img_logo_sibg_2'>
                        <PrismicNextImage field={signupData.data.signup_googleimg} className="" />
                        <PrismicNextImage field={signupData.data.signup_appleimg} className="" />
                    </div>
                </div>
         
        </div>
        </div>
        </div>
    }
    </div>
    );
}

export default SignUp;







