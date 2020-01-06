import { combineReducers } from 'redux';
import uploadReducer from './upload/uploadReducer';
import createNotify from './notify/createNotify';
const rootReducers = combineReducers({
    upload: uploadReducer,
    create: createNotify
})
export default rootReducers;