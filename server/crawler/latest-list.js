/*
 * @Author: caist
 * @Date: 2020-08-14 15:27:35
 * @LastEditTime: 2020-08-14 16:15:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \douban-trailer\server\crawler\latest-list.js
 */
const puppeteer = require('puppeteer')

const url = `https://movie.douban.com/explore#!type=movie&tag=%E7%A7%91%E5%B9%BB&sort=recommend&page_limit=20&page_start=0`

const sleep = time => new Promise((resolve, reject) => {
  setTimeout(resolve, time)
}) 

;(async () => {
  console.log('Start visit the target page')

  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  })

  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })

  await sleep(3000)

  const result = await page.evaluate(() => {
    var $ = window.$
    var items = $('.item')
    var links = []

    if (items.length > 0) {
      items.each((index, item) => {
        let it = $(item)
        let doubanId = it.attr('href').split('subject/')[1].split('/')[0]
        let title = $(it.find('p')[0]).text().replace(/\n/g, '').replace(/\r/g, '').replace(/\//g, '').trim()
        let poster = it.find('img').attr('src').replace('s_ratio', 'l_ratio')

        links.push({
          doubanId,
          title,
          poster
        })
      })
    }

    return links
  })

  browser.close()
  console.log(result)

  process.send({result})
  process.exit(0)
})()