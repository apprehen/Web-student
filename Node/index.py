# import time
# import requests
# import random
# time = time.localtime(time.time())
# thistime = str(time.tm_mon) + '-' + str(time.tm_mday)
# # print(thistime)
# anime_list = requests.get("https://api.bilibili.com/pgc/web/timeline?types=1&before=6&after=6").json()['result']
# # print(anime_list)
# i_list = []
# newlist = []
# anime = ''
# for i in anime_list:
#   if i['date'] == thistime:
#     i_list = i['episodes']
  
# for it in i_list:
#   # anime += it['pub_time'] + '  更新  ' + it['title'] + '  ' + it['pub_index'] +'\n' + f'[CQ=image,file={it["ep_cover"]}]' + '\n' +'--------------------------' + '\n'
#   print(it)


  
