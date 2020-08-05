/*
 * @Author: caist
 * @Date: 2020-08-04 16:04:20
 * @LastEditTime: 2020-08-05 09:43:38
 * @LastEditors: Please set LastEditors
 * @Description: entry port
 * @FilePath: \douban-trailer\server\index.js
 */
const Koa = require('koa')
const logger = require('koa-logger')
const views = require('koa-views')
const { resolve } = require('path')
const { normal } = require('./tpl')

const app = new Koa()

app.use(logger())
// app.use(views(resolve(__dirname, './views'), {
//   extension: 'pug'
// }))

// app.use(async (ctx, next) => {
//   await ctx.render('index', {
//     you: 'Luke',
//     me: 'Scott'
//   })
// })

app.use(async (ctx, next) => {
  ctx.type = 'text/html'
  ctx.body = normal
})

app.listen(4488)
