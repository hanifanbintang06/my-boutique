import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

function CardCom() {
    const [ openDesc, setOpenDesc ] = useState(false);
    const [ openCom, setOpenCom ] = useState(false);

    const [ isMobile, setIsMobile ] = useState(false);

    const sectionCom = useRef();
    const containCom = useRef();

    const handleDesc = () => {
        setOpenDesc(prev => !prev);
    }

    const handleOpen = () => {
        setOpenCom(prev => !prev);
    }

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 765);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    useEffect(() => {
        if (isMobile) return;
        if (openCom) {
            gsap.to(sectionCom.current, {
                display: "block",
                duration: 0.2
            }),
            gsap.to(containCom.current, {
                width: "60%",
                duration: 0.2,
                ease: "power1.in"
            })
        } else {
            gsap.to(sectionCom.current, {
                display: "none",
                duration: 0.2
            }),
            gsap.to(containCom.current, {
                width: "0%",
                duration: 0.2,

            })
        }
    }, [openCom, isMobile]);

    useEffect(() => {
        if (!isMobile) return;
        if (openCom) {
            gsap.to(sectionCom.current, {
                display: "block",
                duration: 0.2
            }),
            gsap.to(containCom.current, {
                width: "100%",
                duration: 0.2,
                ease: "power1.in"
            })
        } else {
            gsap.to(sectionCom.current, {
                display: "none",
                duration: 0.2
            }),
            gsap.to(containCom.current, {
                width: "0%",
                duration: 0.2,

            })
        }
    }, [openCom, isMobile]);

    return (
        <div className="relative w-full h-fit p-4 flex flex-col gap-2 border border-black">
            <div className="w-full h-fit flex items-center">
                <div className="w-11 h-10 bg-black rounded-full"></div>
                <div className="w-full h-fit flex flex-row justify-between gap-1">
                    <div className="w-full h-fit ml-2 md:ml-4 flex flex-col">
                        <h2 className="w-full text-sm md:text-lg line-clamp-1">Nam hwh iwfhw ihfihw ih iwhf iwh fiwhf iwhfwiuh wih wihfih fhia</h2>
                        <p className="text-[10px] md:text-sm">1 bulan yang lalu</p>
                    </div>
                    <p className="flex items-center">
                        <FontAwesomeIcon icon={faStar} className="text-xs md:text-base mr-1 md:mr-2"/> 5/5
                    </p>
                </div>
            </div>
            <p className={`text-justify ${openDesc ? `` : `line-clamp-2`} text-xs md:text-base`}>hdiwh ihw ih heqihihqi hedqih qih iqh ifwi hiwh iwh fiwh iwh iwh ifhihw hfiwh iwhfiwhf iwh iwh iwh iwh iwfh wifh wih fwihf wifh wif hwif hwifh wihf</p>
            <button onClick={handleDesc} className="text-left text-xs md:text-base cursor-pointer">{openDesc ? `Lihat lebih sedikit` : `Lihat lebih banyak`}</button>
            <div className="w-full h-12 bg-gray-200"></div>
            <button onClick={handleOpen} className="text-left text-xs md:text-base cursor-pointer">{openCom ? `Tutup foto` : `Lihat foto`}</button>
            <div ref={sectionCom} className="relative left-0 top-0 z-80"
            style={{ display: "none" }}>
                <div ref={containCom} className="fixed h-screen bg-[#fafafa] pt-16 p-10 top-0 left-0 z-90 
                border-r border-gray-400" 
                style={{ width: "0%" }}>
                    <button onClick={handleOpen} className="absolute top-6 right-10 cursor-pointer">
                        <FontAwesomeIcon icon={faXmark} className="text-base md:text-xl"/>
                    </button>
                    <div className="w-full h-full flex flex-col gap-4 overflow-y-auto">
                        <h2 className="text-lg md:text-2xl">Username</h2>
                        <div className="w-full h-fit flex flex-row justify-between text-xs md:text-base">
                            <p>1 bulan yang lalu</p>
                            <p className="flex items-center">
                                <FontAwesomeIcon icon={faStar} className="mr-1 md:mr-2"/> 5/5
                            </p>
                        </div>
                        <div className="w-full h-96 bg-gray-200"></div>
                        <p className={`text-justify text-xs md:text-base`}>hdiwh ihw ih heqihihqi hedqih qih iqh ifwi hiwh iwh fiwh iwh iwh ifhihw hfiwh iwhfiwhf iwh iwh iwh iwh iwfh wifh wih fwihf wifh wif hwif hwifh wihf</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCom;