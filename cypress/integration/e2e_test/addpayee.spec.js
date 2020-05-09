describe('add payee', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const un = user.id
            const pw = user.password
            cy.login(un, pw)
            // cy.get('#user_login').type(un)
            // cy.get('#user_password').type(pw)
            // cy.contains('Sign in').click()

        })
    })

    it('add a new payee', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('name')
        cy.get('#np_new_payee_address').type('address')
        cy.get('#np_new_payee_account').type('832476348763')
        cy.get('#np_new_payee_details').type('payee details')
        cy.get('#add_new_payee').click()
        cy.get('#alert_content').should('be.visible').and('contain', 'The new payee name was successfully created.')
    })

})