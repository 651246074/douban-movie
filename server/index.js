/*
 * @Author: caist
 * @Date: 2020-08-04 16:04:20
 * @LastEditTime: 2020-08-05 10:22:53
 * @LastEditors: Please set LastEditors
 * @Description: entry port
 * @FilePath: \douban-trailer\server\index.js
 */
const Koa = require('koa')
const logger = require('koa-logger')
const views = require('koa-views')
const pug = require('pug')
const { resolve } = require('path')
const { htmlTpl, pugTpl } = require('./tpl')

const app = new Koa()

app.use(logger())

// app.use(async (ctx, next) => {
//   ctx.type = 'text/html'
//   ctx.body = normal
// })

// app.use(async (ctx, next) => {
//   ctx.type = 'text/html'
//   ctx.body = pug.render(pugTpl, {
//     you: 'Luke',
//     me: 'caist'
//   })
// })

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'Luke',
    me: 'Scott'
  })
})



app.listen(4488)