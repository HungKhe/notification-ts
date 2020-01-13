export interface deleteNotiState {
    dlError: boolean;
    dlLoading: boolean;
    dlMessage: string;
}
export interface deleteNotiApp {
    delete: deleteNotiState;
  }

export const DELETE_NOTIFY = "DELETE_NOTIFY";
export const DELETE_NOTIFY_SUCCESS = "DELETE_NOTIFY_SUCCESS";
export const DELETE_NOTIFY_FAIL = "DELETE_NOTIFY_FAIL";

interface typeDeleteNotify {
  type: typeof DELETE_NOTIFY;
  payload: any[];
}
interface typeDeleteNotifySucces {
  type: typeof DELETE_NOTIFY_SUCCESS;
  payload: any;
}
interface typeDeleteNotifyFail {
  type: typeof DELETE_NOTIFY_FAIL;
  payload: any;
}

export type DeleteNotifyTypes = typeDeleteNotify | typeDeleteNotifyFail | typeDeleteNotifySucces;
