import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Sobre");

  return (
    <div>
      <h1>Tabs Navegáveis</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {["Sobre", "Contato"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px",
              borderBottom: activeTab === tab ? "2px solid blue" : "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {activeTab === "Sobre" ? (
          <p>Bem-vindo à aba Sobre! Aqui temos informações gerais.</p>
        ) : (
          <p>Bem-vindo à aba Contato! Envie-nos uma mensagem.</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
