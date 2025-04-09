import Image from "next/image";
import Link from "next/link";

export default function ContactInfo (){
    return (
        <section className="py-[30px_30px] tablet:py-[30px_50px]  sm-tablet:py-[50px_100px]">
            <div className="container">
                <h2 className="text-5xl font-bold text-center text-black pb-5">Connect With Us</h2>
                <div className="grid grid-cols-1 sm-mobile:grid-cols-2 mobile:grid-cols-3 sm-tablet:grid-cols-4 gap-5 pt-[60px]">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Image src={"/images/icons/location.svg"} alt="mail-icon" width={32} height={32} className="filter-(--c-filter)"/>
                        <h4 className="text-primary text-[28px] font-bold py-[10px_20px]">Address</h4>
                        <span className="text-[16px] font-semibold text-center">123/8, Route 66, Downtown, Washington, Us</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Image src={"/images/icons/phone.svg"} alt="call-icon" width={32} height={32} className="filter-(--c-filter)" />
                        <h4 className="text-primary text-[28px] font-bold py-[10px_20px]">Call Us</h4>
                        <span className="text-[16px] font-semibold text-center">+88 - 78542269744</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Image src={"/images/icons/location.svg"} alt="mail-icon" width={32} height={32} className="filter-(--c-filter)" />
                        <h4 className="text-primary text-[28px] font-bold py-[10px_20px]">Email</h4>
                        <span className="text-[16px] font-semibold text-center">example@example.com</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h4 className="text-primary text-[28px] font-bold pb-[30px]">Follow Us</h4>
                        <ul className="flex items-center justify-start gap-[12px]">
                            <li>
                                <Link href="/" className="w-[40px] h-[40px] flex items-center justify-center bg-primary rounded-full">
                                    <Image src={'/images/icons/facebook.svg'} alt="facebook-icon" width={18} height={18} className="filter-(--c-white)"/>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="w-[40px] h-[40px] flex items-center justify-center bg-primary rounded-full">
                                    <Image src={'/images/icons/twitter.svg'} alt="twitter-icon" width={18} height={18} className="filter-(--c-white)"/>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="w-[40px] h-[40px] flex items-center justify-center bg-primary rounded-full">
                                    <Image src={'/images/icons/youtube.svg'} alt="youtube-icon" width={18} height={18} className="filter-(--c-white)"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
    )
}