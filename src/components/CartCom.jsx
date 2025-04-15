import Image from "next/image";
import Link from "next/link";

export default function CartCom(){
    return (
        <>
            <section className="container">
                <h1 className="text-[26px] leading-[1.2]! font-normal! text-[#000] mb-[23px]">Cart</h1>
                <div className="border-[1px] border-solid border-[#ddd] mb-[30px]">
                    <table className="w-full flex flex-col overflow-x-auto border-[1px] border-solid border-[#ddd]">
                        <thead>
                            <tr className="w-full flex items-center justify-center bg-[#fbfbfb] border-b-[1px] border-solid border-[#ddd] [&_th]:p-[11px_15px] [&_th]:w-full">
                                <th className="min-w-[50px] max-w-[109px]"></th>
                                <th className="min-w-[101px] max-w-[217px]"></th>
                                <th className="min-w-[133px] max-w-[272px]">Product</th>
                                <th className="min-w-[100px]  max-w-[177px]">Price</th>
                                <th className="min-w-[100px] max-w-[216px]">Quantity</th>
                                <th className="min-w-[100px] max-w-[210px]">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="w-full flex items-center justify-center [&_td]:p-[11px_15px] [&_td]:flex [&_td]:justify-center [&_td]:items-center [&_td]:w-full">
                                <td className="min-w-[50px] max-w-[109px]">
                                    <span className="w-[20px] h-[20px] flex items-center justify-center border-[1px] border-solid border-[#ddd] rounded-full">
                                        <Image src={"/images/icons/cross.svg"} alt="close-icon" width={14} height={14} />
                                    </span>
                                </td>
                                <td className="min-w-[101px] max-w-[217px]">
                                    <Image src={"/images/cart-img.jpg"} alt="cart-img" width={70} height={94}/>
                                </td>
                                <td className="min-w-[133px] max-w-[272px]">
                                    <span>Rattan Lamp</span>
                                </td>
                                <td className="min-w-[100px]  max-w-[177px]">
                                    <span>$13.00</span>
                                </td>
                                <td className="min-w-[100px] max-w-[216px]">
                                    <input type="number" name="tel" value={"1"} className="w-[54px] border-[1px] border-[#ddd] text-[#666] h-[35px] p-[5px] focus:outline-0 focus:border-black focus:border-dotted"/>
                                </td>
                                <td className="min-w-[100px] max-w-[210px]">
                                    <span>$13.00</span> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="p-[10px_15px]">
                        <div className="flex items-center justify-center flex-wrap gap-[10px]">
                            <input type="text" placeholder="Coupon code" className=" border-[1px] border-[#ddd] text-[#666] h-[35px] p-[5px] focus:outline-0 focus:border-black focus:border-dotted" />
                            <button className="w-fit font-secondary font-bold bg-primary text-white p-[15px_30px] leading-[1em] transition duration-200 ease-in hover:bg-[#127b5d] cursor-pointer text-nowrap">Apply Coupon</button>
                            <button className="w-fit font-secondary font-bold bg-primary text-white p-[10px_16px] leading-[1em] transition duration-200 opacity-40 ease-in hover:bg-[#127b5d] cursor-not-allowed  mobile:ml-auto ">Update cart</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-[576px] border-[1px] border-solid border-[#ddd] mb-[30px] ml-[auto]">
                    <h2 className="bg-[#fbfbfb] border-b-[1px] border-solid border-[#ddd] text-[#000] text-[18px] font-bold p-[13px_18px]">Cart totals</h2>
                    <div className="p-[20px]">
                        <div className="flex items-center justify-start border-b-[1px] border-solid border-[#ddd] [&_span]:w-[50%] [&_span]:text-[15px] leading-[1.5em] [&_span]:p-[10px_15px]">
                            <span>Subtotal</span>
                            <span>$13.00</span>
                        </div>
                        <div className="flex items-center justify-start border-b-[1px] border-solid border-[#ddd] [&_span]:w-[50%] [&_span]:text-[15px] leading-[1.5em] [&_span]:p-[10px_15px]">
                            <span>Total</span>
                            <span>$13.00</span>
                        </div>
                        <Link href={"/check-out"} className="w-full flex items-center justify-center font-secondary font-bold bg-primary text-white p-[15px_30px] leading-[1em] transition duration-200 ease-in hover:bg-[#127b5d] cursor-pointer text-nowrap mt-[20px]">Proceed to checkout</Link>
                    </div>
                </div>
            </section>
        </>
    )
}