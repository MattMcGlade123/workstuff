
import React, { FC, useEffect, useState } from "react";
import Button from "../../basic/Button";
import useChangeColour from "../../events/useChangeColour";
import styles from './ProductColourPicker.module.css'

const ProductColourPickerStructure: FC = () => {
  return (
    <div>
      Colours
      <ul>
        <li><Button clickTrigger={useChangeColour} clickParams={0} text='Change to red' /></li>
        <li><Button clickTrigger={useChangeColour} clickParams={1} text='Change to blue' /></li>
        <li><Button clickTrigger={useChangeColour} clickParams={2} text='Change to brown' /></li>
      </ul>
    </div>
  )
}

export default ProductColourPickerStructure;