import React from 'react'
import Link from 'next/link';
import styles from './header.module.css'
import { fetchAnImage } from '../../api';

const Header = async () => {
  const profileData = fetchAnImage(1)
  const [profileDateResult] = await Promise.all([profileData]);
  console.log('profileDateResult', profileDateResult)
  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.navblock}>
          <h2>Basic pages</h2>
          <ul className={styles.nav}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/test'>Test</Link></li>
          </ul>
        </div>


        <div className={styles.navblock}>
          <h2>Child routes pages</h2>
          <ul className={styles.nav}>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/about/sub'>About - sub</Link></li>
          </ul>
        </div>

        <div className={styles.navblock}>
          <h2>Seperate pages sharing layout (group routes)</h2>
          <ul className={styles.nav}>
            <li><Link href='/prods'>Prods</Link></li>
            <li><Link href='/prods-b'>Prods-B</Link></li>
          </ul>
        </div>

        <div className={styles.navblock}>
          <h2>Data fetching</h2>
          <ul className={styles.nav}>
            <li><Link href='/dataFetch'>dataFetch</Link></li>
          </ul>
        </div>
        <img src={profileDateResult?.thumbnailUrl} alt="Vercel Logo" width={300} height={300} />
      </nav>
    </header>
  )
}

export default Header;