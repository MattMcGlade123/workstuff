import React from 'react';
import TestStructure from './PhoneItemStructure';
import { getData } from '../../api'

const Test3 = async () => {
  const data = await getData(2)

  const componentProps = {
    data
  }

  return (
    <TestStructure {...componentProps} />
  )
}

export default Test3