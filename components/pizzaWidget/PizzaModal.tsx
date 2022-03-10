import React, { useState } from 'react'
import styled from 'styled-components'
import { useShopping } from '../../store/shoppingContext'
import { Modal, Button } from 'react-bootstrap'
import { isEmpty, find, cloneDeep } from 'lodash'
import { PizzaData, PizzaTopping, PizzaSize } from '../../types/pizza'
import { InputBoxListItem } from './InputBoxListItem'
import { ActionButton } from '../ui/ActionButton'

interface Props {
  toppings: PizzaData['toppings']
  size: PizzaData['size']
}

export const PizzaModal = React.memo<Props>(function PizzaModal({ toppings = [], size = [] }) {
  const {
    state: { modalProduct },
    dispatch,
  } = useShopping()
  const [toppingSelections, setToppingSelections] = useState<PizzaTopping[] | []>([])
  const [sizeSelections, setSizeSelections] = useState<PizzaSize | undefined>(undefined)

  const handleClose = () => {
    dispatch({ type: 'SET_MODAL_PRODUCT', product: {} })
    setToppingSelections([])
    setSizeSelections(undefined)
  }
  const handleAddClick = () => {
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      shoppingCart: {
        ...modalProduct,
        toppings: toppingSelections,
        size: sizeSelections!,
      },
    })
    handleClose()
  }

  const handleCheckboxChange = (item: PizzaTopping): void => {
    let sel: PizzaData['toppings'] = cloneDeep(toppingSelections)
    const find = sel.findIndex((object) => {
      return object.id === item.id
    })
    if (find > -1) {
      sel.splice(find, 1)
    } else {
      sel.push(item)
    }
    setToppingSelections(sel)
  }

  const ToppingsList = () => {
    return (
      <>
        {toppings.map((item, key) => (
          <InputBoxListItem
            key={`ToppingListItem${key}`}
            text={item.name}
            handleOnChange={() => handleCheckboxChange(item)}
            selected={find(toppingSelections, item) ? true : false}
            checkBoxType="checkbox"
          ></InputBoxListItem>
        ))}
      </>
    )
  }

  const toggleOption = (item: PizzaSize): void => {
    setSizeSelections(item)
  }

  const SizeLits = () => {
    return (
      <>
        {size.map((item, key) => (
          <InputBoxListItem
            key={`SizeListItem${key}`}
            text={item.name}
            handleOnChange={() => toggleOption(item)}
            selected={sizeSelections ? (sizeSelections!.id === item.id ? true : false) : false}
            checkBoxType="radio"
          ></InputBoxListItem>
        ))}
      </>
    )
  }

  return (
    <Modal
      show={isEmpty(modalProduct) ? false : true}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
    >
      <StyledModalBody>
        <ToppingsListWrapper>
          <ToppingsList />
        </ToppingsListWrapper>
        <SizeListWrapper>
          <SizeLits />
        </SizeListWrapper>
      </StyledModalBody>
      <StyledModalFooter>
        <ActionButton handleOnClick={handleAddClick} disabled={!sizeSelections ? true : false}>
          Add to Basket
        </ActionButton>
        <ActionButton
          handleOnClick={handleClose}
          styles={{ background: 'white', border: '1px solid lightgrey' }}
        >
          Cancel
        </ActionButton>
      </StyledModalFooter>
    </Modal>
  )
})

const StyledModalBody = styled(Modal.Body)`
  padding: 2rem;
`

const ToppingsListWrapper = styled.div`
  padding: 1.5rem;
  column-count: 3;
  @media (max-width: 992px) {
    column-count: 2;
  }
  @media (max-width: 400px) {
    column-count: 1;
  }
`

const SizeListWrapper = styled.div`
  padding: 1.5rem;
  column-count: 3;
  @media (max-width: 400px) {
    column-count: 1;
  }
`

const StyledModalFooter = styled(Modal.Footer)`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem 2rem 4rem;
  border: 0;
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
`
