import { css } from '../../../styled-system/css';

const testWrapper = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px'
})

const TestStructure = ({ data }) => (
  <div className={testWrapper}>
    <p>TEST2</p>
    <p>{data?.description}</p>
  </div>
)
export default TestStructure