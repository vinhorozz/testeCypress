describe('template spec', () => {
  it('teste de login correto', () => {
    cy.visit('http://127.0.0.1:5500/Cypress-teste/index.html');

    cy.get('#user').type('flavio@vinho.com');
    cy.get('#password').type('1234');
    cy.get('button');
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login realizado com sucesso');
    });
    cy.get('button').click();
  });
});

describe('template spec', () => {
  it('teste de login incorreto', () => {
    cy.visit('http://127.0.0.1:5500/Cypress-teste/index.html');

    cy.get('#user').type('flavio@vinho');
    cy.get('#password').type('123454');
    cy.get('button');
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login ou senha inválidos');
    });
    
  });
});

