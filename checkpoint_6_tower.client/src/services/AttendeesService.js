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

}

export const attendeesService = new AttendeesService()