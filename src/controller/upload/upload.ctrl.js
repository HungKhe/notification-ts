const fse = require("fs-extra");
const multer = require("multer");
const path = require("path");
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
      res.json({
        error: false,
        message: "Upload thành công!",
        path: processedFile.path,
        fileName: processedFile.originalname
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
