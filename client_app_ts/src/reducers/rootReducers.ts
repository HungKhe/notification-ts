import { combineReducers } from 'redux';
import uploadReducer from './upload/uploadReducer';
const rootReducers = combineReducers({
    upload: uploadReducer
})
export default rootReducers;