import { FCWithChildren } from 'root/react-app-env'
import { ReactNode, useContext } from 'react'
import { Popover as _Popover } from '@headlessui/react'
import { useOnMounted } from '@hooks/useOnMounted'
import { ColorThemeContext } from '@lib/ColorThemeContext'
import styles from '@static/Popover.module.scss'

interface PopoverProps {
  content: ReactNode
}

export const Popover: FCWithChildren<PopoverProps> = (props) => {
  const { children, content } = props

  const colorTheme = useContext(ColorThemeContext)

  // https://github.com/tailwindlabs/headlessui/issues/470#issue-873819383
  const { mounted } = useOnMounted()

  const contentStyles =
    colorTheme.colorMode === 'dark'
      ? { backgroundColor: '#fefefe', color: '#252526' }
      : { backgroundColor: '#252526', color: '#fefefe' }

  return (
    <_Popover className={styles.popover_wrapper}>
      {children}
      {mounted && (
        <_Popover.Panel className={styles.popover_content} style={contentStyles}>
          {content}
        </_Popover.Panel>
      )}
    </_Popover>
  )
}
