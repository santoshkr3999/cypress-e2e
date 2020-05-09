describe('currency exchange tests', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const un = user.id
            const pw = user.password
            cy.login(un, pw)
        })
    })
        it('fill conversion form', () => {
            cy.get('#pay_bills_tab').click()
            cy.contains('Purchase Foreign Currency').click()
            cy.get('#pc_currency').select('Australia (dollar)')
            cy.get('#pc_amount').type('200')
            cy.get('#pc_inDollars_true').click()
            cy.get('#pc_calculate_costs').click()
        })

        it('validate conversion ammount', () => {
            cy.get('#pc_conversion_amount').should('contain', '182.03 dollar (AUD) = 200.00 U.S. dollar (USD)')
        })
})