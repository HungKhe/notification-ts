export interface fetchNotiState {
  error: boolean;
  loading: boolean;
  message: string;
  list_notify: notiFetch[]
}
export interface fetchNotiApp {
  fetch: fetchNotiState;
}

export interface notiFetch {
    _id: string;
    checked?: boolean;
  notifyLogin: string;
  notifyStatus: string;
  notifyName: string;
  notifyType: string;
  notifyIcon: string;
  notifyLink: string;
  notifyContent: string;
  notifyCreateTime: string;
}

export const FETCH_NOTIFY = "FETCH_NOTIFY";
export const FETCH_NOTIFY_SUCCESS = "FETCH_NOTIFY_SUCCESS";
export const FETCH_NOTIFY_FAIL = "FETCH_NOTIFY_FAIL";
export const FETCH_RESET_STATE = "FETCH_RESET_STATE";

interface typeFetchNotify {
  type: typeof FETCH_NOTIFY;
}
interface typeFetchNotifySucces {
  type: typeof FETCH_NOTIFY_SUCCESS;
  payload: any;
}
interface typeFetchNotifyFail {
  type: typeof FETCH_NOTIFY_FAIL;
  payload: any;
}
interface typeFetchResetState {
  type: typeof FETCH_RESET_STATE;
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

export type FetchNotifyTypes =
  | typeFetchNotify
  | typeFetchNotifyFail
  | typeFetchNotifySucces
  | typeDeleteNotify
  | typeDeleteNotifyFail
  | typeDeleteNotifySucces
  | typeFetchResetState ;
