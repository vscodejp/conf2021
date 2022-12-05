import React from 'react'
import i18next from 'i18next'
import { TweetButton } from '@components/Button'
import styles from '@static/Social.module.scss'

export const SocialSection = () => {
  return (
    <>
      <div className={styles.social_wrapper}>
        <TweetButton
          path="https://twitter.com/intent/tweet?hashtags=vscodejp_A"
          tooltip={i18next.t('tweet_at_vscodejp_a')}
          isExternalLink
        >
          {'Tweet #vscodejp_A'}
        </TweetButton>
        <TweetButton
          path="https://twitter.com/i/spaces/1OdJrBagjMnJX"
          tooltip={i18next.t('join_ask_the_speaker_at_a')}
          isExternalLink
          showSpaces
        >
          {'Ask the Speaker at A'}
        </TweetButton>
      </div>
      <div className={styles.social_wrapper}>
        <TweetButton
          path="https://twitter.com/intent/tweet?hashtags=vscodejp_B"
          tooltip={i18next.t('tweet_at_vscodejp_b')}
          isExternalLink
        >
          {'Tweet #vscodejp_B'}
        </TweetButton>
        <TweetButton
          path="https://twitter.com/i/spaces/1DXxyDBqqLVJM"
          tooltip={i18next.t('join_ask_the_speaker_at_b')}
          isExternalLink
          showSpaces
        >
          {'Ask the Speaker at B'}
        </TweetButton>
      </div>
      <div
        className={styles.social_annotation}
        dangerouslySetInnerHTML={{ __html: i18next.t('annotation_of_ask_the_speaker') }}
      />
    </>
  )
}
