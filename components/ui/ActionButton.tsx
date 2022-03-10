import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
  handleOnClick?: MouseEventHandler
  styles?: React.CSSProperties
  disabled?: boolean
}

export const ActionButton: React.FC<Props> = ({
  children,
  handleOnClick,
  styles,
  disabled = false,
}) => {
  return (
    <CardButton style={styles} onClick={handleOnClick} disabled={disabled}>
      {children}
    </CardButton>
  )
}

const CardButton = styled.button`
  width: 25rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border: 0;
  border-radius: 1.2rem;
  background-color: ${(props) => (!props.disabled ? 'Silver' : 'Gainsboro')};
  font-size: 1.6rem;
  color: black;
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
`
