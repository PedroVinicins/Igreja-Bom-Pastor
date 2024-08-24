import { database } from './config.js';
import { ref, push } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.text');
    const submitButton = document.querySelector('input[type="button"]');
    
    submitButton.addEventListener('click', function() {
        const text = textarea.value.trim();

        if (text) {
            // Cria uma referência para o nó 'cadastros'
            const newEntryRef = ref(database, 'cadastros');

            // Adiciona um novo cadastro com os dados do formulário
            push(newEntryRef, {
                preces: text,
            }).then(() => {
                alert('Preces enviadas com sucesso');
                textarea.value = '';
            }).catch((error) => {
                console.error('Erro:', error);
                alert('Tente novamente.');
            });
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
