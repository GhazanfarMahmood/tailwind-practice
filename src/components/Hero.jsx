import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return (
        <section className="h-[320px] mobile:h-[410px] laptop:h-[600px] bg-[url(/images/hero-img2.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="h-full flex items-center justify-center">
                <Link href={"/"} className="w-[95px] laptop:w-[105px] h-[95px] laptop:h-[105px] bg-white flex items-center justify-center rounded-full">
                    <Image src={'/images/icons/play.svg'} alt="play-button" width={45} height={45} className="h-[45px] laptop:h-[unset]" />
                </Link>
            </div>
        </section>
    )
}