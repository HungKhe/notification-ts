import * as Types from '../../constants/notify/create';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../../utils/service';
import { actUploadImageFail, actUploadImageSuccess } from '../../actions/upload/upload';

function createNotify(noti: any){
    return Service.apiUploadImage(noti);
}
function* workerCreateNotify({payload}: any){
    delay(2000)
    try{
        const response: any = yield call(createNotify, payload);
        const data: any = response.data;
        yield put(actUploadImageSuccess(data));
    }catch(error){
        yield put(actUploadImageFail(error));
    }
}
export const createNotiSaga = [
    takeEvery(Types.CREATE_NOTIFY, workerCreateNotify)
]