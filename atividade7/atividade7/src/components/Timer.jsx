import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);  // Estado para rastrear o tempo
  const [running, setRunning] = useState(false); // Estado para controlar se o temporizador está ativo

  useEffect(() => {
    // Configura o intervalo para incrementar o contador quando `isRunning` é true
    if (running) {
      const interval = setInterval(() => setTime((t) => t + 1), 1000);
      return () => clearInterval(interval); // Limpeza do intervalo
    }
  }, [running]);

  // Limpa o intervalo quando o componente é desmontado ou `isRunning` muda
  return (
    <div>
      <h1>Tempo: {time}s</h1>
      <button onClick={() => setRunning(true)}>Iniciar</button>
      <button onClick={() => setRunning(false)}>Pausar</button>
      <button onClick={() => { setTime(0); setRunning(false); }}>Reiniciar</button>
    </div>
  );
};

export default Timer;
