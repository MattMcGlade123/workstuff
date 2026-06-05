import React, { FC } from 'react';

import Hero from '../shared/components/Hero';
import { heroDataMock } from '../shared/mockData';

const HomePage: FC = () => {
  return (
    <>
      <Hero heroData={heroDataMock} />
    </>
  );
};

export default HomePage;
