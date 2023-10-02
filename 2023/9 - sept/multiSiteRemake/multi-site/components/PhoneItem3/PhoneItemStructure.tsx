import { PhoneItemButton, PhoneItemText, PhoneItemTextAlt } from './PhoneItemClient'
import { styledButton, styledContainer, testWrapper } from './PhoneItemStyles'


const TestStructure = ({ data }) => {
  return (
    <div className={testWrapper}>
      <p>{data?.title}</p>
      <div>
        <img src={data?.images[0]} />
        {/* <PhoneItemButton /> */}
        <PhoneItemButton>
          <button className={styledButton({ visual: 'solid', size: 'lg' })}>More details</button>
        </PhoneItemButton>
        <PhoneItemText data={data}
          renderItem={`
          <div class="#visual">
              <p>${data?.description}</p>
            </div>
          `}
        />
        <PhoneItemTextAlt>
          <p>{data?.description}</p>
        </PhoneItemTextAlt>
      </div>
    </div>
  )
}
export default TestStructure