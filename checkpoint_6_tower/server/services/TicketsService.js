import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { eventsService } from "./EventsService.js"

class TicketsService{
  async deleteTicket(ticketId, requestorId) {
    const ticket = await dbContext.Tickets.findById(ticketId).populate('event')
    
    
    if (!ticket) {
      throw new BadRequest('Invalid Ticket Id')
    }


    if( ticket.accountId.toString() != requestorId){
      throw new Forbidden('This is not your ticket to delete')
    }

    
    await ticket.delete()

    const event = await dbContext.Events.findById(ticket.eventId)
    if(!event){
      throw new BadRequest('Not valid event Id')
    } event.capacity++

    await event.save()
    
  
    

    return ticket
  }


  async getTicketsByEvent(eventId) {
    const tickets = await dbContext.Tickets.find({eventId}).populate('profile')
    return tickets
  }

 async  getMyTickets(accountId) {
    const tickets = await dbContext.Tickets.find({accountId})
    .populate('event')

    return tickets
  }
  async createTicket(ticketData) {
    const event = await eventsService.getEventbyId(ticketData.eventId)

    if(event.isCanceled){
      throw new Forbidden('Event has been Cancelled')
    }

    const ticket = await dbContext.Tickets.create(ticketData)

    if(event.capacity > 0){
      event.capacity--
      await event.save()
    } else{
      throw new BadRequest('Tickets for this Event have been Sold Out')
    }

    await ticket.populate('profile event')
    return ticket
  }



}
export const ticketsService = new TicketsService()