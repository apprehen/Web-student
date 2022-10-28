/*
  package.json
      - package.json  是包的描述文件
      - node中通过该文件对项目进行描述
      - 每一个node项目必须有package.json

  命令
      npm init 初始化项目 创建package.json文件 (需要回答问题)
      npm init -y 初始化项目 创建package.json文件 (所有值都采用默认值)
      npm install 包名 将指定包下载到当前项目中
        install时发生了什么？
            1. 将包下载当前项目的node_modules目录下
            2. 会在package.json的dependencies属性中添加一个新属性
                  "lodash": "^4.17.21"
            3. 会自动添加package-lock.json文件
                  帮助npm下载,不用管
      
      npm install 自动安装所有依赖

      npm install 包名 -g 全局安装
          - 全局安装是将包安装到计算机中
          - 全局安装的通常都是一些工具

      npm uninstall 包名 卸载
*/
/*
    引入从
*/