"use client";

import { useState } from "react";


export default function ContactBanner() {
    const [inputValue, setInputValue] = useState({
        name : "",
        email : "",
        subject : "",
        message : "",
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValue((prevValue) => ({...prevValue, [name] : value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue({name : "", email : "", subject : "", message : "",})
    }

    return (
        <>
            <section className="pb-[50px]">
                <div className="bg-[rgba(45,168,132,0.3)]">
                    <div className="container py-[70px_110px] tablet:py-[90px_150px] laptop:py-[130px_200px]">
                        <h1 className="text-[40px] tablet:text-[60px] text-center font-bold text-black leading-[1.4em] mb-5">Get In Touch</h1>
                        <p className="w-full max-w-[815px] text-center mx-auto text-[15px]">Natoque euismod a hic porta. Auctor, consequatur occaecati magna natus pretium ornare ornare penatibus. Tempor viverra, erat veritatis</p>
                    </div>
                </div>
                <div className="mt-[-7%]">
                    <div className="w-full max-w-[817px] bg-white p-[30px] mobile:p-[45px] mx-auto shadow-[0px_0px_33px_0px_#00000012]">
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="[&_input]:border [&_input]:border-solid [&_input]:border-[#ddd] flex flex-col [&_input]:text-[#666] [&_input]:p-[12px] [&_input]:placeholder:text-[#666] gap-5">
                                <input type="text" placeholder="name" name="name" value={inputValue.name} onChange={handleChange} />
                                <input type="email" placeholder="Email" name="email" value={inputValue.email} onChange={handleChange} />
                                <input type="text" placeholder="Subject" name="subject" value={inputValue.subject} onChange={handleChange} />
                                <textarea name="message" placeholder="Message" className="border border-solid border-[#ddd] flex flex-col text-[#666] p-[12px] placeholder:text-[#666] h-[141px]" value={inputValue.message} onChange={handleChange} ></textarea>
                            </div>
                            <button type="submit" className="w-fit font-secondary font-bold bg-primary text-white uppercase p-[15px_30px] leading-[1em] transition duration-200 ease-in hover:bg-[#127b5d] cursor-pointer mt-[20px]" >Submit</button>
                        </form>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>{inputValue.name}</li>
                        <li>{inputValue.email}</li>
                        <li>{inputValue.subject}</li>
                        <li>{inputValue.message}</li>
                    </ul>
                </div>
            </section>
        </>
    )
}