import { FC } from 'react'
import styles from '../static/Section.module.scss'

// import Schedule from './Schedule'

const Timetable: FC = () => {
    return (
        <section id={'timetable'} className={styles.section}>
            <h2>{'Timetable'}</h2>
            <h3>{'Coming soon'}</h3>
        </section>
    )
}

export default Timetable
