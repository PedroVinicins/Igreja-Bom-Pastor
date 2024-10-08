import { database } from './config.js';
import { ref, push } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.querySelector('.nome');
    const emailInput = document.querySelector('.email');
    const submitButton = document.querySelector('input[type="button"]');

    submitButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name && email) {
            // Cria uma referência para o nó 'cadastros'
            const newEntryRef = ref(database, 'cadastros');
            push(newEntryRef, {
                nome: name,
                email: email
            }).then(() => {
                alert('Cadastro realizado com sucesso!')
                location.href='/Oraçoes.html';
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
