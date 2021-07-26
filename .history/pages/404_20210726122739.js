import Link from "next/link"
import styles from '../styles/Home.module.css'

const NotFound = () => {
    return (  
        <div>
            <div className={styles.text}>404 | Page Not Found</div>
            <div className={styles.text}><Link href="/">Home</Link></div>
        </div>
    );
}
 
export default NotFound;
