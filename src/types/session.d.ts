export type TrackID = 'track1' | 'track2'

export type Area = 'Track A' | 'Track B'
export type TrackName = Extract<Area, 'Track A' | 'Track B'>

export type PersonType = 'presenter' | 'inviter'

export interface ISpeaker {
  name: string
  affiliation: string
  description: string
  twitter: string
  facebook: string
}

export interface ISession {
  title: string
  description: string
  started_at: string
  ended_at: string
  speaker?: ISpeaker
  area: Pick<Area, 'Track A' | 'Track B'> | string
  type?: PersonType
  isLive?: boolean
  documentUrl?: string
  movieUrl?: string
}
