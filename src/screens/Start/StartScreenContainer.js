import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {rssFetchRequest} from '../../store/actions';
import {
  newsSectionListSelector,
  newsRequestStateSelector,
} from '../../store/news/selectors';
import StartScreen from './StartScreen';
import NetInfo from '@react-native-community/netinfo';

class StartScreenContainer extends React.Component {
  componentDidMount = () => {
    this.loadData();
  };

  loadData = async () => {
    const {navigation, rssFetchRequest} = this.props;
    try {
      const connectionInfo = await NetInfo.fetch();
      if (connectionInfo.type === 'none') {
        throw new Error('You seem to be offline');
      } else {
        await rssFetchRequest();
      }
      navigation.navigate('Feed');
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return <StartScreen />;
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
)(StartScreenContainer);
