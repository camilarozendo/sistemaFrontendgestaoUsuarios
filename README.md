# Requisitos

    1. Sistema deve ser escrito utilizando React AdminLinks to an external site.
    2. Deve conter testes de sistema utilizando Cypress:
        2.1. Listagem de usuários
            2.1.1. Validar que a mensagem "No users yet." é exibido quando não existir nenhum usuário no banco de dados
            2.1.2. Validar se um usuário está sendo listado
        2.2. Criar um novo usuário
            2.2.1. Validar a criação de um novo usuário no banco de dados (este cenário deve considerar o preenchimento do formulário de cadastro e depois clicar no botão "Save")
            2.2.2. Validar a criação de um novo usuário no banco de dados (este cenário deve considerar o preenchimento do formulário de cadastro e depois apertar "Enter" para enviar os dados)
        2.3. Editar um usuário
            2.3.1. Validar a edição de um usuário existente no banco de dados
            2.3.2. Cancelar a edição de um usuário depois de preencher o formulário e clicar no botão "Save"
        2.4. Remover um usuário
            2.4.1. Validar a remoção de um usuário no banco de dados
            2.4.2. Cancelar a remoção de um usuário depois de clicar no botão "Delete"