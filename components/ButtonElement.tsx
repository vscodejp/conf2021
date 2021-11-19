import React from 'react'
import styles from '../static/Button.module.scss'
import { TwitterLightIcon } from './Icon'

export const ButtonElement = ({
  path,
  tooltip,
  isExternalLink,
  children,
}: {
  path: string
  tooltip: string
  isExternalLink?: boolean
  children: React.ReactNode
}) => {
  return (
    <a
      href={path}
      title={tooltip}
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
  tooltip,
  isExternalLink,
  showSpaces,
  children,
}: {
  path: string
  tooltip: string
  isExternalLink?: boolean
  showSpaces?: boolean
  children: React.ReactNode
}) => {
  return (
    <a
      href={path}
      title={tooltip}
      target={isExternalLink && '_blank'}
      rel={isExternalLink && 'noopener noreferrer'}
      className={styles.tweet_button}
      style={showSpaces ? { backgroundColor: '#8f5dfc' } : { backgroundColor: '#1da1f2' }}
      role="button"
    >
      {children}
      <div className={styles.icon_wrapper}>
        <TwitterLightIcon />
      </div>
    </a>
  )
}
