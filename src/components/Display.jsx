import { Link } from "react-router-dom"
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Display() {
    const containRef = useRef();

    useEffect(() => {
        const fade = containRef.current;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        fade, 
                        { opacity: 0 },
                        { opacity: 1, duration: 0.2, ease: "none", delay: 0.1 }
                    );
                    observer.unobserve(fade)
                }
            },
        );
        if (fade) observer.observe(fade);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full h-fit px-2 md:px-6 py-6 lg:p-10 flex items-center justify-center">
                <div className="w-full h-full flex flex-col gap-2 md:gap-6 lg:gap-8">
                    <div className="w-full px-2 md:px-0 h-10">
                        <h2 className="text-xl md:text-3xl">New Release</h2>
                    </div>
                    <div ref={containRef} className="w-full h-full flex flex-col md:flex-row gap-2">
                        <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
                            <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                            className="w-full h-full object-cover"
                            alt="" />
                        </div>
                        <div className="w-full h-fit md:h-[80vh] flex flex-col gap-2">
                            <div className="w-full h-full hidden md:flex flex-row gap-2 overflow-hidden lg:overflow-none">
                                <div className="w-full h-full overflow-hidden">
                                    <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                                    className="w-full h-full object-cover"
                                    alt="" />
                                </div>
                                <div className="hidden lg:flex w-full h-full overflow-hidden">
                                    <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                                    className="w-full h-full object-cover"
                                    alt="" />
                                </div>
                            </div>
                            <div className="w-full h-fit">
                                <h2 className="text-xl md:text-3xl line-clamp-2">Hal f uwbufbwub fb wub ub ufbufbdwdwdw  dwdw dwq dw  wdwd dwd o</h2>
                            </div>
                            <div className="w-full h-fit">
                                <h2 className="text-xs md:text-base line-clamp-3">Hal f uwbufbwub fb wub ub ufbufbdwdwdw  dwdw dwq dw  wdwd dwd o</h2>
                            </div>
                            <Link className="w-full h-fit p-2 flex items-center justify-center border border-black text-xs md:text-base
                            bg-[#fafafa] hover:bg-black text-black hover:text-white transition-all duration-300">
                                <h2>Lihat produk</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Display;