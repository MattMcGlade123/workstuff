'use client';

import React, { FC } from 'react';
import { Box, Flex } from '@mantine/core';
import Image from 'next/image';

import Menu from '../Menu';

const HeaderStructure: FC = () => {
  return (
    <header>
      <Flex
        align="center"
        justify="flex-start"
        direction={'column'}
        bg="var(--mantine-color-kgCSRColours-7)"
        p={'md'}
        mb={'md'}
      >
        <Box mb={'md'}>
          <Image
            src="/kurt-geiger-logo.png"
            alt="Blaze Logo"
            width={353}
            height={25}
            loading="eager"
          />
        </Box>
        <Menu />
      </Flex>
    </header>
  );
};

export default HeaderStructure;
