import { Auth0Provider } from "@bcwdev/auth0provider";
import { eventsService } from "../services/EventsService.js";
import BaseController from "../utils/BaseController.js";

export class EventsController extends BaseController  {
  constructor(){
    super('api/events')
    this.router
    .get('/:eventId',this.getEventById)
    .get('', this.getAllEvents)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('',this.createEvent)
    .put('/:eventId',this.editEventById)

    
  }
  async getEventById(req,res,next) {
   try {
    const eventId = req.params.eventId
    const event = await eventsService.getEventbyId(eventId)
    return res.send(event)
   } catch (error) {
    next(error)
   }
  }
  async editEventById(req,res,next) {
    try {
      const eventId = req.params.eventId
      const requestorId = req.userInfo.id
      const eventData = req.body
      // eventData.creatorId = req.userInfo.id
      const editedEvent = await eventsService.editEventById(eventId, eventData, requestorId)
      return res.send(editedEvent)
    } catch (error) {
      next(error)
    }
    }
  async createEvent(req,res,next) {
    try {
    const eventData = req.body
    // NOTE making sure that event has creatorId attached to it from signed in user
    eventData.creatorId = req.userInfo.id

    const event = await eventsService.createEvent(eventData)
    return res.send(event)

    } catch (error) {
    next(error)
    }
  }

  
  async getAllEvents(req, res, next) {
    try {
      const events = await eventsService.getAllEvents()
      res.send(events)
    } catch (error) {
      next(error)
    }
  }


}