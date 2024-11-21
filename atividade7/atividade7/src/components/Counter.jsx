import { useState } from "react";

// Hook useState para manter o valor do contador
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrementar</button>
    </div>
  );
};

export default Counter;
