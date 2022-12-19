'use client';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import { fetchUser } from '../../api';
import styles from './columndata.module.css'

const Column = ({ profileData }) => {
  const [currentNumber, setCurrentNumber] = useState(2);
  const [currentData, setCurrentData] = useState(profileData);

  const updateName = async () => {
    const newProfileData = fetchUser(currentNumber);
    // Wait for the promises to resolve
    const [newProfileDataResult] = await Promise.all([newProfileData]);
    if (newProfileDataResult) {
      console.log('newProfileDataResult', newProfileDataResult)
      setCurrentData(newProfileDataResult)
      setCurrentNumber(currentNumber+1)
    }
  }

  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <li><Link href='/dataFetch/dataFetchSub'>dataFetchSub</Link></li>
        <li><Link href='/dataFetch/dataFetchSub2'>dataFetchSub2</Link></li>
      </ul>
      <div className={styles.profile}>
        <Suspense fallback={<div>Loading...</div>}>
          <h3>
            {currentData.name}
          </h3>
        </Suspense>
        <button onClick={() => updateName()} type='button'>Change user</button>
      </div>
    </div>
  )
}

export default Column;