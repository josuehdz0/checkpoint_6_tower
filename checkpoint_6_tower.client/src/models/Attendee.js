import { Profile } from "./Account.js";

export class Attendee extends Profile{

  constructor(data){
    super(data.profile)
    this.ticketId = data.id
    this.eventId = data.eventId
    
  }
}