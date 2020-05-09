describe('make payment', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const un = user.id
            const pw = user.password
            cy.login(un, pw)
        })
    })

        it('make a fake payment', () =>{
            cy.get('#pay_bills_tab').click()
            cy.contains('Pay Saved Payee').click()
            cy.get('#sp_payee').select('Bank of America')
            cy.get('#sp_account').select('Credit Card')
            cy.get('#sp_amount').type('200')
            cy.get('#sp_date').type("2020-05-08 {enter}")
            cy.get('#sp_description').type('description')
            cy.get('#pay_saved_payees').click()

        })

        it('validate payment message', () => {
            cy.get('#alert_content').should('contain', 'The payment was successfully submitted.')
        })


})