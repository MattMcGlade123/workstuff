import { testWrapper } from './PhoneItemStyles'
import { PhoneItemButton, PhoneItemText } from './PhoneItemClient'


const TestStructure = ({ data }) => {
  return (
    <div className={testWrapper}>
      <p>{data?.title}</p>
      <div>
        <img src={data?.images[0]} />
        <PhoneItemButton />
        <PhoneItemText data={data} />
      </div>
    </div>
  )
}
export default TestStructure