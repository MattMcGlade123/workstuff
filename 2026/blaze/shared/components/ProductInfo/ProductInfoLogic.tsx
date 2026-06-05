import React, { FC, useState } from 'react';

import ProductInfoStructure from './ProductInfoStructure';
import { ProductInfoProps } from '.';

const timeOut = 500;

const ProductInfoLogic: FC<ProductInfoProps> = ({ thisProduct }) => {
  const [selectedSize, setSelectedSize] = useState<null | string>(null);
  const [addToBagText, setAddToBagText] = useState('Add To Bag');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showError, setShowError] = useState(false);

  const addToBag = () => {
    if (selectedSize === null) {
      setShowError(true);
    } else {
      setShowError(false);
      setAddToBagText('Adding Product To Bag');
      setButtonDisabled(true);

      setTimeout(() => {
        setAddToBagText('Product Has Been Added To Bag');
      }, timeOut * 2);

      setTimeout(() => {
        setAddToBagText('Add To Bag');
        setButtonDisabled(false);
        setSelectedSize(null);
      }, timeOut * 5);
      console.log('ADDED TO BAG');
    }
  };

  const handleSizeClick = (newSize: string) => {
    setSelectedSize(newSize);
    setShowError(false);
  };

  const componentProps = {
    thisProduct,
    handleSizeClick,
    addToBag,
    selectedSize,
    addToBagText,
    buttonDisabled,
    showError,
  };

  return <ProductInfoStructure {...componentProps} />;
};

export default ProductInfoLogic;
