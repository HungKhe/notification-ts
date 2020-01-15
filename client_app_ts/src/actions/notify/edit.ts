import * as Types from '../../constants/notify/edit';
export const actEditNotify = (noti: Types.notiEdit): Types.EditNotifyTypes => {
    return {
        type: Types.EDIT_NOTIFY,
        payload: noti
    }
}
export const actEditNotifySuccess = (data: any): Types.EditNotifyTypes => {
    return {
        type: Types.EDIT_NOTIFY_SUCCESS,
        payload: data
    }
}
export const actEditNotifyFail = (error: any): Types.EditNotifyTypes => {
    return {
        type: Types.EDIT_NOTIFY_FAIL,
        payload: error
    }
} 
export const actEditFetchNotify = (id: string): Types.EditNotifyTypes => {
    return {
        type: Types.EDIT_FETCH_NOTIFY,
        payload: id
    }
}
export const actEditFetchNotifySuccess = (data: any): Types.EditNotifyTypes => {
    return {
        type: Types.EDIT_FETCH_NOTIFY_SUCCESS,
        payload: data
    }
}
export const actEditFetchNotifyFail = (error: any): Types.EditNotifyTypes => {
    return {
        type: Types.EDIT_FETCH_NOTIFY_FAIL,
        payload: error
    }
} 