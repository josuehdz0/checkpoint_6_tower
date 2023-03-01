import { Auth0Provider } from "@bcwdev/auth0provider";
import { eventsService } from "../services/EventsService.js";
import BaseController from "../utils/BaseController.js";

export class EventsController extends BaseController  {
  constructor(){
    super('api/events')
    this.router
      .get('', this.getAllEvents)
      .post('',this.createEvent)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }
  async createEvent(req,res,next) {
    try {
    const eventData = req.body
    // NOTE making sure that event has creatorId attached to it from signed in user
    eventData.creatorId = req.userInfo.id
    console.log(res)
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