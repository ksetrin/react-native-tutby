import React from 'react';
import {Text, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {newsFetchRequest} from '../../store/actions';
import {
  newsListSelector,
  newsRequestStateSelector,
} from '../../store/news/selectors';

class FeedScreen extends React.Component {
  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    this.props.newsFetchRequest();
  };

  render() {

    console.log('+kse this.props.news', this.props.news);

    return (
      <View>
        <Text>feed</Text>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    news: newsListSelector()(state),
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
)(FeedScreen);
