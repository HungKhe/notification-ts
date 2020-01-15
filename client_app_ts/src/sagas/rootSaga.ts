import { all } from 'redux-saga/effects';
import { uploadSaga } from './upload/upload';
import { createNotiSaga } from './notify/create';
import { fetchNotiSaga } from './notify/fetch';
import { editNotiSaga } from './notify/edit';
// import { deleteNotiSaga } from './notify/delete';
export default function* rootSagas() {
    yield all([
        ...uploadSaga,
        ...createNotiSaga,
        ...fetchNotiSaga,
        ...editNotiSaga
    ])
}