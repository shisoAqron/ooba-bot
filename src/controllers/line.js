import request from 'request'
import phrase from './phrase'

export default async (APItoken, data, callback) => {
  const event = data.events[0]

  const reply = (messageObj) =>  {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + APItoken
    }
    const body = {
      replyToken: event.replyToken,
      messages: messageObj
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

  /* スタンプを送られた場合は別 */
  if (event.type == 'message') {
    const receiveMessage = event.message
    if (receiveMessage.type == 'text' && receiveMessage.text != '') {
      console.log(event)

      let replyObj = await phrase(receiveMessage.text)
      reply(replyObj)
    }
  } else if (event.type == 'postback') {
    console.log('postback!!!')
    console.log(event)
  } else {
    console.log('other event!!!')
    console.log(event)
  }

}