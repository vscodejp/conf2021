type TrackID = 'track1' | 'track2'
type PersonType = 'presenter' | 'inviter'

interface ITrack {
  isEmpty: boolean
  isRest: boolean
  trackId: TrackID
  personType?: PersonType
  presenterName?: string
  presenterBio?: string
  presenterTitle?: string
  presenterUrl?: string
}

interface ISession {
  tracks: Array<ITrack>
  startTime: string
  endTime: string
}

export const tracks: TrackID[] = ['track1', 'track2']

export const sessions: Array<ISession> = [
  {
    tracks: [
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track1',
        personType: 'inviter',
        presenterName: '藤井太洋',
        presenterBio:
          '自分のキャリアのスタートはiOSネイティブアプリのエンジニアとして開始した。アプリエンジニアとして業務を通じ基礎的なコーディングを取得しながら、その裏側で動く管理画面 (PHP) のUX改善にも取り組んだ。こうしたWebの改善プロセスを経る部分にひとつの魅力を感じ、Node.jsを始めとしたフロントエンドやCSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み込んだ。',
        presenterTitle: '招待講演 VS Codeで小説を書く',
        presenterUrl: '',
      },
      {
        isEmpty: true,
        isRest: false,
        trackId: 'track2',
      },
    ],
    startTime: '1300',
    endTime: '1320',
  },
  {
    tracks: [
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track1',
      },
      {
        isEmpty: true,
        isRest: false,
        trackId: 'track2',
      },
    ],
    startTime: '1320',
    endTime: '1330',
  },
  {
    tracks: [
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'Atsushi Morimoto',
        presenterTitle: 'PlatformIO で シュッと Arduino 開発を高速化しよう',
        presenterUrl: '',
      },
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track2',
        personType: 'presenter',
        presenterName: 'Takekazuomi',
        presenterTitle: 'bicep + vscode でらくらくAzure Deploy',
        presenterUrl: '',
      },
    ],
    startTime: '1330',
    endTime: '1400',
  },
  {
    tracks: [
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track1',
      },
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track2',
      },
    ],
    startTime: '1400',
    endTime: '1410',
  },
  {
    tracks: [
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'kyusque',
        presenterTitle: 'github.devでマイナー言語のシンタックスハイライト',
        presenterUrl: '',
      },
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track2',
        personType: 'presenter',
        presenterName: 'えんでぃ',
        presenterTitle: 'AnsibleユーザーのためのVS Code拡張機能の紹介',
        presenterUrl: '',
      },
    ],
    startTime: '1410',
    endTime: '1425',
  },
  {
    tracks: [
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'miekoma',
        presenterTitle: 'VSの中心で、COBOLを叫ぶ',
        presenterUrl: '',
      },
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track2',
        personType: 'presenter',
        presenterName: 'ロフトくん',
        presenterTitle:
          'ドキュメント作成だけではもったいない！VSCode + Markdownで発表スライドや書籍も書いちゃおう！',
        presenterUrl: '',
      },
    ],
    startTime: '1425',
    endTime: '1440',
  },
  {
    tracks: [
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track1',
      },
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track2',
      },
    ],
    startTime: '1440',
    endTime: '1450',
  },
  {
    tracks: [
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'Ryo Nakamaru',
        presenterTitle: 'コンテナ / k8s アプリ開発を支援する Google のプラグイン Cloud Code',
        presenterUrl: '',
      },
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track2',
        personType: 'presenter',
        presenterName: 'Karan Balkar',
        presenterTitle: 'How we used the Live Share extension to reduce our issue resolution time?',
        presenterUrl: '',
      },
    ],
    startTime: '1450',
    endTime: '1520',
  },
  {
    tracks: [
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track1',
      },
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track2',
      },
    ],
    startTime: '1520',
    endTime: '1530',
  },
  {
    tracks: [
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'Kazuya Houdatsu',
        presenterTitle:
          '今やVSCodeで、クラウドサーバレス・コンテナ開発だってできる！（AWS/OpenShift）',
        presenterUrl: '',
      },
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track2',
        personType: 'presenter',
        presenterName: 'Marcell Endrey',
        presenterTitle: 'vim in VS Code: the best of both worlds',
        presenterUrl: '',
      },
    ],
    startTime: '1530',
    endTime: '1600',
  },
  {
    tracks: [
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track1',
      },
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track2',
      },
    ],
    startTime: '1600',
    endTime: '1610',
  },
  {
    tracks: [
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track1',
        personType: 'presenter',
        presenterName: '松村優大',
        presenterTitle: 'VSCodeで始めるAzure Static Web Apps開発',
        presenterUrl: '',
      },
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track2',
        personType: 'presenter',
        presenterName: 'ypresto',
        presenterTitle: 'VS Codeのプロセスモデルとデバッグ方法 〜パフォーマンスの視点から〜',
        presenterUrl: '',
      },
    ],
    startTime: '1610',
    endTime: '1640',
  },
  {
    tracks: [
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track1',
      },
      {
        isEmpty: true,
        isRest: true,
        trackId: 'track2',
      },
    ],
    startTime: '1640',
    endTime: '1650',
  },
  {
    tracks: [
      {
        isEmpty: false,
        isRest: false,
        trackId: 'track1',
        presenterName: '',
        presenterTitle: 'LT',
        presenterUrl: '',
      },
      {
        isEmpty: true,
        isRest: false,
        trackId: 'track2',
      },
    ],
    startTime: '1650',
    endTime: '1710',
  },
]
