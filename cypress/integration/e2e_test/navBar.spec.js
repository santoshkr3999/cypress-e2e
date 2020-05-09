describe('nav bar test', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/")
    })

    it('verify online banking', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('verify feedback', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        // cy.get('h1').should('be.visible')
    })

    it('verify homepage', () => {
        cy.get('a').contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})