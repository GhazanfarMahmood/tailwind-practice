import Image from "next/image";

export default function AboutAd() {
    return ( 
        <section className="bg-[rgba(45,168,132,0.3)] pt-[50px]">
            <div className="container">
                <div className="flex flex-col items-center justify-center">
                    <Image src={"/images/icons/instagram.svg"} alt="instagram-icon" width={48} height={48} className="mb-[15px]" />
                    <h2 className="text-4xl font-bold leading-[1.3em] mb-2.5">Follow @antiques</h2>
                    <p className="pb-10 text-[15px] text-center">Leo nulla cras augue eros, diam vivamus et lectus volutpat at facilisi tortor porta.</p>
                </div>
            </div>
            <Image src={"/images/ad-img.jpg"} alt="products-image" width={1920} height={384} className="w-[1920px] h-[384px] object-cover mx-auto" />
        </section>
    )
}