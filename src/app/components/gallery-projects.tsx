"use client";

import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { GalleryImageWp } from "../_interfaces/wordpress-components";

interface GalleryProps {
  gallery: GalleryImageWp[];
}

export function GalleryProjects({ gallery }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {gallery.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img
              src={project.sizes.medium}
              alt={project.alt}
              className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={gallery[photoIndex].sizes.medium_large}
          nextSrc={
            gallery[(photoIndex + 1) % gallery.length].sizes.medium_large
          }
          prevSrc={
            gallery[(photoIndex + gallery.length - 1) % gallery.length].sizes
              .medium_large
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % gallery.length)
          }
          enableZoom={false}
          toolbarButtons={[
            <button
              key="prev"
              className="custom-lightbox-button left-5"
              onClick={() =>
                setPhotoIndex(
                  (photoIndex + gallery.length - 1) % gallery.length
                )
              }
            >
              Prev
            </button>,
            <button
              key="next"
              className="custom-lightbox-button right-5"
              onClick={() => setPhotoIndex((photoIndex + 1) % gallery.length)}
            >
              Next
            </button>,
          ]}
        />
      )}
    </div>
  );
}

export default GalleryProjects;
