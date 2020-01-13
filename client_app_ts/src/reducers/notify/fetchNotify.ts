import * as Types from "../../constants/notify/fetch";
const initialState: Types.fetchNotiState = {
  error: false,
  loading: false,
  message: "",
  list_notify: []
};
const createNotify = (state = initialState, action: Types.FetchNotifyTypes) => {
  switch (action.type) {
    case Types.FETCH_RESET_STATE: 
      return { ...initialState };
    case Types.FETCH_NOTIFY:
      return { ...state, loading: true, list_notify: [] };
    case Types.FETCH_NOTIFY_SUCCESS:
      return { ...state, error: action.payload.error, loading: false, message: '', list_notify: action.payload.data };
    case Types.FETCH_NOTIFY_FAIL:
      return { ...state, loading: false, error: true, message: action.payload.toString() };
    
    case Types.DELETE_NOTIFY:
      return { ...state, loading: true, message: "" };
    case Types.DELETE_NOTIFY_SUCCESS:
      return { ...state, error: action.payload.error, loading: false, message: action.payload.message, list_notify: action.payload.data };
    case Types.DELETE_NOTIFY_FAIL:
      return { ...state, loading: false, error: true, message: action.payload.toString() };
    default:
      return state;
  }
};

export default createNotify;
