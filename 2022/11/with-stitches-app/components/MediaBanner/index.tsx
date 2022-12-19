import React, { FC, useEffect } from 'react';
import MediaBannerStructure from './MediaBannerStructure';

const MediaBanner = ({
}) => {
  const pageName = 'TestPage';

  const componentProps = {
    backgroundImage: {
      alt: "",
      mediaList: {
        desktop: {
          __typename: "ImgDetails",
          src: "https://kg-static.s3.eu-west-1.amazonaws.com/assets/shoeaholics/03_Inline_Ads/15.11.22/SAH_BF-PLPBanner_60-D.jpg",
          width: 1920,
          height: 400
        },
        mobile: {
          __typename: "ImgDetails",
          src: "https://kg-static.s3.eu-west-1.amazonaws.com/assets/shoeaholics/03_Inline_Ads/15.11.22/SAH_BF-PLPBanner_60-M.jpg",
          width: 640,
          height: 480
        },
        tablet: null
      },
      defaultImageUrl: "https://kg-static.s3.eu-west-1.amazonaws.com/assets/shoeaholics/03_Inline_Ads/15.11.22/SAH_BF-PLPBanner_60-D.jpg",
      type: "next-image"
    },
    subtitle: "Capsule wardrobe essentials to treat yourself pieces, these are the finishing touches you need for your seasonal shoe rotation.",
    title: "Women's Shoes",
    titleImage: null,
    pageName,
    colourTheme: "LIGHT",
    moduleIndex: 0,
    animate: false,
    fontSize: "SMALL",
    headerHeight: 43,
    reload: true,
    backgroundColour: "transparent",
  };

  return <MediaBannerStructure {...componentProps} />;
};

export default MediaBanner;
