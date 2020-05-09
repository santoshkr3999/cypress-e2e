describe('forgot password steps', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/")
    })

    it('click on sign in button', () => {
        cy.get('#signin_button').click()
    })

    it('click on forgot password', () => {
        cy.get('.offset3 > a').click()
        
    })

    it('fill email form', () =>{
        cy.get('#user_email').type('test@email.com')
    })

    it('should submit the form', () => {
        cy.contains('Send Password').click()
    })
})