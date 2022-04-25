export const SET_MODAL_ON = "SET_MODAL_ON" as const;
export const SET_MODAL_OFF = "SET_MODAL_OFF" as const;

export const setViewOn = () => ({
  type: SET_MODAL_ON,
  payload: true,
});
export const setViewOff = () => ({
  type: SET_MODAL_OFF,
  payload: false,
});

export interface IStudyState {
  modalState: boolean;
}

export const initialState: IStudyState = {
  modalState: false,
};

export type StudyAction =
  | ReturnType<typeof setViewOn>
  | ReturnType<typeof setViewOff>;

const reducer = (state = initialState, action: StudyAction) => {
  switch (action.type) {
    case SET_MODAL_ON:
      return {
        ...state,
        modalState: action.payload,
      };
    case SET_MODAL_OFF:
      return {
        ...state,
        modalState: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
