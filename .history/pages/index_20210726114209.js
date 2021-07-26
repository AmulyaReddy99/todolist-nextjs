import Head from 'next/head'
import Image from 'next/image'
import Header from '../comps/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header/>  
      <div className={styles.container}>
        Hello World
      </div>
    </div>
  )
}
