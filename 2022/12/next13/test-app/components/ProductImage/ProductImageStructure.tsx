'use client'
import React, { FC } from "react";
import styles from './productImage.module.css'

const ProductImageStructure: FC<{ currentImage: string }> = ({ currentImage }) => {
  return (
    <img className={styles['prod-image']} src={currentImage} alt='an image' />
  )
}

export default ProductImageStructure;