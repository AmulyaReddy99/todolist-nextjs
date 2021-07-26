import styles from '../../styles/Home.module.css'

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
                    <div key={todo.id}>
                        <a>
                            { todo.name }
                        </a>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Main;