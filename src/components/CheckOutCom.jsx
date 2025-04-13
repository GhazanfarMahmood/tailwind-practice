"use client"

import { useState } from "react"

export default function CheckOutCom(){
    const [visible, setVisible] = useState(false);

    return (
        <section className="container">
            <h1 className="text-[26px] leading-[1.2]! font-normal! text-[#000] mb-[23px]">Checkout</h1>
            <div className="border-t-[3px] border-solid border-primary bg-[#f7f6f7] p-[15px_30px_15px_50px] mb-[30px] relative text-[15px] text-[#515151] after:absolute after:inset-0 after:my-auto after:mr-auto after:ml-[25px] after:bg-[url('/images/icons/square.svg')] after:bg-no-repeat after:bg-center after:bg-contain after:w-[15px] after:h-[20px] after:content-[''] after:filter-(--c-filter) ">
                Have a coupon? <button className="text-[15px] text-primary cursor-pointer" onClick={() => setVisible(!visible)}>Click here to enter your code</button>
            </div>
            {visible && 
                <div className="pb-[30px]">
                    <span className="block text-[15px] mb-6">If you have a coupon code, please apply it below.</span>
                    <div className="flex items-center justify-start flex-wrap gap-[10px]">
                        <input type="text" placeholder="Coupon code" className="w-full max-w-[281px] border-[1px] border-[#ddd] text-[#666] h-[40px] p-[5px] focus:outline-0 focus:border-black focus:border-dotted" />
                        <button className="w-fit font-secondary font-bold bg-primary text-white p-[12px_30px] leading-[1em] transition duration-200 ease-in hover:bg-[#127b5d] cursor-pointer text-nowrap">Apply Coupon</button>
                    </div>
                </div>
            }
            <div className="flex items-center justify-start">
                <div className="w-[55%] mr-[40%]">
                    <h2 className="text-[18px] border-b-[1px] border-solid border-[#ddd] font-bold py-[20px_14px] text-[#000] mb-[20px]">Billing details</h2>
                    <form>
                        <label htmlFor="first-name">First name <span>*</span></label>
                        <input type="text" id="first-name" name="first-name" />
                        <label htmlFor="last-name">Last name <span>*</span></label>
                        <input type="text" id="last-name" name="last-name" />
                        <label htmlFor="company-name">Company name (optional)</label>
                        <input type="text" id="company-name" name="company-name" />
                        <label htmlFor="region">Country / Region <span>*</span></label>
                        <select id="region" name="regions">
                            <option value={"Afghanistan"}>Afghanistan</option>
                            <option value={"Pakistan"}>Pakistan</option>
                            <option value={"India"}>India</option>
                            <option value={"England"}>England</option>
                            <option value={"United Arab Emirates"}>United Arab Emirates</option>
                            <option value={"Italy"}>Italy</option>
                        </select>
                    </form>
                </div>
                <div></div>
            </div>
        </section>
    )
}