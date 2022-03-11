import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ActionButton } from '../../../components/ui/ActionButton'

const handleOnClickFn = jest.fn()

describe('ActionButton', () => {
  it('rendering successfully', () => {
    const buttonText = 'test button'
    render(<ActionButton handleOnClick={handleOnClickFn}>{buttonText}</ActionButton>)

    expect(screen.getByText(buttonText)).toBeDefined()

    userEvent.click(screen.getByText(buttonText))
    expect(handleOnClickFn).toHaveBeenCalled()
  })

  it('set disabled flag to true', () => {
    const buttonText = 'test button'
    render(
      <ActionButton disabled={true} handleOnClick={handleOnClickFn}>
        {buttonText}
      </ActionButton>
    )
    expect(screen.getByText(buttonText)).toBeDisabled()
  })
})
