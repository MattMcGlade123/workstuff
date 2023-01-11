'use client'
import React, { FC } from "react";
import ButtonStructure from './ButtonStructure';

export interface ButtonProps {
  clickTrigger?: () => void,
  clickParams?: any;
  text: string;
}

const Button: FC<ButtonProps> = ({ clickTrigger, clickParams, text }) => {
  const [clickEvent] = clickTrigger();
  return (
    <ButtonStructure clickTrigger={clickEvent} clickParams={clickParams} text={text} />
  )
}

export default Button;