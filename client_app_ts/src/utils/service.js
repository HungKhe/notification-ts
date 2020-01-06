import Api from "./api";
export default {
  apiUploadImage(file) {
    return Api().post(`upload`, file);
  },
  apiCreateNotify(noti) {
    return Api().post(`notify/create`, noti);
  },
  fetchListNotification() {
    return Api().get("notification");
  },
  fetchItemNotification(id) {
    return Api().get("notification?id=" + id);
  },
  createNotification(data) {
    return Api().post(`notification`, data);
  },
  updateNotification(data) {
    return Api().put(`notification`, data);
  },
  deleteNotification(arr) {
    return Api().post(`delete-notification`, arr);
  }
};
