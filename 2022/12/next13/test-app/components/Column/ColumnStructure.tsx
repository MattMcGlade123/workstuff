
import React, { FC, useEffect } from "react";
import { ProductItem } from '../../types'
import useChangeColour from '../../events/useChangeColour'
import ProductColourPicker from "../ProductColourPicker";

const ColumnStructure: FC<{ productData: ProductItem }> = ({ productData }) => {

  return (
    <div>
      <div>
        <h1>{productData.name}</h1>
        <p>{productData.description}</p>
        <p>{productData.price}</p>
      </div>
      <ProductColourPicker />
      <div><button type="button">Add to bag</button></div>
    </div>
  )
}

export default ColumnStructure;