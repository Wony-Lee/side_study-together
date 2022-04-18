export const SET_VIEW_ON = "SET_VIEW_ON" as const;
export const SET_VIEW_OFF = "SET_VIEW_OFF" as const;

export const setViewOn = () => ({
  type: SET_VIEW_ON,
});
export const setViewOff = () => ({
  type: SET_VIEW_OFF,
});

export interface IStudyState {
  viewState: boolean;
}

export const initialState: IStudyState = {
  viewState: false,
};

export type StudyAction =
  | ReturnType<typeof setViewOn>
  | ReturnType<typeof setViewOff>;

const reducer = (state = initialState, action: StudyAction) => {
  switch (action.type) {
    case SET_VIEW_ON:
      return {
        ...state,
        viewState: true,
      };
    case SET_VIEW_OFF:
      return {
        ...state,
        viewState: false,
      };
    default:
      return state;
  }
};

export default reducer;
