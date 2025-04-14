import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
    return (
        <>
            <section className="container">
                <div className="flex items-start justify-center flex-col tablet:flex-row gap-10 mb-[30px]">
                    <div className="w-full tablet:w-1/2">
                        <Image src={"/images/product-1.jpg"} alt="product-img" width={600} height={804} className="w-full max-w-[600px] mx-auto h-full object-cover" />
                    </div>
                    <div className="w-full max-w-[600px] mx-auto tablet:w-[46%]">
                        <ul className="flex items-center justify-start gap-[3px] [&_a]:text-primary [&_a]:font-primaries! [&_a]:font-normal! [&_a]:text-[15px]! [&_a]:leading-1! mb-[15px] [&_a]:transition [&_a]:duration-200 [&_a]:ease-in [&_a]:hover:text-[#127b5d] flex-wrap">
                            <li>
                                <Link href={"/all-product"}>All Products</Link>
                                <span>,</span>
                            </li>
                            <li>
                                <Link href={"/home-decor"}>Home Decor</Link>
                                <span>,</span>
                            </li>
                            <li>
                                <Link href={"/all-product"}>Most Popular</Link>
                            </li>
                        </ul>
                        <h2 className="text-2xl text-black mb-[13px] leading-[1.2]">Ceramic Blue Vase</h2>
                        <span className="mb-[4.5px] font-bold font-secondary text-[22px] text-[#292929] ">$33.50</span>
                        <div className="flex items-center justify-start pb-4 border-b border-solid border-[#ddd]">
                            <input type="number" value={1} name="for product number" className="border border-solid border-[#ddd] w-[54px] text-[#666] h-[35px] p-[4.5px] mr-[15px]" />
                            <Link href={"/cart"} className="bg-primary text-[16px] font-secondary font-unset text-white p-[10px_20px] transition duration-200 ease-in hover:bg-[#127b5d] leading-[1]">Add to Cart</Link>
                        </div>
                        <div className="flex items-center justify-start my-[7px_10px]">
                            <span className="text-[13px] leading-1 font-normal mr-[5px]">Categories:</span>
                            <ul className="flex items-center justify-start gap-[3px] [&_a]:text-primary [&_a]:font-primaries! [&_a]:font-normal! [&_a]:text-[13px]! [&_a]:leading-1! [&_a]:transition [&_a]:duration-200 [&_a]:ease-in [&_a]:hover:text-[#127b5d] flex-wrap ">
                                <li>
                                    <Link href={"/all-product"}>All Products</Link>
                                    <span>,</span>
                                </li>
                                <li>
                                    <Link href={"/home-decor"}>Home Decor</Link>
                                    <span>,</span>
                                </li>
                                <li>
                                    <Link href={"/all-product"}>Most Popular</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}