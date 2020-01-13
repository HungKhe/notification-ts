import * as Types from '../../constants/notify/edit';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../../utils/service';
import { actEditFetchNotifyFail, actEditFetchNotifySuccess, actEditNotifyFail, actEditNotifySuccess } from '../../actions/notify/edit';

function fetchNotify(id: string){
    return Service.apiFetchItemNotify(id);
}
function* workerFetchNotify({ payload }: any){
    yield delay(2000)
    try{
        const response: any = yield call(fetchNotify, payload);
        const data: any = response.data;
        yield put(actEditFetchNotifySuccess(data));
    }catch(error){
        yield put(actEditFetchNotifyFail(error));
    }
}
// EDIT
function editItemNotify(noti: Types.notiEdit){
    return Service.apiUpdateItemNotify(noti);
}
function* workerEditItemNotify({payload} : any){
    yield delay(2000)
    try{
        const response: any = yield call(editItemNotify, payload);
        const data: any = response.data;
        yield put(actEditNotifySuccess(data));
    }catch(error){
        yield put(actEditNotifySuccess(error));
    }
}
export const editNotiSaga = [
    takeEvery(Types.EDIT_FETCH_NOTIFY, workerFetchNotify),
    takeEvery(Types.EDIT_NOTIFY, workerEditItemNotify)
]