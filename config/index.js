/*
 * @Author: caist
 * @Date: 2020-08-14 16:25:50
 * @LastEditTime: 2020-08-14 16:31:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \douban-trailer\config\index.js
 */
const host = process.env.HOST || 'localhost'
const env = process.env.NODE_ENV || 'development'
const config = require(`./env/${env}`).default

export default Object.assign(
  {
    env,
    host
  },
  config
)