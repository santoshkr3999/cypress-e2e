describe('transfer funds tests', () =>{
    before(function(){
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const un = user.id
            const pw = user.password
            cy.login(un, pw)
        })
    })

    it('enter find transaction values', () =>{
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('#aa_description').type('description')
        cy.get('#aa_fromAmount').type('10')
        cy.get('#aa_toAmount').type('1000')
        cy.get('button[type="submit"]').click()
        
    })

    it('validate filtered transactions', () => {
        cy.get('tbody > tr').its('length').should('be.gt', 0)
    })

})

