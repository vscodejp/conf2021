import { FC } from 'react'
import styles from '../static/Section.module.scss'

const About: FC = () => {
    return (
        <section id={'about'} className={styles.section}>
            <h2>{'About'}</h2>
            <div className={styles.detail}>
                <dl>
                    <dt>開催日時</dt>
                    <dd>2021年 XX月 XX日</dd>
                </dl>
                <dl>
                    <dt>会場</dt>
                    <dd>オンライン</dd>
                </dl>
                <dl>
                    <dt>参加費</dt>
                    <dd>後日公表予定</dd>
                </dl>
            </div>
        </section>
    )
}

export default About
