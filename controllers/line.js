var Line = function() {
    this.LINE_CHANNEL_ACCESS_TOKEN = 'ovnrJvg9lbQHc52Vun14duTHYuR0YbNw7X661YJuk5bRI0Myh5SJXx4ykuKU2tZOY1VC95I4oIrvZ5wyMzAvjTb09wFOEeofSVQEc8lNu7OMn0qYueX938IZIy406kzH8IUz6KUVoP3ccmeMnAqHsAdB04t89/1O/w1cDnyilFU=';    
}


line = function (body, callback) {
    const event = body.events[0];
    if (event.type == 'message') {
        const receiveMessage = event.message;
        console.log(receiveMessage);
    }
    
};

module.exports = Line;