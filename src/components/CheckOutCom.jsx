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
            <div className="flex items-start justify-center flex-col sm-tablet:flex-row">
                <div className="w-full sm-tablet:w-[55%] mr-[4%]">
                    <h2 className="text-[18px] border-b-[1px] border-solid border-[#ddd] font-bold py-[20px_14px] text-[#000] mb-[20px]">Billing details</h2>
                    <form className="[&_label]:text-[14px] [&_label]:block [&_label]:leading-[2] [&_label]:font-bold [&_span]:font-bold [&_span]:text-red-600 [&_input]:border-[1px] [&_input]:w-full [&_input]:border-solid [&_input]:border-[#dddddd] [&_input]:p-[11px] [&_input]:h-[43px] [&_input]:mb-[9px] [&_input]:block [&_input]:focus:outline-0 [&_input]:focus:border-dotted [&_input]:focus:border-black [&_textarea]:border-[1px] [&_textarea]:w-full [&_textarea]:border-solid [&_textarea]:border-[#dddddd] [&_textarea]:p-[11px] [&_textarea]:mb-[9px] [&_textarea]:block [&_textarea]:focus:outline-0 [&_textarea]:focus:border-dotted [&_textarea]:focus:border-black [&_select]:border-[1px] [&_select]:w-full [&_select]:border-solid [&_select]:border-[#dddddd] [&_select]:p-[11px] [&_select]:h-[43px] [&_select]:mb-[9px] [&_select]:block [&_select]:focus:outline-0 [&_select]:focus:border-dotted [&_select]:focus:border-black
                    
                    ">
                        <div className="flex items-center flex-col mobile:flex-row justify-center gap-0 mobile:gap-8">
                            <div className="w-full">
                                <label htmlFor="first-name">First name <span>*</span></label>
                                <input type="text" id="first-name" name="first-name" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="last-name">Last name <span>*</span></label>
                                <input type="text" id="last-name" name="last-name"/>
                            </div>
                        </div>
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
                        <label htmlFor="street-add">Street address <span>*</span></label>
                        <input type="text" id="street-add" name="street address" />
                        <input type="text" id="apartment, suite" name="apartment name" />
                        <label htmlFor="Town-city">Town / City <span>*</span></label>
                        <input type="text" id="Town-city" name="town-city" />
                        <label htmlFor="postcode">Postcode / ZIP <span>*</span></label>
                        <input type="text" id="postcode" name="post-code" />
                        <label htmlFor="check-phone">Phone <span>*</span></label>
                        <input type="tel" id="check-phone" name="check-phone" />
                        <label htmlFor="email-add">Email address <span>*</span></label>
                        <input type="text" id="email-add" name="email-add" />
                        <h2 className="text-[18px] border-b-[1px] border-solid border-[#ddd] font-bold py-[20px_14px] text-[#000] mb-[20px]">Additional information</h2>
                        <label htmlFor="Order-notes">Order notes (optional)</label>
                        <textarea id="Order-notes" name="for order notes" className="h-[60px]"></textarea>
                    </form>
                </div>
                <div className="w-full sm-tablet:w-[40%]">
                    <div className=" border-[1px] border-solid border-[#ddd] p-[27px_30px_27px_30px] mb-[30px] ml-[auto]">
                        <h2 className=" text-[#000] text-[18px] font-bold pb-[15px]">Your order</h2>
                            <div className="flex items-center justify-start border-b-[1px] border-solid border-[#ddd] [&_span]:w-[50%] [&_span]:text-[15px] leading-[1.5em] [&_span]:p-[10px_15px]">
                                <span className="font-bold">Product</span>
                                <span className="font-bold text-right">subTotal</span>
                            </div>
                            <div className="flex items-center justify-start border-b-[1px] border-solid border-[#ddd] [&_span]:w-[50%] [&_span]:text-[15px] leading-[1.5em] [&_span]:p-[10px_15px]">
                                <span>Ceramic Blue Vase x 1</span>
                                <span className="text-right">$33.50</span>
                            </div>
                            <div className="flex items-center justify-start border-b-[1px] border-solid border-[#ddd] [&_span]:w-[50%] [&_span]:text-[15px] leading-[1.5em] [&_span]:p-[10px_15px]">
                                <span>Subtotal</span>
                                <span className="text-right">$33.50</span>
                            </div>
                            <div className="flex items-center justify-start border-b-[1px] border-solid border-[#ddd] [&_span]:w-[50%] [&_span]:text-[15px] leading-[1.5em] [&_span]:p-[10px_15px]">
                                <span>Total</span>
                                <span className="text-right">$33.50</span>
                            </div>
                            <div className="border-t-[3px] border-solid border-primary bg-[#f7f6f7] p-[15px_30px_15px_50px] mb-[30px] relative text-[15px] text-[#515151] after:absolute after:inset-0 after:mb-auto after:mt-[19px] after:mr-auto after:ml-[25px] after:bg-[url('/images/icons/square.svg')] after:bg-no-repeat after:bg-center after:bg-contain after:w-[15px] after:h-[20px] after:content-[''] after:filter-(--c-filter) mt-[30px]">
                                Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.
                            </div>
                            <button className="w-full font-secondary font-bold bg-primary text-white p-[15px_30px] leading-[1em] transition duration-200 ease-in hover:bg-[#127b5d] cursor-pointer text-nowrap">Place order</button>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}