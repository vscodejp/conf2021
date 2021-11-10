import { FC, useContext, useMemo } from 'react'
import { Popover } from '@headlessui/react'
import i18next from 'i18next'
import { DetailIcon } from './Icon'
import popoverStyles from '../static/Popover.module.scss'
import tagStyles from '../static/Tag.module.scss'
import type { ITrack } from '../contents/sessions'
import { ColorThemeContext } from '../lib/ColorThemeContext'

interface InfoPopover {
  track: ITrack
}

export const InfoPopover: FC<InfoPopover> = ({ track }) => {
  const colorTheme = useContext(ColorThemeContext)

  const contentStyles = useMemo(() => {
    return colorTheme.colorMode === 'dark'
      ? { backgroundColor: '#fefefe', color: '#252526' }
      : { backgroundColor: '#252526', color: '#fefefe' }
  }, [colorTheme])

  return (
    <Popover className={popoverStyles.popover_wrapper}>
      {track.presenterName && (
        <Popover.Button className={popoverStyles.popover_title}>
          {track.presenterName}
          <DetailIcon />
        </Popover.Button>
      )}
      <Popover.Panel className={popoverStyles.popover_content} style={contentStyles}>
        <h4>{track.presenterTitle}</h4>
        <h5 className={popoverStyles.align_right}>{track.presenterName}</h5>
        <p>{track.presenterLive && <div className={tagStyles.tag}>{'Live'}</div>}</p>
        <h6>{i18next.t('bio')}</h6>
        <p dangerouslySetInnerHTML={{ __html: track.presenterBio }} />
        <h6>{i18next.t('session_description')}</h6>
        <p dangerouslySetInnerHTML={{ __html: track.presenterDescription }} />
      </Popover.Panel>
    </Popover>
  )
}
