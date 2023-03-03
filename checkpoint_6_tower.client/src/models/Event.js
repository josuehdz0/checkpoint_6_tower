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
    this.isCanceled = data.isCanceled 
    this.type = data.type
    this.creatorId = data.creatorId;
    this.creator = new Profile(data.creator);
  }
}

export class MyEvent extends Event {
  constructor(data){
    super(data.event)
    this.ticketId = data.id
  }
}