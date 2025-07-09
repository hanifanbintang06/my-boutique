import { useEffect } from "react";
import Display from "../components/Display";

function Category() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="relative">
            <div className="relative w-full h-[50vh] pt-12">
                <img src="https://assets.vogue.com/photos/64da326993ebb91b83375c32/master/w_2560%2Cc_limit/00-story%2520(41).jpg" 
                className="w-full h-full object-cover"
                alt="" />
                <div className="absolute inset-0 bg-black/40 z-5"></div>
                <div className="absolute w-full h-full top-0 bottom-0 flex justify-center items-center pt-12">
                    <div className="w-3xs h-fit flex justify-center text-white z-20">
                        <h2 className="text-xl md:text-3xl font-medium">Kategori</h2>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col">
                <Display />
                <Display />
                <Display />
                <Display />
            </div>
        </div>
    )
}

export default Category;