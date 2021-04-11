import {combineReducers} from 'redux';
import {
  IRobotStatus,
  robotReducer as robotStatus,
} from './robotReducer/robotReducer';
import {
  IWellContainerStatus,
  wellContainerReducer as wellContainerStatus,
} from './wellContainerReducer/wellContainerReducer';

export interface GlobalState {
  robotStatus: IRobotStatus;
  wellContainerStatus: IWellContainerStatus;
}
const rootReducer = combineReducers({
  robotStatus,
  wellContainerStatus,
});

export default rootReducer;
