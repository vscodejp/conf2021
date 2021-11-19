import { FC } from 'react'
import i18next from 'i18next'
import ReactPlayer from 'react-player/lazy'
import styles from '../static/Home.module.scss'
import playerStyles from '../static/Player.module.scss'

export const PreEventPlayer: FC = () => {
  return (
    <div id={'player'} className={playerStyles.player}>
      <h1 className={styles.title}>{i18next.t('pre_event')}</h1>
      <p>{i18next.t('subscribing_to_the_youtube_channel')}</p>
      <ReactPlayer width={'100%'} url="https://youtu.be/Y8dl1y2qdG8" />
    </div>
  )
}

export const MainEventPlayer: FC = () => {
  return (
    <div id={'player'} className={playerStyles.player}>
      <h2>{'Handson'}</h2>
      <p>{i18next.t('subscribing_to_the_youtube_channel')}</p>
      <ReactPlayer width={'100%'} url="https://youtu.be/wmjX6-mDsME" />
      <h2>{'Track A'}</h2>
      <p>{i18next.t('subscribing_to_the_youtube_channel')}</p>
      <ReactPlayer width={'100%'} url="https://youtu.be/AAVTnEa4vEs" />
      <h2>{'Track B'}</h2>
      <p>{i18next.t('subscribing_to_the_youtube_channel')}</p>
      <ReactPlayer width={'100%'} url="https://youtu.be/J2li3qYgu9U" />
    </div>
  )
}
