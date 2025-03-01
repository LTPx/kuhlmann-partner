"use client";

import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { GalleryImageWp } from "../_interfaces/wordpress-components";

interface GalleryProps {
  gallery: GalleryImageWp[];
}

const GalleryProjects: React.FC<GalleryProps> = ({ gallery }) => {
  const [index, setIndex] = useState<number>(-1);

  const photos = gallery.map((project) => ({
    src: project.sizes.medium,  
    width: project.sizes["medium-width"],  
    height: project.sizes["medium-height"],  
    alt: project.alt,
    largeSrc: project.sizes["medium_large"],  
  }));

  const openLightbox = (index: number) => {
    setIndex(index);
  };

  const closeLightbox = () => {
    setIndex(-1);
  };

  const goToNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPreviousImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="p-6">
      <RowsPhotoAlbum
        photos={photos}
        spacing={15}
        onClick={({ index: clickedIndex }) => openLightbox(clickedIndex)}
      />
      {index >= 0 && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <button
              className="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
            >
              Prev
            </button>
            <img
              src={photos[index].largeSrc}
              alt={photos[index].alt}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
            <button
              className="lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryProjects;
