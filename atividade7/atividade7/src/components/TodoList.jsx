import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // Lista de tarefas
  const [task, setTask] = useState(""); // Nova tarefa
  const [filter, setFilter] = useState("all"); // Filtro de exibição: all, completed, pending

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(""); // Limpa o campo
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  const filteredTasks = tasks.filter((t) =>
    filter === "completed" ? t.completed : filter === "pending" ? !t.completed : true // Mostra todas as tarefas se o filtro for "all"
  );

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicionar tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <div>
        <button onClick={() => setFilter("all")}>Todas</button> 
        <button onClick={() => setFilter("completed")}>Concluídas</button>
        <button onClick={() => setFilter("pending")}>Pendentes</button>
      </div>
      <ul>
        {filteredTasks.map((t, index) => (
          <li key={index} style={{ textDecoration: t.completed ? "line-through" : "none" }}>
            <span onClick={() => toggleTask(index)}>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
