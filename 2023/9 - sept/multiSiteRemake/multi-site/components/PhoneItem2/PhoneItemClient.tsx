'use client'

import { selectAccordionStatus, updateAccordionStatus } from '@/redux/features/accordion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styledButton, styledContainer } from './PhoneItemStyles'


export const PhoneItemButton = () => {
  const dispatch = useDispatch();
  const currentAccordionStatus = useSelector(selectAccordionStatus);

  const handleClick = () => {
    dispatch(updateAccordionStatus(!currentAccordionStatus))
  }

  return (
    <button className={styledButton({ visual: 'solid', size: 'lg' })} onClick={() => handleClick()}>More details</button>
  )
}

export const PhoneItemText = ({data}) => {
  const isOn = useSelector(selectAccordionStatus)
  return (
    <div className={styledContainer({ visual: isOn ? 'on' : 'off' })}>
      <p>{data?.description}</p>
    </div>
  )
}