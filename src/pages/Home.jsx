import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardCategory from "../components/CardCategory";
import CardProduct from "../components/CardProduct";
import Display from "../components/Display";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Home() {
    const homeRef = useRef();
    const newCol = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        gsap.fromTo(homeRef.current, 
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "none" }
        )
    });

    useEffect(() => {
        const fade = newCol.current;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        fade, 
                        { opacity: 0 },
                        { opacity: 1, duration: 0.2, delay: 0.6, ease: "none" }
                    )
                    observer.unobserve(fade);
                };
            }
        )
        if (fade) observer.observe(fade);
        return () => observer.disconnect();
    });
    
    return (
        <div className="relative">
            <Link className="w-full h-[70vh] md:h-screen pt-14 relative flex">
                <img src="https://assets.vogue.com/photos/64da326993ebb91b83375c32/master/w_2560%2Cc_limit/00-story%2520(41).jpg" 
                className="w-full h-full object-cover"
                alt="" />
                <div className="absolute inset-0 bg-black/40 z-5"></div>
                <div ref={homeRef} className="absolute w-full h-full bottom-0">
                    <div className="absolute w-full h-fit bottom-4 md:bottom-6 text-white flex z-10 px-2 px-4 sm:px-6 lg:px-10 justify-start">
                        <div className="w-sm md:w-md h-32 md:h-42 flex flex-col gap-2">
                            <div className="w-full h-16 text-xl md:text-3xl font-medium flex items-end">
                                <h2 className="line-clamp-2">halo huhuw bduwbdubw wbf fduwbfuwbfu fwubf wubfub dbywdy dywvy dwbyb</h2>
                            </div>
                            <div className="w-full h-24 line-clamp-4 text-xs md:text-base">n udfwbfu bfwugb ub bwub uwbf wn n fwbb iw  bfwib iwub bfuwb  bfdwubfuwb  bfw bwub ujb fwubf ub  f uwbu bwfub uwb fub wubf uwb ubuwb wfubfub u fwbubfu bwf bwubf uwb fuwb uwbf uwb uwb fuwbf uwbf uwb fuwbf uwbf uw bfwfbwuifbwufb wufb ub ubfuw bfub</div>
                        </div>
                    </div>
                    <div className="absolute hidden sm:flex right-6 lg:right-10 bottom-4 md:bottom-6 flex-row gap-6 items-center text-white z-10
                    text-xs md:text-base">
                        <Link>Facebook<FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" /></Link>
                        <Link>Instagram<FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" /></Link>
                    </div>
                </div>
            </Link>
            <div className="w-full h-fit px-2 md:px-6 py-6 lg:p-10 flex items-center justify-center">
                <div className="w-full h-full flex flex-col gap-2 md:gap-6 lg:gap-8">
                    <div className="w-full px-2 md:px-0 h-10">
                        <h2 className="text-xl md:text-3xl">New Release</h2>
                    </div>
                    <Display />
                </div>
            </div>
            <div className="w-full h-fit px-2 md:px-6 py-6 lg:p-10 flex items-center justify-center">
                <div className="w-full h-full flex flex-col gap-2 md:gap-6 lg:gap-8">
                    <div className="w-full h-10 flex justify-center">
                        <h2 className="text-xl md:text-3xl">Category</h2>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-2">
                        <div className="w-full h-fit grid grid-cols-2 md:grid-cols-4 gap-2">
                            <CardCategory />
                            <CardCategory />
                            <CardCategory />
                            <CardCategory />
                        </div>
                        <Link className="w-full h-fit flex flex-col cursor-pointer">
                            <div className="w-full h-full p-2 flex justify-center items-center bg-[#fafafa] hover:bg-black
                            text-xs md:text-base text-black hover:text-white border border-black transition-all duration-300">
                                <h2>Lihat lainnya</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-[70vh] md:h-screen relative flex">
                <img src="https://assets.vogue.com/photos/64da326993ebb91b83375c32/master/w_2560%2Cc_limit/00-story%2520(41).jpg" 
                className="w-full h-full object-cover"
                alt="" />
                <div className="absolute inset-0 bg-black/40 z-5"></div>
                <div ref={newCol} className="absolute w-full h-[70vh] md:h-screen p-6 lg:p-10 flex items-end justify-center z-10">
                    <div ref={newCol} className="w-2xs md:w-sm h-64 flex flex-col items-center justify-end text-white gap-2">
                        <div className="w-full h-fit flex justify-center text-lg md:text-2xl font-medium px-2">
                            <h2 className="w-fit max-w-full line-clamp-2 text-center">Batik khas semudeng tema corak parang floral yang memukau</h2>
                        </div>
                        <div className="w-full h-fit flex justify-center text-xs md:text-base">
                            <h2 className="w-fit max-w-full line-clamp-3 text-center">Hal wd f f  wafwaf wafawf wfawf awfa waf waf awf waf awf f ef  ef esf sf esf esfsef seff f o</h2>
                        </div>
                        <Link className="w-3xs md:w-xs h-fit p-2 flex items-center justify-center bg-none hover:bg-[#fafafa] text-xs md:text-base
                            text-white hover:text-black border border-white transition-all duration-300">
                            <h2>Lihat koleksi</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit px-2 md:px-6 py-6 lg:p-10 flex items-center justify-center">
                <div className="w-full h-full flex flex-col gap-2 md:gap-6 lg:gap-8">
                    <div className="w-full h-10 flex justify-center">
                        <h2 className="text-xl md:text-3xl">Populer</h2>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-2">
                        <div className="w-full h-fit grid grid-cols-2 md:grid-cols-4 gap-2">
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;