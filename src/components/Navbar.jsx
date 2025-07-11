import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBarsStaggered, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import CardProduct from "./CardProduct";
import CardProductSearch from "./CardProductSearch";

function Navbar() {
    const navRef = useRef();
    const navContain = useRef();
    const seacrhRef = useRef();
    const searchContain = useRef();
    const [ openNav, setOpenNav ] = useState(false);
    const [ openSearch, setOpenSearch ] = useState(false);
    
    const handleClick = () => {
        setOpenNav(prev => !prev);
        setOpenSearch(false);
    }

    const handleSeacrh = () => {
        setOpenSearch(prev => !prev);
        setOpenNav(false);
    }

    useEffect(() => {
        if (openNav) {
            gsap.to(navRef.current, {
                height: "100%",
                duration: 0.3,
                ease: "power1.out"
            }) 
            gsap.to(navContain.current, {
                opacity: "100%",
                duration: 0.3,
                ease: "slow",
                delay: 0.5
            }) 
        } else {
            gsap.to(navRef.current, {
                height: "0%",
                duration: 0.1,
                ease: "none"
            })
            gsap.to(navContain.current, {
                opacity: "0%",
                duration: 0.3,
                ease: "none"
            }) 
        };
    }, [openNav])

    useEffect(() => {
        if (openSearch) {
            gsap.to(seacrhRef.current, {
                display: "block",
                opacity: 1,
                duration: 0.1
            }),
            gsap.to(searchContain.current, {
                height: "70%",
                opacity: 1,
                delay: 0.1,
                duration: 0.2
            })
        } else {
            gsap.to(seacrhRef.current, {
                display: "none",
                opacity: 0,
                duration: 0.1
            }),
            gsap.to(searchContain.current, {
                height: "0%",
                opacity: 0,
                duration: 0.1
            })
        }
    }, [openSearch])

    useEffect(() => {
        if (openNav || openSearch) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [openNav, openSearch]);

    return (
        <div className="relative">
            <nav className="fixed w-full h-14 md:h-18 z-60 right-0 top-0 px-4 md:px-6 lg:px-10 flex flex-row bg-[#fafafa] text-black
            items-center justify-between">
                <Link className="flex items-center text-base md:text-xl font-medium" onClick={() => {setOpenNav(false)}}>Hslo</Link>
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-row gap-6 text-xs md:text-base">
                    <Link to={`/category`}>Kategori</Link>
                    <Link to={`/collection`}>Koleksi</Link>
                    <Link to={`/product`}>Produk</Link>
                    <Link to={`/profile`}>Profil</Link>
                </div>
                <div className="w-fit h-fit flex flex-row gap-6">
                    <button onClick={handleSeacrh} className={`w-4 text-sm items-center justify-center cursor-pointer`}>
                        {openSearch ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
                    </button>
                    <Link to="/login" className="hidden md:flex text-xs md:text-base py-1 px-4 text-black hover:text-white 
                    bg-[#fafafa] hover:bg-black border border-black cursor-pointer transition-all duration-300">Masuk</Link>
                    <button onClick={handleClick} className={`w-4 flex md:hidden text-sm items-center justify-center`}>
                        {openNav ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBarsStaggered} />}
                    </button>
                </div>
            </nav>
            <div ref={seacrhRef} className="fixed w-full h-fit top-14 md:top-18 z-40" 
            style={{ display: "none", opacity: 0 }}>
                <div onClick={handleSeacrh} className="fixed z-20 inset-0 bg-black/20"></div>
                <div ref={searchContain} className="w-full fixed px-4 md:px-6 py-6 lg:px-10 z-40 flex flex-col gap-2 md:gap-4
                bg-[#fafafa] border-t border-gray-400"style={{ height: "0%", opacity: 0 }}>
                    <div className="w-full h-fit relative">
                        <span className="h-full flex items-center absolute ml-4 text-xs md:text-base"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <input type="text" className="w-full h-fit py-2 bg-[#fafafa] border border-gray-400 pl-10 md:pl-12
                        rounded-full text-xs md:text-base" />
                    </div>
                    <div className="w-full h-full flex flex-col md:flex-row p-2 md:p-6 gap-6 md:gap-2">
                        <div className="flex-1 flex flex-col gap-4">
                            <h2 className="text-sm md:text-lg">Pencarian</h2>
                            <div className="w-full h-full flex flex-col gap-2 text-xs md:text-base overflow-y-auto">
                                <Link to={`/search/q`} onClick={() => setOpenSearch(false)}>Barang</Link>
                            </div>
                        </div>
                        <div onClick={() => setOpenSearch(false)} className="w-full md:w-fit h-full flex flex-col md:flex-row gap-2 md:gap-4">
                            <CardProductSearch />
                            <CardProductSearch />
                            <CardProductSearch />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={navRef} className={`fixed w-full md:hidden top-0 bg-[#fafafa]
            z-50 transition-all duration-300`} style={{ height: "0%" }}>
                <div ref={navContain} className="relative w-full h-full flex justify-center items-center" style={{ opacity: "0%" }}>
                    <div className="absolute w-3xs h-fit flex flex-col items-center gap-6">
                        <Link to={`/category`} onClick={handleClick}>Kategori</Link>
                        <Link to={`/collection`} onClick={handleClick}>Koleksi</Link>
                        <Link to={`/product`} onClick={handleClick}>Produk</Link>
                        <Link to={`/profile`} onClick={handleClick}>Profil</Link>
                    </div>
                    <Link to={`/login`} onClick={handleClick} className="absolute py-2 px-10 bottom-20 text-black hover:text-white text-center
                    bg-[#fafafa] hover:bg-black border border-black cursor-pointer transition-all duration-300">Masuk</Link>
                    <div className="absolute right-4 lg:right-10 bottom-4 md:bottom-6 flex flex-row gap-4 
                    items-center text-black z-10 text-xs md:text-base">
                        <Link>Facebook<FontAwesomeIcon icon={faArrowRight} onClick={handleClick} className="ml-1 text-xs" /></Link>
                        <Link>Instagram<FontAwesomeIcon icon={faArrowRight} onClick={handleClick} className="ml-1 text-xs" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;