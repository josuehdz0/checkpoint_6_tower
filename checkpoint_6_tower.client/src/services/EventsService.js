import { AppState } from "../AppState.js"
import { Event } from "../models/Event.js"
import { api } from "./AxiosService.js"

class EventsService{

  async getAllEvents(){
    const res = await api.get('api/events')
    const events = res.data.map(a => new Event(a))
    AppState.events = events
  }
  async getOneEventById(eventId){
    AppState.event = null
    const res = await api.get('api/events/'+ eventId)
    AppState.event = new Event(res.data)
  
  }

}

export const eventsService = new EventsService()