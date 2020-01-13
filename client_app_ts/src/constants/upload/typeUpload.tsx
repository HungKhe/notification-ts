export interface uploadState {
  error: boolean;
  loading: boolean;
  message: string;
  fileName: string;
}
export interface uploadApp {
  upload: uploadState;
}

export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAIL = "UPLOAD_IMAGE_FAIL";

interface typeUploadImage {
  type: typeof UPLOAD_IMAGE;
  payload: File;
}
interface typeUploadImageSucces {
  type: typeof UPLOAD_IMAGE_SUCCESS;
  payload: any;
}
interface typeUploadImageFail {
  type: typeof UPLOAD_IMAGE_FAIL;
  payload: any;
}

export const DELETE_IMAGE = "DELETE_IMAGE";
export const DELETE_IMAGE_SUCCESS = "DELETE_IMAGE_SUCCESS";
export const DELETE_IMAGE_FAIL = "DELETE_IMAGE_FAIL";

interface typeDeleteImage {
  type: typeof DELETE_IMAGE;
  payload: string | undefined;
}
interface typeDeleteImageSucces {
  type: typeof DELETE_IMAGE_SUCCESS;
  payload: any;
}
interface typeDeleteImageFail {
  type: typeof DELETE_IMAGE_FAIL;
  payload: any;
}

export type UploadImageTypes =
  | typeUploadImage
  | typeUploadImageFail
  | typeUploadImageSucces
  | typeDeleteImage
  | typeDeleteImageSucces
  | typeDeleteImageFail;
