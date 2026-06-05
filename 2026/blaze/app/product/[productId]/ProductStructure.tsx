import React, { FC } from 'react';
import { Flex } from '@mantine/core';
import Image from 'next/image';

import ProductInfo from '../../../shared/components/ProductInfo';
import styles from './Product.module.css';
import { ProductProps } from './ProductLogic';

const ProductStructure: FC<ProductProps> = ({ thisProduct }) => {
  return (
    <Flex direction={{ base: 'column', sm: 'row' }} className={styles['pdp-wrapper']}>
      <Flex>
        <Image
          src={thisProduct.image}
          alt={`image of ${thisProduct.name}`}
          width="1000"
          height="1000"
        />
      </Flex>
      <Flex direction={'column'} ml={'md'}>
        <ProductInfo thisProduct={thisProduct} />
      </Flex>
    </Flex>
  );
};

export default ProductStructure;
