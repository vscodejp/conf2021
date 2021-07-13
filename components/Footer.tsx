import { FC } from 'react'
import styles from '../static/Footer.module.scss'
import { organizationName } from '../utils/constants'

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.contact}>
                <a href="/code-for-conduct">{'行動規範'}</a>
                <a href="/privacy-policy">{'プライバシーポリシー'}</a>
                <a href="/contact">{'問い合わせ'}</a>
            </p>
            <p className={styles.copyright}>
                {`Created © 2020 ${organizationName}. All Rights Reserved.`}
            </p>
        </footer>
    )
}

export default Footer
