微信学习代码

1.安装

　　npm install -g localtunnel

2.运行

　　lt --port 8080 

　　(your url is: http://xxxx.localtunnel.me ) 就实现了通过这个地址访问本地服务器8080端口的项目了～

另！以上是国外项目 速度慢，搭建自己的localtunnel服务端

1 安装

   git clone git://github.com/defunctzombie/localtunnel-server.git

　　cd localtunnel-server

　　npm install 

2 运行

　　bin/server --port 8080

3 另开item 

　　lt --port 8080　

　　(your url is: http://xxxx.localtunnel.me ) 就实现了通过这个地址访问本地服务器8080端口的项目了～

 4 解决用随机字符串作为子域名，

　　lt --port 8080 --subdomain mysubdomain

　　(your url is: http://mysubdomain.localtunnel.me ) 就实现了通过这个地址访问本地服务器8080端口的项目了～