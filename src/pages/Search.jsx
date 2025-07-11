import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/CardProduct";
import Display from "../components/Display";

function Search() {
    const barSticky = useRef();
    const [ openBar, setOpenBar ] = useState(false);
    const [ openProduct, setOpenProduct ] = useState(true);
    const [ openCategory, setOpenCategory ] = useState(false);

    const handleProduct = () => {
        setOpenProduct(prev => !prev);
        setOpenCategory(prev => !prev);

        window.scrollTo(0, 0);
    }

    const handleCategory = () => {
        setOpenCategory(prev => !prev);
        setOpenProduct(prev => !prev);

        window.scrollTo(0, 0);
    }

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
    return(
        <div className="relative">
            <div className="relative w-full h-34 md:h-38 lg:h-50 pt-12">
                <div className="w-full h-full flex justify-center items-center md:pt-8 lg:pt-12 px-4 md:px-6 lg:px-10">
                    <div className="w-full h-fit flex justify-left text-black">
                        <h2 className="text-base md:text-xl font-medium line-clamp-2">Hasil pencarian:</h2>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit relative">
                <div className="relative w-full h-fit top-14 md:top-18 sticky z-5">
                    <div className="relative">
                        <div className="w-full h-full p-4 md:px-6 md:py-6 lg:px-10 text-sm md:text-lg 
                        flex flex-row border-t border-b border-gray-400 justify-between bg-[#fafafa]">
                            <div className="w-fit h-fit flex flex-row gap-4">
                                <button onClick={handleProduct} className={`${openProduct ? `border border-black
                                hover:bg-black hover:text-white px-3` : ``} py-1 cursor-pointer
                                transition-all duration-300`}>Produk (8)</button>
                                <button onClick={handleCategory} className={`${openCategory ? `border border-black
                                hover:bg-black hover:text-white px-3` : ``} py-1 cursor-pointer
                                transition-all duration-300`}>Kategori (8)</button>
                            </div>
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
                { openProduct && (
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
                )}
                { openCategory && (
                    <div className="w-full h-fit px-2 md:px-6 py-6 lg:p-10 gap-8 lg:gap-10 flex flex-col items-center justify-center">
                    <Display />
                    <Display />
                    <Display />
                    <Display />
                    <Display />
                    <Display />
                </div>
                )}
            </div>
        </div>
    )
}

export default Search;