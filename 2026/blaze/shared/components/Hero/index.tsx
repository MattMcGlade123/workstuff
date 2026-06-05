import React, { FC } from 'react';

import { HeroData } from '../../types/customTypes';
import HeroLogic from './HeroLogic';

export interface HeroProps {
  heroData: HeroData;
}

const Hero: FC<HeroProps> = ({ heroData }) => {
  const componentProps = {
    heroData,
  };

  return <HeroLogic {...componentProps} />;
};

export default Hero;
