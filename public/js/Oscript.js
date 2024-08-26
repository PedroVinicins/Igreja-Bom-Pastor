import { database } from './config.js';
import { ref, push } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.text');
    const submitButton = document.querySelector('input[type="button"]');

    submitButton.addEventListener('click', function() {
        const text = textarea.value.trim();

        if (text) {
            const precesRef = ref(database, 'Preces');
            push(precesRef, {
                prece: text,
            }).then(() => {
                alert('Prece enviada com sucesso!');
                textarea.value = ''; // Limpa o campo de texto após o envio
            }).catch((error) => {
                console.error('Erro ao enviar a prece:', error);
                alert('Ocorreu um erro. Tente novamente.');
            });
        } else {
            alert('Por favor, preencha o campo de prece.');
        }
    });
});