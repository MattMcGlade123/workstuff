'use client';

import React from "react";
import { useSelector } from 'react-redux';
import { selectBasket } from "../../store/features/basket";
import MiniBagStructure from './MiniBagStructure';

const MiniBag = () => {
  // const basketData = useSelector(selectBasket);
 
  return (
    <MiniBagStructure />
  )
}

export default MiniBag;