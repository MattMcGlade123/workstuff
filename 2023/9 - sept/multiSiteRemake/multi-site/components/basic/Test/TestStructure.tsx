'use client'

import { styledButton, styledContainer } from './TestStyles'

const TestStructure = ({ handleClick, isOn, finalData }) => (
  <div>
    <button className={styledButton({ visual: 'outline', size: 'lg' })} type="button" onClick={() => handleClick()}>Click ME</button>
    <p>TEST</p>
    <div className={styledContainer({ visual: isOn ? 'on' : 'off'})}>
      <p>{finalData?.description}</p>
    </div>
  </div>
)
export default TestStructure