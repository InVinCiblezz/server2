var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var WechatAPI = require('co-wechat-api');
const api = new WechatAPI(process.env.WX_APPID , process.env.WX_APPSECRET);


/* GET wechat login QR code. */
router.get('/qrcode', async function(req, res, next) {
  // generate unique session id by uuid
  const session_id = 'sc2-' + uuid.v1();
  // set user level to 0
  const user_info = {"token": session_id, "level": 0};
  // save into redis
  await req.redis.set("session/"+session_id , JSON.stringify(user_info));

  const qrdata = await api.createTmpQRCode(session_id, 1800);
  qrdata.token = session_id;
  res.json(qrdata);
});

module.exports = router;
