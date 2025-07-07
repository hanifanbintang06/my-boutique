import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function CardProduct() {
    return (
        <Link className="w-full h-68 md:h-[60vh] lg:h-[70vh] flex flex-col">
            <div className="relative w-full h-full overflow-hidden">
                <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                className="w-full h-full object-cover"
                alt="" />
                <button className="absolute w-6 md:w-8 h-6 md:h-8 rounded-full bg-white right-2 bottom-2 flex justify-center 
                items-center text-xs md:text-sm cursor-pointer">
                    <FontAwesomeIcon icon={faHeart} className="flex justify-center" />
                </button>
            </div>
            <div className="w-full h-fit py-2 px-1 flex flex-col">
                <h2 className="text-sm md:text-base line-clamp-2 font-medium">halo</h2>
                <p className="text-xs md:text-sm">Rp. 200,000</p>
            </div>
        </Link>
    )
}

export default CardProduct;