import { combineReducers } from 'redux';
import uploadReducer from './upload/uploadReducer';
import createNotify from './notify/createNotify';
import fetchNotify from './notify/fetchNotify';
import editNotify from './notify/editNotify';
const rootReducers = combineReducers({
    upload: uploadReducer,
    create: createNotify,
    fetch: fetchNotify,
    edit: editNotify
})
export default rootReducers;