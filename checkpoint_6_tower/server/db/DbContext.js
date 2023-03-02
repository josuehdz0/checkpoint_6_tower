import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { EventSchema } from "../models/Event.js";
import { TicketSchema } from "../models/Ticket.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  // NOTE added models
  Events = mongoose.model('Event',EventSchema);

  Tickets = mongoose.model('Ticket',TicketSchema);
}

export const dbContext = new DbContext()
