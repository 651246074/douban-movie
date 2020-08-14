/*
 * @Author: caist
 * @Date: 2020-08-04 16:04:20
 * @LastEditTime: 2020-08-14 18:15:03
 * @LastEditors: Please set LastEditors
 * @Description: entry port
 * @FilePath: \douban-trailer\server\index.js
 */
const Koa = require('koa')
// const logger = require('koa-logger')
// const views = require('koa-views')
// const pug = require('pug')
// const { resolve } = require('path')
// const { htmlTpl, pugTpl } = require('./tpl')
// const { connect } = require('./database/init.js')
import config from '../config'
import R from 'ramda'

// const app = new Koa()

// app.use(logger())

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

// app.use(views(resolve(__dirname, './views'), {
//   extension: 'pug'
// }))

// app.use(async (ctx, next) => {
//   await ctx.render('index', {
//     you: 'Luke',
//     me: 'Scott'
//   })
// })

// ;(async () => {
//   await connect()
// })()

// ============================================================================
const MIDDLEWARES = ['database']

const useMiddlewares = app => {
  R.map(
    R.compose(
      R.forEachObjIndexed(
        e => e(app)
      ),
      require,
      name => join(__dirname, `./middleware/${name}`)
    )
  )(MIDDLEWARES)
}

async function start () {
  const app = new Koa()
  const { port } = config

  await useMiddlewares(app)

  const server = app.listen(port, () => {
    console.log(
      process.env.NODE_ENV === 'development'
        ? `Open ${chalk.green('http://localhost:' + port)}`
        : `App listening on port ${port}`
    )
  })

}

start()
