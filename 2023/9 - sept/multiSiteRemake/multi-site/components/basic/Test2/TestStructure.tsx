
import { vstack } from '../../../styled-system/patterns'
import { testWrapper, button } from './Test2Styles'

const TestStructure = ({ data }) => (
  <div className={testWrapper}>
    <p>TEST2</p>
    <p>{data?.description}</p>
    <div className={vstack({ gap: '6' })}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
    <button className={button({ visual: 'outline', size: 'lg' })}>
      Click Me
    </button>
  </div>
)
export default TestStructure