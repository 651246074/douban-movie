/*
 * @Author: caist
 * @Date: 2020-08-12 15:46:03
 * @LastEditTime: 2020-08-14 15:50:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \douban-trailer\server\database\init.js
 */
const mongoose = require('mongoose')
const db = 'mongodb://localhost/test'

mongoose.Promise = global.Promise

exports.connect = () => {
  let maxConnectTimes = 0

  if(process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true)
  }
  mongoose.connect(db)
  mongoose.connection.on('disconnected', () => {
    maxConnectTimes++

    if (maxConnectTimes < 5) {
      mongoose.connect(db)
    }else {
      throw new Error('数据库挂了吧，快去修理吧少年')
    }
  })

  mongoose.connection.once('open', () => {
    const Dog = mongoose.model('Dog', {name: String})
    const dog1 = new Dog({name: '小狗仔'})

    dog1.save().then(() => {
      console.log('wang')
    })

    // resolve()
    console.log('MongoDB Connected successfully!')
  })
  // return new Promise((resolve, reject) => {
    
  // })
}
