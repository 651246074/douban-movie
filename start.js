/*
 * @Author: caist
 * @Date: 2020-08-14 18:22:10
 * @LastEditTime: 2020-08-14 18:23:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \douban-trailer\start.js
 */
require('babel-core/register')()
require('babel-polyfill')
require('./server/index')

console.log('env: ', process.env.NODE_ENV)