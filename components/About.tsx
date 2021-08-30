import { FC } from 'react'
import styles from '../static/Section.module.scss'

const About: FC = () => {
  return (
    <section id={'about'} className={styles.section}>
      <h2>{'About'}</h2>
      <div className={styles.detail}>
        <dl>
          <dt>開催日時</dt>
          <dd>2021年 11月 20日</dd>
        </dl>
        <dl>
          <dt>会場</dt>
          <dd>オンライン</dd>
        </dl>
        <dl>
          <dt>参加費</dt>
          <dd>無料</dd>
        </dl>
        <dl>
          <dt>参加方法</dt>
          <dd>
            <a
              href="https://vscode.connpass.com/event/221961/"
              aria-label="connpass フォームより参加を申し込む"
              target="_blank"
              rel="noopener noreferrer"
            >
              connpass フォームより参加を申し込む
            </a>
          </dd>
        </dl>
      </div>
    </section>
  )
}

export default About