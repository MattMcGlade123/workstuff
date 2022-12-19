import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { changeTest } from '../store'
import { pushStateToStorage } from '../utils'

const format = (t) => t.toJSON().slice(11, 19) // cut off except hh:mm:ss

export default function Clock() {
  const lastUpdate = useSelector((state) => state.lastUpdate)
  const light = useSelector((state) => state.light)
  const currentTestValue = useSelector((state) => state.mattItem)
  const dispatch = useDispatch()
  const [localTest, setLocalBasic] = useState();

  pushStateToStorage(currentTestValue)
  // useEffect(() => {

  // },[]);

  const handleClick = () => {
    setLocalBasic(!localTest)
    dispatch(changeTest({
      basic: !localTest
    }))
  }

  return (
    <div className={light ? 'light' : ''}>
      {/* {format(new Date(lastUpdate))} */}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
      <button type='button' onClick={() => handleClick()}>Update test value</button>
      <div>{currentTestValue.basic ? (
        <p>This is on</p>
      )
        :
        (<p>This is off</p>)
      }</div>
    </div>
  )
}
