export interface uploadState {
  error: boolean;
  loading: boolean;
  message: string;
  fileName: string;
}
export interface uploadApp {
    upload: uploadState
}

export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAIL = "UPLOAD_IMAGE_FAIL";

interface typeUploadImage {
    type: typeof UPLOAD_IMAGE,
    payload: File
}
interface typeUploadImageSucces {
    type: typeof UPLOAD_IMAGE_SUCCESS,
    payload: any
}
interface typeUploadImageFail {
    type: typeof UPLOAD_IMAGE_FAIL,
    payload: any
}

export type UploadImageTypes = typeUploadImage | typeUploadImageFail | typeUploadImageSucces;