const db = require("../db/shop.db");
const _ = require("lodash");
module.exports = {
  initFetchListNotify: async (req, res) => {
    const domain = "https://inspire-apps.myharavan.com";
    let dataShop = await db
      .dbFindOneShop(domain)
      .then(dt => dt)
      .catch(err => err);
    if (!dataShop || dataShop.error) {
      return res.status(400).send({
        error: true,
        message: "Lỗi... Không tìm thấy shop!"
      });
    }
    res.status(200).send({
      error: false,
      message: "Lấy dữ liệu thành công!",
      data: dataShop.list_notify
    });
  },
  initDeleteListNotify: async (req, res) => {
    const domain = "https://inspire-apps.myharavan.com";
    const listDelete = req.body;
    if (!listDelete || listDelete.length === 0)
      return res.status(400).send({
        error: true,
        message: "Lỗi... Thiếu dữ liệu!"
      });
    let dataShop = await db
      .dbFindOneShop(domain)
      .then(dt => dt)
      .catch(err => err);
    if (!dataShop || dataShop.error) {
      return res.status(400).send({
        error: true,
        message: "Lỗi... Không tìm thấy shop!"
      });
    }
    let { list_notify } = dataShop;
    list_notify = list_notify.map(item => {
      item._id = item._id.toString();
      return item;
    });
    if (!list_notify || list_notify.length === 0)
      return res.status(400).send({
        error: true,
        message: "Lỗi... Không tồn tại dữ liệu để xóa!"
      });
    let finalDelete = _.differenceBy(list_notify, listDelete, "_id");
    console.log("finalDelete: ", finalDelete);
    // let updateData = await db.dbUpdateDocumentShop(domain, list_notify, finalDelete).then(dt => dt).catch( err => err )
    // console.log('updateData: ', updateData.list_notify)
    // if(!updateData || updateData.error){
    //     return res.status(500).send({
    //         error: true,
    //         message: 'Lỗi... Không thể cập nhật dữ liệu!'
    //     });
    // }
    // res.status(200).send({
    //     error: false,
    //     message: 'Xóa thông báo thành công!!!',
    //     list: listDelete,
    //     data: finalDelete
    // })
    db.dbUpdateFieldShop(domain, "list_notify", finalDelete)
      .then(dt => {
        res.status(200).send({
          error: false,
          message: "Xóa thông báo thành công!!!",
          list: listDelete,
          data: dt
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          error: true,
          message: "Lỗi... Không thể cập nhật dữ liệu!"
        });
      });
  }
};
