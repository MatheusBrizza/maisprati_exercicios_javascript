import { useState } from "react";
import Counter from "./components/Counter.jsx";
import BackgroundChanger from "./components/BackgroundChanger";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = {
    Counter: <Counter />,
    BackgroundChanger: <BackgroundChanger />,
  };

  return (
    <div>
      <h1>Menu Principal</h1>
      <nav style={{ marginBottom: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.keys(exercises).map((exercise, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => setSelectedExercise(exercise)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                {exercise}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {selectedExercise ? (
          <>
            <h2>Exercício: {selectedExercise}</h2>
            {exercises[selectedExercise]}
            <button
              onClick={() => setSelectedExercise(null)}
              style={{
                marginTop: "20px",
                padding: "10px",
                cursor: "pointer",
                backgroundColor: "#ff4d4f",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Voltar ao Menu Principal
            </button>
          </>
        ) : (
          <p>Selecione um exercício acima para visualizar.</p>
        )}
      </div>
    </div>
  );
};

export default App;
