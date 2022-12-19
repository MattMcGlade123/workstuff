'use client';
import React, { Suspense, useEffect, useState } from 'react'
import { fetchAPost } from '../../api';
import styles from './container.module.css'

const Container = () => {
  const [currentData, setCurrentData] = useState();
  const [currentNumber, setCurrentNumber] = useState(1);

  const fetchData = async () => {
    const postData = fetchAPost(currentNumber);
    const [postDataResult] = await Promise.all([postData]);
    setCurrentData(postDataResult);
    setCurrentNumber(currentNumber + 1)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.container}>
      <button type='button' onClick={() => fetchData()}>Fetch new data</button>
      <Suspense fallback={<p>Loading...</p>}>
        <h2>{currentData?.title}</h2>
        <p>{currentData?.body}</p>
      </Suspense>
    </div>
  )
}

export default Container;