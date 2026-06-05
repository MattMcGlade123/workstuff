'use client';

import React, { FC } from 'react';
import { Button, List, ListItem, Text, Title } from '@mantine/core';

import { Product } from '../../types/customTypes';

interface ProductInfoStructureProps {
  thisProduct: Product;
  addToBag: () => void;
  handleSizeClick: (thisSize: string) => void;
  selectedSize: string | null;
  addToBagText: string;
  buttonDisabled: boolean;
  showError: boolean;
}

import styles from './ProductInfo.module.css';

const ProductInfoStructure: FC<ProductInfoStructureProps> = ({
  thisProduct,
  addToBag,
  selectedSize,
  handleSizeClick,
  addToBagText,
  buttonDisabled,
  showError,
}) => (
  <>
    <Title order={1} mb={'md'}>
      {thisProduct.name}
    </Title>
    <Title order={3} mb={'md'}>
      {thisProduct.brand}
    </Title>
    <Text mb={'xs'}>£{thisProduct.price}</Text>
    <Text mb={'xs'}>Select Size</Text>
    <List className={styles['size-list']} mb={'md'}>
      {thisProduct.sizes.map((thisSize) => (
        <ListItem
          onClick={() => handleSizeClick(thisSize)}
          className={selectedSize === thisSize ? styles['active-size'] : ''}
          key={thisSize}
          p={'xs'}
          mr={'md'}
          bd="1px solid var(--mantine-color-gray-5)"
        >
          {thisSize}
        </ListItem>
      ))}
    </List>
    {showError && <Text c="var(--mantine-color-red-9">Please select size</Text>}
    <Button disabled={buttonDisabled} color="var(--mantine-color-black)" onClick={() => addToBag()}>
      {addToBagText}
    </Button>
  </>
);

export default ProductInfoStructure;
