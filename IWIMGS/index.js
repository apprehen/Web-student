// 用来爬取图片的nodejs脚本
//目标地址  https://iw233.cn/api.php | http://api.iw233.cn/api.php | https://dev.iw233.cn/api.php
const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function getImg(type, num=50) {
  urls = ['https://iw233.cn/api.php', 'http://api.iw233.cn/api.php', 'https://dev.iw233.cn/api.php']
  result = await axios({
    url: `https://iw233.cn/api.php?sort=${type}&type=json&num=${num}`,
  })
  // console.log(result.data.pic)
  // 目标图片的地址
  return result.data.pic
}

async function getTarImg (url) {
  result = await axios({
    url: url,
    method: 'GET',
    headers: {
      "Referer": "https://weibo.com/",
      "content-type": "application/json;charset=UTF-8",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
    },
    responseType: 'arraybuffer', //以二进制流的形式返回
  })
  return result.data
}

async function saveImg (data) {
  fs.writeFileSync(path.join(__dirname, `./img/${Date.now()}.jpg`), data, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(path.join(__dirname, `./img/${Date.now()}.jpg`) + '保存成功');
  });
}

async function main () {
  urls =  await getImg('random', 50)
  for (let i = 0; i < urls.length; i++) {
    const element = urls[i];
    let data = await getTarImg(element)
    await saveImg(data, element)
  }
}

main()