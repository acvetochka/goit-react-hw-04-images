import { Component } from 'react';
import fetchImages from 'helpers/api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { Container } from './App.styled';
import Notiflix from 'notiflix';

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    totalPages: 0,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchImageToArray(prevState);
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = id => {
    this.setState({ isLoading: true });
    const largeImage = this.state.images.find(image => image.id === id);

    setTimeout(() => {
      this.setState({
        largeImageURL: largeImage.largeImageURL,
        isLoading: false,
      });
      this.toggleModal();
    }, 500);
  };

  handleSubmit = query => {
    this.setState({ images: [], query: query, page: 1 });
    if (!query) {
      Notiflix.Notify.warning('Enter your request!');
    }
  };

  buttonOnClick = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  fetchImageToArray = async prevState => {
    try {
      this.setState({ isLoading: true });
      const { query, page } = this.state;
      const { totalHits, hits } = await fetchImages(query, page);
      const pageCount = totalHits / 12;
      this.setState({
        totalPages: pageCount,
      });
      setTimeout(() => {
        if (page !== prevState.page) {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            isLoading: false,
          }));
        } else {
          this.setState({ images: hits, isLoading: false });
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      images,
      query,
      isLoading,
      page,
      totalPages,
      showModal,
      largeImageURL,
    } = this.state;
    return (
      <Container>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.handleSubmit} />
        {query !== '' && (
          <>
            <ImageGallery images={images} openModal={this.openModal} />
            {page < totalPages && <Button onClick={this.buttonOnClick} />}
          </>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={query} />
          </Modal>
        )}
      </Container>
    );
  }
}

Notiflix.Notify.init({
  position: 'center-top',
  distance: '100px',
  timeout: 1000,
  warning: {
    background: '#44728f',
    textColor: '#fff',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
});
