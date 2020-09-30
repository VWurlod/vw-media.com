import React, { useState, useCallback } from "react";
import GalleryHero from '../components/GalleryHero';
import Gallery from 'react-photo-gallery';
import { photos } from '../components/Photos';
import Footer from '../components/Footer';
import Carousel, { Modal, ModalGateway } from "react-images";

function Photography() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


return (
  <div>
    <GalleryHero />
    <Gallery photos={photos} onClick={openLightbox} />
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={photos.map(x => ({
              key: photos.id,
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
    <Footer />
  </div>
);
}

export default Photography;

// class Photography extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       nothing: ""
//     }
//   };

//   render() {
//     const BasicRows = () => <Gallery photos={photos} />;
//     return (
//       <>
//         <GalleryHero Galleryhero="roomsGalleryHero"/>

//         <BasicRows />
//         <Footer />
//       </>
//     );
//   }
// }

// export default Photography;
