import Link from 'next/link'

const Header = () => {
    return (  
        <div>
            <nav>
                <div>
                    Todo
                </div>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/desc">Desc</Link>
                </ul>
            </nav>
        </div>
    );
}
 
export default Header;