import { ISession, TrackID, TrackName } from '../types/session'

export const tracks: TrackID[] = ['track1', 'track2']

export const trackNames: TrackName[] = ['Track A', 'Track B']

export const sessions: ISession[] = [
  {
    title: '招待講演 VS Codeで小説を書く',
    description:
      '自分のキャリアのスタートはiOSネイティブアプリのエンジニアとして開始した。アプリエンジニアとして業務を通じ基礎的なコーディングを取得しながら、その裏側で動く管理画面 (PHP) のUX改善にも取り組んだ。こうしたWebの改善プロセスを経る部分にひとつの魅力を感じ、Node.jsを始めとしたフロントエンドやCSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み込んだ。',
    started_at: '1300',
    ended_at: '1320',
    speaker: {
      name: '藤井太洋',
      affiliation:
        'SF作家です。『Gene Mapper』でデビューして『オービタル・クラウド』で日本SF大賞を取りました。VS Codeで執筆を支援する機能拡張「novel-writer」を作っています。',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track A',
    type: 'inviter',
    isLive: true,
  },
  {
    title: '',
    description: '',
    started_at: '1300',
    ended_at: '1320',
    area: 'Track B',
  },
  {
    title: 'PlatformIO で シュッと Arduino 開発を高速化しよう',
    description:
      '近年 Arduino を使った IoT 機器の開発が電子工作でもよく行われるようになりました\nかつての組み込みソフトウェアの開発では、マイコンベンダーが提供する IDE を使用するのが当たり前でした。\n現在は、PlatformIO を使うことによって、組み込みソフトウェアの開発をシュッっと行ことができます。\nPlatformIO は、 VS Code の拡張機能として、環境構築からビルド、アップロード、デバッグまでの一連のワークフローを提供してくれます。\n本セッションでは、Arduino 開発で PlatformIO を使う場合、PlatformIO が何を担ってくれるのかを解説しながら、実際に VS Code でどのように開発ができるのかを説明していきます。\n「環境の構築」「ビルドとマイコンの書き込み」「ユニットテスト」「デバッグ実行」について、扱う予定です。既存のサーバソフトウェアの開発と大きく変わらないことがおわかりいただけると思います。\nなお、本講演のスピーカーは、組み込み機器を専門にしたエンジニアではなく、電子工作を楽しむホビーユーザです。',
    started_at: '1330',
    ended_at: '1400',
    speaker: {
      name: 'Atsushi Morimoto',
      affiliation:
        'AIよりのサーバサイドエンジニア。著書『Visual Studio Code実践ガイド』。技術書典でVS Code関連同人誌を多数。',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track A',
    type: 'presenter',
    isLive: true,
  },
  {
    title: 'bicep + vscode でらくらくAzure Deploy',
    description:
      'ARM Template DSLのBicepを開発してるTeamは、同時に VS Code Pluginも作っています。ARM Template の抱えてる書いづらいという大きな課題を、Bicepへの型の導入、VS Codeの支援などを使ってどのように改善しているのかを主題に機能を紹介します。',
    started_at: '1330',
    ended_at: '1400',
    speaker: {
      name: 'Takekazuomi',
      affiliation: 'どっぷりとAzure界隈で過ごしています。最近のお気にいりはBicepです。',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track B',
    type: 'presenter',
    isLive: true,
  },
  {
    title: 'github.devでマイナー言語のシンタックスハイライト',
    description:
      'github.devによるvscodeが実装されたことで、自前のvscode拡張があればgithub.comが対応していないようなマイナー言語(DSLなど)のシンタックスハイライトがブラウザ上で行えるようになりました。このセッションでは自分でシンタックスハイライトのvscode拡張を作ってgithub.devで利用できるようにするまでの流れを説明します。',
    started_at: '1410',
    ended_at: '1425',
    speaker: {
      name: 'kyusque',
      affiliation:
        'きゅーすけです。普段は分子シミュレーションの研究をやっています。今回は研究で利用するDSLを使っていく中で、vscodeを便利に使う方法を共有したいと考えています。行き当たりでの対応が多く網羅的には紹介できないので、至らない部分はSNSなどで逆にアドバイスしてもらえると助かります。',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track A',
    type: 'presenter',
    isLive: true,
  },
  {
    title: 'AnsibleユーザーのためのVS Code拡張機能の紹介',
    description: 'Ansible拡張機能の基本機能、カスタマイズを紹介します。',
    started_at: '1410',
    ended_at: '1425',
    speaker: {
      name: 'えんでぃ',
      affiliation:
        '都内でネットワークエンジニアをしています。作業効率化やシステムの可視化に興味があり、AnsibleやPythonを勉強中です。',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track B',
    type: 'presenter',
    isLive: true,
  },
  {
    title: 'VSの中心で、COBOLを叫ぶ',
    description:
      'IBMのメインフレーム z/OSの端末と言えば黒画面に緑文字のCUIを連想されがちですが、実はVS Codeでz/OSアプリケーション開発ができるんです。 COBOL、PL/Iはもちろん、アセンブラーやJCLにも対応した開発支援機能でメインフレーム・アプリ開発が捗ります。 さらに、VS Codeからz/OS環境に接続して、z/OS上のソースを直接編集したり、コンパイルやジョブ実行も可能という充実っぷりです。 メインフレーム何それ？という方には響かないかもしれない、VS Codeがレガシーな世界にもたらした進化をご紹介します。',
    started_at: '1425',
    ended_at: '1440',
    speaker: {
      name: 'miekoma',
      affiliation:
        'IBM入社以来メインフレーム・ミドルウェア一筋の技術者。最近、メインフレーム愛をもっと広めたくなりカスタマーサクセスマネージャーに転身。',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track A',
    type: 'presenter',
    isLive: true,
  },
  {
    title:
      'ドキュメント作成だけではもったいない！VSCode + Markdownで発表スライドや書籍も書いちゃおう！',
    description:
      'VSCodeでMarkdown記法によるドキュメント執筆に役立つTipsを紹介するとともに、Markdownをベースとしてプレゼン用のスライドや書籍(epub)を作成する方法・ノウハウについてご紹介します。',
    started_at: '1425',
    ended_at: '1440',
    speaker: {
      name: 'ロフトくん',
      affiliation:
        'VSCode歴は3年ほど、その前は秀丸使いでした。ピアノと将棋が好き。業務は様々なOSSのサポートなど。出身研究室にてITゼミの講師の副業もしています。',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track B',
    type: 'presenter',
    isLive: true,
  },
  {
    title: 'コンテナ / k8s アプリ開発を支援する Google のプラグイン Cloud Code',
    description:
      'いまや、クラウドでコンテナや k8s をベースにしたサービス運用は広く利用されるようになりました。そんなコンテナ前提のアプリケーション、ローカル開発はどのように行っていますでしょうか？コンテナを使っていない、または Docker compose を利用しているという方は多いのではないでしょうか。そんなあなたに知っていただきたい VS Code プラグインが Cloud Code です。これまでの方法と何が違うのか、どんな操作感になるのかをご紹介します！',
    started_at: '1450',
    ended_at: '1520',
    speaker: {
      name: 'Ryo Nakamaru',
      affiliation:
        'Google Cloud でアプリケーション・モダナイゼーションという分野でカスタマーエンジニアをしています。コンテナベースの開発・運用が好きすぎでして、今回そのよさをお伝えできればと思います！',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track A',
    type: 'presenter',
    isLive: false,
  },
  {
    title: 'How we used the Live Share extension to reduce our issue resolution time?',
    description:
      'This talk will explain how one can effectively use the live share extension pack to solve issues in real-time without relying on other services. It will also talk about some personal experiences that have helped reduce the resolution time for critical issues faced during project execution.',
    started_at: '1450',
    ended_at: '1520',
    speaker: {
      name: 'Karan Balkar',
      affiliation:
        'Karan Balkar is a mobile application developer primarily working on Android since the past 5 years. He has also worked on Augmented reality / Virtual reality based mobile applications and is passionate about exploring new innovative technologies.',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track B',
    type: 'presenter',
    isLive: false,
  },
  {
    title: '今やVSCodeで、クラウドサーバレス・コンテナ開発だってできる！（AWS/OpenShift）',
    description:
      '昨今では、各種クラウドベンダーにて、 サーバレス・コンテナの利用シーンが増えてきています。\nFaaSにおいても、内部的にはコンテナ技術が採用されており、Dockerなどのコンテナを用いたローカル開発に慣れておくことで、 クラウド環境へのDeploymentを行った際の環境差異が低減することができると考えており、 その実務は今までのオンプレ開発とどれだけ違うのか？がわかるように、今回は、FaaS・CaaS向け開発時の実例を２つお見せいたします。',
    started_at: '1530',
    ended_at: '1600',
    speaker: {
      name: 'Kazuya Houdatsu',
      affiliation:
        'IT業界に２０年ほどおり、アーキ設計大好きです。常に変革して「でっかいことをしたい」というなんとも漠然とした野望を持っています。LinkedInによく登場しますので、見かけたら気軽にお声がけください！',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track A',
    type: 'presenter',
    isLive: true,
  },
  {
    title: 'vim in VS Code: the best of both worlds',
    description:
      'When it comes to editing text, and especially code, vim is unbeatable in its precision, efficiency, and ergonomics. However, the application itself is not very inviting or friendly. The joke about vim beginners not being able to quit the software exists for a reason. And if you want proper coding assistance, you’ll have to roll up your sleeves and fiddle quite a lot with its plugins and configuration. VS Code on the other hand is extremely handy from the very beginning. It’s friendly, helpful, discoverable, and it’s easy to pick up without any targeted tutorial whatsoever. It also boasts a respectable array of functions that make it more like a full-fledged IDE than a simple code editor, though it still manages to stay snappy. Fortunately, you don’t have to make an either-or decision about which one to use, because with VS Code’s excellent vim plugin, you can combine the efficiency of vim with the comfort of VS Code to get the best of both worlds. This talk gives a short introduction to vim (no previous experience is required), explains how the VS Code plugin integrates the vim editing model with Code’s environment, and demonstrates how this combination can be used for increased efficiency and productivity.',
    started_at: '1530',
    ended_at: '1600',
    speaker: {
      name: 'Marcell Endrey',
      affiliation:
        'I am a senior frontend developer and tech lead at Prezi in Budapest, Hungary. I hold clean code in high regard, I like learning new things, and apart from coding I also enjoy teaching others how to code. My fun piece of trivia is that I am a five-time world champion in solving the Rubik’s Cube blindfolded.',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track B',
    type: 'presenter',
    isLive: false,
  },
  {
    title: 'VSCodeで始めるAzure Static Web Apps開発',
    description:
      'Single Page Applicationをホストすることに適したAzure Static Web Appsには、バックエンドAPI用のAzure Functionsが内包されている特殊さがあります。本セッションでは、VSCodeを使ったAzure Static Web Appsのローカル開発環境の作り方やデバッグ方法を紹介します。なお、JSフレームワークやバックエンドAPIのプログラミング言語は特に限定せず、基礎的な構成が中心となります。（コードサンプルはC#もしくはNodejsの予定です）',
    started_at: '1610',
    ended_at: '1640',
    speaker: {
      name: '松村優大',
      affiliation:
        'C#,PHP,Microsoft Azureを使っています。MLBが大好きです。\nFukuoka.NET主催、DevBlogラジオスピーカー。\nMicrosoft MVP(2016/10-)',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track A',
    type: 'presenter',
    isLive: true,
  },
  {
    title: 'VS Codeのプロセスモデルとデバッグ方法 〜パフォーマンスの視点から〜',
    description:
      'VSCodeはとても高速なのに、たまにもたついたり、CPUをとても使うときがありませんか？例えばVimやEmacsの拡張を使っていると、もたつきを顕著に感じることがあるはずです。\nVSCodeのパフォーマンスを支えるプロセスモデルについて説明し、そのデバッグ方法について紹介します。時間が許せば、実際に重い原因を見つけてPRした話も紹介します。',
    started_at: '1610',
    ended_at: '1640',
    speaker: {
      name: 'ypresto',
      affiliation:
        'Software Engineer & UI Designer. 食をDXするスタートアップで仕事しています。最近は主に.tsx (React)と.goを書いていて、TypeScriptにPRしたり、ライブラリの型定義をPRしたりもしています。',
      description: '',
      twitter: '',
      facebook: '',
    },
    area: 'Track B',
    type: 'presenter',
    isLive: true,
  },
]
