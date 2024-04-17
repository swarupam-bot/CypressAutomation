/// <reference types="cypress"/>

describe('AmazonHomePage',()=>{
  beforeEach('openBrowser',()=>{
    cy.visit('https://www.amazon.in/')
  })
  it('verifyHomePage',()=>{
    
    cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')

  })

  it('searchIphone',()=>{

    cy.get('input#twotabsearchtextbox').type('iPhone 13')

    let searchBtn=cy.get('input[type="submit"]')
    searchBtn.click();
    //
    //cy.scrollTo('bottom')
    cy.get('span[class="action-inner"]').click();

  })
 
})