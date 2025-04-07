import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="py-[35px_45px] mobile:py-[70px_45px] border-b border-solid border-[#f2f5f7]">
                <div className="container grid grid-cols-1 sm-mobile:grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-4 gap-[15px] tablet:gap-[50px]">
                    <Link href={"/"} className="block mx-auto sm-mobile:mx-0">
                        <Image src={"/images/icons/white-logo.svg"} alt="site-logo"  width={263} height={58}/>
                    </Link>
                    <div className="sm-tablet:ml-[50px]">
                        <h2 className="text-[21px] text-[#fefefe] font-bold text-center sm-tablet:text-left leading-[1.2em] mb-[25px] mobile:mb-[42px]">Quick Links</h2>
                        <ul>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Home</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Indoor</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Outdoors</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">About</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sm-tablet:ml-[50px]">
                        <h2 className="text-[21px] text-[#fefefe] font-bold text-center sm-tablet:text-left leading-[1.2em] mb-[25px] mobile:mb-[42px]">Explore</h2>
                        <ul>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Bestsellers</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">On Sale</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Best Of 2022</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Featured</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Gift Card</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sm-tablet:ml-[50px]">
                        <h2 className="text-[21px] text-[#fefefe] font-bold text-center sm-tablet:text-left leading-[1.2em] mb-[25px] mobile:mb-[42px]">Help</h2>
                        <ul>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Track Order</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Delivery & Returns</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">FAQs</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="block font-primaries text-primary text-[15px] text-center sm-tablet:text-left leading-[1.65em] transition duration-200 ease-in hover:text-[#127b5d] cursor-pointer">Community</Link>
                            </li>
                        </ul>
                        <ul className="flex items-center justify-center sm-tablet:justify-start mt-[1.75em] gap-3">
                            <li>
                                <Link href={"/"}>
                                    <Image src={"/images/icons/facebook.svg"} alt="facebook-icon" width={18} height={18} className="filter-(--color-whites)"/>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <Image src={"/images/icons/twitter.svg"} alt="twitter-icon" width={18} height={18} className="filter-(--color-whites)" />
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <Image src={"/images/icons/instagram.svg"} alt="instagram-icon" width={18} height={18} className="filter-(--color-whites)" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-[30px] tablet:py-[47px]">
                <div 
                className="container grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-[50px] place-items-center place-items"
                >
                    <p 
                    className="text-white text-[15px] leading-[1.65em] text-center tablet:text-left mr-0 tablet:mr-auto"
                    >Copyright © 2025 Antiques | Powered by Antiques</p>
                    <Image src={"/images/payment.png"} alt="card-icon" width={185} height={22} className="block mx-auto tablet:ml-auto tablet:mx-0 desktop:ml-auto desktop:mx-0" />
                </div>
            </div>
        </footer>
    )
}