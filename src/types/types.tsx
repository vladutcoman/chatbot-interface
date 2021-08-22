export interface Message {
  key: number,
  image: any,
  type: string,
  message: string,
}

export interface Conversation {
  Message: []
}

export interface Personality {
  name: string,
  image: string
}