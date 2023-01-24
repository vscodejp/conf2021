import { FC } from 'root/react-app-env'
import { Fragment, useEffect, useState } from 'react'
import { Popover as Parent } from '@headlessui/react'
import { t } from 'i18next'
import { useString } from '@hooks/useString'
import { useArray } from '@hooks/useArray'
import { DetailIcon } from '@components/Icon'
import { Popover } from '@components/module/Popover'
import { tracks, trackNames, sessions as resources } from '@contents/sessions'
import styles from '@static/Schedule.module.scss'

const Schedule: FC = () => {
  const [sessions, setSessions] = useState([])
  const { capitalizeFirst } = useString()
  const { groupBy } = useArray()

  useEffect(() => {
    const get = (temp) => {
      const result = []
      temp.forEach((session) => {
        result.push({
          time: session[0],
          tracks: session[1],
        })
      })
      return result
    }

    setSessions(get(groupBy(resources, (x) => `${x.started_at} ${x.ended_at}`)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.schedule}>
      <Fragment>
        <div />
        {tracks.map((track: string, val: number) => {
          return (
            <span
              key={val}
              className={styles.trackslot}
              aria-hidden={'true'}
              style={{ gridColumn: track, gridRow: 'tracks' }}
            >
              {trackNames[val]}
            </span>
          )
        })}
      </Fragment>

      <Fragment>
        {sessions.map((session, index) => {
          return (
            <Fragment key={index}>
              <h2
                className={styles.timeslot}
                aria-hidden={'true'}
                style={{ gridRow: `time-${session.time.split(' ')[0]}` }}
              >
                {session.time.split(' ')[0]}
              </h2>
              {session.tracks.map((track, key) => {
                return (
                  <Fragment key={key}>
                    {track.title === '' ? (
                      <div />
                    ) : (
                      <div
                        className={`${styles.session} ${styles.track1}`}
                        style={{
                          gridColumn: `track${key + 1}`,
                          gridRow: `time-${track.started_at} time-${track.ended_at}`,
                        }}
                      >
                        <Popover
                          content={
                            <Fragment>
                              <h4>{track.title}</h4>
                              <h5 className={styles.align_right}>{track.speaker.name}</h5>
                              {track.isLive && <p className={styles.tag}>{'Live'}</p>}
                              <h6>{t('bio')}</h6>
                              <p dangerouslySetInnerHTML={{ __html: track.speaker.affiliation }} />
                              <h6>{t('session_description')}</h6>
                              <p dangerouslySetInnerHTML={{ __html: track.description }} />
                            </Fragment>
                          }
                        >
                          <Parent.Button className={styles.title}>
                            {track.speaker.name}
                            <DetailIcon />
                          </Parent.Button>
                        </Popover>
                        <h3 className={styles.sessionTitle}>
                          <div>
                            <div>{track.title}</div>
                          </div>
                        </h3>
                        <h4 className={styles.sessionTime}>
                          {`${track.started_at} - ${track.ended_at}`}
                        </h4>
                        <div className={styles.sessionPresenter}>{capitalizeFirst(track.type)}</div>
                      </div>
                    )}
                  </Fragment>
                )
              })}
            </Fragment>
          )
        })}
      </Fragment>
    </div>
  )
}

export default Schedule
