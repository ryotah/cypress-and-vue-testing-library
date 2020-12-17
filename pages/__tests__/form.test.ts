import { fireEvent, screen, cleanup, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import flushPromises from 'flush-promises'
import FormPage from '@/pages/form.vue'

import { setupVeeValidate } from '~/plugins/validator'

describe('Form', () => {
  beforeEach(() => {
    render(FormPage, undefined, () => {
      setupVeeValidate()
    })
  })

  afterEach(() => {
    cleanup()
  })

  it('should work', async () => {
    // Submit
    await fireEvent.click(screen.getByText('Submit'))
    await flushPromises()
    screen.getByText('E-mail is not valid.')
    screen.getByText('First Name is not valid.')
    screen.getByText('Last Name is not valid.')

    // Update
    await fireEvent.update(screen.getByTestId('email'), 'foo@bar.com')
    await fireEvent.update(screen.getByTestId('first-name'), 'Foo')
    await fireEvent.update(screen.getByTestId('last-name'), 'Bar')
    await flushPromises()
    expect(screen.queryByText('E-mail is not valid.')).toBeNull()
    expect(screen.queryByText('First Name is not valid.')).toBeNull()
    expect(screen.queryByText('Last Name is not valid.')).toBeNull()

    // Submit again
    await fireEvent.click(screen.getByText('Submit'))
    await flushPromises()
    screen.getByText('Submitted! foo@bar.com')
  })
})
