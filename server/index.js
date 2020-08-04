/*
 * @Author: caist
 * @Date: 2020-08-04 16:04:20
 * @LastEditTime: 2020-08-04 16:16:47
 * @LastEditors: Please set LastEditors
 * @Description: entry port
 * @FilePath: \douban-trailer\server\index.js
 */
const Koa = require('koa')
const logger = require('koa-logger')

const app = new Koa()

app.use(logger())
app.use(async (ctx, next) => {
  ctx.body = 'Hi Luke'
})

app.listen(4488)
