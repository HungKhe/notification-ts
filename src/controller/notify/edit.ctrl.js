const db = require("../db/shop.db");
const _ = require("lodash");
module.exports = {
  initGetNotifyWithId: (req, res) => {
    const { id } = req.params;
    console.log("idddddD: ", id)
    const domain = "https://inspire-apps.myharavan.com";
    if (!id)
      return res.status(400).send({
        error: true,
        message: "Lỗi... Thiếu dữ liệu!"
    });
    db.dbFindNotifyWithId(domain, id)
      .then(dt => {
        res.status(200).send({
          error: false,
          message: "Lấy dữ liệu thành công!!!",
          data: dt[0].list_notify
        });
      })
      .catch(err => {
        res.status(403).send({
          error: true,
          message: "Lỗi... Không tìm thấy dữ liệu!",
          data: []
        });
      });
  },
  initUpdateItemNotify: async (req, res) => {
    const item = req.body;
    console.log("idddddD: ", item)
    const domain = "https://inspire-apps.myharavan.com";
    if (!item || !item._id)
      return res.status(400).send({
        error: true,
        message: "Lỗi... Thiếu dữ liệu!",
        data: []
    });
    var dataShop = await db.dbFindDataShopWithField(domain, 'list_notify').then(dt => dt).catch(err => err);
    if(!dataShop || dataShop.error)
        return res.status(400).send({
            error: true,
            message: "Lỗi... Không thể truy xuất dữ liệu!",
            data: []
        });
    let { list_notify } = dataShop;
    let ind = _.findIndex(list_notify, (x) => {
        return x._id.toString() === item._id;
    })
    if(ind < 0)
        return res.status(400).send({
            error: true,
            message: "Lỗi... Không tìm thấy id cần chỉnh sửa!",
            data: []
        });
    list_notify[ind] = item;
    db.dbUpdateFieldShop(domain, 'list_notify', list_notify).then((dt) => {
        res.status(200).send({
            error: false,
            message: "Chỉnh sửa thành công!",
            data: [list_notify[ind]]
        });
    }).catch(err => {
        res.status(200).send({
            error: true,
            message: "Lỗi... Không thể cập nhật dữ liệu!",
            data: []
        });
    })
  }
};
