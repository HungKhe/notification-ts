export interface createNotiState {
  error: boolean;
  loading: boolean;
  message: string;
}
export interface createNotiApp {
  create: createNotiState;
}

export interface notiPost {
  notifyLogin: string;
  notifyStatus: string;
  notifyName: string;
  notifyType: string;
  notifyIcon: string;
  notifyLink: string;
  notifyContent: string;
}

export const CREATE_NOTIFY = "CREATE_NOTIFY";
export const CREATE_NOTIFY_SUCCESS = "CREATE_NOTIFY_SUCCESS";
export const CREATE_NOTIFY_FAIL = "CREATE_NOTIFY_FAIL";
export const CREATE_RESET_STATE = "CREATE_RESET_STATE";

interface typeCreateNotify {
  type: typeof CREATE_NOTIFY;
  payload: notiPost;
}
interface typeCreateNotifySucces {
  type: typeof CREATE_NOTIFY_SUCCESS;
  payload: any;
}
interface typeCreateNotifyFail {
  type: typeof CREATE_NOTIFY_FAIL;
  payload: any;
}
interface typeResetState {
  type: typeof CREATE_RESET_STATE;
}

export type CreateNotifyTypes =
  | typeCreateNotify
  | typeCreateNotifyFail
  | typeCreateNotifySucces
  | typeResetState;
