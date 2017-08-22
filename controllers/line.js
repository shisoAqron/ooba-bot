var request = require('request');

var Line = function() {
    this.LINE_CHANNEL_ACCESS_TOKEN = 'ovnrJvg9lbQHc52Vun14duTHYuR0YbNw7X661YJuk5bRI0Myh5SJXx4ykuKU2tZOY1VC95I4oIrvZ5wyMzAvjTb09wFOEeofSVQEc8lNu7OMn0qYueX938IZIy406kzH8IUz6KUVoP3ccmeMnAqHsAdB04t89/1O/w1cDnyilFU=';    
}


Line.prototype.post = function (event, callback) {
    if (event.type == 'message') {
        const receiveMessage = event.message;
        console.log(receiveMessage);
        if (event.type == 'message' && event.message.text != ''){
            parrot_mes(event);
        }
    }
    
};

parrot_mes = function(event){

    var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.LINE_CHANNEL_ACCESS_TOKEN
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


};

module.exports = Line;