import { Profile } from "./Account.js"

export class Comment {
  constructor(data){
    this.body = data.body
    this.creatorId = new Profile(data.creatorId)
    this.eventId = data.eventId
  }
}