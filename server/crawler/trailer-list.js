/*
 * @Author: caist
 * @Date: 2020-08-05 11:49:39
 * @LastEditTime: 2020-08-11 16:08:02
 * @LastEditors: Please set LastEditors
 * @Description: get resourse
 * @FilePath: \douban-trailer\server\crawler\trailer-list.js
 */
const puppeteer = require('puppeteer')
// import * as puppeteer from 'puppeteer'
const url = `https://movie.douban.com/tag/#/?sort=R&range=6,10&tags=`

require("puppeteer-chromium-resolver")({
  //hosts: ["https://storage.googleapis.com", "https://npm.taobao.org/mirrors"]
}).then((revisionInfo) => {
  revisionInfo.puppeteer.launch({
      headless: false,
      executablePath: revisionInfo.executablePath
  });

  //puppteer相关代码
  (async () => {
    console.log('Start visit the target page !!')
    
    const browser = await puppeteer.launch({ headless: false })
  
    const page = await browser.newPage()
  
    await page.goto(url, {
      waitUntil: 'networkidle2'
    })
  
    await sleep(3000)
      .then()
      .catch(err => {
        console.log(err)
      })
  
    await page.waitForSelector('.more')
  
    for (let i = 0; i < 2; i++) {
      await sleep(3000)
      await page.click('.more')
    }
  
    const result = await page.evaluate(() => {
      var $ = window.$
      var items = $('.list-wp a') 
      var links = []
  
      if (items.length >= 1) {
        items.each((index, item) => {
          let it = $(item)
          let doubanId = it.find('div').data('id')
          let title = it.find('.title').text()
          let rate = Number(it.find('.rate').text())
          let poster = it.find('img').attr('src').replace('s_ratio', 'l_ratio')
  
          links.push({
            doubanId,
            title,
            rate,
            poster
          })
        })
      }
  
      return links
    })
  
    browser.close()
  
    console.log(result)
  
    // process.send({result})
    // process.exit(0)
  })()
})

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})



