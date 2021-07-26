import styles from '../styles/Home.module.css'
import Head from 'next/head'

const About = () => {
  return ( 
    <>
      <Head>
        <title>Todolist | About</title>
        <meta name="keywords" content="todolist"></meta>
      </Head>
      <div className={styles.text}>
        About
      </div> 
    </>
  );
}
 
export default About;