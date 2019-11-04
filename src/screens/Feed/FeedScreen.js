import React from 'react';
import {Text, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {newsFetchRequest} from '../../store/actions';

class FeedScreen extends React.Component {
  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    this.props.newsFetchRequest();
  };

  render() {
    return (
      <View>
        <Text>feed</Text>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    newsFetchRequestState: state.news.newsFetchRequestState,
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
