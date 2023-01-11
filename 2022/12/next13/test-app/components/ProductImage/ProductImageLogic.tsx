'use client'
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentImageNumber } from "../../store/features/pdp";
import ProductImageStructure from './ProductImageStructure';

const ProductImage: FC<{ prodImages: string[] }> = ({ prodImages, testData }) => {
  const [currentImage, setCurrentImage] = useState(prodImages[0]);
  const currentReduxImage = useSelector(selectCurrentImageNumber)

  console.log('testData', testData)

  useEffect(() => {
    if (currentReduxImage !== null) {
      const newImage = prodImages[currentReduxImage]
      setCurrentImage(newImage)
    }
  }, [currentReduxImage])

  return (
    <ProductImageStructure currentImage={currentImage} />
  )
}

export default ProductImage;