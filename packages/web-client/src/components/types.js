export type DetailsProps = {
  id?: string,
  youTubeID?: string
}

export type UserType = {
  id: string,
  name: string,
  age: number,
  email: string,
  picture: string,
  dogs: any[]
}

export type UsersType = Array<UserType>

export type UserProps = {
  user: UserType
}

export type TalkType = {
  name: string,
  transcript: string,
  youTubeID: string
}

export type TalkProps = {
  talk: TalkType
}

export type RoomType = {
  id: string,
  name: string,
  participants: Object[],
  talk: string
}