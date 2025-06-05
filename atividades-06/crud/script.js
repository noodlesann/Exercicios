/*funções de requisição de API*/

//função GET: busca todos os dados
function apiGet() {
    return fetch(`${databaseUrl.json}`)
        .then(response => response.json());
}

//função POST: criar um novo dado
function apiPost(word) {

}

//função PUT: atualizar um dado existente
function apiPut(id, word) {

}

//funcção DELETE: remover um dado existente
function apiDelete(id) {

}

/* funções de processamento de dados */

//function para renderizar os dados na página
function renderData(data) {
    const dataList = document.getElementById('dataList')
    dataList.innerHTML = "";

    if (data) {
        Object.keys(data).forEach(id => {
            const li = document.createElement('li');

            //campo de input para a edição
            const input = document.createElement('input');
            input.type = 'text';
            input.value = data[id].text;
            input.id = `input-${id}`;

            //botão de salvar edição

            const saveButton = document.createElement('button');
            saveButton.classList.add('save-btn');
            saveButton.textContent = 'Editar';
            saveButton.onclick = () => {
                const newText = input.value;
                handleUpdate(id, newText);
            }
            //botao deletar
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Deletar';
            deleteButton.onclick = () +. handleDelete(id);

            li.appendChild(input);
            li.appendChild(saveButton);
            li.appendChild(deletreButton);
            dataList.appendChild(li);
        })


    } else {
        dataList.innerHTML = '<li>Nenhym dado encontrado.</li>';
    }

}


//função para buscar e renderizar novos dados
function getData() {
    apiGet().then(data => {
        renderData(data);
    }).catch(error => console.error('Erro ao buscar dados:', error));

}

//função para criar um novo dado
function handleCreate() {

}

//função para atualizar um dado exitente
function handleUpdate(id, newText) {

}

//function para deletarum dado existente 
function handleDelete(id) {

}

/* Configuração do event Listener */

//função para configurar os event listeners
function setupEventListener() {
    const createButton = document.getElementById('createButton');
    createButton.addEventListener('click', handleCreate);
}

//função de inicialização
function init() {
    setupEventListener();
    getData();

}


//inicialiaza a aplicação ao carregar a página
window.onload = init;
