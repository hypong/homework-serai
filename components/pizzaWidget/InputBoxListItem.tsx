import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'
import styled from 'styled-components'

export const InputBoxListItem: React.FC<{
  text: string
  handleOnChange: ChangeEventHandler
  selected: boolean
  checkBoxType: HTMLInputTypeAttribute
}> = ({ text, handleOnChange, selected, checkBoxType }) => {
  return (
    <Container>
      <CheckBox type={checkBoxType} checked={selected} onChange={handleOnChange}></CheckBox>
      <Name className="column">{text}</Name>
    </Container>
  )
}

const CheckBox = styled.input`
  margin: 6px 10px 5.8px 3px;
  float: left;
`
const Container = styled.div`
  margin-top: 2px;
  overflow: auto;
`
const Name = styled.p`
  padding-bottom: 1px;
  font-size: 15px;
`
