import fs  from 'fs'
import express from 'express'
import bodyParser from 'body-parser'
import {Client, middleware} from '@line/bot-sdk'
import controller from './controllers'

const tokenObj = JSON.parse(fs.readFileSync('./token.json', 'utf8'))
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

app.post('/webhook', (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
})

const client = new Client(config)

const handleEvent = async (event) => {
  if (event.type == 'message'|| event.type == 'postback') {
    const textObj = await controller.phrase(event)
    if (textObj == null) return Promise.resolve(null)
    else return client.replyMessage(event.replyToken, textObj)

  //友達登録時の処理 ブロックを解除したときにも発火する
  } else if (event.type == 'follow') {
    const userProfile = await client.getProfile(event.source.userId)
    return client.replyMessage(event.replyToken,
      {
        type: 'text',
        text: '友達登録ありがとう～􀂱􀀭'+'\n'
              +'XXXなグラス選びなら私に任せて􀀹􀀅'+'\n'
              +userProfile.displayName+'さんが好きそうなのオススメ出来るよう頑張っちゃう􀁿􀂱􀀱'
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