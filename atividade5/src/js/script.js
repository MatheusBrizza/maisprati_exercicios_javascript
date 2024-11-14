let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function atualizarListaTarefas() {
    const listaTarefas = document.getElementById('lista-tarefa');
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const novaTarefa = document.createElement('li');
        novaTarefa.className = 'list-group-item d-flex justify-content-between align-items-center';
        novaTarefa.innerHTML = `
            <span class="task-text" contenteditable="false">${tarefa}</span>
            <button class="btn btn-warning btn-sm me-2" onclick="editarTarefa(${index})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deletarTarefa(${index})">Excluir</button>
        `;
        listaTarefas.appendChild(novaTarefa);
    });
}

function adicionarTarefa() {
    const inputTarefa = document.getElementById('input-tarefa');
    const tarefa = inputTarefa.value.trim();
    if (tarefa === '') return;
    tarefas.push(tarefa)
    salvarTarefas()
    atualizarListaTarefas();
    inputTarefa.value = '';
}

function editarTarefa(index) {
    const novoTexto = prompt("Editando a tarefa:", tarefas[index]);
    if (novoTexto !== null && novoTexto.trim() !== '') {
        tarefas[index] = novoTexto.trim();
        salvarTarefas()
        atualizarListaTarefas();
    }
}

function deletarTarefa(index) {
    tarefas.splice(index, 1);
    salvarTarefas()
    atualizarListaTarefas();
}

document.addEventListener('DOMContentLoaded', atualizarListaTarefas);