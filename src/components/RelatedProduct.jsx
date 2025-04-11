import Image from "next/image";
import Link from "next/link";



export default function RelatedProduct(){
    return (
        <section className="container">
                    <div className="py-[30px] tablet:py-[50px] sm-tablet:py-[100px]">
                        <h1 className="text-5xl font-bold text-start leading-[1.3em] pb-10">Related Products</h1>
                        <div className="grid grid-cols-1 sm-mobile:grid-cols-2 tablet:grid-cols-3 sm-tablet:grid-cols-4 gap-[20px]">
                            <div>
                                <div className="relative group">
                                    <Link href={"#"}>
                                        <Image src={'/images/arrival-img1.jpg'} alt="product-img" width={285} height={382} className="w-full h-full object-cover"/>
                                    </Link>
                                    <div className="w-fit h-fit absolute inset-0 mb-auto ml-auto mt-4 mr-4 pl-[113px] invisible opacity-0 transition duration-200 ease-in group-hover:visible group-hover:opacity-50 hover:opacity-100">
                                        <div className="w-[30px] h-[30px] flex items-center justify-center bg-white  rounded-full peer cursor-pointer shadow-cart">
                                            <Image src={"/images/icons/cart-2.svg"} alt="cart-img" width={17} height={17} />
                                        </div>
                                        <span 
                                            className="w-fit h-fit peer text-[0.8em] leading-[1] text-white bg-black p-[0.7em_0.9em] rounded-[3px] ml-2.5 transition duration-200 ease-in absolute inset-0 my-auto mr-auto  after:border-[transparent_transparent_transparent_black] after:border-[5px] after:border-solid after:absolute after:top-1/2 after:right-[-10px] after:mt-[-5px] after:content-[''] opacity-0 invisible peer-hover:opacity-[1] peer-hover:visible"
                                        >Add to cart</span>
                                    </div>
                                </div>
                                <ul className="flex items-center justify-start my-[12px_7px]">
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                </ul>
                                <Link href={"#"} className="block text-[15px]! font-bold! leading-[1.3em] mb-2 text-black">Hanging Plant</Link>
                                <span className="text-[14px] font-bold leading-[1.3]">$16.00</span>
                            </div>
                            <div>
                                <div className="relative group">
                                    <Link href={"#"}>
                                        <Image src={'/images/arrival-img2.jpg'} alt="product-img" width={285} height={382} className="w-full h-full object-cover" />
                                    </Link>
                                    <div className="w-fit h-fit absolute inset-0 mb-auto ml-auto mt-4 mr-4 pl-[113px] invisible opacity-0 transition duration-200 ease-in group-hover:visible group-hover:opacity-50 hover:opacity-100">
                                        <div className="w-[30px] h-[30px] flex items-center justify-center bg-white  rounded-full peer cursor-pointer shadow-cart">
                                            <Image src={"/images/icons/cart-2.svg"} alt="cart-img" width={17} height={17} />
                                        </div>
                                        <span 
                                            className="w-fit h-fit peer text-[0.8em] leading-[1] text-white bg-black p-[0.7em_0.9em] rounded-[3px] ml-2.5 transition duration-200 ease-in absolute inset-0 my-auto mr-auto  after:border-[transparent_transparent_transparent_black] after:border-[5px] after:border-solid after:absolute after:top-1/2 after:right-[-10px] after:mt-[-5px] after:content-[''] opacity-0 invisible peer-hover:opacity-[1] peer-hover:visible"
                                        >Add to cart</span>
                                    </div>
                                </div>
                                <ul className="flex items-center justify-start my-[12px_7px]">
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                </ul>
                                <Link href={"#"} className="block text-[15px]! font-bold! leading-[1.3em] mb-2 text-black">Wooden Vases</Link>
                                <span className="text-[14px] font-bold leading-[1.3]">$30.00</span>
                            </div>
                            <div>
                                <div className="relative group">
                                    <Link href={"#"}>
                                        <Image src={'/images/arrival-img3.jpg'} alt="product-img" width={285} height={382} className="w-full h-full object-cover" />
                                    </Link>
                                    <div className="w-fit h-fit absolute inset-0 mb-auto ml-auto mt-4 mr-4 pl-[113px] invisible opacity-0 transition duration-200 ease-in group-hover:visible group-hover:opacity-50 hover:opacity-100">
                                        <div className="w-[30px] h-[30px] flex items-center justify-center bg-white  rounded-full peer cursor-pointer shadow-cart">
                                            <Image src={"/images/icons/cart-2.svg"} alt="cart-img" width={17} height={17} />
                                        </div>
                                        <span 
                                            className="w-fit h-fit peer text-[0.8em] leading-[1] text-white bg-black p-[0.7em_0.9em] rounded-[3px] ml-2.5 transition duration-200 ease-in absolute inset-0 my-auto mr-auto  after:border-[transparent_transparent_transparent_black] after:border-[5px] after:border-solid after:absolute after:top-1/2 after:right-[-10px] after:mt-[-5px] after:content-[''] opacity-0 invisible peer-hover:opacity-[1] peer-hover:visible"
                                        >Add to cart</span>
                                    </div>
                                </div>
                                <ul className="flex items-center justify-start my-[12px_7px]">
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                </ul>
                                <Link href={"#"} className="block text-[15px]! font-bold! leading-[1.3em] text-black  mb-2">Golden Lamps</Link>
                                <span className="text-[14px] font-bold leading-[1.3]">$15.75</span>
                            </div>
                            <div>
                                <div className="relative group">
                                    <Link href={"#"}>
                                        <Image src={'/images/arrival-img1.jpg'} alt="product-img" width={285} height={382} className="w-full h-full object-cover" />
                                    </Link>
                                    <div className="w-fit h-fit absolute inset-0 mb-auto ml-auto mt-4 mr-4 pl-[113px] invisible opacity-0 transition duration-200 ease-in group-hover:visible group-hover:opacity-50 hover:opacity-100">
                                        <div className="w-[30px] h-[30px] flex items-center justify-center bg-white  rounded-full peer cursor-pointer shadow-cart">
                                            <Image src={"/images/icons/cart-2.svg"} alt="cart-img" width={17} height={17} />
                                        </div>
                                        <span 
                                            className="w-fit h-fit peer text-[0.8em] leading-[1] text-white bg-black p-[0.7em_0.9em] rounded-[3px] ml-2.5 transition duration-200 ease-in absolute inset-0 my-auto mr-auto  after:border-[transparent_transparent_transparent_black] after:border-[5px] after:border-solid after:absolute after:top-1/2 after:right-[-10px] after:mt-[-5px] after:content-[''] opacity-0 invisible peer-hover:opacity-[1] peer-hover:visible"
                                        >Add to cart</span>
                                    </div>
                                </div>
                                <ul className="flex items-center justify-start my-[12px_7px]">
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                    <li>
                                        <Image src={"/images/icons/star-outline.svg"} alt="star-img" width={13} height={13} />
                                    </li>
                                </ul>
                                <Link href={"#"} className="block text-[15px]! font-bold! leading-[1.3em] mb-2 text-black">Wooden Greenery</Link>
                                <span className="text-[14px] font-bold leading-[1.3]">$26.00</span>
                            </div>
                        </div>
                    </div>
                </section>
    )
} 