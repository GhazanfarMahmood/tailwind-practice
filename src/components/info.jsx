import Link from "next/link";

export default function Info(){
    return (
        <section className="container py-[30px_30px] tablet:py-[30px_50px] sm-tablet:py-[30px_100px]" id="info">
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[20px_20px] laptop:gap-[40px_60px]">
                <div className="bg-[url(/images/info-img1.jpg)] bg-no-repeat bg-center bg-cover">
                    <span className="block p-[40px_0_350px_40px]">
                        <Link href={"/all-product"} className="text-[28px]! font-bold! leading-[1.2em]! relative pr-[30px] after:absolute after:inset-0 after:my-auto after:ml-auto after:bg-[url(/images/icons/arrow-right.svg)] after:bg-no-repeat after:bg-center after:bg-cover after:content-[''] after:h-[18px] after:w-[20px] after:transition after:duration-200 after:ease-in hover:after:translate-x-[6px]">Explore Indoor</Link>
                    </span>
                </div>
                <div className="bg-[url(/images/info-img2.jpg)] bg-no-repeat bg-center bg-cover">
                    <span className="block p-[40px_0_350px_40px]">
                       <Link href={"/all-product"} className="text-[28px]! font-bold! leading-[1.2em]! relative pr-[30px] after:absolute after:inset-0 after:my-auto after:ml-auto after:bg-[url(/images/icons/arrow-right.svg)] after:bg-no-repeat after:bg-center after:bg-cover after:content-[''] after:h-[18px] after:w-[20px] after:transition after:duration-200 after:ease-in hover:after:translate-x-[6px]">Explore Outdoor</Link>
                    </span>
                </div>
                <div className="bg-[url(/images/info-img3.jpg)] bg-no-repeat bg-center bg-cover col-span-[unset] tablet:col-span-2">
                    <div className="p-[60px_0_200px_40px]">
                        <h2 className="w-full max-w-[282px] text-[28px]! font-bold! leading-[1.2em]! pb-[50px]">20% Off on Your First Order</h2>
                        <Link href={"/product"} className="font-bold! bg-primary text-white! uppercase leading-[1em] p-[15px_30px] transition duration-200 ease-in hover:bg-[#127b5d]">Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}