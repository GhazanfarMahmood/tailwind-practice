import Image from "next/image";
import Link from "next/link";

export default function AboutAuthor(){
    return (
        <section className="py-[30px] tablet:py-[50px] sm-tablet:py-[100px]">
            <div className="container">
                <div className="flex flex-col sm-tablet:flex-row justify-center items-center gap-5">
                    <div className=" w-auto sm-tablet:w-[40%]">
                        <Image src={"/images/founder.jpg"} alt="found-image" width={511} height={644} className="w-full h-auto object-cover"/>
                    </div>
                    <div className="bg-primary flex flex-col justify-center h-full desktop:h-[593px] w-[95%] tablet:w-[80%] sm-tablet:w-[60%] p-[50px] mobile:p-[89px]">
                        <span className="block text-white text-[15px] mb-5">Founder</span>
                        <h1 className="text-5xl text-white font-bold leading-[1.3em] mb-5">Elizabeth Harris</h1>
                        <p className="text-white text-[15px] mb-[44px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <ul className="flex items-center justify-start gap-2.5">
                            <li>
                                <Link href={"/"} className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full">
                                    <Image src={"/images/icons/facebook.svg"} alt="facebook-icon" width={25} height={25} className="filter-(--c-filter)" />
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full">
                                    <Image src={"/images/icons/twitter.svg"} alt="twitter-icon" width={25} height={25} className="filter-(--c-filter)" />
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full">
                                    <Image src={"/images/icons/youtube.svg"} alt="youtube-icon" width={25} height={25} className="filter-(--c-filter)" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}