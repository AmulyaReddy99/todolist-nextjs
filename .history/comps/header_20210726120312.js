import Link from 'next/link'

const Header = () => {
    return (  
        <div>
            <h1>Todo</h1>
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