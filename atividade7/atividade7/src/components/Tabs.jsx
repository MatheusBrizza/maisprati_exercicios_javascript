import { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Sobre"); // Define o estado inicial como "Sobre". Este estado controla qual aba está ativa.

    return (
        // Componente principal que renderiza as tabs e seu conteúdo.
        <div>
            <h1>Tabs Navegáveis</h1>
            {/* Container para os botões das abas */}
            <div style={{ display: "flex", gap: "10px" }}>
                {/* Mapeia um array com os nomes das abas ("Sobre" e "Contato") para gerar os botões dinamicamente */}
                {["Sobre", "Contato"].map((tab) => (
                    <button
                        key={tab} // Chave única para cada botão (necessário ao renderizar listas no React).
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: "10px",
                            borderBottom: activeTab === tab ? "2px solid blue" : "none",
                        }}
                    >
                        {tab}
                        {/* Exibe o nome da aba (tab) no botão. */}
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
