export interface editNotiState {
  error: boolean;
  loading: boolean;
  message: string;
  notify: [];
}
export interface editNotiApp {
  edit: editNotiState;
}
export interface notiEdit {
  notifyLogin: string;
  notifyStatus: string;
  notifyName: string;
  notifyType: string;
  notifyIcon: string;
  notifyLink: string;
  notifyContent: string;
}

export const EDIT_NOTIFY = "EDIT_NOTIFY";
export const EDIT_NOTIFY_SUCCESS = "EDIT_NOTIFY_SUCCESS";
export const EDIT_NOTIFY_FAIL = "EDIT_NOTIFY_FAIL";

interface typeEditNotify {
  type: typeof EDIT_NOTIFY;
  payload: notiEdit;
}
interface typeEditNotifySucces {
  type: typeof EDIT_NOTIFY_SUCCESS;
  payload: any;
}
interface typeEditNotifyFail {
  type: typeof EDIT_NOTIFY_FAIL;
  payload: any;
}

export const EDIT_FETCH_NOTIFY = "EDIT_FETCH_NOTIFY";
export const EDIT_FETCH_NOTIFY_SUCCESS = "EDIT_FETCH_NOTIFY_SUCCESS";
export const EDIT_FETCH_NOTIFY_FAIL = "EDIT_FETCH_NOTIFY_FAIL";

interface typeEditFetchNotify {
  type: typeof EDIT_FETCH_NOTIFY;
  payload: string;
}
interface typeEditFetchNotifySucces {
  type: typeof EDIT_FETCH_NOTIFY_SUCCESS;
  payload: any;
}
interface typeEditFetchNotifyFail {
  type: typeof EDIT_FETCH_NOTIFY_FAIL;
  payload: any;
}

export type EditNotifyTypes =
  | typeEditNotify
  | typeEditNotifyFail
  | typeEditNotifySucces
  | typeEditFetchNotify
  | typeEditFetchNotifyFail
  | typeEditFetchNotifySucces;
