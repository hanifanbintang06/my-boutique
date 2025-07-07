import { Link } from "react-router-dom";

function CardCategory() {
    return (
        <div className="w-full h-64 md:h-[60vh] lg:h-[70vh] flex flex-col">
            <Link className="w-full h-full overflow-hidden">
                <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                className="w-full h-full object-cover hover:scale-102 transition-all duration-300"
                alt="" />
            </Link>
            <div className="w-full h-fit p-2 flex justify-center items-center text-xl">
                <Link className="w-fit max-w-full flex text-xs md:text-base text-center line-clamp-2">halo</Link>
            </div>
        </div>
    )
}

export default CardCategory;