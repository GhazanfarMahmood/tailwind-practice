import Image from "next/image";

export default function Testimonial() {
    return (
        <section className="bg-[#fbfbfb]">
            <div className="container">
                <div className="py-[30px] tablet:py-[50px] sm-tablet:py-[100px]">
                    <h2 className="text-5xl font-bold text-center leading-[1.3em] mobile:pb-[30px] sm-tablet:pb-[50px] desktop:pb-[70px]">This is what makes us different Hear</h2>
                    <div className="grid grid-cols-1 mobile:grid-cols-2 sm-tablet:grid-cols-3 gap-[20px] sm-tablet:gap-[50px_20px]">
                        <div className="border border-solid border-[#13151624] p-[30px]">
                            <p className="mb-5">Justo vestibulum risus imperdiet consectetur consectetur pretium urna augue etiam risus acc um san volutpat urna, eu sem per enim, est aliquam laoet urna fringilla viverra.</p>
                            <div className="flex items-center justify-start gap-[15px]">
                                <Image src={"/images/review-img1.png"} alt="profile-img" width={60} height={60} className="rounded-full" />
                                <span className="text-[20px] font-bold ">Mike Sendler</span>
                            </div>
                        </div>
                        <div className="border border-solid border-[#13151624] p-[30px]">
                            <p className="mb-5">Justo vestibulum risus imperdiet consectetur consectetur pretium urna augue etiam risus acc um san volutpat urna, eu sem per enim, est aliquam laoet urna fringilla viverra.</p>
                            <div className="flex items-center justify-start gap-[15px]">
                                <Image src={"/images/review-img2.png"} alt="profile-img" width={60} height={60} className="rounded-full" />
                                <span className="text-[20px] font-bold ">Melissa Miner</span>
                            </div>
                        </div>
                        <div className="border border-solid border-[#13151624] p-[30px]">
                            <p className="mb-5">Justo vestibulum risus imperdiet consectetur consectetur pretium urna augue etiam risus acc um san volutpat urna, eu sem per enim, est aliquam laoet urna fringilla viverra.</p>
                            <div className="flex items-center justify-start gap-[15px]">
                                <Image src={"/images/review-img3.png"} alt="profile-img" width={60} height={60} className="rounded-full" />
                                <span className="text-[20px] font-bold ">Andrew Woods</span>
                            </div>
                        </div>
                        <div className="border border-solid border-[#13151624] p-[30px]">
                            <p className="mb-5">Justo vestibulum risus imperdiet consectetur consectetur pretium urna augue etiam risus acc um san volutpat urna, eu sem per enim, est aliquam laoet urna fringilla viverra.</p>
                            <div className="flex items-center justify-start gap-[15px]">
                                <Image src={"/images/review-img4.png"} alt="profile-img" width={60} height={60} className="rounded-full" />
                                <span className="text-[20px] font-bold ">Jenny Sanders</span>
                            </div>
                        </div>
                        <div className="border border-solid border-[#13151624] p-[30px]">
                            <p className="mb-5">Justo vestibulum risus imperdiet consectetur consectetur pretium urna augue etiam risus acc um san volutpat urna, eu sem per enim, est aliquam laoet urna fringilla viverra.</p>
                            <div className="flex items-center justify-start gap-[15px]">
                                <Image src={"/images/review-img5.png"} alt="profile-img" width={60} height={60} className="rounded-full" />
                                <span className="text-[20px] font-bold ">Steven Moore</span>
                            </div>
                        </div>
                        <div className="border border-solid border-[#13151624] p-[30px]">
                            <p className="mb-5">Justo vestibulum risus imperdiet consectetur consectetur pretium urna augue etiam risus acc um san volutpat urna, eu sem per enim, est aliquam laoet urna fringilla viverra.</p>
                            <div className="flex items-center justify-start gap-[15px]">
                                <Image src={"/images/review-img6.png"} alt="profile-img" width={60} height={60} className="rounded-full" />
                                <span className="text-[20px] font-bold ">Alicia Hilson</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}