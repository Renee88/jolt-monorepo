export type UserType = {
  id: string,
  name: string,
  age: ?number,
  email: string,
  picture: string
}

export type UserProps = {
  user: UserType
}

export type TalkType = {
  id: string,
  name: string,
  transcript: string
}

export type SessionType = {
  id: string,
  talkID: string,
  roomID: string ,
  jolterID: string,
  date: string,
  hour: string,
  status: string
}

export type TalkProps = {
  talk: TalkType
}

export type RoomType = {
  id: string,
  name: string,
  participants: UserType[]
}

export type UsersType = Array<UserType>
export type RoomsType = Array<RoomType>
export type TalksType = Array<TalkType>
export type SessionsType = Array<SessionType>

export type OwnProps = $ReadOnly<{|
  jolters: UsersType,
  rooms: RoomsType,
  talks: TalksType,
  dispatch: any,
  comingFromConnect:string
|}>;

export type Props = $ReadOnly<{|
  ...OwnProps,
  comingFromConnect: string,
|}>

export type SessionProps = {
  reqNumber: number,
  id: string,
  jolterID: string,
  talkID: string,
  roomID: string,
  date: string,
  hour: string,
  status: string
}

