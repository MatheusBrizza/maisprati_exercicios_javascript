import { useState, useEffect } from "react";

const DataFetch = () => {
  const [posts, setPosts] = useState([]); // Estado para armazenar os posts
  const [loading, setLoading] = useState(true); // Estado para o indicador de carregamento

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Faz a requisição ao carregar o componente
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={fetchData}>Recarregar Dados</button>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetch;
