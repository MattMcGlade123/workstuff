import { Suspense } from "react";
import Container from "../../../components/Container";
// import {StyledTitle} from './dataFetchSubStyles'

const dataFetchSub = () => {
  return (
    <>
      <h1>dataFetchSub page</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <Container />
      </Suspense>
    </>
  )
}

export default dataFetchSub;