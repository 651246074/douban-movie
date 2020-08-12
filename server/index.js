/*
 * @Author: caist
 * @Date: 2020-08-04 16:04:20
 * @LastEditTime: 2020-08-12 16:10:42
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
const { connect } = require('./database/init.js')

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

;(async () => {
  await connect()
})()


app.listen(4488)
