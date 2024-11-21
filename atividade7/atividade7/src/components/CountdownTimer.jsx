import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(0); // Tempo definido pelo usuário
  const [running, setRunning] = useState(false); // Controla se o timer está ativo

  useEffect(() => {
    if (running && time > 0) {
      const interval = setInterval(() => setTime((t) => t - 1), 1000);
      return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta ou `isRunning` muda
    } else if (time === 0 && running) {
      alert("Tempo acabou!");
      setRunning(false);
    }
  }, [time, running]);

  return (
    <div>
      <h1>Tempo: {time}s</h1>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        placeholder="Segundos"
      />
      <button onClick={() => setRunning(true)}>Iniciar</button>
      <button onClick={() => setRunning(false)}>Pausar</button>
      <button onClick={() => setTime(0)}>Reiniciar</button>
    </div>
  );
};

export default CountdownTimer;
