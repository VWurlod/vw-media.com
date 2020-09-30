import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";

export default function GalleryHero({children, hero}) {
  return (
    <header className={hero}>
      <h1 className = "galleryHero">
        <div>
          VW-Media.com
        </div>
        <FaInstagramSquare className="insta"/>
      </h1>
    </header>
  )
}

GalleryHero.defaultProps = {
  Galleryhero: "defaultGalleryHero"
}