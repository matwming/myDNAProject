/*
 * Start of types definition
 * */
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
/*
 * End of types definition
 * */

/*
 * This is a ToggleWellLabels action.
 * It is used to show/hide x,y for each well.
 * */
export const ToggleWellLabels = (): ToggleWellLabelsAction => {
  return {
    type: AppSettingsActionTypes.ChangeWellLabelsStatus,
  };
};

/*
 * This is appSettingsReducer
 * */
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
