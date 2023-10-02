import Test from '../../components/basic/Test'
import Test2 from '../../components/basic/Test2'
import { css } from '../../styled-system/css'

export default function Page() {
  return (
    <div>
      <h1 className={css({ color: 'text' })}>Hello World</h1>
      <Test />
      <Test2 />
    </div>
  )
}