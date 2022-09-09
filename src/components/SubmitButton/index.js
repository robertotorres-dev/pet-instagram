import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './stiles'

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>{children}</Button>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  oncCick: PropTypes.func
}
