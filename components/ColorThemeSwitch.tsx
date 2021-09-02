import { FC, ChangeEvent, useContext } from 'react'
import styles from '../static/ColorThemeSwitch.module.scss'

import { ColorThemeContext } from '../lib/ColorThemeContext'

export const ColorThemeSwitch: FC = () => {
  const colorTheme = useContext(ColorThemeContext)

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const mode = ev.target.checked ? 'dark' : 'light'
    colorTheme.changeColorMode(mode)
  }

  const isChecked = colorTheme.colorMode === 'dark'

  return (
    <span className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <label
        style={{
          border: isChecked ? '#767676' : '#fff',
          background: isChecked ? '#03256c' : '#fff',
        }}
        aria-hidden="true"
      />
    </span>
  )
}

export default ColorThemeSwitch
