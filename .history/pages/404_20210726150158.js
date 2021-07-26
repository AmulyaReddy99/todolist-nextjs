import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(1)
            router.push('/')
        }, 3000)
    }, [])

    return (  
        <div>
            <div className={styles.text}>404 | Page Not Found</div>
            <div className={styles.text}><Link href="/">Home</Link></div>
        </div>
    );
}
 
export default NotFound;
