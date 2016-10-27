'use strict';

import mongoose from 'mongoose';

var ThingSchema = new mongoose.Schema({
  content: String,
  is_mine: Boolean
});

export default mongoose.model('Thing', ThingSchema);
