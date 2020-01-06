import * as Types from "../../constants/notify/create";
const initialState: Types.createNotiState = {
  error: false,
  loading: false,
  message: ""
};
const createNotify = (state = initialState, action: Types.CreateNotifyTypes) => {
  switch (action.type) {
    case Types.CREATE_NOTIFY:
      console.log("Reducer: ", action.payload);
      return { ...state, loading: true };
    case Types.CREATE_NOTIFY_SUCCESS:
      console.log("Reducer succ: ", action.payload);
      return { ...state };
    case Types.CREATE_NOTIFY_FAIL:
      console.log("Reducer err: ", action.payload);
      return { ...state };
    default:
      return state;
  }
};

export default createNotify;
