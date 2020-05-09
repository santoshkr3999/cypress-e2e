describe('feedback test', () => {
    before(function (){
        cy.visit("http://zero.webappsecurity.com/")
    })

    it('enter feedback details and click on send', () =>{
        cy.contains('Feedback').click()
        cy.get('#name').type('name')
        cy.get('#email').type('email1@email.com')
        cy.get('#subject').type('subject')
        cy.get('#comment').type('what is my question?')
        cy.contains('Send Message').click()
    })
})