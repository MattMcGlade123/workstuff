import React, { FC } from "react";
import MainMenu from "../MainMenu";
import MiniBag from "../MiniBag";
import styles from './header.module.css'

interface HeaderStrutureProps {
  logo: string,
}

const HeaderStructure: FC<HeaderStrutureProps> = ({ logo }) => {
  return (
    <header className={styles.container}>
      <div className={styles.top}>
        <img src={logo} />
        <MiniBag />
      </div>
      {/* @ts-expect-error Server Component */}
      <MainMenu />
    </header>
  )
}

export default HeaderStructure;