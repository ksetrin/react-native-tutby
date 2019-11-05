import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {newsFetchRequest} from '../../store/actions';
import {
  newsSectionListSelector,
  newsRequestStateSelector,
} from '../../store/news/selectors';
import FeedScreen from './FeedScreen';

class FeedScreenContainer extends React.Component {
  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    this.props.newsFetchRequest();
  };

  handleNewsPress = () => () => {
    alert('hi');
  };

  render() {
    const {newsSection, newsFetchRequestState} = this.props;
    console.log('+kse this.props.news', newsSection);
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
      newsFetchRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedScreenContainer);
