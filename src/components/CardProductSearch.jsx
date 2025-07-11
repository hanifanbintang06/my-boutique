import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function CardProductSearch() {
    const containRef = useRef();

    useEffect(() => {
        const fade = containRef.current;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        fade,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.2, delay: 0.2, ease: "none" }
                    )
                    observer.unobserve(fade);
                }
            }
        ) 
        if (fade) observer.observe(fade);
        return () => observer.disconnect();
    }, []);

    return (
        <Link to={`/product/id`} ref={containRef} className="w-full md:w-56 h-14 md:h-full flex flex-row md:flex-col">
            <div className="relative w-28 md:w-full h-full overflow-hidden">
                <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                className="w-full h-full object-cover"
                alt="" />
                <button className="absolute w-6 md:w-8 h-6 md:h-8 rounded-full bg-white right-2 bottom-2 hidden md:flex justify-center 
                items-center text-xs md:text-sm cursor-pointer">
                    <FontAwesomeIcon icon={faHeart} className="flex justify-center" />
                </button>
            </div>
            <div className="w-full h-full md:h-fit py-2 px-3 md:px-1 flex flex-row md:flex-col">
                <div className="relative w-full flex flex-col">
                    <h2 className="text-sm md:text-base line-clamp-2 font-medium">halo</h2>
                    <p className="text-xs md:text-sm">Rp. 200,000</p>
                </div>
                <div className="w-fit h-full flex md:hidden items-center">
                    <Link className="py-1 px-2 border border-gray-400 text-[10px] md:text-sm">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </Link>
    )
}

export default CardProductSearch;