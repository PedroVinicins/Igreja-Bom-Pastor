import { database } from './config.js';
import { ref, push } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.text');
    const submitButton = document.querySelector('input[type="button"]');
    const eventList = document.getElementById('event-list');

    // Envio da prece para o Firebase
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

    // Função para adicionar um novo evento e salvar no Firebase
    function adicionarEvento() {
        const nomeEvento = prompt("Digite o nome do evento:");

        if (nomeEvento) {
            const eventosRef = ref(database, 'Eventos');
            
            push(eventosRef, {
                nome: nomeEvento,
            }).then(() => {
                const eventoDiv = document.createElement('div');
                eventoDiv.classList.add('evento');
                
                const tituloEvento = document.createElement('h3');
                tituloEvento.textContent = nomeEvento;
                
                const comentarioDiv = document.createElement('div');
                comentarioDiv.classList.add('comentarios');
                
                const botaoComentar = document.createElement('button');
                botaoComentar.textContent = "Comentar";
                botaoComentar.onclick = function() {
                    const comentario = prompt("Digite seu comentário:");
                    if (comentario) {
                        const comentarioP = document.createElement('p');
                        comentarioP.textContent = comentario;
                        comentarioDiv.appendChild(comentarioP);
                    }
                };
                
                eventoDiv.appendChild(tituloEvento);
                eventoDiv.appendChild(comentarioDiv);
                eventoDiv.appendChild(botaoComentar);
                
                eventList.appendChild(eventoDiv);
                
                alert('Evento adicionado com sucesso!');
            }).catch((error) => {
                console.error('Erro ao adicionar o evento:', error);
                alert('Ocorreu um erro ao adicionar o evento. Tente novamente.');
            });
        }
    }

    // Exemplo: Adicionando a função ao botão na página
    document.querySelector('button').addEventListener('click', adicionarEvento);
});
