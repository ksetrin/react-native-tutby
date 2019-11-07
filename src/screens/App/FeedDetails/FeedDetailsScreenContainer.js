import React from 'react';
import {connect} from 'react-redux';
import {rssNewsListItemByGuidSelector} from '../../../store/rss/selectors';
import FeedDetailsScreen from './FeedDetailsScreen';

class FeedDetailsScreenContainer extends React.Component {
  handleNewsPress = () => () => {
    alert('hi');
  };

  render() {
    const {rssNewsListItem} = this.props;
    return (
      <FeedDetailsScreen
        rssNewsListItem={rssNewsListItem}
        onNewsPress={this.handleNewsPress}
      />
    );
  }
}

function mapStateToProps(state, props) {
  const guid = props.navigation.getParam('guid');
  console.log('+kse-guid', guid);
  return {
    rssNewsListItem: rssNewsListItemByGuidSelector(guid)(state),
  };
}

export default connect(mapStateToProps)(FeedDetailsScreenContainer);
