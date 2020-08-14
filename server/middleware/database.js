/*
 * @Author: caist
 * @Date: 2020-08-14 17:48:35
 * @LastEditTime: 2020-08-14 18:00:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \douban-trailer\server\middleware\database.js
 */
import { join } from 'path'
const mongoose = require('mongoose')
import glob from 'glob'
import config from '../../config'

mongoose.Promise = global.Promise

glob.sync(join(__dirname, '../database/schema', '**/*.js')).forEach(require)

export const database = app => {
  const { db } = config

  if (config.env === 'development') {
    mongoose.set('debug', true)
  }

  mongoose.connect(db, {
    useMongoClient: true
  })

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(db, {
      useMongoClient: true
    })
  })

  mongoose.connection.on('err', err => {
    console.log(err)
  })

  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB -> ', db)
  })
}
