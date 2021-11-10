import React from 'react'
import styles from '../static/Button.module.scss'
import { TwitterLightIcon } from './Icon'

export const ButtonElement = ({
  path,
  isExternalLink,
  children,
}: {
  path: string
  isExternalLink?: boolean
  children: React.ReactNode
}) => {
  return (
    <a
      href={path}
      target={isExternalLink && '_blank'}
      rel={isExternalLink && 'noopener noreferrer'}
      className={styles.button}
      role="button"
    >
      {children}
    </a>
  )
}

export const TweetButtonElement = ({
  path,
  isExternalLink,
  children,
}: {
  path: string
  isExternalLink?: boolean
  children: React.ReactNode
}) => {
  return (
    <a
      href={path}
      target={isExternalLink && '_blank'}
      rel={isExternalLink && 'noopener noreferrer'}
      className={styles.tweet_button}
      role="button"
    >
      {children}
      <div className={styles.icon_wrapper}>
        <TwitterLightIcon />
      </div>
    </a>
  )
}
