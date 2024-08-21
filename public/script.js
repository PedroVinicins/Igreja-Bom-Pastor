import { database } from './config.js';

document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências aos elementos do formulário
    const nameInput = document.querySelector('.nome');
    const emailInput = document.querySelector('.email');
    const submitButton = document.querySelector('input[type="button"]');

    // Adiciona um evento de clique ao botão de cadastro
    submitButton.addEventListener('click', function() {
        // Obtém os valores dos campos do formulário
        const name = nameInput.value;
        const email = emailInput.value;

        if (name && email) {
            // Envia os dados para o Firebase Realtime Database
            const newEntryRef = ref(database, 'cadastros');
            set(newEntryRef.push(), {
                nome: name,
                email: email
            }).then(() => {
                alert('Cadastro realizado com sucesso!');
                // Limpa os campos do formulário
                nameInput.value = '';
                emailInput.value = '';
            }).catch((error) => {
                console.error('Erro ao cadastrar:', error);
                alert('Erro ao realizar cadastro. Tente novamente.');
            });
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
