import * as Types from "../../constants/notify/create";
const initialState: Types.createNotiState = {
  error: false,
  loading: false,
  message: ""
};
const createNotify = (state = initialState, action: Types.CreateNotifyTypes) => {
  switch (action.type) {
    case Types.CREATE_RESET_STATE:
      return initialState;
    case Types.CREATE_NOTIFY:
      return { ...state, loading: true, message: '' };
    case Types.CREATE_NOTIFY_SUCCESS:
      return { ...state, error: action.payload.error, loading: false, message: action.payload.message };
    case Types.CREATE_NOTIFY_FAIL:
      return { ...state, loading: false, error: true, message: action.payload.toString() };
    default:
      return state;
  }
};

export default createNotify;
