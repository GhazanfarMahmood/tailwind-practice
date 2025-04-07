import Image from "next/image";

export default function MoreAbout(){
    return (
        <section className="bg-[#fbfbfb] py-[30px] tablet:py-[50px] sm-tablet:py-[100px]">
            <div className="container">
                <div className="flex items-center justify-center gap-[20px] pb-[40px] flex-col tablet:flex-row">
                    <div className="mx-auto tablet:mx-0 tablet:w-full">
                        <Image src={'/images/more-about1.jpg'} alt="product-img" width={486} height={497} />
                    </div>
                    <div className="w-full">
                        <h1 className="text-5xl text-black font-bold leading-[1.3em] mb-[20px]">Unique Designs</h1>
                        <p className="text-[15px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[20px] flex-col tablet:flex-row-reverse">
                <div className="mx-auto tablet:mx-0 tablet:w-full">
                        <Image src={"/images/more-about2.jpg"} alt="product-img" width={486} height={497} className="block ml-auto"/>
                    </div>
                    <div className="w-full">
                        <h1 className="text-5xl text-black font-bold leading-[1.3em] mb-[20px]">High-End Quality</h1>
                        <p className="text-[15px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}