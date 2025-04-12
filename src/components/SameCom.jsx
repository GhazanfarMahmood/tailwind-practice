import Image from "next/image";
import Link from "next/link";



export default function SameCom({title}){
    return (
        <section className="container">
            <h1 className="mb-[60px] text-primary text-[60px] font-normal! leading-[1.4em]!">{title}</h1>
            <div className="flex items-center justify-between mb-[38px] flex-wrap gap-2.5">
                <span className="text-[15px] my-[15px] leading-[1]">Showing all 7 results</span>
                <select className="text-[15px] font-primaries!  border-[1px] border-solid border-black p-[8px] focus:outline-0 focus:border-dotted focus:border-black">
                    <option value={"Default Sorting"} selected>Default Sorting</option>
                    <option value={"Sort by popularity"}>Sort by popularity</option>
                    <option value={"Sort by average rating"}>Sort by average rating</option>
                    <option value={"Sort by latest"}>Sort by latest</option>
                    <option value={"Sort by price: low to high"}>Sort by price: low to high</option>
                    <option value={"Sort by price: high to low"}>Sort by price: high to low</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm-mobile:grid-cols-2 tablet:grid-cols-3 sm-tablet:grid-cols-4 gap-[20px] mb-[50px]">
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
        </section>
    )
}