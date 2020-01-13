import Api from "./api";
export default {
  apiUploadImage(file) {
    return Api().post(`upload`, file);
  },
  apiDeleteImage(fileName) {
    return Api().delete(`upload/delete/${ fileName }`);
  },
  apiCreateNotify(noti) {
    return Api().post(`notify/create`, noti);
  },
  apiFetchListNotify() {
    return Api().get("notify");
  },
  apiFetchItemNotify(id){
    return Api().get(`notify/${ id }`);
  },
  apiUpdateItemNotify(noti){
    return Api().put(`notify`, noti);
  },



  apiDeleteListNotify(list) {
    return Api().post("notify", list);
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
