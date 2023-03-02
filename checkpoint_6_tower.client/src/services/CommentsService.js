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

  async deleteComment(commentId){
    const res = await api.delete('api/comments/' + commentId)
    logger.log('deleing comment', res.data)
    const commentIndex = AppState.comments.findIndex(c => c.id == commentId)

    console.log('test', commentIndex)
    if (commentIndex !== -1) {
      AppState.comments.splice(commentIndex, 1) 
    }



  }
}

export const commentsService = new CommentsService()