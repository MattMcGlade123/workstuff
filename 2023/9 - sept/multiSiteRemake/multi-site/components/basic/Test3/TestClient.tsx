'use client'

import { getData } from '../../../../api/mattApi'
import React, { useEffect, useState } from 'react';
import TestStructure from './TestStructure';

const TestClient = ({ children }) => {
  const [isOn, setOn] = useState(false);

  // const updatedChildren = Children.map(children, (child: ReactElement) =>
  //   cloneElement(child, {
  //     onClick: () => pushTargetId(),
  //   }),
  // );


  const handleClick = () => {
    setOn(!isOn)
  }

  const componentProps = {
    isOn,
    handleClick,
  }

  return (
    <>{children}</>
  )
}

export default TestClient;