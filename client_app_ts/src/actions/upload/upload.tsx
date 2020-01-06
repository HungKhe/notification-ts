import * as Types from '../../constants/upload/typeUpload';
export const actUploadImage = (file: File): Types.UploadImageTypes => {
    return {
        type: Types.UPLOAD_IMAGE,
        payload: file
    }
}
export const actUploadImageSuccess = (data: any): Types.UploadImageTypes => {
    return {
        type: Types.UPLOAD_IMAGE_SUCCESS,
        payload: data
    }
}
export const actUploadImageFail = (error: any): Types.UploadImageTypes => {
    return {
        type: Types.UPLOAD_IMAGE_FAIL,
        payload: error
    }
}