import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useShopping } from '../../store/shoppingContext'
import { Pizza } from '../../types/pizza'
import { ActionButton } from '../ui/ActionButton'

export interface Props {
  pizza: Pizza
}

export const PizzaCard: React.FC<Props> = ({ pizza }) => {
  const { state, dispatch } = useShopping()
  const handleButtonClick = (): void => {
    dispatch({ type: 'SET_MODAL_PRODUCT', product: pizza })
  }

  return (
    <CardWrapper>
      <ImgWrapper>
        <Image src={pizza.img} alt={pizza.name} layout="responsive" width="253" height="169" />
      </ImgWrapper>
      <CardName>
        {pizza.name} - ${pizza.price}
      </CardName>
      <ActionButton handleOnClick={() => handleButtonClick()}>test</ActionButton>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 28rem;
  padding: 1.5rem;
  border: solid 0.2rem lightgrey;
  border-radius: 1.6rem;
`

const ImgWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 1.6rem;
`

const CardName = styled.div`
  font-size: 1.6rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`
