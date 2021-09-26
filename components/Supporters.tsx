import { FC } from 'react'
import { supporters } from '../contents/supporters'
import People from './People'

const Supporters: FC = () => {
  return <People people={supporters} sectionName="supporters" />
}

export default Supporters
