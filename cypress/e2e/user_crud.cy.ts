describe('User CRUD', () => {
  
  beforeEach(() => {
    cy.task('db:erase');
    cy.visit('http://localhost:3000');
  });
  
  it('Deve listar todos os usuários', () => {
    cy.task('db:create', {
      name: 'Camila Rozendo',
      email: 'camilarozendo@hotmail.com',
      password: '123456'
    });
    cy.contains('Camila Rozendo');
  });

  it('Deve criar um novo usuário', () => {
    cy.get('.RaCreateButton-root').click();
    cy.get('#name').type('Camila Rozendo');
    cy.get('#email').type('camilarozendo@hotmail.com');
    cy.get('#password').type('123456');
    cy.get('.RaToolbar-defaultToolbar > .MuiButtonBase-root').click();
    cy.contains('Element created');
    cy.visit('http://localhost:3000');
    cy.contains('Camila Rozendo');
  });

  it('Deve remover um usuário', () => {
    cy.task('db:create', {
      name: 'Camila Rozendo',
      email: 'camilarozendo@hotmail.com',
      password: '123456'
    });
    cy.get('.MuiTableBody-root > :nth-child(1)').click();
    cy.get('.ra-delete-button').click();
    cy.contains('Element deleted');
  });

  it('Deve atualizar um usuário', () => {
    cy.task('db:create', {
      name: 'Camila Rozendo',
      email: 'camilarozendo@hotmail.com',
      password: '123456'
    });    
    cy.get('.MuiTableBody-root > :nth-child(1)').click();
    cy.get('#name').clear().type('Camila Rozendo Silva');
    cy.get('#email').clear().type('camilarozendo@hotmail.com');
    cy.get('#password').clear().type('123456');
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click();
    cy.contains('Element updated');
    cy.contains('Camila Rozendo Silva');
  });
});