import React from "react";
import MainMenuStructure from './MainMenuStructure';
import { headerData } from '../../mocks'
import { fetchMenuData } from "../../api";

const MainMenu = async () => {
  const menuDataResult = fetchMenuData();
  const [finalMenuData] = await Promise.all([menuDataResult]);
  console.log('------TIME-----', Date.now())
  console.log('finalMenuData', finalMenuData)

  const menuData = headerData.menu
  return (
    <MainMenuStructure menu={menuData} />
  )
}

export default MainMenu;
