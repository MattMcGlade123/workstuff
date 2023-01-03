import Link from "next/link";
import React, { FC } from "react";
import { MenuProps } from '../../types'
import styles from './menu.module.css'

const MainMenuStructure: FC<MenuProps> = ({ menu }) => {
  return (
    <ul className={styles.container}>
      {menu.map((thisItem) => (
        <li key={thisItem.linkName}>
          <Link href={thisItem.href}>{thisItem.linkName}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MainMenuStructure;