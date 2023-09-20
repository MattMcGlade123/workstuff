import React from 'react';
import TestStructure from './TestStructure';
import { getData } from '../../../api'

const Test2 = async () => {
  const data = await getData(2)

  const componentProps = {
    data
  }

  return (
    <TestStructure {...componentProps} />
  )
}

export default Test2