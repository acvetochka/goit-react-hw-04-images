import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ image, openModal }) {
  const { id, webformatURL } = image;

  return (
    <GalleryItem id={id} className="gallery-item">
      <GalleryItemImage
        src={webformatURL}
        alt=""
        onClick={() => {
          openModal(id);
        }}
      />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
