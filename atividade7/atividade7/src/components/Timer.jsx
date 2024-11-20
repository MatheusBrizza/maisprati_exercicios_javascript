import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => setTime((t) => t + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [running]);

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
