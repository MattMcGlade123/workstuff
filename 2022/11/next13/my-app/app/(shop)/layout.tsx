import React from 'react';

import styles from './prods/prods.module.css'
import Column from '../../components/Column';

const ProdsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className={styles.container}>
    <Column />
    {children}
  </div>
)

export default ProdsLayout;