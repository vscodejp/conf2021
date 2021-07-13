import { FC } from 'react'
import timetableStyles from '../static/Schedule.module.scss'

const Schedule: FC = () => {
    return (
        <div
            className={timetableStyles.schedule}
            aria-labelledby={'schedule-heading'}
        >
            <span
                className={timetableStyles.trackslot}
                aria-hidden={'true'}
                style={{ gridColumn: 'track1', gridRow: 'tracks' }}
            >
                Track 1
            </span>
            <span
                className={timetableStyles.trackslot}
                aria-hidden={'true'}
                style={{ gridColumn: 'track2', gridRow: 'tracks' }}
            >
                Track 2
            </span>
            <span
                className={timetableStyles.trackslot}
                aria-hidden={'true'}
                style={{ gridColumn: 'track3', gridRow: 'tracks' }}
            >
                Track 3
            </span>
            <span
                className={timetableStyles.trackslot}
                aria-hidden={'true'}
                style={{ gridColumn: 'track4', gridRow: 'tracks' }}
            >
                Track 4
            </span>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1000' }}
            >
                10:00
            </h2>

            <div
                className={`${timetableStyles.session} ${timetableStyles.track1}`}
                style={{
                    gridColumn: 'track1',
                    gridRow: 'time-1000 time-1030',
                }}
            >
                <div className={timetableStyles.sessionTitle}>
                    <a href="#">Talk Title</a>
                </div>
                <span className={timetableStyles.sessionTime}>
                    10:00 - 10:30
                </span>
                <span className={timetableStyles.sessionTrack}>Track: 1</span>
                <span className={timetableStyles.sessionPresentar}>
                    Presenter
                </span>
            </div>

            <div
                className={`${timetableStyles.session} ${timetableStyles.track2}`}
                style={{
                    gridColumn: 'track2',
                    gridRow: 'time-1000 time-1030',
                }}
            >
                <div className={timetableStyles.sessionTitle}>
                    <a href="#">Talk Title</a>
                </div>
                <span className={timetableStyles.sessionTime}>
                    10:00 - 10:30
                </span>
                <span className={timetableStyles.sessionTrack}>Track: 2</span>
                <span className={timetableStyles.sessionPresentar}>
                    Presenter
                </span>
            </div>

            <div
                className={`${timetableStyles.session} ${timetableStyles.track3}`}
                style={{
                    gridColumn: 'track3',
                    gridRow: 'time-1000 time-1200',
                }}
            >
                <div className={timetableStyles.sessionTitle}>
                    <a href="#">Talk Title</a>
                </div>
                <span className={timetableStyles.sessionTime}>
                    10:00 - 10:30
                </span>
                <span className={timetableStyles.sessionTrack}>Track: 3</span>
                <span className={timetableStyles.sessionPresentar}>
                    Presenter
                </span>
            </div>

            <div
                className={`${timetableStyles.session} ${timetableStyles.track4}`}
                style={{
                    gridColumn: 'track4',
                    gridRow: 'time-1000 time-1200',
                }}
            >
                <div className={timetableStyles.sessionTitle}>
                    <a href="#">Talk Title</a>
                </div>
                <span className={timetableStyles.sessionTime}>
                    10:00 - 10:30
                </span>
                <span className={timetableStyles.sessionTrack}>Track: 4</span>
                <span className={timetableStyles.sessionPresentar}>
                    Presenter
                </span>
            </div>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1100' }}
            >
                11:00
            </h2>

            <div
                className={`${timetableStyles.session} ${timetableStyles.track1}`}
                style={{
                    gridColumn: 'track1-start',
                    gridRow: 'time-1100 time-1130',
                }}
            >
                <div className={timetableStyles.sessionTitle}>
                    <a href="#">Talk Title</a>
                </div>
                <span className={timetableStyles.sessionTime}>
                    11:00 - 11:30
                </span>
                <span className={timetableStyles.sessionTrack}>Track: 1</span>
                <span className={timetableStyles.sessionPresentar}>
                    Presenter
                </span>
            </div>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1200' }}
            >
                12:00
            </h2>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1300' }}
            >
                13:00
            </h2>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1400' }}
            >
                14:00
            </h2>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1500' }}
            >
                15:00
            </h2>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1600' }}
            >
                16:00
            </h2>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1700' }}
            >
                17:00
            </h2>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1800' }}
            >
                18:00
            </h2>

            <h2
                className={timetableStyles.timeslot}
                style={{ gridRow: 'time-1900' }}
            >
                19:00
            </h2>
        </div>
    )
}

export default Schedule
