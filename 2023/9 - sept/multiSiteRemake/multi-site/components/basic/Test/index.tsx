'use client'

import { getData } from '../../../api'
import React, { useEffect, useState } from 'react';
import TestStructure from './TestStructure';

const Test = () => {
  const [finalData, setFinalData] = useState({})
  const [isOn, setOn] = useState(false);
  const getAllData = async () => {
    const data = await getData();

    setFinalData(data);
  }

  useEffect(() => {
    getAllData()
  }, [])

  const handleClick = () => {
    setOn(!isOn)
  }

  const componentProps = {
    isOn,
    handleClick,
    finalData
  }

  return (
    <TestStructure {...componentProps} />
  )
}

export default Test;