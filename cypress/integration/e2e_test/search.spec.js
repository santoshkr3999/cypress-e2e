describe('search box test', () => {
    before(function(){
        cy.visit("http://zero.webappsecurity.com/")
    })

    it('enter a text in search', () => {
        cy.get('#searchTerm').type('some text {enter}')
    })

    it('should show search resultrs page', () => {
        cy.get('h2').contains('Search Results:')
    })
})
