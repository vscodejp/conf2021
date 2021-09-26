import { FC } from 'react'
import { members } from '../contents/members'
import People from './People'

const Staffs: FC = () => {
  return <People people={members} sectionName="staffs" />
}

export default Staffs
