import fs  from 'fs'
import express from 'express'
import bodyParser from 'body-parser'
import request from 'request'

const obj = JSON.parse(fs.readFileSync('./token.json', 'utf8'))
const LINE_CHANNEL_ACCESS_TOKEN = obj.line.Channel_Access_Token

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const port = (process.env.PORT || 3000)
app.listen(port, () => {
  console.log('Node is running on port ' + port)
})

app.get('/', (req, res, next) => {
  res.send('Node is running on port ' + port)
})

app.post('/webhook', (req, res, next) => {
  res.status(200).end()
  for (let event of req.body.events) {

    if (event.type == 'message' && event.message.text != '') {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
      }
      /*
      //message test
      var body = {
          replyToken: event.replyToken,
          messages: [{
              type: 'text',
              text: event.message.text
          }]
      }
      */
      //button template
      const body = {
        replyToken: event.replyToken,
        messages: [{
          'type': 'template',
          'altText': 'this is a buttons template',
          'template': {
            'type': 'buttons',
            'thumbnailImageUrl': 'https://example.com/bot/images/image.jpg',
            'title': event.message.text,
            'text': 'Please select',
            'actions': [
              {
                'type': 'postback',
                'label': 'Buy',
                'data': 'action=buy&itemid=123'
              },
              {
                'type': 'postback',
                'label': 'Add to cart',
                'data': 'action=add&itemid=123'
              },
              {
                'type': 'uri',
                'label': 'View detail',
                'uri': 'http://example.com/page/123'
              }
            ]
          }
        }]
      }

      const url = 'https://api.line.me/v2/bot/message/reply'
      request({
        url: url,
        method: 'POST',
        headers: headers,
        body: body,
        json: true
      })
    }

    if (event.type == 'postback') {
      console.log('postback!!!!')
      console.log(event)
    }

  }
})
