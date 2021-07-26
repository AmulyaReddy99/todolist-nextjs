import Link from 'next/link'

const Header = () => {
    return (  
        <div>
            <div>
                <h1>Todo</h1>
            </div>
            <nav>
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