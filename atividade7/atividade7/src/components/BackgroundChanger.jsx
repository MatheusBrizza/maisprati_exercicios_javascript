import { useState, useEffect } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("#ffffff");

  // Gera uma cor aleatória em formato hexadecimal
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  // Atualiza o estilo do fundo sempre que a cor muda
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <h1>Cor Atual: {color}</h1>
      <button onClick={generateRandomColor}>Mudar Cor</button>
    </div>
  );
};

export default BackgroundChanger;
