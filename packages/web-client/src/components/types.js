export type UserType = {
  id: string,
  name: string,
  age: number,
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

export type TalkProps = {
  talk: TalkType
}

export type RoomType = {
  id: string,
  name: string,
  participants: UserType[],
  talk: string
}

export type UsersType = Array<UserType>
export type RoomsType = Array<RoomType>
export type TalksType = Array<TalkType>