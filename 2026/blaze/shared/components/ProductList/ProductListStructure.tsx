import React, { FC } from 'react';
import { Card, Container, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import { mockProducts } from '../../mockData/products';
import styles from './ProductList.module.css';

const ProductListStructure: FC = () => {
  return (
    <Container size="lg" py="xl">
      <Flex wrap="wrap" gap="lg" className={styles['product-list-wrapper']}>
        {mockProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            style={{ textDecoration: 'none', flex: '1 1 calc(25% - 12px)', minWidth: '280px' }}
          >
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              h="100%"
              style={{ cursor: 'pointer' }}
            >
              <Image height={200} width={200} src={product.image} alt={product.name} />

              <Text fw="bold" size="lg" mb="xs">
                {product.name}
              </Text>

              <Text size="sm" c="dimmed" mb="xs">
                {product.brand}
              </Text>

              <Text size="xl" fw="bold">
                £{product.price.toFixed(2)}
              </Text>
            </Card>
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

export default ProductListStructure;
