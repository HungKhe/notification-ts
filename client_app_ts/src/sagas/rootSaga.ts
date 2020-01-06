import { all } from 'redux-saga/effects';
import { uploadSaga } from './upload/upload';
import { createNotiSaga } from './notify/create';
export default function* rootSagas() {
    yield all([
        ...uploadSaga,
        ...createNotiSaga
    ])
}