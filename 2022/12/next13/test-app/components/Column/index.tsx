import React, { useState } from "react";
import ColumnStructure from './ColumnStructure';
import { productData } from '../../mocks'

const Column = () => {
  return (
    <ColumnStructure productData={productData} />
  )
}

export default Column;