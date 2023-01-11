import Column from '../../components/Column';
import ProductImage from '../../components/ProductImage';
import DataFetchWrapper from '../../wrappers/DataFetchWrapper';
import ReduxWrapper from '../../wrappers/ReduxWrapper';
import styles from './pdp.module.css'

const PdpPage = () => {
  return (
    <>
      <div className={styles.container}>
        {/* @ts-expect-error Server Component */}
        <ReduxWrapper>
          <DataFetchWrapper>
            <ProductImage />
          </DataFetchWrapper>
          <Column />
        </ReduxWrapper>
      </div>
    </>
  )
}

export default PdpPage;
