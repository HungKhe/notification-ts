import * as Types from '../../constants/upload/typeUpload';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../../utils/service';
import { actUploadImageFail, actUploadImageSuccess, actDeleteImageFail, actDeleteImageSuccess } from '../../actions/upload/upload';

function uploadImage(file: File){
    return Service.apiUploadImage(file);
}
function* workerUploadImage({payload}: any){
    yield delay(2000)
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

function deleteImage(fileName: string){
    return Service.apiDeleteImage(fileName);
}
function* workerDeleteImage({payload}: any){
    yield delay(2000)
    try{
        const response: any = yield call(deleteImage, payload);
        const data: any = response.data;
        yield put(actDeleteImageSuccess(data));
    }catch(error){
        yield put(actDeleteImageFail(error));
    }
}
export const uploadSaga = [
    takeEvery(Types.UPLOAD_IMAGE, workerUploadImage),
    takeEvery(Types.DELETE_IMAGE, workerDeleteImage)
]