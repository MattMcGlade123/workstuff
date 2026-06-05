import React, { FC } from 'react';

import HeroStructure from './HeroStructure';
import { HeroProps } from '.';

const AddressInfoLogic: FC<HeroProps> = ({ heroData }) => {
  const componentProp = {
    heroData,
  };
  return <HeroStructure {...componentProp} />;
};

export default AddressInfoLogic;
