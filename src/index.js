import fs  from 'fs'
import express from 'express'
import controller from './controllers'
import {Client, middleware} from '@line/bot-sdk'

const tokenObj = JSON.parse(fs.readFileSync('./token.json', 'utf8'))
const config = {
  channelAccessToken: tokenObj.line.Channel_Access_Token,
  channelSecret: tokenObj.line.Channel_Secret
}

const app = express()

app.post('/webhook', middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
})

const client = new Client(config)

const handleEvent = async (event) => {
  //console.log(event)
  if (event.type == 'postback') {
    console.log('postback!!!')
    console.log(event)
    return Promise.resolve(null)

  } else if (event.type == 'message' && event.message.type == 'text') {
    console.log(event)
    const textObj = await controller.phrase(event.message.text)
    return client.replyMessage(event.replyToken, textObj)

  } else if (event.type == 'follow') {
    const userProfile = await client.getProfile(event.source.userId)
    console.log('displayName:'+userProfile.displayName)
    return client.replyMessage(event.replyToken,
      {
        type: 'text',
        text: '友達登録ありがとう～􀂱􀀭'+'¥n'
              +'XXXなグラス選びなら私に任せて􀀹􀀅'+'¥n'
              +userProfile.displayName
              +'さんが好きそうなの'+'¥n'
              +'オススメ出来るよう頑張っちゃう􀁿􀂱􀀱'
      }
    )

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