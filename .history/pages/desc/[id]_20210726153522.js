import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
}

const Desc = () => {
    return (  
        <div className={styles.text}>
            Desc
        </div>
    );
}
 
export default Desc;