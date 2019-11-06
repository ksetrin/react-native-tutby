import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {rssFetchRequest} from '../../store/actions';
import {newsSectionListSelector} from '../../store/news/selectors';
import {
  rssRequestStateSelector,
  rssTitleSelector,
} from '../../store/rss/selectors';
import FeedScreen from './FeedScreen';

class FeedScreenContainer extends React.Component {
  handleNewsPress = () => () => {
    alert('hi');
  };

  render() {
    const {newsSection, rssFetchRequestState, rssTitle} = this.props;
    console.log('+kse this.props.news', rssTitle);
    return (
      <FeedScreen
        title={rssTitle}
        newsSection={newsSection}
        rssFetchRequestState={rssFetchRequestState}
        onNewsPress={this.handleNewsPress}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    newsSection: newsSectionListSelector()(state),
    rssFetchRequestState: rssRequestStateSelector()(state),
    rssTitle: rssTitleSelector()(state),
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
