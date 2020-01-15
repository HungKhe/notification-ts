import * as Types from "../../constants/notify/edit";
const initialState: Types.editNotiState = {
  error: false,
  loading: false,
  message: "",
  notify: []
};
const editNotify = (state = initialState, action: Types.EditNotifyTypes) => {
  switch (action.type) {
    case Types.EDIT_FETCH_NOTIFY:
      return { ...initialState, loading: true };
    case Types.EDIT_FETCH_NOTIFY_SUCCESS:
      return { ...state, error: action.payload.error, loading: false, message: action.payload.message, notify: action.payload.data };
    case Types.EDIT_FETCH_NOTIFY_FAIL:
      return { ...state, loading: false, error: true, message: action.payload.toString() };

    case Types.EDIT_NOTIFY:
      return { ...state, loading: true, message: '' };
    case Types.EDIT_NOTIFY_SUCCESS:
      return { ...state, error: action.payload.error, loading: false, message: action.payload.message, notify: action.payload.data };
    case Types.EDIT_NOTIFY_FAIL:
      return { ...state, loading: false, error: true, message: action.payload.toString() };
    default:
      return state;
  }
};

export default editNotify;
