'use client'
import { styledButton, styledContainer, testWrapper } from './PhoneItemStyles'


const TestStructure = ({ data, clientProps: { isOn, handleClick } }) => {
  return (
    <div className={testWrapper}>
      <p>{data?.title}</p>
      <div>
        <img src={data?.images[0]} />
        <button className={styledButton({ visual: 'solid', size: 'lg' })} onClick={() => handleClick()}>More details</button>
        <div className={styledContainer({ visual: isOn ? 'on' : 'off' })}>
          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  )
}
export default TestStructure