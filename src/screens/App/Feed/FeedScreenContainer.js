import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {rssFetchRequest} from '../../../store/actions';
import {
  rssTitleSelector,
  rssNewsSectionListSelector,
} from '../../../store/rss/selectors';
import FeedScreen from './FeedScreen';

class FeedScreenContainer extends React.Component {
  handleNewsPress = guid => () => {
    // why GUID only? Because, We can go to FeedDetails directly in the future (Push or Deep Link)
    console.log('+kse-handleNewsPress', guid);
    this.props.navigation.push('FeedDetails', {guid});
  };

  render() {
    const {rssNewsSectionList, rssTitle} = this.props;
    return (
      <FeedScreen
        title={rssTitle}
        rssNewsSectionList={rssNewsSectionList}
        onNewsPress={this.handleNewsPress}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    rssNewsSectionList: rssNewsSectionListSelector()(state),
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
