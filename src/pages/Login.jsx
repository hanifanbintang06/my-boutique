import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login() {
    const sectionLogin = useRef();
    const sectionReg = useRef();
    const [ openReg, setOpenReg ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);

    const [ pwdLogin, showPwdLogin ] = useState(true);
    const [ pwdReg, showPwdReg ] = useState(true);

    const handlePwdLogin = () => {
        showPwdLogin(prev => !prev);
    }

    const handlePwdReg = () => {
        showPwdReg(prev => !prev);
    }

    const handleReg = () => {
        setOpenReg(prev => !prev);
    }

    useLayoutEffect (() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 765 );
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    useEffect(() => {
        if (isMobile) {
            document.body.classList.add("overflow-hiddem");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isMobile])

    useEffect(() => {
        if (openReg) {
            gsap.to(sectionLogin.current, {
                opacity: 0,
                display: "none",
                duration: 0.2
            }),
            gsap.to(sectionReg.current, {
                opacity: 1,
                display: "block",
                delay: 0.4,
                duration: 0.2
            })
        } else {
            gsap.to(sectionLogin.current, {
                opacity: 1,
                display: "block",
                duration: 0.2,
                delay: 0.4
            }),
            gsap.to(sectionReg.current, {
                opacity: 0,
                display: "none",
                duration: 0.2
            })
        }
    })
    return (
        <div className="relative bg-[#fafafa]">
            <div className="relative w-full h-screen flex flex-row">
                <Link to={`/`} className="absolute top-10 left-10 text-xs md:text-base z-60">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-[10px] md:text-sm mr-1 md:mr-2"/>Home
                </Link>
                <div className="relative w-full md:w-2/5 h-full border-r border-gray-500 flex items-center justify-center">
                    <div ref={sectionLogin} className="relative" style={{ display: "block", opacity: 1 }}>
                        <div className={`w-3xs md:w-full lg:w-sm h-fit md:p-6 flex flex-col 
                        items-center gap-8`}>
                            <h2 className="w-full flex justify-center text-lg md:text-2xl">Masuk akun</h2>
                            <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-base">
                                <p className="px-2">Nama pengguna</p>
                                <input type="text" className="w-full px-2 py-3 border border-gray-500"
                                placeholder="Masukan nama pengguna..." />
                            </div>
                            <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-base">
                                <p className="px-2">Kata sandi</p>
                                <div className="relative">
                                    <input type={pwdLogin ? `password` : `text`} className="w-full pl-2 pr-12 py-3 border border-gray-500"
                                    placeholder="Masukan kata sandi..." />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                                        <button className="cursor-pointer" onClick={handlePwdLogin}>{pwdLogin ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</button>
                                    </span>
                                </div>
                            </div>
                            <Link className="w-full py-2 flex justify-center border border-gray-500 bg-black hover:bg-[#fafafa] text-xs md:text-base
                            text-white hover:text-black transition-all duration-300">Masuk</Link>
                            <div className="w-full h-fit flex flex-col gap-2 items-center">
                                <div className="text-xs md:text-base flex flex-row gap-1">
                                    <p>Belum memiliki akun? </p>
                                    <button onClick={handleReg} className="hover:underline cursor-pointer">Daftar</button> 
                                </div>
                                <button className="w-46 md:w-3xs h-9 md:h-11 text-black border border-gray-500 hover:bg-black hover:text-white
                                text-xs md:text-base transition-all duration-300 cursor-pointer">
                                    <FontAwesomeIcon icon={faGoogle} className="mr-3" />Masuk dengan Google
                                </button>
                            </div>
                        </div> 
                    </div>
                    <div ref={sectionReg} className="relative" style={{ display: "none", opacity: 0 }}>
                        <div className={`w-3xs md:w-full flex lg:w-sm h-fit md:p-6 flex-col 
                        items-center gap-8`}>
                            <h2 className="w-full flex justify-center text-lg md:text-2xl">Daftar akun</h2>
                            <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-base">
                                <p className="px-2">Email pengguna</p>
                                <input type="text" className="w-full px-2 py-3 border border-gray-500"
                                placeholder="Masukan email pengguna..." />
                            </div>
                            <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-base">
                                <p className="px-2">Nama pengguna</p>
                                <input type="text" className="w-full px-2 py-3 border border-gray-500"
                                placeholder="Masukan nama pengguna..." />
                            </div>
                            <div className="w-full h-fit flex flex-col gap-2 text-xs md:text-base">
                                <p className="px-2">Kata sandi</p>
                                <div className="relative">
                                    <input type={pwdReg ? `password` : `text`} className="w-full pl-2 pr-12 py-3 border border-gray-500"
                                    placeholder="Masukan kata sandi..." />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                                        <button className="cursor-pointer" onClick={handlePwdReg}>{pwdReg ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</button>
                                    </span>
                                </div>
                            </div>
                            <Link className="w-48 md:w-3xs py-2 flex justify-center border border-gray-500 bg-black hover:bg-[#fafafa] text-xs md:text-base
                            text-white hover:text-black transition-all duration-300">Kirim kode verifikasi</Link>
                            <div className="text-xs md:text-base flex flex-row gap-1">
                                <p>Sudah memiliki akun? </p>
                                <button onClick={handleReg} className="hover:underline cursor-pointer">Masuk</button> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex w-3/5 h-screen z-5">
                    <div className="w-full h-full relative">
                        <img src="https://assets.vogue.com/photos/65142454768a0201fd6908ae/master/w_1600,c_limit/download%20(3).jpeg" 
                        className="w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;