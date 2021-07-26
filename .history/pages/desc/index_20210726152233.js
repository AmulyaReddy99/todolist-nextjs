import styles from '../../styles/Home.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { list: data }
    }
}

const Main = () => {
    return (  
        <div className={styles.text}>
            Desc Main
        </div>
    );
}
 
export default Main;