import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService{

  async getCommentByEvent(eventId){
    const res = await api.get(`api/events/${eventId}/comments`)
    logger.log('getting comments to event', res.data)

    AppState.comments = res.data.map(c => new Comment(c))
  }

  async createComment(commentData){
    const res = await api.post('/api/comments', commentData)
    logger.log('creating comment', res.data)

    AppState.comments.push(new Comment(res.data))


  }
}

export const commentsService = new CommentsService()