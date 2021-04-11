export interface IAppSettings {
  isShowWellLabels: boolean;
}

export interface ToggleWellLabelsAction {
  readonly type: AppSettingsActionTypes.ChangeWellLabelsStatus;
}

export enum AppSettingsActionTypes {
  ChangeWellLabelsStatus = 'ChangeWellLabelsStatus',
}

export type AppSettingsActions = ToggleWellLabelsAction;

const appSettings: IAppSettings = {
  isShowWellLabels: false,
};

//Actions
export const ToggleWellLabels = (): ToggleWellLabelsAction => {
  return {
    type: AppSettingsActionTypes.ChangeWellLabelsStatus,
  };
};
//Reducer
export const appSettingsReducer = (
  state = appSettings,
  action: AppSettingsActions,
) => {
  switch (action.type) {
    case AppSettingsActionTypes.ChangeWellLabelsStatus:
      let newState = {...state};
      newState.isShowWellLabels = !newState.isShowWellLabels;
      return newState;
    default:
      return state;
  }
};
