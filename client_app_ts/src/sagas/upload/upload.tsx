import * as Types from '../../constants/upload/typeUpload';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../../utils/service';
import { actUploadImageFail, actUploadImageSuccess } from '../../actions/upload/upload';

function uploadImage(file: File){
    return Service.apiUploadImage(file);
}
function* workerUploadImage({payload}: any){
    delay(2000)
    try{
        var fileData: any = new FormData();
        fileData.append('image', payload);
        fileData.append('fileName', payload.name);
        const response: any = yield call(uploadImage, fileData);
        const data: any = response.data;
        yield put(actUploadImageSuccess(data));
    }catch(error){
        yield put(actUploadImageFail(error));
    }
}
export const uploadSaga = [
    takeEvery(Types.UPLOAD_IMAGE, workerUploadImage)
]