# Fake-BootCDN

## 这是一个BootCDN网站的Vue.js版本。

>1. Vue.js(使用了组件vue-clipboard)
>
>2. API(BootCDN提供)
>
>3. font-awesome.css

主要练习Vue.js和对一些组件、API的使用，网页输入查询实现函数防抖，输入的值动态匹配API获得的对应条目并动态渲染在下边搜索结果列表中，列表中的项目点击后跳转到详情页，并通过url传参给BootCDN服务器获取到该详情页的JSON数据，并渲染到详情页，详情页里有各版本的CDN链接，通过正则表达式判断是链接种类并进行链接的拼接，然后点击“复制链接”即可获取拼接正确的CDN链接地址，复制功能用的vue-clipboard实现。
