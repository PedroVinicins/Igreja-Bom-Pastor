import { database } from './config.js';
import { ref, push, onChildAdded } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';

document.addEventListener('DOMContentLoaded', function() {
    const eventList = document.getElementById('event-list');
    const imagemInput = document.getElementById('imagemEvento'); // Input para a imagem

    // Função para adicionar um novo evento e salvar no Firebase
    function adicionarEvento() {
        const nomeEvento = prompt("Digite o nome do evento:");
        const imagemArquivo = imagemInput.files[0]; // Obter o arquivo de imagem selecionado

        if (nomeEvento) {
            if (imagemArquivo) {
                // Caso o usuário tenha selecionado uma imagem, vamos fazer o upload para o Firebase Storage
                const storage = getStorage();
                const storageReference = storageRef(storage, 'Eventos/' + imagemArquivo.name);

                // Fazendo upload da imagem
                uploadBytes(storageReference, imagemArquivo).then((snapshot) => {
                    console.log('Upload da imagem bem-sucedido!');
                    
                    // Obtendo a URL da imagem
                    getDownloadURL(snapshot.ref).then((urlImagem) => {
                        // Agora vamos salvar o evento e a URL da imagem no Firebase Database
                        const eventosRef = ref(database, 'Eventos');
                        
                        push(eventosRef, {
                            nome: nomeEvento,
                            imagem: urlImagem
                        }).then(() => {
                            alert('Evento adicionado com sucesso com imagem!');
                        }).catch((error) => {
                            console.error('Erro ao adicionar o evento:', error);
                            alert('Ocorreu um erro ao adicionar o evento. Tente novamente.');
                        });
                    });
                }).catch((error) => {
                    console.error('Erro ao fazer upload da imagem:', error);
                    alert('Ocorreu um erro ao fazer upload da imagem. Tente novamente.');
                });
            } else {
                alert('Por favor, selecione uma imagem para o evento.');
            }
        }
    }

    // Função para exibir o evento na página
    function exibirEvento(snapshot) {
        const data = snapshot.val();
        const eventoId = snapshot.key;  // Para identificar o evento específico
        const eventoDiv = document.createElement('div');
        eventoDiv.classList.add('evento');
        
        const tituloEvento = document.createElement('h3');
        tituloEvento.textContent = data.nome;

        const imagemEvento = document.createElement('img');
        imagemEvento.src = data.imagem;
        imagemEvento.alt = data.nome;
        imagemEvento.style.maxWidth = '200px';
        imagemEvento.style.display = 'block';

        const comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentarios');
        
        // Botão para adicionar comentários
        const botaoComentar = document.createElement('button');
        botaoComentar.textContent = "Comentar";
        botaoComentar.onclick = function() {
            const comentario = prompt("Digite seu comentário:");
            if (comentario) {
                const comentarioP = document.createElement('p');
                comentarioP.textContent = comentario;
                comentarioDiv.appendChild(comentarioP);
                
                // Salvar o comentário no Firebase
                const comentariosRef = ref(database, `Eventos/${eventoId}/comentarios`);
                push(comentariosRef, comentario);
            }
        };
        
        eventoDiv.appendChild(tituloEvento);
        eventoDiv.appendChild(imagemEvento); // Exibe a imagem do evento
        eventoDiv.appendChild(comentarioDiv);
        eventoDiv.appendChild(botaoComentar);
        
        // Exibe os comentários já salvos no Firebase para este evento
        const comentariosRef = ref(database, `Eventos/${eventoId}/comentarios`);
        onChildAdded(comentariosRef, (comentarioSnapshot) => {
            const comentarioP = document.createElement('p');
            comentarioP.textContent = comentarioSnapshot.val();
            comentarioDiv.appendChild(comentarioP);
        });
        
        eventList.appendChild(eventoDiv);
    }

    // Monitorar novos eventos em tempo real
    const eventosRef = ref(database, 'Eventos');
    onChildAdded(eventosRef, exibirEvento);

    // Exemplo: Adicionando a função ao botão na página
    document.querySelector('button').addEventListener('click', adicionarEvento);
});
