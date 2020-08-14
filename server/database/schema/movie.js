/*
 * @Author: caist
 * @Date: 2020-08-14 09:17:50
 * @LastEditTime: 2020-08-14 09:23:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \douban-trailer\server\database\schema\movie.js
 */
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Mixed = SCheme.Types.Mixed

const MovieScheme = new Scheme({
  doubanId: String,
  rate: Number,
  title: String,
  summary: String,
  video: String,
  cover: String,
  poster: String,
  videoKey: String,
  coverKey: String,
  posterKey: String,
  rawTitle: String,
  movieTypes: [String],
  pudate: Mixed,
  tags: Mixed,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

MovieScheme.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  }else {
    this.meta.updatedAt = Date.now()
  }

  next()
})

mongoose.model('Movie', MovieScheme)