<reference types="cypress" />

describe('Product list', () => {
  it('Should has 3 products', () => {
    cy.visit('/');
    cy.contains('Small Pizza');
    cy.contains('Medium Pizza');
    cy.contains('Large Pizza');
  })

  it('Should show the quantiy adjustment panel', () => {
    cy.visit('/');
    cy.contains('Small Pizza').click();    
    cy.contains('Cancel');
    cy.contains('Add').click();
    cy.contains('Checkout')
  })
})