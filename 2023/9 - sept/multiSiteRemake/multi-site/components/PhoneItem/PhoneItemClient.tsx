'use client'

import React, { Children, ReactElement, cloneElement, useState } from 'react';

const TestClient = ({ children }) => {
  const [isOn, setOn] = useState(false);

  const handleClick = () => {
    setOn(!isOn)
  }

  const clientProps = {
    isOn,
    handleClick,
  }

  const updatedChildren = Children.map(children, (child: ReactElement) =>
    cloneElement(child, {
      clientProps
    }),
  );

  return (
    <>{updatedChildren}</>
  )
}

export default TestClient;