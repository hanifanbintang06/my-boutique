import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown, faHeart, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ButtonSize from "../components/ButtonSize";
import TableSize from "../components/TableSize";
import gsap from "gsap";
import ButtonCom from "../components/ButtonCom";
import CardCom from "../components/CardCom";

function DetailProduct() {
    const [ openDesc, setOpenDesc ] = useState(false);
    const [ openImage, setOpenImage ] = useState(false);
    const [ openSize, setOpenSize ] = useState(false);
    const [ openCare, setOpenCare ] = useState(false);
    
    const [ isMobile, setIsMobile ] = useState(false);

    const sectionCom = useRef();
    const containCom = useRef();
    const backdrop = useRef();
    const [ openCom, setOpenCom ] = useState(false);

    const handleCom = () => {
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
    }, [isMobile])

    useEffect(() => {
        if (isMobile) return;

        if (openCom) {
            gsap.to(
               containCom.current, {
                width: "40%",
                duration: 0.2,
                ease: "power1.in"
               } 
            ),
            gsap.to(
               sectionCom.current, {
                display: "block"
               } 
            ),
            gsap.to(
               backdrop.current, {
                opacity: 1
               } 
            )
        } else {
            gsap.to(containCom.current, {
                width: "0%",
                duration: 0.2,
                ease: "none"
                }
            ),
            gsap.to(
               sectionCom.current, {
                display: "none",
               } 
            ),
            gsap.to(
               backdrop.current, {
                opacity: 0
               } 
            )
        }
    }, [openCom, isMobile])

    useEffect(() => {
        if (!isMobile) return;

        if (openCom) {
            gsap.to(
               containCom.current, {
                width: "100%",
                duration: 0.2,
                ease: "power1.in"
               } 
            ),
            gsap.to(
               sectionCom.current, {
                display: "block"
               } 
            ),
            gsap.to(
               backdrop.current, {
                opacity: 1
               } 
            )
        } else {
            gsap.to(containCom.current, {
                width: "0%",
                duration: 0.2,
                ease: "none"
                }
            ),
            gsap.to(
               sectionCom.current, {
                display: "none",
               } 
            ),
            gsap.to(
               backdrop.current, {
                opacity: 0
               } 
            )
        }
    }, [openCom, isMobile])

    const handleDesc = () => {
        setOpenDesc(prev => !prev);
    }

    const handleImage = () => {
        setOpenImage(prev => !prev);
    }

    const handleSize = () => {
        setOpenSize(prev => !prev);
    }

    const handleCare = () => {
        setOpenCare(prev => !prev);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className="relative">
            <div className="w-full h-full md:h-fit flex flex-col md:flex-row lg:gap-8">
                <div className="w-full md:w-3/5 h-fit px-2 md:pl-6 lg:pl-10 flex flex-col gap-2">
                    <div className="w-full h-[50vh] md:h-screen pt-16 md:pt-20">
                        <img src="https://assets.vogue.com/photos/64da326993ebb91b83375c32/master/w_2560%2Cc_limit/00-story%2520(41).jpg"
                        className="w-full h-full object-cover" 
                        alt="" />
                    </div>
                    <div className="w-full h-fit hidden md:flex flex-col gap-2">
                        <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                        className="w-full h-full object-cover" 
                        alt="" />
                        <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                        className="w-full h-full object-cover" 
                        alt="" />
                        <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                        className="w-full h-full object-cover" 
                        alt="" />
                    </div>
                    <div className={`relative w-full h-10 ${openImage ? `h-fit` : `h-10`} md:h-fit md:hidden flex flex-col gap-2 overflow-hidden`}>
                        <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                        className="w-full h-full object-cover" 
                        alt="" />
                        <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                        className="w-full h-full object-cover" 
                        alt="" />
                        <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                        className="w-full h-full object-cover" 
                        alt="" />
                        <button onClick={handleImage} className={`w-full h-full text-xs md:text-base text-white absolute bg-black/50 flex justify-center items-center
                             ${openImage ? `hidden` : 
                             `flex`} `}>Lihat foto lainnya</button>
                        <button onClick={handleImage} className={`w-full h-full text-xs md:text-base text-black py-2 border border-black justify-center items-center
                        hover:text-white bg-[#fafafa] hover:bg-black hover:bg-black transition-all duration-300
                             ${openImage ? `flex` : 
                             `hidden`} `}>Lihat lebih sedikit</button>
                    </div>
                </div>
                <div className="relative w-full md:w-2/5 h-fit md:h-auto md:pt-16 md:pt-20 flex flex-col">
                    <div className="bg-[#fafafa] w-full h-fit px-4 md:px-6 py-6 lg:py-10 flex flex-col gap-4">
                        <div className="w-full h-fit flex flex-row justify-between items-center">
                            <div className="w-full h-fit flex flex-row gap-4">
                                <Link className="py-1 px-4 bg-[#21242a] border border-black text-white text-[10px] md:text-sm">Kemeja</Link>
                            </div>
                            <button className="w-fit h-full flex justify-center items-center text-sm md:text-lg cursor-pointer"><FontAwesomeIcon icon={faHeart} /></button>
                        </div>
                        <h2 className="text-lg md:text-2xl font-medium line-clamp-2">Halo ooooooooooooooooooooooo ooooooooooo ooooooooooo oooooooooo ooooooooooo</h2>
                        <div className="text-sm md:text-lg flex items-center">
                            <FontAwesomeIcon icon={faStar} className="text-[10px] md:text-sm mr-1 md:mr-2"/>
                            <p>5/5</p>
                        </div>
                        <p className="text-base md:text-xl">Rp. 1.500.000</p>
                        <Link className="text-sm md:text-lg">Keoleksi</Link>
                        <div className="w-full h-fit flex flex-col gap-3">
                            <p>Pilih ukuran:</p>
                            <div className="w-full h-fit flex flex-row gap-4 flex-wrap">
                                <ButtonSize />
                                <ButtonSize />
                                <ButtonSize />
                                <ButtonSize />
                                <ButtonSize />
                                <ButtonSize />
                                <ButtonSize />
                                <ButtonSize />
                                <ButtonSize />
                            </div>
                        </div>
                        <button className="w-full py-2 border border-black hover:bg-black text-black hover:text-white text-xs md:text-base
                        transition-all duration-300 cursor-pointer">Tambah ke keranjang</button>
                        <div className="w-full h-fit text-xs md:text-base flex flex-col gap-1 items-start">
                            <div className="w-full h-fit relative">
                                <p className={`text-justify ${openDesc ? `` : `line-clamp-4`}`}>wdwdwdwdwd bfuwbu gfwugfb uwb uwb u bub ufgbw ufbubwu bu fbuwb fub wubfwufbwubf wubf wufb wub fwufb wufb wufb wufb wubfwu bfuwb wu bwu bwu bwuf bwub wu bwuf bwufb wufb wufb wufbwufb wu fbwufb wubf wufbwu fbwufb uwbfwu bfwu fbwuf buff buwebf ub ubw ubf wubf uwbwub uwbfwubf wub fwubf</p>
                                <div className={`absolute ${openDesc ? `hidden` : `block`} bottom-0 left-0 w-full h-1/2 bg-gradient-to-t 
                                from-zinc-50/100 to-transparent pointer-events-none`}></div>
                            </div>
                            <button onClick={handleDesc} className="cursor-pointer">{openDesc ? `Lihat lebih sedikit` : `Lihat lebih banyak`}</button>
                        </div>
                        <div className="w-full h-fit flex flex-col gap-2">
                            <button onClick={handleSize} className="w-full h-fit py-2 flex justify-between text-xs md:text-base items-center cursor-pointer">
                                <p>Tabel ukuran</p>
                                <FontAwesomeIcon icon={faChevronDown} className="text-[10px] md:text-sm"/>
                            </button>
                            { openSize && (
                                <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-base">
                                    <p>Toleransi Perbedaan Ukuran -+2cm</p>
                                    <div className="relative overflow-x-auto">
                                        <TableSize />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-full h-fit flex flex-col gap-2">
                            <button onClick={handleCare} className="w-full h-fit py-2 flex justify-between text-xs md:text-base items-center cursor-pointer">
                                <p>Perawatan</p>
                                <FontAwesomeIcon icon={faChevronDown} className="text-[10px] md:text-sm"/>
                            </button>
                            { openCare && (
                                <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-base">
                                    <p>fdai fhih iawfh iawhfi hawif haifh aihf iwahfdia hfi</p>
                                </div>
                            )}
                        </div>
                        <button onClick={handleCom} className="w-full h-fit flex flex-row py-2 gap-4 items-center justify-between text-xs md:text-base cursor-pointer">
                            <h2>Ulasan</h2>
                            <FontAwesomeIcon icon={faArrowRight} className="text-[10px] md:text-sm"/>
                        </button>
                        <div className="w-full h-fit flex flex-col gap-4 text-justify text-xs md:text-base">
                            <h2>Pengiriman</h2>
                            <p>duhwau ghuagh dwuagh duwgau fgu gaufgwagaguwa waf a gfuag fuwagf uagfug fuga fuagf auwuf g</p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={sectionCom} className="relative z-80" style={{ display: "none" }}>
                <div ref={backdrop} onClick={handleCom} className="fixed w-full h-screen inset-0 bg-black/20" 
                style={{ opacity: 0 }} />
                <div ref={containCom} className="fixed h-screen top-0 right-0"
                style={{ width: "0%" }}>
                    <button onClick={handleCom} className="absolute top-6 left-10 cursor-pointer">
                        <FontAwesomeIcon icon={faXmark} className="text-base md:text-xl"/>
                    </button>
                    <div className={`w-full h-full bg-[#fafafa] flex flex-col gap-4 px-10 pt-16 pb-10 items-start border-l border-gray-400`}>
                        <h2 className="text-lg md:text-2xl">Ulasan</h2>
                        <p className="text-xs md:text-base">Filter</p>
                        <div className="w-full h-10 md:h-12 flex flex-row gap-2 overflow-x-auto">
                            <ButtonCom />
                            <ButtonCom />
                            <ButtonCom />
                            <ButtonCom />
                            <ButtonCom />
                        </div>
                        <p className="text-xs md:text-base">Menampilkan 12 ulasann</p>
                        <div className="w-full h-full flex flex-col overflow-y-auto gap-4">
                            <CardCom />
                            <CardCom />
                            <CardCom />
                            <CardCom />
                            <CardCom />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;