const model = require('../../model/model');
const shop_db = require('../../model/shops');
module.exports = {
    dbAddOneShop: async shop => {
        let result = null;
        if(!shop) return result;
        result = await shop_db.create(shop).then(r => r).catch(err => err);
        return result;
    },
    dbFindOneShop: async domain =>{
        let result = null;
        if(!domain) return result;
        result = await shop_db.findOne({ 'shop_domain': domain }).lean().exec().then(r => r).catch(err => err);
        return result;
    },
    dbUpdateDocumentShop: async (domain, type, objValue) => {
        let result = null;
        if(!domain || !type || !objValue) return result;
        result = await shop_db.findOneAndUpdate({ 'shop_domain': domain }, { $set: { [type]: objValue } }, { new: true}).lean().exec().then(r => r).catch(err => err);
        return result;
    },
    dbUpdateFieldShop: (domain, type, objValue) => {
        return new Promise((resolve, reject) => {
            shop_db.findOneAndUpdate({ 'shop_domain': domain }, { $set: { [type]: objValue } }, { new: true }, (err, data) => {
                if(err) reject(err);
                resolve(data.list_notify);
            });
        })
        return shop_db.findOneAndUpdate({ 'shop_domain': domain }, { $set: { [type]: objValue } }, { new: true }, (err, data) => {
            if(err) return err;
            console.log('dttttt: ', data.list_notify)
            return data;
        });
    },
    dbFindNotifyWithId: (domain, id) => {
        return new Promise((resolve, reject) => {
            shop_db.find({ 'shop_domain': domain }, { list_notify: { $elemMatch: { _id: model.Types.ObjectId(id) } } }, (err, data) => {
                if(err) reject(err);
                resolve(data);
            });
        })
    },
    dbFindDataShopWithField: async (domain, fields) => {
        let result = null;
        if(!domain || !fields) return result;
        result = await shop_db.findOne({ 'shop_domain': domain }).select(fields).lean().exec().then(r => r ).catch(err => err);
        return result;
    }
}