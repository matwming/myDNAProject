import {
  AppSettingsActions,
  AppSettingsActionTypes,
  appSettingsReducer,
  IAppSettings,
} from './appSettings';
import {act} from 'react-test-renderer';

describe('test appSettings reducer', () => {
  it('If the initial status is false, then dispatch a toggle action, expect the status to become true', () => {
    //Arrange
    let state: IAppSettings = {
      isShowWellLabels: false,
    };
    //Action
    let action = (): AppSettingsActions => {
      return {
        type: AppSettingsActionTypes.ChangeWellLabelsStatus,
      };
    };
    //Assert
    expect(appSettingsReducer(state, action())).toEqual({
      isShowWellLabels: true,
    });
  });

  it('If the initial status is true, then dispatch a toggle action, expect the status to become false', () => {
    //Arrange
    let state: IAppSettings = {
      isShowWellLabels: true,
    };
    //Action
    let action = (): AppSettingsActions => {
      return {
        type: AppSettingsActionTypes.ChangeWellLabelsStatus,
      };
    };
    //Assert
    expect(appSettingsReducer(state, action())).toEqual({
      isShowWellLabels: false,
    });
  });

  it('If the initial status is false, then dispatch two toggle actions, expect the status to become false', () => {
    //Arrange
    let state: IAppSettings = {
      isShowWellLabels: false,
    };
    //Action
    let action = (): AppSettingsActions => {
      return {
        type: AppSettingsActionTypes.ChangeWellLabelsStatus,
      };
    };
    state = appSettingsReducer(state, action());
    //Assert

    expect(appSettingsReducer(state, action())).toEqual({
      isShowWellLabels: false,
    });
  });
});
