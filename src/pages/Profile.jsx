import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBasketShopping, faCartShopping, faHeart, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function Profile() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="relative pt-18">
            <div className="w-full min-h-screen max-h-fit px-4 md:px-6 py-6 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-10">
                <div className="w-full h-fit flex flex-row gap-6">
                    <div className="w-14 md:w-20 lg:w-26 h-14 md:h-20 lg:h-26 bg-gray-500 rounded-full"></div>
                    <div className="flex-1 flex flex-row gap-6">
                        <div className="flex-1 flex items-center">
                            <div className="w-full h-fit flex flex-col text-xs md:text-base">
                                <h2 className="text-base md:text-xl">Nama orang</h2>
                                <p>Bergabung sejak 2025</p>
                            </div>
                        </div>
                        <div className="w-fit h-full flex items-center">
                            <Link className="text-xs md:text-base py-1 px-3 flex flex-row border border-gray-500 gap-2 items-center
                            hover:bg-black hover:text-white transition-all duration-300">
                                <p className="hidden md:block">Lihat profil</p>
                                <FontAwesomeIcon icon={faArrowRight} className="text-[10px] md:text-sm"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col gap-4 md:gap-6 lg:gap-10">
                    <div className="w-full h-fit py-4 lg:py-6 sm:gap-x-10 md:gap-x-10 lg:gap-x-12 border-t border-b border-gray-400 
                    flex flex-row justify-center text-base md:text-xl">
                        <Link className="w-18 md:w-24 h-fit flex flex-col p-2 gap-2 justify-center hover:bg-zinc-200">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <p className="w-full text-xs md:text-base text-center line-clamp-2">Keranjang</p>
                        </Link>
                        <Link className="w-18 md:w-24 h-fit flex flex-col p-2 gap-2 justify-center hover:bg-zinc-200">
                            <FontAwesomeIcon icon={faHeart} />
                            <p className="w-full text-xs md:text-base text-center line-clamp-2">Favorit</p>
                        </Link>
                        <Link className="w-18 md:w-24 h-fit flex flex-col p-2 gap-2 justify-center hover:bg-zinc-200">
                            <FontAwesomeIcon icon={faBasketShopping} />
                            <p className="w-full text-xs md:text-base text-center line-clamp-2">Pesanan</p>
                        </Link>
                        <Link className="w-18 md:w-24 h-fit flex flex-col p-2 gap-2 justify-center hover:bg-zinc-200">
                            <FontAwesomeIcon icon={faReceipt} />
                            <p className="w-full text-xs md:text-base text-center line-clamp-2">Riwayat</p>
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 text-xs md:text-base">
                        <Link className="py-4 md:py-6 border-b border-gray-500 flex flex-row justify-between">
                            <p>Menu</p>
                            <div className="text-xs md:text-base py-1 px-3 flex flex-row border border-gray-500 gap-2 items-center
                            hover:bg-black hover:text-white transition-all duration-300">
                                <FontAwesomeIcon icon={faArrowRight} className="text-[10px] md:text-sm"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;