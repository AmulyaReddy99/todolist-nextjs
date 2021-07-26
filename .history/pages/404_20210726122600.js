import Link from "next/link"

const NotFound = () => {
    return (  
        <div>
            404 | Page Not Found
            <Link href="/">Home</Link>
        </div>
    );
}
 
export default NotFound;
