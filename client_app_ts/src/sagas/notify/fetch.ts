import * as Types from '../../constants/notify/fetch';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../../utils/service';
import { actFetchNotifyFail, actFetchNotifySuccess, actDeleteNotifySuccess, actDeleteNotifyFail } from '../../actions/notify/fetch';

function fetchNotify(){
    return Service.apiFetchListNotify();
}
function* workerFetchNotify(){
    yield delay(2000)
    try{
        const response: any = yield call(fetchNotify);
        const data: any = response.data;
        yield put(actFetchNotifySuccess(data));
    }catch(error){
        yield put(actFetchNotifyFail(error));
    }
}
// DELETE
function deleteNotify(list: string[]){
    return Service.apiDeleteListNotify(list);
}
function* workerDeleteNotify({payload} : any){
    yield delay(2000)
    try{
        const response: any = yield call(deleteNotify, payload);
        const data: any = response.data;
        yield put(actDeleteNotifySuccess(data));
    }catch(error){
        yield put(actDeleteNotifyFail(error));
    }
}
export const fetchNotiSaga = [
    takeEvery(Types.FETCH_NOTIFY, workerFetchNotify),
    takeEvery(Types.DELETE_NOTIFY, workerDeleteNotify)
]