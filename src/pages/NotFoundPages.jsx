import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <h2>404 Not Found</h2>
            <Link to='/'>Go back to home</Link>
        </div>
    )
}

export default NotFoundPage;