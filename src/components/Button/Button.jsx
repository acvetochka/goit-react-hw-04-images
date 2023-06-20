import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

export default function Button({ onClick }) {
  return <LoadButton onClick={onClick}>Load more</LoadButton>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
