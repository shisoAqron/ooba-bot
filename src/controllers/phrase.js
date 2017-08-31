export default async (event, client) => {

  // 質問集とユーザの返し集
  const question_1 = () => {
    return [
      {
        type: 'text',
        text: '早速たよってくれてありがと􀀇􀀹􀁵'
      },
      {
        'type': 'template',
        'altText': 'そうね…例えばどんなグラスを探したい？',
        'template': {
          'type': 'buttons',
          'text': 'そうね…例えばどんなグラスを探したい？',
          'actions': [
            {
              'type': 'postback',
              'label': '普段使うグラス',
              'data': 'answer=nomal&questionId=1',
              'text': '普段使いのものを探してるんだけど…'
            },
            {
              'type': 'postback',
              'label': '特別な日のグラス',
              'data': 'answer=special&questionId=1',
              'text': '特別な日に使うものを用意したいんだけど…'
            }
          ]
        }
      }
    ]
  }
  const answer_1 = [
    '普段使いのものを探してるんだけど…',
    '特別な日に使うものを用意したいんだけど…'
  ]

  const question_2 = (ans) => {
    return [
      {
        'type': 'template',
        'altText': 'そっか～！それって自分用？それとも誰かにプレゼント？',
        'template': {
          'type': 'buttons',
          'text': 'そっか～！それって自分用？それとも誰かにプレゼント？',
          'actions': [
            {
              'type': 'postback',
              'label': '自分用に',
              'data': 'answer=self&questionId=2',
              'text': '自分用のを探してるよ'
            },
            {
              'type': 'postback',
              'label': '誰かに贈りたい',
              'data': 'answer=present&questionId=2',
              'text': 'プレゼントとして贈りたくて…'
            },
            {
              'type': 'postback',
              'label': 'ペアで買いたい',
              'data': 'answer=pair&questionId=2',
              'text': '実はペアで買えるのを探してて…'
            },
            {
              'type': 'postback',
              'label': 'パーティー用に復数',
              'data': 'answer=party&questionId=2',
              'text': 'パーティー用に良いのないかなって'
            }
          ]
        }
      }
    ]
  }
  const answer_2 = [
    '自分用のを探してるよ',
    'プレゼントとして贈りたくて…',
    '実はペアで買えるのを探してて…',
    'パーティー用に良いのないかなって'
  ]

  //imagemap用object messageだとuriかmessage返答のみらしい
  const question_3 = (ans) => {
    return [
      {
        type: 'text',
        text: 'そうなんだ！ピッタリなの見つけようね􀀁'
      },
      {
        type: 'text',
        text: 'どんなのが良いかな～􀂬􀂬\n' + 'ビールによって、合うグラスも色々あるの􀀮􀁵\n' + '今回はどんなビールに合わせたい？'
      },
      {
        'type': 'imagemap',
        'baseUrl': 'https://yoohoo.ferix.jp/3008/images/question3',
        'altText': 'グラスを選んでね',
        'baseSize': {
          'height': 1040,
          'width': 1040
        },
        'actions': [
          {
            'type': 'message',
            'text': 'ゴールド、ブラウンタイプ',
            'area': {
              'x': 0,
              'y': 0,
              'width': 520,
              'height': 520
            }
          },
          {
            'type': 'message',
            'text': 'ブラックタイプ',
            'area': {
              'x': 520,
              'y': 0,
              'width': 520,
              'height': 520
            }
          },
          {
            'type': 'message',
            'text': 'ホワイトタイプ',
            'area': {
              'x': 0,
              'y': 520,
              'width': 346,
              'height': 520
            }
          },
          {
            'type': 'message',
            'text': 'ストロングタイプ',
            'area': {
              'x': 347,
              'y': 520,
              'width': 346,
              'height': 520
            }
          },
          {
            'type': 'message',
            'text': 'IPA',
            'area': {
              'x': 793,
              'y': 520,
              'width': 347,
              'height': 520
            }
          },
        ]
      }

    ]
  }
  const answer_3 = [
    'ゴールド、ブラウンタイプ',
    'ブラックタイプ',
    'ホワイトタイプ',
    'ストロングタイプ',
    'IPA'
  ]

  const question_4 = (ans) => {
    return [
      {
        type: 'text',
        text: ans + 'ね！オッケ～􀀳􀀈'
      },
      {
        'type': 'template',
        'altText': 'ちなみに、見た目のこだわりってある？',
        'template': {
          'type': 'buttons',
          'text': 'ちなみに、見た目のこだわりってある？',
          'actions': [
            {
              'type': 'postback',
              'label': 'ちょっと変わったデザイン',
              'data': 'answer=unique&questionId=4',
              'text': 'やっぱり、ひと工夫あるやつだよね'
            },
            {
              'type': 'postback',
              'label': 'シンプルなデザイン',
              'data': 'answer=simple&questionId=4',
              'text': 'シンプルなのものが良いな'
            }
          ]
        }
      }
    ]
  }
  const answer_4 = [
    'やっぱり、ひと工夫あるやつだよね',
    'シンプルなのものが良いな'
  ]

  const question_5 = async (ans) => {
    const userProfile = await client.getProfile(event.source.userId)
    return [
      {
        type: 'text',
        text: 'なるほどね！􀂟じゃあそういうグラスを探すわ􀀳􀀳'
      },
      {
        'type': 'template',
        'altText': userProfile.displayName + 'さんは、どれくらい飲むかで言えばどちらのタイプ？',
        'template': {
          'type': 'buttons',
          'text': userProfile.displayName + 'さんは、どれくらい飲むかで言えばどちらのタイプ？',
          'actions': [
            {
              'type': 'postback',
              'label': '少し飲めれば満足',
              'data': 'answer=little&questionId=5',
              'text': '少し飲めれば満足なタイプかな'
            },
            {
              'type': 'postback',
              'label': 'たくさん飲む',
              'data': 'answer=alotof&questionId=5',
              'text': 'たくさん飲むタイプかな'
            }
          ]
        }
      }
    ]
  }
  const answer_5 = [
    '少し飲めれば満足なタイプかな',
    'たくさん飲むタイプかな'
  ]

  const question_6 = (ans) => {
    return [
      {
        type: 'text',
        text: 'ありがと！ メモメモ～􀁬􀁁\nあとは貴方の好み次第ね！􀀅􀀷'
      },
      {
        'type': 'template',
        'altText': 'じゃあ最後の質問ね！貴方にとってビールといえば…？',
        'template': {
          'type': 'buttons',
          'text': 'じゃあ最後の質問ね！\n貴方にとってビールといえば…？',
          'actions': [
            {
              'type': 'postback',
              'label': 'のどごしでしょ！',
              'data': 'answer=throat&questionId=6',
            },
            {
              'type': 'postback',
              'label': '香りでしょ！',
              'data': 'answer=flavor&questionId=6',
            }
          ]
        }
      }
    ]
  }

  const question_7 = (ans) => {
    return [
      {
        type: 'text',
        text: '沢山教えてくれてありがとう～􀂱􀂝\n貴方にオススメのグラス、探してきたよ♪\n今回のオススメは、このグラス􀀬'
      },
      {
        'type': 'template',
        'altText': '麗(うるわし)',
        'template': {
          'type': 'buttons',
          'thumbnailImageUrl': 'https://shokki-pro.com/upload/save_image/dg-29540.jpg',
          'title': '麗(うるわし)',
          'text': '2,440 円 (税込 2,635円)',
          'actions': [
            {
              'type': 'uri',
              'label': '詳細を見る',
              'uri': 'https://shokki-pro.com/products/detail.php?product_id=26836'
            }
          ]
        }
      },
      {
        type: 'text',
        text: 'このグラスは●●って言う種類で、▲▲ビールにピッタリなの。􀁘􀂖\n飲み口がXXXだからXXXXに適してるし、XXXXなんだって。\nこのグラスならXXXXの時に最適ね！􀀳􀀧'
      },
      {
        'type': 'template',
        'altText': 'どう？　このグラスは気に入った？',
        'template': {
          'type': 'confirm',
          'text': 'どう？　このグラスは気に入った？',
          'actions': [
            {
              'type': 'postback',
              'label': '気に入った！',
              'data': 'answer=yes&questionId=7',
              'text': '気に入った！'
            },
            {
              'type': 'postback',
              'label': 'ちょっと違うかな？',
              'data': 'answer=no&questionId=7',
              'text': 'ちょっと違うかな？'
            }
          ]
        }
      }
    ]
  }
  const answer_7 = [
    '気に入った！',
    'ちょっと違うかな？'
  ]

  const question_8 = (ans) => {
    if (ans == 'yes') {
      return [
        {
          'type': 'template',
          'altText': 'よかった～ グラスはここから買えるよ',
          'template': {
            'type': 'buttons',
            'text': 'よかった～\nグラスはここから買えるよ',
            'actions': [
              {
                'type': 'uri',
                'label': '購入ページへ',
                'uri': 'https://shokki-pro.com/products/detail.php?product_id=26836',
              }
            ]
          }
        }
      ]
    } else {
      return [
        {
          type: 'text',
          text: 'あら、ちょっと外れちゃった？ゴメンね􀀩'
        },
        {
          'type': 'template',
          'altText': '他も探してみよっか？',
          'template': {
            'type': 'buttons',
            'text': '他も探してみよっか？',
            'actions': [
              {
                'type': 'postback',
                'label': '違う形状で探してみる',
                'data': 'answer=shape&questionId=8',
              },
              {
                'type': 'postback',
                'label': '違う大きさで探してみる',
                'data': 'answer=size&questionId=8',
              }
            ]
          }
        }

      ]
    }
  }

  // botへの返しを拾わないようにする
  const checkAnswer = (mes, ansList) => {
    let exist = false
    for (let ans of ansList) {
      if (mes.match(ans)) {
        exist = true
        break
      }
    }
    return exist
  }
  const buttonAns = answer_1.concat(answer_2, answer_4, answer_5, answer_7)
  const greeting = ['おはよう', 'こんにちは', 'こんばんは']

  // 想定していないユーザ発言への返し
  const failed = (mes) => {
    const randomNum = Math.floor( Math.random() * 5 )
    let text = ''
    switch (randomNum) {
      case 1:
        text = 'ちょっとわかんないなぁ􀀩'
        break

      case 2:
        text = 'う〜ん􀂎'
        break

      case 3:
        text = '􀂉􀀶􀀶􀀶'
        break

      case 4:
        text = mes + '􀀉􀀶'
        break

      default:
        text = 'え？なぁに～？􀀯􀀶'
        break
    }

    return [{
      type: 'text',
      text: text
    }]
  }

  // 何も行わない場合はnullを返しておく -> index.jsの方で判定
  // messageの対応 質問開始や雑談、imagemapの選択処理を行う
  if (event.type == 'message') {
    const reciveMessage = event.message.text

    // リッチメニューからのテキストをユーザ発言させる
    if (reciveMessage.match(/グラス/)) {
      return question_1()

    // imagemapの回答はpostbackが利用できないのでtextから
    } else if (checkAnswer(reciveMessage, answer_3)) {
      return question_4(reciveMessage)

    // ボタンを押した際のユーザ発言に反応させない
    } else if (checkAnswer(reciveMessage, buttonAns)) {
      return null

    // あいさつにはおうむ返し TODO:できればキャラクターぽさを出した半固定文にしたい
    } else if (checkAnswer(reciveMessage, greeting)) {
      return [{type: 'text', text: reciveMessage}]

    } else {
      return failed(reciveMessage)
    }

  // postbackの対応 dataから次の質問の順番管理をする
  } else if (event.type == 'postback') {
    const query = event.postback.data.match(/answer=(.*)&questionId=(\d+)/)
    const [answer, questionId] = [query[1], Number(query[2])]
    console.log('questionId:' + questionId, 'answer:' + answer)

    // question3->4への移行時には利用しないが、おそらく問題なし
    return questionId < 8 ? eval('question_' + (questionId + 1) + '(answer)') : null

  // followイベントの対応
  } else if (event.type == 'follow') {
    const userProfile = await client.getProfile(event.source.userId)
    return [{
      type: 'text',
      text: '友達登録ありがとう～􀂱􀀭' + '\n'
              + 'とっておきのグラス選びなら私に任せて􀀹􀀅' + '\n'
              + userProfile.displayName + 'さんが好きそうなのオススメ出来るよう頑張っちゃう􀁿􀂱􀀱'
    }]
  }
}