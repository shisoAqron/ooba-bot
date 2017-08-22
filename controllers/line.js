var request = require('request');

var Line = function() {
    this.LINE_CHANNEL_ACCESS_TOKEN = 'ovnrJvg9lbQHc52Vun14duTHYuR0YbNw7X661YJuk5bRI0Myh5SJXx4ykuKU2tZOY1VC95I4oIrvZ5wyMzAvjTb09wFOEeofSVQEc8lNu7OMn0qYueX938IZIy406kzH8IUz6KUVoP3ccmeMnAqHsAdB04t89/1O/w1cDnyilFU=';    
}


Line.prototype.post = function (body, callback) {
    if (body.type == 'message') {
        const receiveMessage = body.message;
        console.log(receiveMessage);
    }
    
};

parrot_mes = function(){



};

module.exports = Line;