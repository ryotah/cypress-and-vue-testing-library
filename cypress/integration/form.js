/* eslint-disable no-undef */

describe('Form', () => {
  it('should work', () => {
    cy.visit('/form')

    // Submit
    cy.findByText('Submit').click()
    cy.findByText('E-mail is not valid.')
    cy.findByText('First Name is not valid.')
    cy.findByText('Last Name is not valid.')

    // Update
    cy.findByTestId('email').type('foo@bar.com')
    cy.findByTestId('first-name').type('Foo')
    cy.findByTestId('last-name').type('Bar')

    // Submit again
    cy.findByText('Submit').click()
    cy.findByText('Submitted! foo@bar.com')
  })
})
