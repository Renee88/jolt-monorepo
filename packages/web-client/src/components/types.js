export type UserType = {
  id: string,
  name: string,
  age: ?number,
  email: string,
  picture: string,
  dogs: any[]
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
  talk: TalkType,
  room: RoomType ,
  jolter: UserType ,
  date: string
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