let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById('input-tarefa');
    const tarefa = inputTarefa.value.trim();
    if (tarefa === '') return;
    tarefas.push(tarefa)
    atualizarListaTarefas();
    inputTarefa.value = '';
}

function atualizarListaTarefas() {
    const listaTarefas = document.getElementById('lista-tarefa');
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const novaTarefa = document.createElement('li');
        novaTarefa.innerHTML = `
            <span contenteditable="false">${tarefa}</span>
            <button onclick="editarTarefa(${index})">Editar</button>
            <button onclick="deletarTarefa(${index})">Excluir</button>
        `;
        listaTarefas.appendChild(novaTarefa);
    });
}

function editarTarefa(index) {
    const novoTexto = prompt("Editando a tarefa:", tarefas[index]);
    if (novoTexto !== null && novoTexto.trim() !== '') {
        tarefas[index] = novoTexto.trim(); 
        atualizarListaTarefas();
    }
}

function deletarTarefa(index) {
    tarefas.splice(index, 1);
    atualizarListaTarefas();
}