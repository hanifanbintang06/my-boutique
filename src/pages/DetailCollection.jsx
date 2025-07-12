import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/CardProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

function DetailCollection() {
    const barSticky = useRef();
    const [ openBar, setOpenBar ] = useState(false);

    const handleBar = () => {
        setOpenBar(prev => !prev);
    }

    useEffect(() => {
        if (openBar) {
            gsap.to(barSticky.current,
                { 
                    height: "80px",
                    duration: 0.2,
                    ease: "none"
                }
            )
        } else {
            gsap.to(barSticky.current,
                { 
                    height: "0px",
                    duration: 0.2,
                    ease: "none"
                }
            )
        }
    }, [openBar]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative">
            <div className="relative w-full h-[65vh] pt-12">
                <img src="https://assets.vogue.com/photos/64da326993ebb91b83375c32/master/w_2560%2Cc_limit/00-story%2520(41).jpg" 
                className="w-full h-full object-cover"
                alt="" />
                <div className="absolute inset-0 bg-black/40 z-5"></div>
                <div className="absolute w-full h-full top-0 bottom-0 flex justify-center items-center pt-12">
                    <div className="w-3xs h-fit flex flex-col justify-center text-white gap-2 z-20">
                        <h2 className="text-center text-xl md:text-3xl font-medium">Nama koleksi</h2>
                        <div className="w-full h-fit flex justify-center text-xs md:text-base">
                            <h2 className="w-fit max-w-full line-clamp-3 text-center">Hal wd f f  wafwaf wafawf wfawf awfa waf waf awf waf awf f ef  ef esf sf esf esfsef seff f o</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit relative">
                <div className="relative w-full h-fit top-14 md:top-18 sticky z-5">
                    <div className="relative">
                        <div className="w-full h-full p-4 md:px-6 md:py-6 lg:px-10 text-sm md:text-lg 
                        flex flex-row border-t border-b border-gray-400 justify-between bg-[#fafafa]">
                            <button className="">Produk (8)</button>
                            <button onClick={handleBar} className="flex items-center cursor-pointer">
                                Urutkan<FontAwesomeIcon icon={faChevronDown} className="ml-1 md:ml-2 text-xs md:text-xs" />
                            </button>
                        </div>
                    </div>
                    <div ref={barSticky} className={`relative w-full flex bg-[#fafafa] ${openBar ? `border-b border-gray-400` : ``}`}
                    style={{ height: "0px" }}>
                        <div className={`relative w-full h-fit ${openBar ? `opacity-100` : `opacity-0`} flex flex-col gap-4
                        p-4 md:px-6 md:py-6 lg:px-10 text-sm md:text-lg`}>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit px-2 md:px-6 py-6 lg:p-10 grid grid-cols-2 md:grid-cols-4 gap-2">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>
        </div>
    )
}

export default DetailCollection;