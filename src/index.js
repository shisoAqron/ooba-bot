import fs  from 'fs'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import {Client, middleware} from '@line/bot-sdk'
import controller from './controllers'

const tokenPath = path.join(path.dirname(__dirname), 'token.json')
const tokenObj = JSON.parse(fs.readFileSync(tokenPath, 'utf8'))
const config = {
  channelAccessToken: tokenObj.line.Channel_Access_Token,
  channelSecret: tokenObj.line.Channel_Secret
}

const app = express()
app.use(middleware(config))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// 画像を静的に提供
app.use('/images', express.static(path.join(path.dirname(__dirname), 'images'), {extensions: ['png']}))

app.post('/webhook', (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
})

const client = new Client(config)
const handleEvent = async (event) => {
  if (event.type == 'message' || event.type == 'postback' || event.type == 'follow') {
    const textObj = await controller.phrase(event, client)
    return textObj == null ? Promise.resolve(null) : client.replyMessage(event.replyToken, textObj)

  } else {
    console.log('other event!!!')
    console.log(event)
    return Promise.resolve(null)
  }
}

const port = (process.env.PORT || 3000)
app.listen(port, () => {
  console.log('Node is running on port ' + port)
})