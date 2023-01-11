'use client'
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productData } from "../../mocks";
import { selectCurrentImageNumber } from "../../store/features/pdp";
import DataFetchWrapper from "../../wrappers/DataFetchWrapper";
import ProductImageLogic from './ProductImageLogic';
import ProductImageStructure from "./ProductImageStructure";

const ProductImage = ({ testData }) => {
  const prodImages = productData.images;

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