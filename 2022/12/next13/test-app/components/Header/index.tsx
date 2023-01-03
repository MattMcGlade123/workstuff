import React from "react";
import { fetchHeaderData } from "../../api";
import { headerData } from "../../mocks";
import HeaderStructure from './HeaderStructure';

const Header = async () => {
  const headerDataResult = fetchHeaderData();
  const [finalHeaderData] = await Promise.all([headerDataResult]);
  console.log('------TIME-----', Date.now())
  console.log('finalHeaderData', finalHeaderData)

  return (
    <HeaderStructure {...headerData} />
  )
}

export default Header;