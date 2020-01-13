import * as Types from '../../constants/notify/delete';
export const actDeleteNotify = (list: any[]): Types.DeleteNotifyTypes => {
    return {
        type: Types.DELETE_NOTIFY,
        payload: list
    }
}
export const actDeleteNotifySuccess = (data: any): Types.DeleteNotifyTypes => {
    return {
        type: Types.DELETE_NOTIFY_SUCCESS,
        payload: data
    }
}
export const actDeleteNotifyFail = (error: any): Types.DeleteNotifyTypes => {
    return {
        type: Types.DELETE_NOTIFY_FAIL,
        payload: error
    }
} 