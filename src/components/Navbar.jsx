import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Navbar() {
    const navRef = useRef();
    const NavContain = useRef();
    const [ openNav, setOpenNav ] = useState(false);
    
    const handleClick = () => {
        setOpenNav(prev => !prev);
    }

    useEffect(() => {
        if (openNav) {
            gsap.to(navRef.current, {
                height: "100%",
                duration: 0.3,
                ease: "power1.out"
            }) 
            gsap.to(NavContain.current, {
                opacity: "100%",
                duration: 0.3,
                ease: "slow",
                delay: 0.5
            }) 
        } else if (!openNav) {
            gsap.to(navRef.current, {
                height: "0%",
                duration: 0.1,
                ease: "none"
            })
            gsap.to(NavContain.current, {
                opacity: "0%",
                duration: 0.3,
                ease: "none"
            }) 
        };
    })

    useEffect(() => {
        if (openNav) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [openNav]);
    return (
        <div className="relative">
            <nav className="fixed w-full h-14 md:h-18 z-60 right-0 top-0 px-4 md:px-6 lg:px-10 flex flex-row bg-[#fafafa] text-black
            items-center justify-between">
                <Link className="flex items-center text-base md:text-xl font-medium" onClick={() => {setOpenNav(false)}}>Hslo</Link>
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-row gap-6 text-xs md:text-base">
                    <Link to={`/category`}>Kategori</Link>
                    <Link to={`/collection`}>Koleksi</Link>
                    <Link to={`/product`}>Produk</Link>
                    <Link>Baju</Link>
                </div>
                <div className="w-fit h-fit flex flex-row gap-4">
                    <button className="hidden md:flex text-xs md:text-base py-1 px-4 text-black hover:text-white 
                    bg-[#fafafa] hover:bg-black border border-black cursor-pointer transition-all duration-300">Masuk</button>
                    <button onClick={handleClick} className={`w-4 flex md:hidden ${openNav ? `hidden` : `flex`} text-sm items-center justify-center`}>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </button>
                    <button onClick={handleClick} className={`w-4 flex md:hidden ${openNav ? `flex` : `hidden`} text-sm items-center justify-center`}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </nav>
            <div ref={navRef} className={`fixed w-full md:hidden top-0 bg-[#fafafa]
            z-20 transition-all duration-300`} style={{ height: "0%" }}>
                <div ref={NavContain} className="relative w-full h-full flex justify-center items-center" style={{ opacity: "0%" }}>
                    <div className="absolute w-3xs h-fit flex flex-col items-center gap-6">
                        <Link to={`/category`} onClick={handleClick}>Kategori</Link>
                        <Link to={`/collection`} onClick={handleClick}>Koleksi</Link>
                        <Link to={`/product`} onClick={handleClick}>Produk</Link>
                        <Link>Baju</Link>
                    </div>
                    <Link className="absolute py-2 px-10 bottom-20 text-black hover:text-white text-center
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