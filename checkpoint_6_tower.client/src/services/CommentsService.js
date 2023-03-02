import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService{

  async getCommentByEvent(eventId){
    const res = await api.get(`api/events/${eventId}/comments`)
    logger.log('getting comments to event', res.data)

    AppState.comments = res.data.map(c => new Comment(c))
  }
}

export const commentsService = new CommentsService()