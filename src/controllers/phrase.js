export default async (event) => {

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
              'text': '普段使いのグラスを探してるんだけど…'
            },
            {
              'type': 'postback',
              'label': '特別な日のグラス',
              'data': 'answer=special&questionId=1',
              'text': '特別な日のためにグラスを用意したいんだけど…'
            }
          ]
        }
      }
    ]
  }
  const answer_1 = [
    '普段使いのグラスを探してるんだけど…',
    '特別な日のためにグラスを用意したいんだけど…'
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
              'label': '自分と誰かのペアで買いたい',
              'data': 'answer=pair&questionId=2',
              'text': '実はペアグラスを探してて…'
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
    '実はペアグラスを探してて…',
    'パーティー用に良いのないかなって'
  ]

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
        'type': 'template',
        'altText': 'グラスを選んでね',
        'template': {
          'type': 'carousel',
          'columns': [
            {
              'thumbnailImageUrl': 'https://example.com/bot/images/item1.jpg',
              'title': 'ゴールド、ブラウンタイプ',
              'text': 'ゴールド、ブラウンタイプ',
              'actions': [
                {
                  'type': 'postback',
                  'label': 'これ！',
                  'data': 'answer=gold&questionId=3',
                }
              ]
            },
            {
              'thumbnailImageUrl': 'https://example.com/bot/images/item1.jpg',
              'title': 'ブラックタイプ',
              'text': 'ブラックタイプ',
              'actions': [
                {
                  'type': 'postback',
                  'label': 'これ！',
                  'data': 'answer=black&questionId=3',
                }
              ]
            },
            {
              'thumbnailImageUrl': 'https://example.com/bot/images/item1.jpg',
              'title': 'ホワイトタイプ',
              'text': 'ホワイトタイプ',
              'actions': [
                {
                  'type': 'postback',
                  'label': 'これ！',
                  'data': 'answer=white&questionId=3',
                }
              ]
            },
            {
              'thumbnailImageUrl': 'https://example.com/bot/images/item1.jpg',
              'title': 'ストロングタイプ',
              'text': 'ストロングタイプ',
              'actions': [
                {
                  'type': 'postback',
                  'label': 'これ！',
                  'data': 'answer=strong&questionId=3',
                }
              ]
            },
            {
              'thumbnailImageUrl': 'https://example.com/bot/images/item1.jpg',
              'title': 'IPA',
              'text': 'IPA',
              'actions': [
                {
                  'type': 'postback',
                  'label': 'これ！',
                  'data': 'answer=ipa&questionId=3',
                }
              ]
            }

          ]
        }
      }]
  }

  const question_4 = (ans) => {
    let beerType = 'err'
    switch (ans) {
      case 'gold':
        beerType = 'ゴールドかブラウン'
        break

      case 'black':
        beerType = 'ブラックタイプ'
        break

      case 'white':
        beerType = 'ホワイトタイプ'
        break

      case 'strong':
        beerType = 'ストロングタイプ'
        break

      case 'ipa':
        beerType = 'IPA'
        break

      default:
        break
    }

    return [
      {
        type: 'text',
        text: beerType + 'ね！オッケ～􀀈􀀳'
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
              'text': 'やっぱり、ひと工夫あるグラスだよね'
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
    'やっぱり、ひと工夫あるグラスだよね',
    'シンプルなのものが良いな'
  ]

  const question_5 = (ans) => {
    return [
      {
        type: 'text',
        text: 'なるほどね！􀂟じゃあそういうグラスを探すわ􀀳􀀳'
      },
      {
        'type': 'template',
        'altText': 'あっ そうそう、グラスの大きさにも色々あるけれど…あなたの好みはどの辺りかしら？',
        'template': {
          'type': 'buttons',
          'text': 'あっ そうそう、グラスの大きさにも色々あるけれど…\nあなたの好みはどの辺りかしら？',
          'actions': [
            {
              'type': 'postback',
              'label': '大きめ',
              'data': 'answer=large&questionId=5',
              'text': '大きめのグラスがいいな'
            },
            {
              'type': 'postback',
              'label': '中くらい',
              'data': 'answer=middle&questionId=5',
              'text': '中くらいのグラスがいいな'
            },
            {
              'type': 'postback',
              'label': '小さめ',
              'data': 'answer=small&questionId=5',
              'text': '小さめのグラスがいいな'
            }
          ]
        }
      }
    ]
  }
  const answer_5 = [
    '大きめのグラスがいいな',
    '中くらいのグラスがいいな',
    '小さめのグラスがいいな'
  ]

  const question_6 = (ans) => {
    return [
      {
        type: 'text',
        text: 'ありがと！ メモメモ～􀁬􀁁\nあとは貴方の好み次第ね！􀀅􀀷'
      },
      {
        'type': 'template',
        'altText': '飲み方の好みで言えば、どっちのタイプ？',
        'template': {
          'type': 'buttons',
          'text': '飲み方の好みで言えば、どっちのタイプ？',
          'actions': [
            {
              'type': 'postback',
              'label': '一気にグビッと',
              'data': 'answer=alotof&questionId=6',
              'text': '一気にグビッと飲むのが好き！'
            },
            {
              'type': 'postback',
              'label': '少しずつゆっくり飲む',
              'data': 'answer=little&questionId=6',
              'text': '少しずつちびちびいくタイプかな'
            }
          ]
        }
      }
    ]
  }
  const answer_6 = [
    '一気にグビッと飲むのが好き！',
    '少しずつちびちびいくタイプかな'
  ]

  const question_7 = (ans) => {
    return [
      {
        type: 'text',
        text: 'へぇ～！そうなんだ！􀀭􀀭􀂌'
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
              'label': '味でしょ！',
              'data': 'answer=taste&questionId=7',
            },
            {
              'type': 'postback',
              'label': 'のどごしでしょ！',
              'data': 'answer=throat&questionId=7',
            },
            {
              'type': 'postback',
              'label': '香りでしょ！',
              'data': 'answer=flavor&questionId=7',
            }
          ]
        }
      }
    ]
  }

  const question_8 = (ans) => {
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
              'data': 'answer=yes&questionId=8',
              'text': '気に入った！'
            },
            {
              'type': 'postback',
              'label': 'ちょっと違うかな？',
              'data': 'answer=no&questionId=8',
              'text': 'ちょっと違うかな？'
            }
          ]
        }
      }
    ]
  }
  const answer_8 = [
    '気に入った！',
    'ちょっと違うかな？'
  ]

  const question_9 = (ans) => {
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
                'data': 'answer=shape&questionId=9',
              },
              {
                'type': 'postback',
                'label': '違う大きさで探してみる',
                'data': 'answer=size&questionId=9',
              }
            ]
          }
        }

      ]
    }
  }

  // botへの返しを拾わないようにする
  const ansList = answer_1.concat(answer_2, answer_4, answer_5, answer_6, answer_8)
  const checkAnswer = (mes) => {
    let exist = false
    for (let ans of ansList) {
      if (mes == ans) {
        exist = true
        break
      }
    }
    return exist
  }

  // 想定していないユーザ発言への返し
  const failed = () => {
    return [{
      type: 'text',
      text: 'え？なぁに～？􀀯􀀶'
    }]
  }

  // 何も行わない場合はnullを返しておく -> index.jsの方で判定s
  if (event.type == 'message') {
    const reciveMessage = event.message.text

    // リッチメニューからのテキストをユーザ発言させる
    if (reciveMessage.match(/^なにか良いグラスない？$/)) {
      return question_1()

    } else if (checkAnswer(reciveMessage)) {
      return null

    } else {
      return failed()
    }

  // postbackのdataから次の質問管理と選択内容把握（未実装）する
  } else if (event.type == 'postback') {
    const query = event.postback.data.match(/answer=(.*)&questionId=(\d+)/)
    const [answer, questionId] = [query[1], Number(query[2])]
    console.log('questionId:' + questionId, 'answer:' + answer)

    let body = null
    if (questionId < 9) body = eval('question_' + (questionId + 1) + '(answer)')
    return body
  }
}