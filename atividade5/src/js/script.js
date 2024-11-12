function adicionarTarefa() {
    const inputTarefa = document.getElementById('input-tarefa');
    const tarefa = inputTarefa.value.trim();
    if (tarefa === '') return;
    const listaTarefas = document.getElementById('lista-tarefa');
    const novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = `<span contenteditable="false">${tarefa}</span>`;
    listaTarefas.appendChild(novaTarefa);
    inputTarefa.value = '';
}
