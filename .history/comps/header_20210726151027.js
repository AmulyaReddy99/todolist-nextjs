import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (  
        <div>
            <nav>
                <div className="logo">
                    <Image src="/logo.png" width={90} height={45} />
                </div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/desc">Desc</Link>
            </nav>
        </div>
    );
}
 
export default Header;