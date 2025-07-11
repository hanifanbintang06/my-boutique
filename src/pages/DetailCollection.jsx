import { useEffect } from "react";

function DetailCollection() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative"></div>
    )
}

export default DetailCollection;