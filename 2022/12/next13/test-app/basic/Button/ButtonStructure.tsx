import React, { FC } from "react";
import ButtonProps from './'

const ButtonStructure: FC<ButtonProps> = ({ clickTrigger, clickParams, text }) => {
  return (
    <button type="button" onClick={() => clickTrigger(clickParams)}>
      {text}
    </button>
  )
}

export default ButtonStructure;