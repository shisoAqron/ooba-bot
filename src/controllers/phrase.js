export default async (reciveMessage) => {

  const failed = () => {
    return [{
      type: 'text',
      text: 'え？なぁに～？􀀯􀀶'
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

  const question_1 = () => {
    return [
      {
        type: 'text',
        text: '早速たよってくれてありがと􀀇􀀹􀁵'
      },
      {
        'type': 'template',
        'altText': 'this is a buttons template',
        'template': {
          'type': 'buttons',
          'title': 'そうね…例えばどんなグラスを探したい？',
          'text': 'Please select',
          'actions': [
            {
              'type': 'postback',
              'label': '普段使うグラス',
              'data': 'action=nomal&qestionId=1',
              'text': '普段使いのグラスを探してるんだけど…'
            },
            {
              'type': 'postback',
              'label': '特別な日のグラス',
              'data': 'action=special&questionId=1',
              'text': '特別な日のためにグラスを用意したいんだけど…'
            }
          ]
        }
      }
    ]
  }

  const question_2 = () => {
    return [
      {
        'type': 'template',
        'altText': 'this is a buttons template',
        'template': {
          'type': 'buttons',
          'text': 'そっか～！それって自分用？それとも誰かにプレゼント？􀁵',
          'actions': [
            {
              'type': 'postback',
              'label': '自分用に',
              'data': 'action=self&qestionId=2',
              'text': '自分用のを探してるよ'
            },
            {
              'type': 'postback',
              'label': '誰かに贈りたい',
              'data': 'action=present&questionId=2',
              'text': 'プレゼントとして贈りたくて…'
            },
            {
              'type': 'postback',
              'label': '自分と誰かのペアで買いたい',
              'data': 'action=pair&questionId=2',
              'text': '実はペアグラスを探してて…'
            },
            {
              'type': 'postback',
              'label': 'パーティー用に復数',
              'data': 'action=party&questionId=2',
              'text': 'パーティー用に良いのないかなってs'
            }
          ]
        }
      }
    ]

  }

  const test = () => {
    return [{
      type: 'text',
      text:'友達登録ありがとう～􀂱􀀭'+'¥n'
          +'XXXなグラス選びなら私に任せて􀀹􀀅'+'¥¥n'
          +'hogehoge'
          +'さんが好きそうなの'+'¥u0x0A'
          +'オススメ出来るよう頑張っちゃう􀁿􀂱􀀱'
    }]
  }

  const checkAnswer = (ans1, ans2) => {
    if (reciveMessage == ans1 || reciveMessage == ans2) return true
    else false
  }

  if (reciveMessage.match(/^なにか良いグラスない？$/)) {
    return question_1()
  } else if (checkAnswer('普段使いのグラスを探してるんだけど…', '特別な日のためにグラスを用意したいんだけど…')) {
    return question_2()
    //質問２の後に相槌を入れたい
  } else if (reciveMessage.match(/^B$/)) {
    return test()
  } else {
    return failed()
  }
}