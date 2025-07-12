import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CardProduct from "../components/CardProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

function AllProduct() {
    const barSticky = useRef();
    const [ openBar, setOpenBar ] = useState(false);
    const [ minPrice, setMinPrice ] = useState('');
    const [ maxPrice, setMaxPrice ] = useState('');
    const [ isMobile, setIsMobile ] = useState(false);

    const handleMinPrice = (e) => {
        const raw = e.target.value.replace(/\D/g, '');
        const formated = raw ? parseInt(raw, 10).toLocaleString('id-ID') : ('');
        setMinPrice(formated);
    }

    const handleMaxPrice = (e) => {
        const raw = e.target.value.replace(/\D/g, (''));
        const formated = raw ? parseInt(raw, 10).toLocaleString('id-ID') : ('');
        setMaxPrice(formated);
    }

    const handleBar = () => {
        setOpenBar(prev => !prev);
    }

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 765);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return() => {
            window.removeEventListener("resize", handleResize);
        }
    }, [isMobile])

    useEffect(() => {
        if(isMobile)return;
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
    }, [openBar, isMobile]);

    useEffect(() => {
        if(!isMobile)return;
        if (openBar) {
            gsap.to(barSticky.current,
                { 
                    height: "60px",
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
    }, [openBar, isMobile]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative">
            <div className="relative w-full h-[45vh] pt-12">
                <img src="https://assets.vogue.com/photos/64da326993ebb91b83375c32/master/w_2560%2Cc_limit/00-story%2520(41).jpg" 
                className="w-full h-full object-cover"
                alt="" />
                <div className="absolute inset-0 bg-black/40 z-5"></div>
                <div className="absolute w-full h-full top-0 bottom-0 flex justify-center items-center pt-12">
                    <div className="w-3xs h-fit flex justify-center text-white z-20">
                        <h2 className="text-xl md:text-3xl font-medium">Semua produk</h2>
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
                        <div className={`relative w-full h-fit ${openBar ? `opacity-100` : `opacity-0`} flex flex-row gap-4 items-center
                        p-4 md:px-6 md:py-6 lg:px-10 text-sm md:text-lg overflow-x-auto`}>
                            <div className="py-1 px-3 border border-gray-500 bg-black hover:bg-[#fafafa] text-xs md:text-base
                            text-white hover:text-black transition-all duration-300 cursor-pointer">
                                Terbaru
                            </div>
                            <div className="py-1 px-3 border border-gray-500 bg-[#fafafa] hover:bg-black text-xs md:text-base
                            text-black hover:text-white transition-all duration-300 cursor-pointer">
                                Terlama
                            </div>
                            <div className="w-1 h-6 border-l border-black"></div>
                            <div className="w-fit flex flex-row items-center gap-4">
                                <div className="w-44 md:w-56 py-1 px-3 border border-gray-500 bg-[#fafafa] hover:bg-black text-xs md:text-base flex justify-center
                            text-black hover:text-white transition-all duration-300 cursor-pointer">
                                Harga terendah ke tertinggi
                            </div>
                            <div className="w-44 md:w-56 py-1 px-3 border border-gray-500 bg-[#fafafa] hover:bg-black text-xs md:text-base flex justify-center
                            text-black hover:text-white transition-all duration-300 cursor-pointer">
                                Harga tertinggi ke terendah
                            </div>
                            </div>
                            <div className="w-1 h-6 border-l border-black"></div>
                            <div className="w-fit h-full flex flex-row gap-2 items-center">
                                <p className="w-22 md:w-30">Kisaran harga</p>
                                <div className="relative h-full flex items-center text-xs md:text-base">
                                    <span className="absolute left-2">Rp.</span>
                                    <input 
                                    value={minPrice}
                                    onChange={handleMinPrice}
                                    type="text" className="w-34 md:w-42 py-1 pl-8 md:pl-10 pr-3 border border-gray-500" />
                                </div>
                                <p>-</p>
                                <div className="relative h-full flex items-center text-xs md:text-base">
                                    <span className="absolute left-2">Rp.</span>
                                    <input 
                                    value={maxPrice}
                                    onChange={handleMaxPrice}
                                    type="text" className="w-34 md:w-42 py-1 pl-8 md:pl-10 pr-3 border border-gray-500" />
                                </div>
                            </div>
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

export default AllProduct;