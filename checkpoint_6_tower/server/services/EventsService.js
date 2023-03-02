import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class EventsService {
  async cancelEventById(eventId, requestorId) {
    const event = await this.getEventbyId(eventId)
    
    
    if (event.creatorId.toString() != requestorId){
      throw new Forbidden('You cannot cancel an Event you did not create')
    } 

    

    event.isCanceled = true
  

    await event.save()
    return event
  }

  // async increaseEventCapacity(event){
  //   const event = await this.getEventbyId(event)

  // }


  async editEventById(eventId, eventData, requestorId) {

    const foundEvent = await this.getEventbyId(eventId)
    
    if(foundEvent.creatorId.toString() != requestorId){
      throw new Forbidden('You are not allowed to edit an event you did not create')
    }
    
    if(foundEvent.isCanceled == true){
      throw new BadRequest('This event has been cancelled already')
    }


    foundEvent.name = eventData.name || foundEvent.name
    foundEvent.description = eventData.description || foundEvent.description
    foundEvent.coverImg = eventData.coverImg || foundEvent.coverImg
    foundEvent.location = eventData.location || foundEvent.location
    foundEvent.capacity = eventData.capacity || foundEvent.capacity
    foundEvent.startDate = eventData.startDate || foundEvent.startDate
    // foundEvent.isCanceled = eventData.isCancelled != null ? eventData.isCancelled : foundEvent
    foundEvent.type = eventData.type || foundEvent.type

    await foundEvent.save()
    return foundEvent
  }

  async getEventbyId(eventId) {
   const event = await dbContext.Events.findById(eventId).populate('creator')
   if (!event){
    throw new BadRequest('Invalid Event ID')
   }
   return event
  }


  async getAllEvents() {
    const events = await dbContext.Events.find()
    .populate('creator', 'name picture')
    return events
  }
  async createEvent(eventData) {
    const event = await dbContext.Events.create(eventData)
    await event.populate('creator')
    return event
  }

}
export const eventsService = new EventsService()