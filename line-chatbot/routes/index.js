const express = require('express');
const router = express.Router();
const request = require('request');

const path = require('path');
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '../config', 'config.json'))[env];

const lineUrl = config.lineUrl;
const lineChannelAccessToken = config.lineChannelAccessToken;

router.post('/', (req, res) => {
  //console.log("Webhook Accepted !");
  //console.log(req.body);

  let webhookEventObject = req.body.events[0];
  //メッセージが送られて来た場合
  if(webhookEventObject.type === 'message'){
    let sendMessageObject;
    if(webhookEventObject.message.type === 'text'){
      sendMessageObject = [{
        type: 'text',
        text: webhookEventObject.message.text
      }];
    }

    // LINEへのReplyリクエスト作成
    let postDataStr = JSON.stringify({ replyToken: webhookEventObject.replyToken, messages: sendMessageObject });
    let options = {
      url: lineUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${lineChannelAccessToken}`,
        'Content-Length': Buffer.byteLength(postDataStr)
      },
      json: { replyToken: webhookEventObject.replyToken, messages: sendMessageObject }
    };

    // LINEへのReplyリクエスト発行
    request(options, function (error, response, body) {
      if (! error) {
        //console.log("LINE Reply Success!");
        //console.log(body);
      }
      else {
        console.log('error: ' + error.message);
        res.status(500);

        return null;
      }
    });
  }

  res.status(200);
});

module.exports = router;
