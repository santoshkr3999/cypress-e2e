describe('login and logout test', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click()
    })


    it('login with invalid data', () => {
        cy.get('#user_login').type('invalidID')
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })

    it('login successfully', () => {
        cy.fixture('user').then(user =>{
            const userName = user.id
            const pwd = user.password
            cy.get('#user_login').type(userName)
            cy.get('#user_password').type(pwd)
            cy.contains('Sign in').click()
        })
        cy.get('ul.nav-tabs').should('be.visible')
    })

    // it('log out successfully', () => {

    // })
})