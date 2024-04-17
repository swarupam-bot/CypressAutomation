/// <reference types='cypress'/>

describe('Perfoming Actions',()=>{
  it('Fill Registation Form',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    sendValueTextbox('input[name="username"]','Admin')
    sendValueTextbox('input[name="password"]','admin123')
    clickOnButton('button[type="submit"]')

    cy.get('span[class*="main-menu-item"]').each((element) => {

      if(element.text()==='PIM')
      {
        cy.wrap(element).click();
      }
      
    })

    cy.get('[class*="nav-tab-item"]').each((ele)=>
    {
      if(ele.text()==='Add Employee')
      {
        cy.wrap(ele).click();
      }

    })

    sendValueTextbox('[name="firstName"]','Nea')
    sendValueTextbox('[name="lastName"]','Logan')
    clickOnButton('[type="submit"]')


  })
})

function sendValueTextbox(ele,text)
{
  cy.get(ele).should('be.visible').type(text).should('have.value',text)

}
function clickOnButton(ele)
{
  cy.get(ele).should('be.enabled').click();
}