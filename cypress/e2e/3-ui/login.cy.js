/// <reference types="cypress" />

describe('[US-0001]: Tela de login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('henriqueiago777@gmail.com')
        cy.get('#password').type('iago100565@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'henriqueiago777')
    });

    it('Deve adicionar itens ao carrinho com sucesso', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.page-title').should('be.visible')
        
    
   }); 
});