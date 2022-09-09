describe('Pet instagram', () => {
  it('Para ver si la app funciona!', () => {
    cy.visit('/')
  })

  it('navegamos a una categría y vemos fotos', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })
})
