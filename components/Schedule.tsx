import { FC } from 'react'
import i18next from 'i18next'
import timetableStyles from '../static/Schedule.module.scss'
import { InfoPopover } from './InfoPopover'
import { tracks, trackNames, sessions } from '../contents/sessions'
import { formatTime } from '../utils/dateTime'
import { capitalizeFirstCharacter } from '../utils/text'

const Schedule: FC = () => {
  return (
    <div className={timetableStyles.schedule} aria-labelledby={'schedule-heading'}>
      <>
        {tracks.map((track: string, val: number) => {
          return (
            <span
              key={val}
              className={timetableStyles.trackslot}
              aria-hidden={'true'}
              style={{ gridColumn: track, gridRow: 'tracks' }}
            >
              {trackNames[val]}
            </span>
          )
        })}
      </>

      <>
        {sessions.map((session, index) => {
          return (
            <>
              <h2
                key={index}
                className={timetableStyles.timeslot}
                aria-hidden={'true'}
                style={{ gridRow: `time-${session.startTime}` }}
              >
                {formatTime(session.startTime)}
              </h2>
              {session.tracks.map((track, key) => {
                return (
                  <>
                    {track.isEmpty && track.isRest && (
                      <div
                        key={key}
                        className={`${timetableStyles.session} ${timetableStyles.rest}`}
                        aria-hidden={'true'}
                        style={{
                          gridColumn: track.trackId,
                          gridRow: `time-${session.startTime} time-${session.endTime}`,
                        }}
                      >
                        {i18next.t('rest_ask_the_speaker')}
                      </div>
                    )}
                    {!track.isEmpty && !track.isRest && !track.hasOwnProperty('presenterName') && (
                      <div key={key} />
                    )}
                    {!track.isEmpty && !track.isRest && track.hasOwnProperty('presenterName') && (
                      <div
                        key={key}
                        className={`${timetableStyles.session} ${timetableStyles.track1}`}
                        style={{
                          gridColumn: track.trackId,
                          gridRow: `time-${session.startTime} time-${session.endTime}`,
                        }}
                      >
                        <InfoPopover track={track} />
                        <h3 className={timetableStyles.sessionTitle}>
                          <div>
                            <p>{track.presenterTitle}</p>
                          </div>
                        </h3>
                        <h4 className={timetableStyles.sessionTime}>
                          {`${formatTime(session.startTime)} - ${formatTime(session.endTime)}`}
                        </h4>
                        <p className={timetableStyles.sessionPresenter}>
                          {capitalizeFirstCharacter(track.personType)}
                          {track.presenterLevel && ` / ${i18next.t(track.presenterLevel)}`}
                        </p>
                      </div>
                    )}
                  </>
                )
              })}
            </>
          )
        })}
      </>
    </div>
  )
}

export default Schedule
