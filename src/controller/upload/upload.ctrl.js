const multer = require("multer");
const path = require("path");
const utils = require("../../helper/utils");
const db = require("../db/shop.db");
const _ = require("lodash");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});
const upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1 * 1024 * 1024 // 1MB
  }
}).single("image");
module.exports = {
  initUploadImage: (req, res) => {
    upload(req, res, function(err) {
      if (err instanceof multer.MulterError) {
        return res.json({
          error: true,
          message: "Lỗi trong quá trình tải lên, vui lòng thử lại sau!"
        });
      } else if (err) {
        return res.json({
          error: true,
          message: "Lỗi Server không xử lý được!"
        });
      }
      const processedFile = req.file || {};
      // console.log('processedFile: ', processedFile)
      res.json({
        error: false,
        message: "Upload thành công!",
        fileName: utils.initImageUrl() + processedFile.filename
      });
    });
    // createMulterFile(function(data) {
    //   data.multer(req, res, function(err) {
    //     console.log("req.body: ", req.body);
    //     if (err) {
    //       res.json({ error: true, message: err.message });
    //     } else {
    //       let pathOg = path.resolve("./upload/" + req.file.filename);
    //       res.json({
    //         error: false,
    //         done: true,
    //         name: req.file.filename,
    //         path: pathOg
    //       });
    //     }
    //   });
    // });
  },
  initDeleteImageFile: (req, res) => {
    var { fileName } = req.params;
    var id = "";
    if (!fileName)
      return res.json({
        message: "Lỗi!!! Thiếu dữ liệu..."
      });
    if (fileName.indexOf("--") > -1) {
      let spl = fileName.split("--");
      fileName = spl[0];
      id = spl[1];
    }
    const domain = "https://inspire-apps.myharavan.com";
    const pathFile = path.resolve("uploads", fileName);
    fs.unlink(pathFile, async err => {
      if (err) {
        return res.json({
          message: err
        });
      }
      if (id !== "") {
        var dataShop = await db
          .dbFindDataShopWithField(domain, "list_notify")
          .then(dt => dt)
          .catch(err => err);
        if (dataShop && dataShop.list_notify) {
          let listNoti = dataShop.list_notify;
          let ind = _.findIndex(listNoti, x => {
            return x._id.toString() === id;
          });
          if (ind > -1 && listNoti[ind].notifyIcon !== "") {
            listNoti[ind].notifyIcon = "";
            db.dbUpdateFieldShop(domain, "list_notify", listNoti)
              .then(dt => {})
              .catch(e => {
                return console.log(e);
              });
          }
        }
      }
      res.status(200).json({
        error: false,
        message: "Xóa file thành công!!!",
        fileName
      });
    });
  }
};

// function createMulterFile(callback) {
//   var multerConfig = {
//     dest: path.resolve("./uploads"),
//     limits: {
//       fileSize: 2 * 1024 * 1024
//     },
//     fileFilter: function(req, file, cb) {
//       if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//         return cb(new Error("FORMAT_ERROR"));
//       }
//       cb(null, true);
//     }
//   };
//   var mulerInstance = multer(multerConfig).single("image");
//   fse.ensureDir(multerConfig.dest, function() {
//     callback({
//       multer: mulerInstance,
//       uploadRelativePath: multerConfig.dest
//     });
//   });
// }
