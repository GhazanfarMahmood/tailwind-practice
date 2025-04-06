import Image from "next/image";

export default function Banner(){
    return (
        <div className="max-w-[1530px] px-[15px] tablet:px-[40px] laptop:px-[15px] py-[50px_100px] mx-auto gap-5 relative">
            <div className="flex items-center flex-col laptop:flex-row justify-center gap-5 laptop:gap-0">
                <div className="mt-0 laptop:max-[1400px]:mt-[112px] w-full laptop:w-[44%] bg-primary p-[30px_25px] mobile:p-[50px_40px] relative z-[2]">
                    <h1 className="text-white text-[36px] mobile:text-[48px] tablet:text-[64px] text-center laptop:text-left font-bold leading-[1.4em]">Crafted with Care for Memorable Moments.</h1>
                    <p className="text-white font-secondary text-[15px] text-center laptop:text-left mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button className="flex items-center justify-center bg-white text-black font-secondary font-semibold uppercase p-[10px_30px] border border-solid border-white cursor-pointer transition duration-200 ease-in hover:bg-transparent hover:text-white mx-auto laptop:mx-0 ">Shop Now</button>
                </div>
                <div className=" w-[93%] laptop:w-[56%] relative laptop:ml-[-76px] mx-auto laptop:mx-0 z-0">
                    <Image src={"/images/hero-img.jpg"} alt="hero-section-image" width={840} height={699} className="w-full h-full object-cover" />
                </div>
            </div>
            <a href="#" className="w-fit h-fit d-flex items-center justify-center absolute inset-0 mt-auto  ml-auto mb-[60px] mr-5 mobile:mr-[53px] min-[1600px]:mr-0 bg-primary p-[16px_22px] mobile:p-[29px_35px]" >
                <Image src={"/images/icons/arrow-down.svg"} alt="down-arrow" width={34} height={34} className="filter-(--c-white)" />
            </a>
        </div>
    )
}
