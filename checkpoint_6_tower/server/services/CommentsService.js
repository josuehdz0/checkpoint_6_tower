import { dbContext } from "../db/DbContext.js"

class CommentsService{
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