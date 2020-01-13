import * as Types from '../../constants/notify/delete';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../../utils/service';
import { actDeleteNotifySuccess, actDeleteNotifyFail } from '../../actions/notify/fetch';


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
export const deleteNotiSaga = [
    takeEvery(Types.DELETE_NOTIFY, workerDeleteNotify)
]