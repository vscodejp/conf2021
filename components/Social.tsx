import React from 'react'
import { TweetButtonElement } from './ButtonElement'
import styles from '../static/Social.module.scss'

export const Social = () => {
  return (
    <>
      <div className={styles.social_wrapper}>
        <TweetButtonElement
          path="https://twitter.com/intent/tweet?hashtags=vscodejp_A"
          isExternalLink
        >
          {'Tweet #vscodejp_A'}
        </TweetButtonElement>
      </div>
      <div className={styles.social_wrapper}>
        <TweetButtonElement
          path="https://twitter.com/intent/tweet?hashtags=vscodejp_B"
          isExternalLink
        >
          {'Tweet #vscodejp_B'}
        </TweetButtonElement>
      </div>
    </>
  )
}
