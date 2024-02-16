import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../ui/sheet"
import Image from 'next/image';
function FreeDemo_Btn() {

    return (
        <div>

            <Sheet>
                <SheetTrigger className='Free_Demo'>Free Demo</SheetTrigger>
                <SheetContent>
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
                                <h2>Start your demo!</h2>
                                <p>Join our exclusive waiting list for the Zolvecare demo.
                                    Your journey to streamlined, efficient practices starts here!</p>
                                <div className="form_stap">
                                    <form>
                                        <h3>Sign up for a demo to get your free access!</h3>
                                        <div className="form_block">
                                            <label>Email address</label>
                                            <input type="email" name="email" placeholder="jane@example.com" />
                                            <button>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    );
}

export default FreeDemo_Btn;