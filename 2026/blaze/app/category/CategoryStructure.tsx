import React, { FC } from 'react';
import { Box, Title } from '@mantine/core';

import ProductList from '../../shared/components/ProductList';

const CategoryStructure: FC = () => {
  return (
    <Box>
      <Title order={1} mb="xl" ta="center">
        Product List
      </Title>
      <ProductList />
    </Box>
  );
};

export default CategoryStructure;
