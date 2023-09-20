'use client'


const TestStructure = ({ handleClick, isOn, finalData }) => (
  <div>
    <button type="button" onClick={() => handleClick()}>Click ME</button>
    <p>TEST</p>
    {isOn && (<>
      <p>{finalData?.description}</p>
    </>)}
  </div>
)
export default TestStructure