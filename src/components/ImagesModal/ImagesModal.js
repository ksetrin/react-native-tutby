import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

// I know about warnings and I asked the author to update npm, the warnings already fixed in repo
const ImagesModal = ({
  showImage = false,
  images = [],
  index = 0,
  actionClose = null,
}) => (
  <Modal visible={showImage} transparent onRequestClose={actionClose}>
    <ImageViewer
      imageUrls={images}
      index={index}
      enableSwipeDown
      enableImageZoom
      enablePreload
      saveToLocalByLongPress={false}
      pageAnimateTime={200}
      flipThreshold={10}
      maxOverflow={5}
      swipeDownThreshold={25}
      loadingRender={() => <ActivityIndicator size="large" color="#0000ff" />}
      onCancel={actionClose}
    />
  </Modal>
);

export default ImagesModal;
