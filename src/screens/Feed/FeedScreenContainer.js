import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {rssFetchRequest} from '../../store/actions';
import {
  newsSectionListSelector,
  newsRequestStateSelector,
} from '../../store/news/selectors';
import FeedScreen from './FeedScreen';

class FeedScreenContainer extends React.Component {
  handleNewsPress = () => () => {
    alert('hi');
  };

  render() {
    const {newsSection, newsFetchRequestState} = this.props;
    return (
      <FeedScreen
        newsSection={newsSection}
        newsFetchRequestState={newsFetchRequestState}
        onNewsPress={this.handleNewsPress}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    newsSection: newsSectionListSelector()(state),
    newsFetchRequestState: newsRequestStateSelector()(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      rssFetchRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedScreenContainer);
