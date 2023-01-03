import React from "react";
import { fetchFooterData } from "../../api";
import FooterStructure from './FooterStructure';
import { PostInterface } from '../../types'

const Footer = async () => {
  const footerDataResult = fetchFooterData();
  const [finalFooterData] = await Promise.all([footerDataResult]);
  const perChunk = 4;
  console.log('finalFooterData', finalFooterData)

  const result = finalFooterData.reduce((resultArray : PostInterface[], item: PostInterface, index: number) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  const list1 = result[1];
  const list2 = result[2];

  return (
    <FooterStructure list1={list1} list2={list2} />
  )
}

export default Footer;