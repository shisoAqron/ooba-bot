export default async (reciveMessage) => {
  const mesTest = () => {
    return [{
      type: 'text',
      text: 'テスト文ですよ'
    }]
  }

  const failed = () => {
    return [{
      type: 'text',
      text: 'もう一度言ってね'
    }]
  }

  const buttonTest = () => {
    return [{
      'type': 'template',
      'altText': 'this is a buttons template',
      'template': {
        'type': 'buttons',
        'thumbnailImageUrl': 'https://example.com/bot/images/image.jpg',
        'title': 'ボタンテスト',
        'text': 'Please select',
        'actions': [
          {
            'type': 'postback',
            'label': 'A',
            'data': 'action=A&itemid=123'
          },
          {
            'type': 'postback',
            'label': 'B',
            'data': 'action=B&itemid=123'
          }
        ]
      }
    }]
  }

  const carouselTest = () => {
    return [{
      'type': 'template',
      'altText': 'this is a carousel template',
      'template': {
        'type': 'carousel',
        'columns': [
          {
            'thumbnailImageUrl': 'https://example.com/bot/images/item1.jpg',
            'title': 'this is menu',
            'text': 'description',
            'actions': [
              {
                'type': 'postback',
                'label': 'Buy',
                'data': 'action=buy&itemid=111'
              },
              {
                'type': 'postback',
                'label': 'Add to cart',
                'data': 'action=add&itemid=111'
              },
              {
                'type': 'uri',
                'label': 'View detail',
                'uri': 'http://example.com/page/111'
              }
            ]
          },
          {
            'thumbnailImageUrl': 'https://example.com/bot/images/item2.jpg',
            'title': 'this is menu',
            'text': 'description',
            'actions': [
              {
                'type': 'postback',
                'label': 'Buy',
                'data': 'action=buy&itemid=222'
              },
              {
                'type': 'postback',
                'label': 'Add to cart',
                'data': 'action=add&itemid=222'
              },
              {
                'type': 'uri',
                'label': 'View detail',
                'uri': 'http://example.com/page/222'
              }
            ]
          }
        ]
      }
    }]
  }

  console.log('reciveMessage:' + reciveMessage)
  if (reciveMessage.match(/テスト/)) {
    return mesTest()
  } else if (reciveMessage.match(/ボタン/)) {
    return buttonTest()
  } else if (reciveMessage.match(/カル/)) {
    return carouselTest()
  } else {
    return failed()
  }
}