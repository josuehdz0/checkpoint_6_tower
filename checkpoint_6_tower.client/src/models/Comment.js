import { Profile } from "./Account.js"

export class Comment  {
  constructor(data){
    this.id = data.id
    this.body = data.body
    this.creatorId = data.creatorId
    this.eventId = data.eventId
    this.creator = data.creator
  }
}