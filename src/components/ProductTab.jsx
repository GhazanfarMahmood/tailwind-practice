"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductTab(){
    const [tabs, setTabs] = useState(true);

    const handleDesc = () => {
        setTabs(true)
    }
    const handleReview = () => {
        setTabs(false)
    }
    return (
    <section className="container">
        <div className="flex items-center justify-start gap-[15px] border-t border-solid border-[#ddd] [&_button]:py-2  [&_button]:text-[#515151] [&_button]:font-bold [&_button]:cursor-pointer [&_button]:text-[15px] mb-[15px]">
            <button aria-label="description" className={tabs ? "border-t-[4px] border-solid border-primary" : "border-t-4 border-solid border-transparent"} onClick={handleDesc} >Description</button>
            <button aria-label="review" className={!tabs ? "border-t-[4px] border-solid border-primary" : "border-t-4 border-solid border-transparent"} onClick={handleReview}>Reviews (0)</button>
        </div>
        {tabs ? 
            <div className="mb-[18px]">
                <p className="text-[15px]">Justo vestibulum risus imperdiet consectetur consectetur pretium urna augue etiam risus acc um san volutpat urna, eu sem per enim, est aliquam laoet urna fringilla viverra.</p>
            </div>
            :
            <div>
                <div className="mb-[18px]">
                    <p className="text-[15px]">There are no reviews yet.</p>
                </div>
                <div className="border border-solid border-[#ddd] p-[25px]">
                    <h1 className="text-[20px] font-primaries!  font-medium! ">Be the first to review “Ceramic Blue Vase” </h1>
                    <p className="my-[2px_6px] text-[15px]">Your email address will not be published. Required fields are marked *</p>
                    <div className="flex items-center justify-start my-[15px]">
                        <span className="text-[18px] pr-[9px] font-medium">Your rating *</span>
                        <ul className="flex items-center justify-start">
                            <li>
                                <Image src={"/images/icons/star.svg"} alt="star-icon" width={18} height={18} />
                            </li>
                            <li>
                                <Image src={"/images/icons/star.svg"} alt="star-icon" width={18} height={18} />
                            </li>
                            <li>
                                <Image src={"/images/icons/star.svg"} alt="star-icon" width={18} height={18} />
                            </li>
                            <li>
                                <Image src={"/images/icons/star.svg"} alt="star-icon" width={18} height={18} />
                            </li>
                            <li>
                                <Image src={"/images/icons/star.svg"} alt="star-icon" width={18} height={18} />
                            </li>
                        </ul>
                    </div>
                    <form className="grid grid-cols-1 mobile:grid-cols-2 gap-x-[20px]">
                        <div className="mobile:col-span-2 mb-[15px]">
                            <label className="block text-[18px] pr-[9px] font-medium" for="review">Your review *</label>
                            <textarea className="h-[90px] w-full border border-solid border-[#ddd] text-[15px] font-normal p-[12px] text-[#666] focus:border-dotted focus:border-black focus:outline-0" name="message" id="review"></textarea>
                        </div>
                        <div className="mb-[15px]">
                            <label className="block text-[15px] pr-[9px] font-medium" for="name">Name *</label>
                            <input type="text" id="name" className=" w-full border border-solid border-[#ddd] text-[15px] font-normal p-[12px] text-[#666] focus:border-dotted focus:border-black focus:outline-0"/>
                        </div>
                        <div className="mb-[15px]">
                            <label className="block text-[15px] pr-[9px] font-medium" for="name">Email *</label>
                            <input type="email" id="email" className=" w-full border border-solid border-[#ddd] text-[15px] font-normal p-[12px] text-[#666] focus:border-dotted focus:border-black focus:outline-0"/>
                        </div>
                        <div className="mobile:col-span-2 flex items-start justify-start">
                            <input type="checkbox" id="saved" name="checkbox" className="block mt-[6px] mr-[5px]"/>
                            <label for="saved">Save my name, email, and website in this browser for the nest time I comment.</label>
                        </div>
                        <button className="w-fit bg-primary text-[16px] font-secondary font-unset text-white p-[10px_20px] transition duration-200 ease-in hover:bg-[#127b5d] leading-[1] mt-[15px]" type="button">Submit</button>
                    </form>
                </div>
            </div>
        }
    </section>
    )
}