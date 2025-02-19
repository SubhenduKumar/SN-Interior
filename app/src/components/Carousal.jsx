import React, { useState } from "react";
import "../css/carousal.css"
// Import all images automatically
const importAll = (r) => r.keys().map(r);
const images1 = importAll(require.context('../assets/highlights1', false, /\.(png|jpe?g|gif)$/));
const images2 = importAll(require.context('../assets/highlights2', false, /\.(png|jpe?g|gif)$/));

const Carousal = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      {/* Image Grid */}
      <div className="gallery-grid">
        {images1.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(src)}>
            <img loading="lazy"src={src} alt={`Highlight ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      <div className="gallery-grid">
        {images2.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(src)}>
            <img loading="lazy"src={src} alt={`Highlight ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Lightbox for Fullscreen View */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img loading="lazy"src={selectedImage} alt="Full View" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default Carousal;
