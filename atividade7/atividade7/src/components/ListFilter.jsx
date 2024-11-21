import { useState } from "react";

const NameFilter = () => {
  const [filter, setFilter] = useState("");  // Estado para armazenar o texto do filtro
  const names = ["Aline", "Beltrano", "Ciclano", "Fulano", "Lili"];

  // Filtra nomes ignorando maiúsculas/minúsculas
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Filtro de Lista</h1>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrar nomes"
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameFilter;
