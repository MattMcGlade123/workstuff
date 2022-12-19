import React from 'react';

import styles from './dataFetch.module.css'
import ColumnData from '../../components/ColumnData';
import { fetchUser } from '../../api';

const ProdsLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const profileData = fetchUser(1)
  const [profileDateResult] = await Promise.all([profileData]);
  return (
    <div className={styles.container}>
      <ColumnData profileData={profileDateResult} />
      {children}
    </div>
  )
}

export default ProdsLayout;