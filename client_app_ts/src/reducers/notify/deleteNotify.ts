import * as Types from "../../constants/notify/delete";
const initialState: Types.deleteNotiState = {
  dlError: false,
  dlLoading: false,
  dlMessage: ""
};
const createNotify = (state = initialState, action: Types.DeleteNotifyTypes) => {
  switch (action.type) {
    
    case Types.DELETE_NOTIFY:
      return { ...state, loading: true, message: '' };
    case Types.DELETE_NOTIFY_SUCCESS:
      return { ...state, error: action.payload.error, loading: false, message: action.payload.message };
    case Types.DELETE_NOTIFY_FAIL:
      return { ...state, loading: false, error: true, message: action.payload.toString() };
    default:
      return state;
  }
};

export default createNotify;
