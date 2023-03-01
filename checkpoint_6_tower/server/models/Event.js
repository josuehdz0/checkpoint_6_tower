import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants.js";

export const EventSchema = new Schema({

  
  name: basicStringType,
  description: {...basicStringType, maxLength: 500},
  coverImg: { ...basicStringType, maxLength: 9000, required: true},
  location: basicStringType,
  capacity: {type: Number, default: 1},
  startDate: basicStringType,
  isCanceled:{ type: Boolean, default: false, required: true},
  type:{ ...basicStringType, enum: ['concert', 'convention','sport','digital']},
  
  // NOTE this is gona be a relationship
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  

}, defaultSchemaOptions)

EventSchema.virtual('creator',{
  ref: 'Account',
  localField:'creatodId',
  foreignField: '_id',
  justOne: true
})