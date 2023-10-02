'use client'

import { selectAccordionStatus, updateAccordionStatus } from '@/redux/features/accordion';
import React, { Children, ReactElement, cloneElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styledButton, styledContainer } from './PhoneItemStyles'


export const PhoneItemButton = ({ children }) => {
  const dispatch = useDispatch();
  const currentAccordionStatus = useSelector(selectAccordionStatus);

  const handleClick = () => {
    dispatch(updateAccordionStatus(!currentAccordionStatus))
  }

  const RenderChildren = () => (
    React.Children.map(children, child => {
      return React.cloneElement(child, {
        onClick: handleClick,
      })
    })
  )

  return (
    <div>
      {<RenderChildren />}
    </div>
  )
}

// export const PhoneItemText = ({data}) => {
//   const isOn = useSelector(selectAccordionStatus)
//   return (
//     <div className={styledContainer({ visual: isOn ? 'on' : 'off' })}>
//       <p>{data?.description}</p>
//     </div>
//   )
// }

// working with replace
export const PhoneItemText = ({ renderItem }) => {
  const isOn = useSelector(selectAccordionStatus);
  const test = styledContainer({ visual: isOn ? 'on' : 'off' })

  const updated = renderItem.replace('#visual', test);

  return <div dangerouslySetInnerHTML={{ __html: updated }} />;
}

export const PhoneItemTextAlt = ({ children }) => {
  const isOn = useSelector(selectAccordionStatus);

  return (
    <div className={styledContainer({ visual: isOn ? 'on' : 'off' })}>
      {children}
    </div>
  )
}