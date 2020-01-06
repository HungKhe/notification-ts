import * as Types from "../../constants/upload/typeUpload";
const initialState: Types.uploadState = {
  error: false,
  loading: false,
  message: "",
  fileName: "",
};
const uploadReducer = (state = initialState, action: Types.UploadImageTypes) => {
  switch (action.type) {
    case Types.UPLOAD_IMAGE:
      return { ...state, loading: true };
    case Types.UPLOAD_IMAGE_SUCCESS:
      console.log("Reducer succ: ", action.payload);
      const { fileName, error, message } = action.payload;
      return { ...state, loading: false, error, message, fileName };
    case Types.UPLOAD_IMAGE_FAIL:
      console.log("Reducer err: ", action.payload);
      return { ...state, loading: false, error: true, message: action.payload.toString() };
    default:
      return state;
  }
};

export default uploadReducer;
