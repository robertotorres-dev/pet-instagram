import React from 'react'
import { Button } from './stiles'

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>{children}</Button>
  )
}
