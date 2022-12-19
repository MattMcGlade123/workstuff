import React from 'react';

import styles from './about.module.css'

const AboutLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className={styles.container}>
    {children}
  </div>
)

export default AboutLayout;