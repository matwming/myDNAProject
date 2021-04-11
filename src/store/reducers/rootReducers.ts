import {combineReducers} from 'redux';
import {
  IRobotStatus,
  robotReducer as robotStatus,
} from './robotReducer/robotReducer';
import {
  IWellContainerStatus,
  wellContainerReducer as wellContainerStatus,
} from './wellContainerReducer/wellContainerReducer';
import {
  appSettingsReducer as appSettings,
  IAppSettings,
} from './appSettings/appSettings';

export interface GlobalState {
  robotStatus: IRobotStatus;
  wellContainerStatus: IWellContainerStatus;
  appSettings: IAppSettings;
}
const rootReducer = combineReducers({
  robotStatus,
  wellContainerStatus,
  appSettings,
});

export default rootReducer;
