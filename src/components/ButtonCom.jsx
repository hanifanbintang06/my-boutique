import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ButtonCom() {
    const [ btnActive, setBtnActive ] = useState(false);

    const handleAct = () => {
        setBtnActive(prev => !prev);
    }

    return (
        <button onClick={handleAct} className={`flex items-center ${btnActive ? `bg-[#21242a] hover:bg-zinc-600 text-white` : `bg-[#fafafa] hover:bg-[#21242a] hover:text-white`} py-1 md:py-2 px-3 md:px-4 border border-black
        cursor-pointer transition-all duration-300`}>
            <FontAwesomeIcon icon={faStar} className="text-xs md:text-base mr-1 md:mr-2"/>5(2)
        </button>
    )
}

export default ButtonCom;