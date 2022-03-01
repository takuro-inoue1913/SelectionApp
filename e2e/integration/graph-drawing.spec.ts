/**
 * チェックボックスの操作でグラフが適切に表示されるか検証する
 */
describe('チェックボックスが正常に動作するか', () => {
  it('単体', () => {
    cy.visit('http://localhost:3000')
    cy.get('#北海道').click()
  })
  it('単体(on off)', () => {
    cy.visit('http://localhost:3000')
    cy.get('#北海道').click()
    cy.get('#北海道').click()
  })

  it('複数', () => {
    cy.visit('http://localhost:3000')
    cy.get('#北海道').click()
    cy.get('#秋田県').click()
    cy.get('#栃木県').click()
  })

  it('複数(on off)', () => {
    cy.visit('http://localhost:3000')
    cy.get('#北海道').click()
    cy.get('#秋田県').click()
    cy.get('#栃木県').click()
    cy.get('#北海道').click()
    cy.get('#秋田県').click()
    cy.get('#栃木県').click()
  })
})

describe('折れ線グラフが表示されるか', () => {
  // チェックボックスをON OFFすると、折れ線グラフが表示される
  it('単体', () => {
    cy.visit('http://localhost:3000')
    cy.get('#北海道').click()
    cy.get('.recharts-line').should('have.length', 1)
    cy.get('.recharts-legend-item-text').contains('北海道')
  })

  // チェックボックスをON OFFすると、折れ線グラフが表示、非表示になる
  it('単体(on off)', () => {
    cy.visit('http://localhost:3000')
    cy.get('#北海道').click()
    cy.get('.recharts-line').should('have.length', 1)
    cy.get('.recharts-legend-item-text').should('have.length', 1)
    cy.get('#北海道').click()
    cy.get('.recharts-line').should('have.length', 0)
    cy.get('.recharts-legend-item-text').should('have.length', 0)
  })

  it('複数', () => {
    cy.visit('http://localhost:3000')
    cy.get('#北海道').click()
    cy.get('#秋田県').click()
    cy.get('#栃木県').click()
    cy.get('.recharts-line').should('have.length', 3)
    cy.get('.recharts-legend-item-text').contains('北海道')
    cy.get('.recharts-legend-item-text').contains('秋田県')
    cy.get('.recharts-legend-item-text').contains('栃木県')
  })

  it('複数(on off)', () => {
    cy.visit('http://localhost:3000')
    cy.get('#北海道').click()
    cy.get('#秋田県').click()
    cy.get('#栃木県').click()
    cy.get('.recharts-line').should('have.length', 3)
    cy.get('.recharts-legend-item-text').contains('北海道')
    cy.get('.recharts-legend-item-text').contains('秋田県')
    cy.get('.recharts-legend-item-text').contains('栃木県')
    cy.get('#北海道').click()
    cy.get('.recharts-line').should('have.length', 2)
    cy.get('.recharts-legend-item-text').should('have.length', 2)
    cy.get('#秋田県').click()
    cy.get('.recharts-line').should('have.length', 1)
    cy.get('.recharts-legend-item-text').should('have.length', 1)
    cy.get('#栃木県').click()
    cy.get('.recharts-line').should('have.length', 0)
    cy.get('.recharts-legend-item-text').should('have.length', 0)
  })
})
