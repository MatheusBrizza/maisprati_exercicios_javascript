import { useState } from "react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ];

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            style={{ cursor: "pointer", width: "100px", height: "100px" }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={selectedImage} alt="Selecionada" />
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "white",
            }}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
