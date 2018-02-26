import {connect} from 'react-redux';
import { bindActionCreators} from "redux";
import { actionCreators as myActions } from '../../reducer';
import Timer from './presenter';

function mapStateToProps(state){
  const { isPlaying, elapsedTime, timerDuration} = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  }
}


function mapDispatchToProps(dispatch){
  return {
    startTimer: bindActionCreators(myAction.startTimer, dispatch)
    restartTimer: bindActionCreators(myAction.restartTimer, dispatch)
    addSecond: bindActionCreators(myAction.addSecond, dispatch)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);