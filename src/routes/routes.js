const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const config = require("../../config");
const oauthCtrl = require("../controller/install/oauth.ctrl");
const uploadCtrl = require("../controller/upload/upload.ctrl");
const createNotiCtrl = require("../controller/notify/create.ctrl");
const fetchNotiCtrl = require("../controller/notify/fetch.ctrl");
const editNotiCtrl = require("../controller/notify/edit.ctrl");
const webhook = require("../helper/webhook");

router
  .route("/webhooks")
  .get((req, res) => {
    const { query } = req;
    if (config.webhook.hrVerifyToken === query["hub.verify_token"]) {
      res.status(200).send(query["hub.challenge"]);
    } else {
      res.status(401).end();
    }
  })
  .post(webhook.webhookValidate, webhook.webhookListeningEvent);

router
  .route("/login")
  .get(oauthCtrl.appGetLogin)
  .post(oauthCtrl.appInstallLogin);

router.route("/grandservice").post(oauthCtrl.appGetAccessToken);

router.route("/upload").post(uploadCtrl.initUploadImage);

router.route("/upload/delete/:fileName").delete(uploadCtrl.initDeleteImageFile);

router.route("/images/:filename").get((req, res) => {
  let filename = req.params.filename;
  let pathOg = path.resolve("./uploads/" + filename);
  res.set("Content-Type", "image/png");
  res.sendFile(pathOg);
});

router.route("/notify/create").post(createNotiCtrl.initCreateNotify);
router.route("/notify")
  .get(fetchNotiCtrl.initFetchListNotify)
  .post(fetchNotiCtrl.initDeleteListNotify)
  .put(editNotiCtrl.initUpdateItemNotify)

router.route("/notify/:id")
  .get(editNotiCtrl.initGetNotifyWithId)

module.exports = router;
