import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CommentsService{
  async deleteComment(commentId, requestoId) {
    const comment = await dbContext.Comments.findById(commentId)

    if(!comment){
      throw new BadRequest('Invalid comment Id')
    }
    if(comment.creatorId.toString() != requestoId){
      throw new Forbidden('This is not your comment to delete')
    }

    await comment.delete()
    return comment
  }
  
  async getEventComments(eventId) {
    const comments = await dbContext.Comments.find({eventId}).populate('creator')
    return comments
  }
  async createComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('creator')
    return comment
  }

}
export const commentsService = new CommentsService()