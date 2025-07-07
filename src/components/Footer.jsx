import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="w-full h-fit p-4 md:p-6 lg:p-10 flex flex-col border-t border-gray-400">
            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-4">
                <div className="w-full h-fit flex flex-col text-left gap-4">
                    <div className="w-full h-fit">
                        <h2 className="text-sm md:text-base">Bantuan</h2>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-sm">
                        <Link>Layanan pelanggan</Link>
                        <Link>FAQ</Link>
                        <Link>Perawatan produk</Link>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col text-left gap-4">
                    <div className="w-full h-fit">
                        <h2 className="text-sm md:text-base">Layanan</h2>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-sm">
                        <Link>Layanan pelanggan</Link>
                        <Link>FAQ</Link>
                        <Link>Perawatan produk</Link>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col text-left gap-4">
                    <div className="w-full h-fit">
                        <h2 className="text-sm md:text-base">Tentang kami</h2>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-sm">
                        <Link>Layanan pelanggan</Link>
                        <Link>FAQ</Link>
                        <Link>Perawatan produk</Link>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col text-right gap-4">
                    <div className="w-full h-fit">
                        <h2 className="text-sm md:text-base">Indonesia</h2>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit mt-8 py-4 text-xs md:text-base border-t border-gray-400">
                <h2>© 2025 Hanifan Bintang. All rights reserved.</h2>
            </div>
        </div>
    )
}

export default Footer;