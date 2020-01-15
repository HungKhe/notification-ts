import * as Types from "../../constants/upload/typeUpload";
const initialState: Types.uploadState = {
  error: false,
  loading: false,
  message: "",
  fileName: ""
};
const uploadReducer = (
  state = initialState,
  action: Types.UploadImageTypes
) => {
  switch (action.type) {
    case Types.UPLOAD_IMAGE:
      return { ...state, loading: true, fileName: "", error: false, message: "" };
    case Types.UPLOAD_IMAGE_SUCCESS:
      let { fileName, error, message } = action.payload;
      return { ...state, loading: false, error, message, fileName };
    case Types.UPLOAD_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.toString()
      };
    // Delete image
    case Types.DELETE_IMAGE:
      return { ...state, loading: true, fileName: "", error: false, message: "" };
    case Types.DELETE_IMAGE_SUCCESS:
      return { ...state, loading: false};
    case Types.DELETE_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.toString()
      };
    default:
      return state;
  }
};

export default uploadReducer;
