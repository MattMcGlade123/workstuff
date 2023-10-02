import React from 'react';
import TestStructure from './PhoneItemStructure';
import { getData } from '../../api'
import TestClient from './PhoneItemClient';

const Test3 = async () => {
  const data = await getData(1)

  const componentProps = {
    data
  }

  return (
    <TestClient>
      <TestStructure {...componentProps} />
    </TestClient>
  )
}

export default Test3