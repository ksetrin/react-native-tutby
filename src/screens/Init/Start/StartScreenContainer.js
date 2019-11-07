import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {rssFetchRequest} from '../../../store/actions';
import {rssRequestStateSelector} from '../../../store/rss/selectors';
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
      this.checkLoadData();
      navigation.navigate('Feed');
    } catch (e) {
      alert(e.message);
    }
  };

  checkLoadData = () => {
    const {rssFetchRequestState} = this.props;
    if (rssFetchRequestState.errorMessage) {
      throw new Error(rssFetchRequestState.errorMessage);
    }
  };

  render() {
    return <StartScreen />;
  }
}

function mapStateToProps(state) {
  return {
    rssFetchRequestState: rssRequestStateSelector()(state),
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
