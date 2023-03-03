import { AppState } from "../AppState.js"
import { Attendee } from "../models/Attendee.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AttendeesService {
  async getEventAttendees(eventId){
    const res = await api.get(`api/events/${eventId}/tickets`)
    logger.log('getting attendees', res.data)
    AppState.attendees = res.data.map(a => new Attendee(a))
  }
  async attendEvent(eventData){
    const res = await api.post('api/tickets', eventData)
    logger.log('Attending Event', res.data)
    AppState.attendees.push(new Attendee(res.data))
  }

  async declineEvent(ticketId){
    const res = await api.delete(`api/tickets/${ticketId}`)
    logger.log('removing ticket/ declining Event', res.data)
    const attendeeIndex = AppState.attendees.findIndex(a =>a.id == ticketId)
    if (attendeeIndex !== -1){
      AppState.attendees.splice(attendeeIndex,1)
    }
  }

}

export const attendeesService = new AttendeesService()