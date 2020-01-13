import * as Types from '../../constants/notify/fetch';
export const actFetchNotify = (): Types.FetchNotifyTypes => {
    return {
        type: Types.FETCH_NOTIFY
    }
}
export const actFetchNotifySuccess = (data: any): Types.FetchNotifyTypes => {
    return {
        type: Types.FETCH_NOTIFY_SUCCESS,
        payload: data
    }
}
export const actFetchNotifyFail = (error: any): Types.FetchNotifyTypes => {
    return {
        type: Types.FETCH_NOTIFY_FAIL,
        payload: error
    }
} 
// DELETE
export const actDeleteNotify = (list: any[]): Types.FetchNotifyTypes => {
    return {
        type: Types.DELETE_NOTIFY,
        payload: list
    }
}
export const actDeleteNotifySuccess = (data: any): Types.FetchNotifyTypes => {
    return {
        type: Types.DELETE_NOTIFY_SUCCESS,
        payload: data
    }
}
export const actDeleteNotifyFail = (error: any): Types.FetchNotifyTypes => {
    return {
        type: Types.DELETE_NOTIFY_FAIL,
        payload: error
    }
} 