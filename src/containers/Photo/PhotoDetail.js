import React, { Component } from 'react';
import { Image, Button, Modal } from 'react-bootstrap'

import '../../assets/style.css';

class PhotoDetail extends Component {

  render() {
    const { show, handleClose, photo } = this.props;

    return (
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Photo Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>AlbumId: {photo.albumId}</h3>
          <h3>Title: {photo.title}</h3>
          <div className="img-section">
            <Image src={photo.url} className="image" rounded/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="close-button" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default PhotoDetail