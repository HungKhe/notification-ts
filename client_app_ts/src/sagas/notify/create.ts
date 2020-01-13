import * as Types from '../../constants/notify/create';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../../utils/service';
import { actCreateNotifyFail, actCreateNotifySuccess } from '../../actions/notify/create';

function createNotify(noti: Types.notiPost){
    return Service.apiCreateNotify(noti);
}
function* workerCreateNotify({payload}: any){
    yield delay(2000)
    try{
        const response: any = yield call(createNotify, payload);
        const data: any = response.data;
        yield put(actCreateNotifySuccess(data));
    }catch(error){
        yield put(actCreateNotifyFail(error));
    }
}
export const createNotiSaga = [
    takeEvery(Types.CREATE_NOTIFY, workerCreateNotify)
]