import styles from '../static/Button.module.scss'

const ButtonElement = ({
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
        >
            {children}
        </a>
    )
}

export default ButtonElement
