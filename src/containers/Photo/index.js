import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Container, Image, Pagination } from 'react-bootstrap';

import { Creators as Actions } from '../../actions';
import PhotoDetail from './PhotoDetail';
import '../../assets/style.css';

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalRecords: 0,
      pageLimit: 30,
      pageNeighbours: 0,
      currentPage: 1,
      items: [],
      photos: [],
      favoriteImages: [],
      showModal: false,
      selectedPhoto: {}
    }
  }

  componentDidMount() {
    this.props.getPhotoRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.photos.isLoaded) {
      this.setState({
        photos: nextProps.photos.photos,
        totalRecords: nextProps.photos.photos.length,
        favoriteImages: nextProps.photos.favoriteImages
      })
    }
  }

  gotoFirstPage = () => {
    this.setState({ currentPage: 1 });
  }

  gotoPrevPage = () => {
    let { currentPage } = this.state;
    let prePage = currentPage - 1
    if (prePage < 1) {
      prePage = 1
    }
    this.setState({ currentPage: prePage });
  }

  gotoNextPage = () => {
    const { currentPage, pageLimit, totalRecords } = this.state;
    let nextPage = currentPage + 1;
    const length = Math.ceil(totalRecords / pageLimit)
    if (nextPage > length) {
      nextPage = currentPage;
    }
    this.setState({ currentPage: nextPage });
  }

  gotoLastPage = () => {
    const { pageLimit, totalRecords } = this.state;
    this.setState({ currentPage:  Math.ceil(totalRecords / pageLimit) })
  }

  checkFavoriteImage = (photo) => {
    let isFavoriteImage = false;
    const { favoriteImages } = this.state;
    favoriteImages.forEach(favoriteImage => {
      if (favoriteImage.id === photo.id) {
        isFavoriteImage = true;
        return;
      }
    })
    return isFavoriteImage;
  }

  renderPageItem = () => {
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={this.state.currentPage === number}
          onClick={this.gotoNextPage}>
          {number}
        </Pagination.Item>
      );
    }
    return items
  }

  toggleFavor = (item) => {
    this.props.setFavoriteImage(item);
  }

  showDetail = (photo) => {
    this.setState({
      showModal: true,
      selectedPhoto: photo
    });
  }

  closeModal = () => this.setState({ showModal: false })

  renderImage = () => {
    const { photos, totalRecords } = this.state;
    let images = [];
    const first = (this.state.currentPage - 1) * this.state.pageLimit + 1;
    let last = this.state.currentPage * this.state.pageLimit;
    if (last > totalRecords) {
      last = totalRecords - 1;
    }

    for (let number = first; number <= last; number++) {
      const url = photos[number].thumbnailUrl;
      const item = photos[number];
      const isFavoriteImage = this.checkFavoriteImage(photos[number]);
      images.push(
        <div className="item" key={number}>
          <Image
            src={url}
            thumbnail
            key={number}
            className="thumb-image"
            onClick={() => this.showDetail(item)} />
          <Button
            variant={isFavoriteImage ? 'success' : 'primary'}
            onClick={() => this.toggleFavor(item)} >
            {isFavoriteImage ? 'Marked as Favorite Image' : 'Mark as Favorite Image'}
          </Button>
        </div>

      );
    }
    return images
  }

  renderPageNation = () => {
    return (
      <Pagination>
        <Pagination.First onClick={this.gotoFirstPage} />
        <Pagination.Prev onClick={this.gotoPrevPage} />
        <Pagination.Item active={this.state.currentPage === 1} onClick={this.gotoFirstPage}>1</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item onClick={this.gotoLastPage}>{this.state.totalRecords}</Pagination.Item>
        <Pagination.Next onClick={this.gotoNextPage} />
        <Pagination.Last onClick={this.gotoLastPage} />
      </Pagination>
    )
  }

  render() {
    if (this.props.photos && this.props.photos.isLoaded && this.state.photos.length > 0) {
      return (
        <React.Fragment>
          <h1>Favorite Images: {this.props.photos.favoriteImages.length} </h1>
          <Container>
            {this.renderImage()}
          </Container>
          {this.renderPageNation()}
          <PhotoDetail
            show={this.state.showModal}
            handleClose={this.closeModal}
            photo={this.state.selectedPhoto}
          />
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}

const { getPhotoRequest, setFavoriteImage } = Actions;

const mapStateToProps = (state) => ({
  photos: state.photos,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPhotoRequest,
  setFavoriteImage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
