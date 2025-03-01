"use client";

import React, { useState, useEffect, useRef } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { GalleryImageWp } from "../_interfaces/wordpress-components";

interface GalleryProps {
  gallery: GalleryImageWp[];
}

const GalleryProjects: React.FC<GalleryProps> = ({ gallery }) => {
  const [index, setIndex] = useState<number>(-1);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].clientX;

    const swipeThreshold = 50;

    if (touchStartRef.current - touchEndRef.current > swipeThreshold) {
      goToNextImage();
    } else if (touchEndRef.current - touchStartRef.current > swipeThreshold) {
      goToPreviousImage();
    }
  };

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextImage();
      } else if (e.key === "ArrowLeft") {
        goToPreviousImage();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    window.addEventListener("keydown", handleArrowKeys);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
      window.removeEventListener("keydown", handleArrowKeys);
    };
  }, [photos.length]);

  return (
    <div className="p-6">
      <RowsPhotoAlbum
        photos={photos}
        spacing={15}
        onClick={({ index: clickedIndex }) => openLightbox(clickedIndex)}
      />
      {index >= 0 && (
        <div className="lightbox" onClick={(e) => e.stopPropagation()}>
          <button
            className="text-[14px] leading-[28px] lightbox-close underline"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            Close
          </button>
          <div className="lightbox-content">
            <button
              className="lightbox-prev hidden lg:block"
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
            >
              Previous
            </button>
            <div className="lg:hidden lightbox-side-image prev-image">
              <img
                src={
                  photos[(index - 1 + photos.length) % photos.length].largeSrc
                }
                alt={photos[(index - 1 + photos.length) % photos.length].alt}
              />
            </div>
            <img
              src={photos[index].largeSrc}
              alt={photos[index].alt}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
            <div className="lg:hidden lightbox-side-image next-image">
              <img
                src={photos[(index + 1) % photos.length].largeSrc}
                alt={photos[(index + 1) % photos.length].alt}
              />
            </div>
            <button
              className="lightbox-next hidden lg:block"
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
