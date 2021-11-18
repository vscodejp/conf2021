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
        <TweetButtonElement
          path="https://twitter.com/i/spaces/1OdJrBagjMnJX"
          isExternalLink
          showSpaces
        >
          {'Ask the Speaker at A'}
        </TweetButtonElement>
      </div>
      <div className={styles.social_wrapper}>
        <TweetButtonElement
          path="https://twitter.com/intent/tweet?hashtags=vscodejp_B"
          isExternalLink
        >
          {'Tweet #vscodejp_B'}
        </TweetButtonElement>
        <TweetButtonElement
          path="https://twitter.com/i/spaces/1DXxyDBqqLVJM"
          isExternalLink
          showSpaces
        >
          {'Ask the Speaker at B'}
        </TweetButtonElement>
      </div>
    </>
  )
}
