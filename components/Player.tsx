import { FC } from 'react'
import ReactPlayer from 'react-player/lazy'
import styles from '../static/Player.module.scss'

const Player: FC = () => {
  return (
    <div id={'player'} className={styles.player}>
      <ReactPlayer width={'100%'} url="https://youtu.be/Y8dl1y2qdG8" />
    </div>
  )
}

export default Player
