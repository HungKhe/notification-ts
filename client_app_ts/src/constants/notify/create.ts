export interface createNotiState {
  error: boolean;
  loading: boolean;
  message: string;
}
export interface createNotiApp {
  create: createNotiState;
}

export const CREATE_NOTIFY = "CREATE_NOTIFY";
export const CREATE_NOTIFY_SUCCESS = "CREATE_NOTIFY_SUCCESS";
export const CREATE_NOTIFY_FAIL = "CREATE_NOTIFY_FAIL";

interface typeCreateNotify {
  type: typeof CREATE_NOTIFY;
  payload: any;
}
interface typeCreateNotifySucces {
  type: typeof CREATE_NOTIFY_SUCCESS;
  payload: any;
}
interface typeCreateNotifyFail {
  type: typeof CREATE_NOTIFY_FAIL;
  payload: any;
}

export type CreateNotifyTypes =
  | typeCreateNotify
  | typeCreateNotifyFail
  | typeCreateNotifySucces;
