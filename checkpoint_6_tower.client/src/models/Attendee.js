import { Profile } from "./Account.js";

export class Attendee extends Profile{

  constructor(data){
    super(data.profile)
    this.ticketId = data.id
    this.eventId = data.eventId
    
  }
}

// export class MyEvent extends Attendee {
//   constructor(data){
//     super(data.attendee)
//     this.ticketId = data.id
//   }
// }