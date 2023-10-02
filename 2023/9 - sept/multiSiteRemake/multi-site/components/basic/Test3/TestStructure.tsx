'use client'
import { styledButton, styledContainer } from './TestStyles'


const TestStructure = ({ data, clientProps: { isOn, handleClick } }) => {
  return (
    <div>
      <p>{data?.title}</p>
      <button className={styledButton({ visual: 'solid', size: 'lg' })} onClick={() => handleClick()}>Testing</button>
      <div className={styledContainer({ visual: isOn ? 'on' : 'off' })}>
        <p>{data?.description}</p>
      </div>
    </div>
  )
}
export default TestStructure