import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ActionButton } from '../ui/ActionButton'
import { useShopping } from '../../store/shoppingContext'
import { ShoppingCart } from '../../types/pizza'

export const Cart: React.FC = () => {
  const {
    state: { shoppingCart },
    dispatch,
  } = useShopping()
  const [total, setTotal] = useState<number | undefined>(0)

  useEffect(() => {
    if (shoppingCart.length) {
      const priceArr = shoppingCart.map((item: ShoppingCart) => item.price)
      const total = priceArr.reduce((a, b) => a! + b!)
      setTotal(total)
    }
  }, [shoppingCart])

  const handleRemoveProduct = (key: number) => {
    dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', index: key })
  }

  const emptyCart = () => {
    dispatch({ type: 'EMPTY_PRODUCT_FROM_CART' })
  }

  const ShoppingCartList = () => {
    if (!shoppingCart.length) {
      return <Message>No items in your basket</Message>
    }

    const bottomText = (item: ShoppingCart) => {
      const toppings = item.toppings?.map((e) => e.name).join(', ')
      return `${item.size?.name} ${toppings ? ', ' + toppings : ''}`
    }

    return (
      <>
        {shoppingCart.map((item, key) => (
          <div key={`shoppingCartList${key}`}>
            <TopRow>
              <CloseButton onClick={() => handleRemoveProduct(key)}>X</CloseButton>
              <span>1 x {item.name}</span>
              <span>${item.price}</span>
            </TopRow>
            <BottomRow>{bottomText(item)}</BottomRow>
          </div>
        ))}
      </>
    )
  }

  return (
    <Container>
      <Wrapper>
        <ListWrapper>
          <ShoppingCartList />
        </ListWrapper>
        <Hr />
        <Total>
          <span>Total</span>
          <Money>${total}</Money>
        </Total>
        <ActionButton styles={{ margin: '0 auto' }} disabled={shoppingCart.length <= 0}>
          Checkout
        </ActionButton>
      </Wrapper>
      <ActionButton
        handleOnClick={() => emptyCart()}
        styles={{ background: 'white', border: '1px solid lightgrey', marginTop: '1rem' }}
      >
        Empty Basket
      </ActionButton>
    </Container>
  )
}

const Message = styled.div`
  text-align: center;
  font-size: 1.4rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Wrapper = styled.div`
  background: WhiteSmoke;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  font-size: 1.4rem;
`
const ListWrapper = styled.div`
  margin-bottom: 1.5rem;
`
const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`
const CloseButton = styled.button`
  border-radius: 50%;
`

const BottomRow = styled.div`
  text-align: center;
  color: dimgray;
`

const Hr = styled.div`
  border: none;
  border-top: 1px dotted black;
  margin-bottom: 1rem;
`

const Total = styled.div`
  font-weight: 700;
  text-align: right;
  margin-bottom: 4rem;
`

const Money = styled.span`
  margin-left: 2rem;
`
