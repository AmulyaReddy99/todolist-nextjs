import styles from '../styles/Home.module.css'
import Head from 'next/head'

const About = () => {
  return ( 
    <>
      <Head>
        <title>Todolist</title>
      </Head>
      <div className={styles.text}>
        About
      </div> 
    </>
  );
}
 
export default About;