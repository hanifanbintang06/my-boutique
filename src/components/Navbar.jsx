import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="fixed w-full h-14 md:h-18 z-60 right-0 top-0 px-4 md:px-6 lg:px-10 flex flex-row bg-[#fafafa] text-black
        items-center justify-between">
            <Link className="flex items-center text-base md:text-xl font-medium">Hslo</Link>
            <div className="absolute h-full left-1/2 top-1/2 text-xs md:text-base">
                <Link>Menu</Link>
            </div>
            <div className="w-fit h-fit">
                <button className="text-xs md:text-base py-1 px-4 text-black hover:text-white 
                bg-[#fafafa] hover:bg-black border border-black cursor-pointer transition-all duration-300">Masuk</button>
            </div>
        </nav>
    )
}

export default Navbar;