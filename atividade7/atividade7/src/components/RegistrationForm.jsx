import { useState } from "react";

const RegistrationForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" }); // Armazena os dados do formulário
  const [welcomeMessage, setWelcomeMessage] = useState(""); // Mensagem de boas-vindas

  const handleChange = (e) => {
    // Atualiza os campos do formulário
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      // Exibe a mensagem de boas-vindas se todos os campos estiverem preenchidos
      setWelcomeMessage(`Bem-vindo, ${form.name}!`);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div>
      <h1>Formulário de Registro</h1>
      {!welcomeMessage ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nome"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Senha"
          />
          <button type="submit">Registrar</button>
        </form>
      ) : (
        <h2>{welcomeMessage}</h2>
      )}
    </div>
  );
};

export default RegistrationForm;
