import Image from "next/image";

export default function AboutBanner(){
    return (
        <section>
            <div className="bg-[rgba(45,168,132,0.3)]">
                <div className="container py-[70px_110px] tablet:py-[90px_150px] laptop:py-[130px_200px]">
                    <h1 className="text-[40px] tablet:text-[60px] text-center font-bold text-black leading-[1.4em] mb-5">Style Is What You Make It</h1>
                    <p className="w-full max-w-[815px] text-center mx-auto text-[15px]">Natoque euismod a hic porta. Auctor, consequatur occaecati magna natus pretium ornare ornare penatibus. Tempor viverra, erat veritatis</p>
                </div>
            </div>
            <div className="mt-[-7%]">
                <div  className="container">
                    <Image src={"/images/about-banner.jpg"} alt="about-banner" width={1200} height={500} />
                </div>
            </div>
        </section>
    )
}