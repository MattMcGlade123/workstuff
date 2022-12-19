import { useEffect } from 'react'
import { set, get } from 'local-storage';
import { useDispatch } from 'react-redux'
import { startClock, serverRenderClock, initializeStore, changeTest } from '../store'
import Examples from '../components/examples';
import { fetchStateToStorage, pushStateToStorage, storageName } from '../utils/index';

const Index = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   setInterval(() => dispatch(startClock()), 1000)
  // }, [dispatch])


  return <Examples />
}

export const getServerSideProps = async () => {
  const testValue = fetchStateToStorage()
  const store = initializeStore()
  store.dispatch(serverRenderClock())
  store.dispatch(changeTest({
    basic: true
  }))
  // const storeData = store.getState();
  // console.log('storeData', storeData)

  return {
    props: {},
  }
}

export default Index
