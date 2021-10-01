import { FC } from 'react'
import { staffs } from '../contents/staffs'
import People from './People'

const Staffs: FC = () => {
  return <People people={staffs} sectionName="staffs" />
}

export default Staffs
