/// <reference types="cypress" />

describe('Checkout', () => {
  it('Case #1', () => {
    cy.visit('/');
    cy.contains('Small Pizza').click();
    cy.contains('Add').click();
    cy.contains('Medium Pizza').click();
    cy.contains('Add').click();
    cy.contains('Large Pizza').click();
    cy.contains('Add').click();
    cy.get('#totalPrice').should('contain', '49.97')
  })

  it('Case #2', () => {
    cy.visit('/');
    cy.contains('Small Pizza').click();
    cy.contains('+').click().click();
    cy.contains('Add').click();    

    cy.contains('Large Pizza').click();
    cy.contains('Add').click();
    cy.get('#totalPrice').should('contain', '57.96')
  })

  it('Case #3', () => {
    cy.visit('/');
    cy.contains('Medium Pizza').click();  
    cy.contains('+').click().click();
    cy.contains('Add').click();

    cy.contains('Large Pizza').click();
    cy.contains('Add').click();
    cy.get('#totalPrice').should('contain', '69.96')    
  })
})