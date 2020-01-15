const db = require('../db/shop.db');
const utils = require('../../helper/utils')
module.exports = {
    initCreateNotify: async (req, res) => {
        let reqData = req.body;
        console.log("reqData: ", reqData)
        if(!reqData || Object.keys(reqData).length === 0){
            return res.status(400).send({
                error: true,
                message: 'Lỗi... Dữ liệu không chích xác!'
            });
        }
        const domain = "https://inspire-apps.myharavan.com";
        let dataShop = await db.dbFindOneShop(domain).then( dt => dt ).catch(err => err)
        if(!dataShop || dataShop.error){
            return res.status(400).send({
                error: true,
                message: 'Lỗi... Không tìm thấy shop!'
            });
        }
        let { list_notify } = dataShop;
        reqData.notifyCreateTime = utils.initGetNowDate();
        if(list_notify.length > 0){
            const ind = list_notify.findIndex((item) => {
                return item.notifyName === reqData.notifyName;
            })
            if(ind > -1)
                return res.send({
                    error: true,
                    message: 'Lỗi... Thông báo đã tồn tại!'
                });
        }
        list_notify.push(reqData);
        const dt = await db.dbUpdateDocumentShop(domain, 'list_notify', list_notify).then(dt => dt).catch(err => err);
        if(!dt || dt.error)
            return res.send({
                error: true,
                message: 'Lỗi... Không thể thêm dữ liệu!'
            });
        res.status(200).json({
            error: false,
            message: 'Thêm dữ liệu thành công!'
        });
    }
}