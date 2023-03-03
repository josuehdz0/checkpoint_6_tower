import { Profile } from "./Account.js"

export class Event {
  constructor (data){
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.coverImg = data.coverImg
    this.location = data.location
    this.capacity = data.capacity
    this.startDate = data.startDate
    this.isCancelled = data.isCancelled 
    this.type = data.type
    this.creatorId = data.creatorId;
    this.creator = new Profile(data.creator);
  }
}