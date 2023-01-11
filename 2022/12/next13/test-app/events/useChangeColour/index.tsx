'use client'
import React from "react";
import { useDispatch } from "react-redux";
import { updateImageNumber } from "../../store/features/pdp";

const useChangeColour = () => {
  const dispatch = useDispatch()
  const handleUpdate = (newNumber: number) => {
    dispatch(updateImageNumber(newNumber))

  }
  return [handleUpdate]
}

export default useChangeColour;