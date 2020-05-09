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

    it('fill transfer fund form', () => {
        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('4')
        cy.get('#tf_amount').type('100')
        cy.get('#btn_submit').click()
    })

    it('verify transfer fund form', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Checking')
        cy.get('#tf_toAccountId').should('have.value', 'Loan')
        cy.get('#tf_amount').should('have.value', '100')
    })
})