const LINE_CHANNEL_ACCESS_TOKEN = 'ovnrJvg9lbQHc52Vun14duTHYuR0YbNw7X661YJuk5bRI0Myh5SJXx4ykuKU2tZOY1VC95I4oIrvZ5wyMzAvjTb09wFOEeofSVQEc8lNu7OMn0qYueX938IZIy406kzH8IUz6KUVoP3ccmeMnAqHsAdB04t89/1O/w1cDnyilFU=';

// -----------------------------------------------------------------------------
// モジュールのインポート
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var controller = require('./controllers/line.js');

var app = express();
app.use(bodyParser.json());
/*
app.use(bodyParser.urlencoded({
  extended: true
}));
*/

var Line = new Line();

// -----------------------------------------------------------------------------
// Webサーバー設定
var port = (process.env.PORT || 3000);
var server = app.listen(port, function() {
    console.log('Node is running on port ' + port);
});

// -----------------------------------------------------------------------------
// ルーター設定
app.get('/', function(req, res, next){
    res.send('Node is running on port ' + port);
});

app.post('/webhook', function(req, res, next){
    res.status(200).end();
    for (var event of req.body.events){
        Line.post(event);
        if (event.type == 'message' && event.message.text != ''){
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
            }
            var body = {
                replyToken: event.replyToken,
                messages: [{
                    type: 'text',
                    text: event.message.text
                }]
            }
            var url = 'https://api.line.me/v2/bot/message/reply';
            request({
                url: url,
                method: 'POST',
                headers: headers,
                body: body,
                json: true
            });
        }
    }
});
