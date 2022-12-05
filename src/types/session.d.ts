export type TrackID = 'track1' | 'track2'
export type TrackName = 'Track A' | 'Track B'
export type PersonType = 'presenter' | 'inviter'

export interface ITrack {
  trackId: TrackID
  personType?: PersonType
  presenterName?: string
  presenterTitle: string
  presenterDescription?: string
  presenterLive?: boolean
  presenterLevel?: 'beginner' | 'intermediate'
  presenterBio?: string
  presenterUrl?: string
}

export interface ISession {
  tracks: Array<ITrack>
  startTime: string
  endTime: string
}
