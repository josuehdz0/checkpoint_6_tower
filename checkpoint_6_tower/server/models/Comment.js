import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants.js";
export const CommentSchema = new Schema({

  creatorId: {type: Schema.Types.ObjectId, ref: 'Account',required: true},
  eventId:  { type: Schema.Types.ObjectId, ref: 'Event', required: true},
  body: basicStringType, 
  isAttending: {type: Boolean, default: false},
},defaultSchemaOptions)


CommentSchema.virtual(('creator'),{
  ref: 'Account',
  localField: 'creatorId',
  foreignField: '_id',
  justOne:true
})