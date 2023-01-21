import { FC } from 'root/react-app-env'
import { t } from 'i18next'
import styles from '@static/Player.module.scss'

export const MainEventPlayer: FC = () => {
  return (
    <section id={'player'} className={styles.wrapper}>
      <h2 style={{ textAlign: 'center' }}>{t('subscribing_to_the_youtube_channel')}</h2>
      <h3 style={{ textAlign: 'center' }}>{'Handson'}</h3>
      <div className={styles.container}>
        <iframe
          src={'https://www.youtube.com/embed/wmjX6-mDsME?autoplay=1&mute=1'}
          className={styles.player}
          title={'VS Code Meetup YouTube channel'}
          loading="lazy"
        />
      </div>
      <h3 style={{ textAlign: 'center' }}>{'Track A'}</h3>
      <div className={styles.container}>
        <iframe
          src={'https://www.youtube.com/embed/AAVTnEa4vEs?autoplay=1&mute=1'}
          className={styles.player}
          title={'VS Code Meetup YouTube channel'}
          loading="lazy"
        />
      </div>
      <h3 style={{ textAlign: 'center' }}>{'Track B'}</h3>
      <div className={styles.container}>
        <iframe
          src={'https://www.youtube.com/embed/J2li3qYgu9U?autoplay=1&mute=1'}
          className={styles.player}
          title={'VS Code Meetup YouTube channel'}
          loading="lazy"
        />
      </div>
    </section>
  )
}
