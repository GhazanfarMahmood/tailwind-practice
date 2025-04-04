'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [state, setState] = useState(true);
    const handleClick = () => {
        setState(curr => !curr);
    }

    useEffect(() =>{
        const checkWindowSize = () => {
            if(window.innerWidth <= 991){
                setState(false)
            }else {
                setState(true)
            }
        }
        checkWindowSize();

        window.addEventListener("resize", checkWindowSize)
        return () => {
            window.removeEventListener("resize", checkWindowSize)
        }
    }, [])

    return (
        <header className="bg-white">
            <div className="max-w-[1240px] px-0 sm-tablet:px-[15px] mx-auto">
                <div className="flex items-center justify-between flex-wrap sm-tablet:flex-nowrap py-2.5">
                    <Link className="order-1 w-[50%] sm-tablet:w-auto sm-tablet:order-none pl-[15px] sm-tablet:px-0" href={"/"}>
                        <Image src={"/images/icons/logo.svg"} alt="site-logo" width={151} height={33} />
                    </Link>
                    {state &&
                        <ul className="order-3 w-[100%] sm-tablet:w-auto sm-tablet:order-none flex items-start sm-tablet:items-center justify-center gap-1.5 sm-tablet:gap-8 flex-col sm-tablet:flex-row mt-2.5 pl-[15px] sm-tablet:px-0 bg-[#f9f9f9] sm-tablet:bg-transparent">
                            <li>
                                <Link href={"/"} className="text-primary sm-tablet:text-[#000] leading-normal sm-tablet:leading-[70px] transition duration-200 ease-linear hover:text-primary">All Products</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-primary sm-tablet:text-[#000] leading-normal sm-tablet:leading-[70px] transition duration-200 ease-linear hover:text-primary">Home Decor</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-primary sm-tablet:text-[#000] leading-normal sm-tablet:leading-[70px] transition duration-200 ease-linear hover:text-primary">Garden Decor</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-primary sm-tablet:text-[#000] leading-normal sm-tablet:leading-[70px] transition duration-200 ease-linear hover:text-primary">About</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-primary sm-tablet:text-[#000] leading-normal sm-tablet:leading-[70px] transition duration-200 ease-linear hover:text-primary">Contact</Link>
                            </li>
                        </ul>
                    }
                    <div className="hidden sm-tablet:flex items-center justify-center gap-5">
                        <div className="h-[36px] w-[36px] flex items-center justify-center relative border-2 border-solid border-black cursor-pointer group">
                            <button className="cursor-pointer">
                                <Image src={"/images/icons/cart.svg"} alt="cart-icon" width={20} height={20} />
                                <span className="w-[18px] h-[18px] flex items-center justify-center text-white font-bold text-[11px] rounded-full absolute top-[-4px] right-[-8px] bg-black shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] leading-[17px] tracking-[-0.5px] cursor-pointer">0</span>
                            </button>
                            <div className="w-[280px] bg-white border border-solid border-[#dddddd] absolute top-[110%] right-0 left-auto cursor-default transition duration-200 ease-in invisible opacity-0 group-hover:visible group-hover:opacity-[1]">
                                <span className="block text-center text-[13px] mt-[18px]">No products in the cart.</span>
                                <Link href={"/"} className="flex items-center justify-center font-bold capitalize text-primary border border-solid border-primary m-[18px] px-[30px] py-[15px] leading-[1em] cursor-pointer hover:bg-primary hover:text-white transition duration-200 ease-in ">Continue Shopping</Link>
                            </div>
                        </div>
                        <button className="cursor-pointer">
                            <Image src={"images/icons/profile.svg"} alt="profile-icon" width={18} height={18} />
                        </button>
                    </div>
                    <div className="order-2 w-[50%] block sm-tablet:hidden sm-tablet:w-full sm-tablet:order-none pr-[15px] sm-tablet:px-0">
                        <button className="h-[40px] w-[40px] flex items-center justify-center border border-dotted border-primary cursor-pointer ml-auto" onClick={handleClick}>
                            {state ? 
                             <Image src={'/images/icons/cross.svg'} alt="close-icon" width={20} height={20} className="filter-(--color-filter)" />
                             :
                             <Image src={"/images/icons/menu.svg"} alt="menu-icon" width={20} height={20} className="filter-(--c-filter)"  />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}