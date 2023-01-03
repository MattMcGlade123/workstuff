import React, { FC } from "react";
import styles from './footer.module.css';
import { PostInterface } from '../../types'

interface FooterProps {
  list1: PostInterface[],
  list2: PostInterface[]
}

const FooterStructure: FC<FooterProps> = ({ list1, list2 }) => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li><h4>Title 1</h4></li>
        {list1.map((thisItem) => (
          <li key={thisItem.id}><a href="http://www.google.com">{thisItem.title}</a></li>
        ))}
      </ul>

      <ul>
        <li><h4>Title 2</h4></li>
        {list2.map((thisItem) => (
          <li key={thisItem.id}><a href="http://www.google.com">{thisItem.title}</a></li>
        ))}
      </ul>
    </footer>
  )
}

export default FooterStructure;