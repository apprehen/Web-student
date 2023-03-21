const axios = require('axios');
(async()=>{
  let result = await axios({
    url:'https://www.vilipix.com/ranking?date=20230320&mode=daily&p=1'
  })
  console.log(result.data)
})()


