# writer
一个MarkDown编写工具，包含文集列表，即时预览，历史版本，导出四个功能，导出内容为html文档。

#### 存储
存储包含sqlite和mysql，如果选用mysql存储，需要自己建schema，然后将此schema填写到application.yml文档中，选用sqlite不用做任何修改，默认选用sqlite。
【注意】：数据库存储内容并未code化，妥善保管sqlite生成的.db文件

note存储形式可以配置`spring.note.save-with`和`spring.note.path`两个参数配置，目前save-with可配置为`file / sql`依需求而定。
*注意：改变此项配置note并不会伴随迁移，但是两种模式已做兼容修改后并不会影响已有note显示*

#### 静态资源
静态资源包含在resources/static下，如果直接使用`java -jar writer.jar`命令运行，且直接访问的话那么第一次上传图片可能无法查看，需要后端重启（这锅tomcat来背）。
你也可以把static包下的内容放到nginx或apache下，就不会出现这个问题了。

#### 引用
前端引用了[简书](https://www.jianshu.com)的js和css，部分功能被切割。如果要体验原汗原味的服务可以去[简书](https://www.jianshu.com)

#### build
```
$ git clone https://github.com/wangguanquan/writer
$ cd writer
$ mvn clean package -DSkip.test=true
$ cd target
$ java -jar writer-1.0-SNAPSHOT.jar
```
