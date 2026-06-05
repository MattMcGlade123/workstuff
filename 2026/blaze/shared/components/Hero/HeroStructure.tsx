import React, { FC } from 'react';
import { Box, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';

import styles from './Hero.module.css';
import { HeroProps } from '.';

const AddressInfoStructure: FC<HeroProps> = ({ heroData }) => (
  <Box className={styles['hero-wrapper']}>
    <Image width={2560} height={800} src={heroData?.image} alt="Hero image" />

    <Flex className={styles['hero-content']} direction={'column'} justify={'center'}>
      <Title order={2}>{heroData?.title}</Title>
      <Text>{heroData?.description}</Text>
    </Flex>
  </Box>
);

export default AddressInfoStructure;
