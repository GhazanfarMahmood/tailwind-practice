import Advertisement from "@/components/Advertisement";
import Arrival from "@/components/Arrival";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import MoreAbout from "@/components/MoreAbout";
import Popular from "@/components/Popular";
import Testimonial from "@/components/Testmonial";

export default function Home() {
    return (
        <>
            <Banner />
            <Info />
            <Arrival />
            <MoreAbout />
            <Hero />
            <Popular />
            <Testimonial />
            <Advertisement />
        </>
    )
}