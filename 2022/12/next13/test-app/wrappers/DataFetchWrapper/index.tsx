import { cloneElement, FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { initStore } from '../../store';

const DataFetchWrapper: FC = ({ children }) => {
  const testData = [1,2,3]
  console.log('DataFetchWrapper')
  const clonedChild = cloneElement(children, {testData})

  return <>{clonedChild}</>;
}

export default DataFetchWrapper