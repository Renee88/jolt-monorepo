type ID = string

export type SessionRequest = {
    id: ID,
    talkID: ID,
    jolterID: ID,
    roomID: ID,
    date: string,
    hour: string,
    status: string
}