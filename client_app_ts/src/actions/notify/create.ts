import * as Types from '../../constants/notify/create';
export const actCreateNotify = (noti: any): Types.CreateNotifyTypes => {
    return {
        type: Types.CREATE_NOTIFY,
        payload: noti
    }
}
export const actCreateNotifySuccess = (data: any): Types.CreateNotifyTypes => {
    return {
        type: Types.CREATE_NOTIFY_SUCCESS,
        payload: data
    }
}
export const actCreateNotifyFail = (error: any): Types.CreateNotifyTypes => {
    return {
        type: Types.CREATE_NOTIFY_FAIL,
        payload: error
    }
}