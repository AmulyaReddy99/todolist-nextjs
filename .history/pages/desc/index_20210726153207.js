import styles from '../../styles/Home.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { list: data }
    }
}

const Main = ({ list }) => {
    return (  
        <div className={styles.text}>
            Desc Main
            {
                list.map(todo =>  (
                    <Link href={'/desc/' + todo.id} key={todo.id}>
                        <a>
                            { todo.name }
                        </a>
                    </Link>
                ))
            }
        </div>
    );
}
 
export default Main;