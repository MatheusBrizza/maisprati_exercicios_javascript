import { useState } from "react";

const NameFilter = () => {
  const [filter, setFilter] = useState("");
  const names = ["Aline", "Beltrano", "Ciclano", "Fulano", "Lili"];

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
