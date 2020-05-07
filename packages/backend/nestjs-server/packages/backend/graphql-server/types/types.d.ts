export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  age: Scalars['Float'];
  createdAt: Scalars['String'];
};

export type Talk = {
   __typename?: 'Talk';
  id: Scalars['ID'];
  name: Scalars['String'];
  transcript?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
};

export type Room = {
   __typename?: 'Room';
  id: Scalars['ID'];
  name: Scalars['String'];
  location: Scalars['String'];
  createdAt: Scalars['String'];
};

export type Session = {
   __typename?: 'Session';
  sessionID: Scalars['ID'];
  talkID: Scalars['ID'];
  roomID: Scalars['ID'];
  jolterID: Scalars['ID'];
  createdAt: Scalars['String'];
  talk: Talk;
  room: Room;
  jolter: User;
};

export type Query = {
   __typename?: 'Query';
  talk: Talk;
  talks?: Maybe<Array<Maybe<Talk>>>;
  room: Room;
  rooms?: Maybe<Array<Maybe<Room>>>;
  jolter: User;
  jolters?: Maybe<Array<Maybe<User>>>;
  session: Session;
  sessions?: Maybe<Array<Maybe<Session>>>;
};


export type QueryTalkArgs = {
  id: Scalars['ID'];
};


export type QueryRoomArgs = {
  id: Scalars['ID'];
};


export type QueryJolterArgs = {
  id: Scalars['ID'];
};


export type QuerySessionArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type SessionAddedResponse = {
   __typename?: 'SessionAddedResponse';
  success: Scalars['Boolean'];
  sessionID?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addSession: SessionAddedResponse;
};


export type MutationAddSessionArgs = {
  talkID: Scalars['ID'];
  jolterID: Scalars['ID'];
  roomID: Scalars['ID'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

