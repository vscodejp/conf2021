import { FC } from 'react'
import Link from 'next/link'
import styles from '../static/Footer.module.scss'
import { organizationName } from '../utils/constants'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.contact}>
        <Link href="/code-for-conduct">{'行動規範'}</Link>
        <Link href="/privacy-policy">{'プライバシーポリシー'}</Link>
        <Link href="/contact">{'問い合わせ'}</Link>
      </p>
      <p className={styles.copyright}>
        {`Created © 2021 ${organizationName}. All Rights Reserved.`}
      </p>
    </footer>
  )
}

export default Footer
