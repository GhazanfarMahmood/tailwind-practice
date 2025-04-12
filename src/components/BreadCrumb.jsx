import Link from "next/link";

export default function BreadCrumb({title}){
    return (
        <section className="container">
            <ul className="flex items-center justify-start gap-1 my-[60px_14px]">
                <li>
                    <Link href={"/"} aria-label="home page link" className="text-[14px] text-[#777] font-primaries! transition duration-200 ease-in hover:text-primary" >Home</Link>
                </li>
                <li className="relative after:absolute after:inset-0 after:my-auto after:mr-auto after:content-['/'] after:text-[#777] pl-[10px]">
                    <span className="text-[14px] text-[#777] font-primaries!">{title}</span>
                </li>
            </ul>
        </section>
    )
}