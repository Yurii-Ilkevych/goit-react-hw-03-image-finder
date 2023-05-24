import PropTypes from 'prop-types';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ onToggle, onGetId, hits }) => {
  return hits.map(({ id, webformatURL, tags }) => {
    return (
      <ImageGalleryItemLi
        key={id}
        onClick={() => {
          onToggle();
          onGetId(id);
        }}
      >
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageGalleryItemLi>
    );
  });
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onGetId: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
