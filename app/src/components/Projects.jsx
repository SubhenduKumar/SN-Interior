import React, { useEffect,useState } from 'react'
import "../css/projects.css"
function Projects() {


    const importAllImages = (r) => r.keys().map(r);
    const images = importAllImages(require.context("../assets/Projects", false, /\.(png|jpe?g|svg)$/));


    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
        setSelectedImage(src);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div>
            <section className="gallery" id="gallery">
                {images.map((src, index) => (
                    <article className="gallery-item" key={index}>
                        <img
                            src={src}
                            alt={`Project ${index + 1}`}
                            className="image"
                            onClick={() => handleImageClick(src)}
                        />
                    </article>
                ))}
            </section>

            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content">
                        <img loading="lazy"src={selectedImage} alt="Expanded view" className="modal-image" />
                        <button className="close-button" onClick={closeModal}>
                            Close
                            <i className='fas fa-window-close mx-2'></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects