import { AppState } from "../AppState.js"
import { Event } from "../models/Event.js"
import { api } from "./AxiosService.js"

class EventsService{

  async getAllEvents(){
    const res = await api.get('api/events')
    const events = res.data.map(a => new Event(a))
    AppState.events = events
  }
}
export const eventsService = new EventsService()