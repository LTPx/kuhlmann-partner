"use client";

import React, { useState, useEffect, useRef } from "react";
import { GalleryImageWp } from "../_interfaces/wordpress-components";

interface GalleryProps {
  gallery: GalleryImageWp[];
}

const GalleryProjects: React.FC<GalleryProps> = ({ gallery }) => {
  const [index, setIndex] = useState<number>(-1);
  const [fade, setFade] = useState<boolean>(false);
  const [showButtons, setShowButtons] = useState<boolean>(false); 
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
    setFade(true); 
    setShowButtons(false); 
    setIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPreviousImage = () => {
    setFade(true); 
    setShowButtons(false); 
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

  useEffect(() => {
    if (fade) {
      setTimeout(() => {
        setFade(false); 
        setShowButtons(true); 
      }, 300); 
    }
  }, [fade]);

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {gallery.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative w-full h-auto overflow-hidden group-hover:bg-[#DCB93C] group-hover:bg-opacity-100 bg-transparent transition-all duration-500 ease-in-out">
              <img
                src={project.sizes.medium}
                alt={project.alt}
                className="w-full h-auto object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[#DCB93C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
            </div>
          </div>
        ))}
      </div>

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
            {showButtons && (
              <>
                <button
                  className="lightbox-prev hidden lg:block show" 
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
              </>
            )}

            <div
              className={`fade-transition ${fade ? "fade-out" : "fade-in"}`}
              key={photos[index].largeSrc}
            >
              <img
                src={photos[index].largeSrc}
                alt={photos[index].alt}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>

            {showButtons && (
              <>
                <div className="lg:hidden lightbox-side-image next-image">
                  <img
                    src={photos[(index + 1) % photos.length].largeSrc}
                    alt={photos[(index + 1) % photos.length].alt}
                  />
                </div>

                <button
                  className="lightbox-next hidden lg:block show" 
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage();
                  }}
                >
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryProjects;
