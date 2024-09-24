# HBuilder X - Release Notes
======================================
## 1.7.0.20190314
* 新增 js语法提示支持含有d.ts的三方库
* 新增 mac svn/git 查看日志功能
* 新增 mac svn/git 文件对比功能
* 优化 mac svn/git 完善部分命令的调用
* 修复 svn 某些情况下目录状态不刷新的bug
* 优化 svn/git 项目文件状态，增加冲突文件的状态显示
* 优化 快捷键设置 新增svn/git相关快捷键命令，可复制到右侧自行配置快捷键
* 优化 终端 windows下的性能
* 修复 终端 windows下某些输入法无法输入中文的bug
* 修复 终端 某些配色看不清的bug
* 修复 终端 win7下缺少powershell时打不开的bug
* 优化 多个单光标，通过选相同词，可选择每个光标的当前词
* 修复 在部分windows系统上，由于Qt冲突导致无法启动的bug
* 修复 vue中标签属性名带_时着色不正确的bug
* 修复 某些情况下语法提示服务自动关闭的bug
* 优化 长时间使用后会崩溃闪退
* 新增 uni-app cli项目，支持打包App（老版cli需通过命令npm update升级）
* 新增 uni-app cli项目，支持使用HBuilderX基础版开发，即uni-app插件被安装到项目下而不是HBuilderX的插件目录下
* 新增 uni-app cli项目，相应目录右键菜单支持新建页面、新建组件
* 优化 uni-app cli项目，page.json中路径配置
* 修复 pages.json存在条件编译代码时，新建页面导致条件编译混乱的bug
* 修复 某些情况下真机运行时删除项目导致崩溃的bug
* 优化 云打包，包名校验与错误提示
* 【uni-app插件】
  + 【重要】支持App资源在线热更新 [详情](https://ask.dcloud.net.cn/article/35667)
  + 修复 uni.webview.js 在头条小程序真机环境无效的问题 [v1.5.0](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.0.js)
  + 修复 rich-text 组件 ins 标签嵌套在 span 标签中无法渲染的问题 [详情](https://ask.dcloud.net.cn/question/65382)
  + 修复 uni.getProvider 获取 push 服务供应商的信息始终为 igexin 的bug
  + 【重要】App平台 新增 转场动画配置，详见[pages.json](https://uniapp.dcloud.io/collocation/pages?id=app-plus)、[navigator](https://uniapp.dcloud.io/component/navigator)、[uni.navigateTo](https://uniapp.dcloud.io/api/router?id=navigateto)
  + App平台 修复 设置 web-view 组件的 webview-styles 属性在部分设备上报错的问题 [详情](https://ask.dcloud.net.cn/question/66498)
  + App平台 修复 查看位置界面，点击去这里按钮，启动百度地图导航时，目的地坐标偏移的问题
  + App平台 优化 扫码界面调整为全屏显示
  + App平台（iOS） 修复 在特定情况下获取系统信息报错的bug
  + App平台（iOS） 修复 QQ 分享无法选择图文类型的问题
  + H5平台 新增 titleNView 支持 searchInput 配置 [详情](https://uniapp.dcloud.io/collocation/pages?id=h5-searchinput)
  + H5平台 新增 titleNView -> buttons 支持配置 background、badgeText、redDot、select、width [详情](https://uniapp.dcloud.io/collocation/pages?id=h5-titlenview-buttons)
  + H5平台 优化 页面对象增加 $mp 属性兼容 mpvue 用法 [#227](https://github.com/dcloudio/uni-app/issues/227)
  + H5平台 修复 条件编译中的 CSS 在运行/生产环境下编译结果不一致的bug [#188](https://github.com/dcloudio/uni-app/issues/188)
  + H5平台 修复 navigator 组件 navigatorBack 限制了 url 参数的问题 [#195](https://github.com/dcloudio/uni-app/issues/195)
  + H5平台 修复 首页导航栏配置左侧按钮无效的问题 [详情](https://ask.dcloud.net.cn/question/65994)
  + H5平台 修复 低版本 safari 浏览器下调用 uni.chooseImage/uni.chooseVideo 方法无效的问题 [详情](https://ask.dcloud.net.cn/question/66000)
  + H5平台 修复 input 组件半透明时背景显示异常的问题
  + H5平台 修复 修改 input 组件的 maxlength 属性时报错的问题
  + H5平台 修复 picker 组件关闭时内部状态未重置的问题 [#192](https://github.com/dcloudio/uni-app/issues/192)
  + H5平台 修复 picker-view 组件 change 事件返回值错误的问题 [#193](https://github.com/dcloudio/uni-app/issues/193)
  + H5平台 修复 uni.request 在无参数的GET请求时，地址拼接中冗余一个 ？的问题
  + H5平台 修复 使用透明渐变导航栏导致页面高度不准确的问题
  + H5平台 修复 tabbar 组件在 iPhoneX 上超出底部安全区的问题
  + H5平台 修复 cover-view、cover-image 无法监听点击事件的问题 [详情](https://ask.dcloud.net.cn/question/66416)
  + H5平台 修复 swiper 组件动态设置 current-item-id 不生效的问题 [详情](https://ask.dcloud.net.cn/question/66491)
  + H5平台 修复 uni.chooseVideo 返回结果中部分信息不准确的问题
  + H5平台 修复 uni.getSystemInfoSync 接口返回的 statusBarHeight 属性拼写与其他平台不同的问题
  + H5平台 修复 image 组件部分情况下加载 base64 资源失败的问题
  + 支付宝小程序 修复 uni.canvasToTempFilePath 未能正确返回 tempFilePath 值的问题
  + 支付宝小程序 修复 uni.setScreenBrightness/uni.getScreenBrightness 传入参数与返回结果参数不正确的问题
  + uni-ui 新增 左滑操作菜单插件 [详情](https://ext.dcloud.net.cn/plugin?id=181)
  + hello uni-app 新增 SwipeAction（滑动操作）扩展组件
  + hello uni-app 新增 Calendar（日历）扩展组件
  + hello uni-app 新增 Pagination(分页器) 扩展组件
  + hello uni-app 新增 NoticeBar(通告栏) 扩展组件
  + hello uni-app 新增 屏幕亮度 API 示例 
  + hello uni-app 新增 保存媒体到本地 API 示例 
  + hello uni-app 新增 震动 API 示例 
  + hello uni-app 新增 打开系统浏览器或三方App示例
  + hello uni-app 新增 设置 tabBar 示例
  + hello uni-app 新增 获取节点信息示例
  + hello uni-app 新增 获取节点布局交互状态示例
  + hello uni-app 修复 number-box 组件按钮禁用状态显示不正确的问题
  + hello uni-app 新增 App端自定义转场动画示例
  + hello uni-app 新增 H5端导航栏带搜索框示例
  + hello uni-app 新增 H5端导航栏带城市选择示例
  + hello uni-app 新增 H5端导航栏带红点和角标示例
  + hello uni-app 新增 iOS端隐藏软键盘上的导航条示例
* 【5+App插件】
  + 新增 自定义基座运行应用时toast提示“当前应用运行在自定义基座中”，避免将自定义基座作为正式包发布
  + 新增 Webview窗口标题栏（titleNView）上的按钮支持配置最大宽度（maxWidth）
  + 新增支持获取uni-app运行环境版本接口（plus.runtime.uniVersion）
  + 优化 图片预览（plus.nativeUI.previewImage）操作体验，支持gif图片、超长图片显示、网络图片加载雪花等
  + Android平台 更新 个推SDK更新为4.3.20版本，兼容Android9.0
  + Android平台 修复 Webview窗口标题栏（titleNView）设置backgroundColor属性后系统状态栏背景可能不生效的问题
  + Android平台 修复 在部分Android8.0设备调用 plus.runtime.install 接口无法安装apk的问题
  + Android平台 修复 在部分Android8.0设备调用 plus.runtime.openFile 接口打开文件可能无效的问题
  + Android平台 修复 二维码扫描窗口无法全屏显示的问题（参考HelloH5模板应用的Barcode示例页面）
  + Android平台 修复 二维码扫描窗口未授权相机权限后返回可能引起横屏显示的问题
  + Android平台 修复 视频控件（VideoPlayer）无法播放部分rtsp、rtmp视频，缓冲时间过长，切换视频播放进度未更新等问题
  + Android平台 修复 nvue页面中image标签圆角（borderRadius）不生效的问题
  + iOS平台 新增 Webview窗口支持设置是否隐藏软键盘上的导航条（softinputNavBar）
  + iOS平台 修复 在iOS12及以上系统WKWebview软键盘弹出后无法完全收回的问题
  + iOS平台 修复 在iOS11.4及以上系统弹出软键盘后可能出现页面会整体上移并出现黑色背景的问题
  + iOS平台 修复 视频控件（VideoPlayer）无法播放部分rtsp、rtmp视频，timeupdate事件可能不触发等问题
  + iOS平台 修复 视频控件（VideoPlayer）在iOS9.x上播放m3u8视频可能引起崩溃的问题
  + iOS平台 修复 Webview窗口标题栏（titleNView）在透明样式下按钮文字初始颜色不正确的问题
  + iOS平台 修复 部分蓝牙设备可能无法搜索到，蓝牙服务uuid和特征值uuid格式不正确等问题
  + iOS平台 修复 uni-app在iOS8.x系统上页面无法渲染出内容的问题
  + iOS平台 修复 nvue页面中websocket连接总是失败的问题
  + Hello H5+ 修复 蓝牙（Bluetooth）示例中选择写入特征值操作不正确的问题
  + Hello H5+ 修复 地图（Maps）示例中“应用内置地图”页面顶部重置按钮背景不透明的问题


## 1.6.2.20190220
* 新增 TypeScript语言服务插件，支持代码提示、转到定义
* 新增 设置 支持英文和中文单独字体设置，如英文设为Consolas，中文设为雅黑
* 新增 项目管理器和文件右键菜单 svn项目显示svn操作菜单，git项目显示git操作菜单
* 新增 mac 在项目管理器显示git/svn状态(安装相应插件后)
* 新增 mac svn或git项目，新增文件版本对比
* 调整 mac 工具和关于的部分菜单项目，移动到左上角HBuilderX菜单里
* 修复 mac web项目运行到浏览器时路径含有中文报404的bug
* 修复 某些情况下报java错误的bug
* 修复 scss/sass编译插件偶发安装失败的bug
* 新增 关闭右侧标签卡、关闭所有已保存标签卡
* 修复 更新失败后弹框内容为空的bug
* 优化 禁用vue的comment-directive规则校验
* 修复 app打包界面在小屏幕上底部按钮无法显示的bug
* 修复 插件安装列表uniapp插件显示“安装”问题
* 修复 代码助手 引用图片或文件，无法提示绝对路径的bug
* 【uni-app插件】
  + 【重要】新增 uni-app 支持发行到头条小程序 [详情](http://ask.dcloud.net.cn/article/35563)
  + 新增 窗口大小变化监听接口 uni.onWindowResize、uni.offWindowResize [详情](https://uniapp.dcloud.io/api/ui/window?id=onwindowresize)
  + 修复 upx 负数转换和正数不一致的问题 [#180](https://github.com/dcloudio/uni-app/issues/180)
  + 新增 uni.webview.js 支持头条小程序 [v1.4.9](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.4.9.js)
  + App平台 新增 picker 组件支持多列选择器（mode: multiSelector）
  + App平台 新增 manifest的启动图配置增加白屏时不关闭splash启动图 [详情](http://ask.dcloud.net.cn/article/35565)
  + App平台 修复 uni.notifyBLECharacteristicValueChange 方法调用无效的bug
  + App平台 修复 uni.getSystemInfo/uni.getSystemInfoSync 接口返回部分参数不准确的bug
  + App平台 修复 上传和下载接口服务端返回状态码不为200时判断为失败的问题
  + App平台 修复 uni.uploadFile 接口上传文件到阿里云oss失败的兼容问题
  + App平台 修复 uni.setTabBarItem 接口未设置图标参数时报错的bug
  + App平台 优化 iOS 平台支持配置底部安全区占位 [详情](https://ask.dcloud.net.cn/article/35564)
  + H5平台 修复 map 组件 controls 点击无效的bug
  + H5平台 修复 input 组件 placeholder 位置不正确的bug
  + H5平台 修复 input 组件文字颜色无法通过动态修改 class 来调整的bug
  + H5平台 修复 movable-view 组件动态设置显示/隐藏后，组件状态异常的bug [#163](https://github.com/dcloudio/uni-app/issues/163)
  + H5平台 修复 image 组件 mode=widthFix 不生效的bug
  + H5平台 修复 上传文件路径为 base64 时文件没有扩展名的问题
  + hello uni-app 新增 添加联系人信息示例
  + hello uni-app 新增 picker 组件在 App 平台支持多列选择器
  + hello uni-app 新增 悬浮按钮（fab button）扩展组件
  + hello uni-app 新增 导航栏带搜索框的示例
* 【5+App插件】
  + 新增 Webview窗口的titleNView支持配置显示搜索框searchInput（暂不支持uni-app的iOS端事件通知）
  + Android平台 修复 获取语言（plus.os.language、navigator.language）一直返回英文（en_US）的问题
  + Android平台 修复 下载任务未配置fileName参数并且url地址中未包含文件名称时可能导致下载失败的问题
  + Android平台 修复searchInput在uni-app中autoFocus会自动关闭软键盘的问题
  + iOS平台 修复 应用首页配置为WKWebview时可能出现启动后白屏的问题
  + iOS平台 修复 相册选择文件界面（plus.gallery.pick）未自动适配系统语言的问题
  + iOS平台 修复 Webview窗口titleNView的buttons中不设置text属性可能会卡死、colour属性无法动态修改的问题
  + iOS平台 修复 提交Appstore提示使用非公开API(DirectoryWatcher)的问题
  + iOS平台 更新 云打包编译环境为XCode10.1，解决提交AppStore提示“WARNING ITMS-90725”的问题

## 1.5.4.20190127
* 新增 Android启动图片可以配置.9.png[教程](https://ask.dcloud.net.cn/article/35527)
* 修复 真机联调偶发断开连接的bug
* 修复 本地提交云打包因超时问题,提交失败的bug 
* 修复 发布功能配置快捷键不生效的bug
* 修复 prettier格式化插件, 格式化操作后，结束标签>跑到下一行的bug
* 优化 单位转换默认启用(px转upx,px转rem)
* 【uni-app插件】
  + 修复 错误过滤css属性选择器通配符（*），注意：非属性选择器中依然不支持通配符（*）
  + 修复 未检测到微信开发者工具时，特殊情况编译卡死的bug
  + 优化 微信小程序在特定场景数据渲染慢的问题
* 【5+App插件】
  + 优化 uni-app应用设置自动关闭启动（Splash）界面可能出现较长延时的问题
  + Android平台 修复 视频播放（VideoPlayer）控件无法播放本地视频文件的问题
  + Android平台 修复 蓝牙连接设备后可能立即中断（日志提示Cannot read property 'map' of null）的问题
  + Android平台 修复 nvue页面中image标签不触发load事件的问题
  + Android平台 修复 nvue页面中slider标签初始化设置index属性不生效的问题
  + iOS平台 修复 提交Appstore审核可能会检测到使用非公开（non-public）API的问题
  + iOS平台 修复 nvue页面中使用iconfont显示乱码的问题

## 1.5.2.20190121
* 修复 scss/less不支持px转upx、px转rem提示的问题
* 修复 Win 语言服务初始化变慢的问题
* 修复 js方法参数定义处提示无用代码块的问题
* 修复 shell脚本在黑色主题下变量着色的问题
* 修复 新建vue文件默认模板不对的问题
* 【uni-app插件】
  + 修复 编译至 app 时触发 babel 500kb 限制
  + 修复 文本节点未移除前后空格及换行符
  + 修复 scss,less,stylus等文件引用的 css 文件中条件编译不生效
  + 修复 vue 文件 template 节点为空时编译器报错
  + 优化 自动移除 css 文件中的多余分号
  + 优化 自动移除 css 文件中的 * 通配符选择器 
* 【5+App插件】
  + Android平台 修复 真机运行录音使用mp3格式提示“未添加录音支持mp3格式文件模块”的问题
  + Android平台 修复 视频播放（VideoPlayer）控件全屏后无法通过返回键退出全屏的问题
  + iOS平台 修复 应用配置安全区域（safearea）在某些情况下可能会显示不正常的问题

## 1.5.1.20190120
* 【uni-app插件】
* 修复 components 目录引用组件查找失败的问题
* 修复 @import 引用 css 文件查找失败的问题
* 修复 组件嵌套 slot 导致的事件冲突问题
* 优化 发行至小程序的包体积

## 1.5.0.20190119
* 新增 scss/less语言服务器(vscode兼容插件)，支持代码提示和转到定义(alt+鼠标单击)
* 新增 Win 在项目管理器显示git/svn状态(安装相应插件后)
* 新增 换行符设置。在编辑器菜单里可转换，在设置中可设默认值
* 新增 鼠标中键点击标签卡关闭该标签卡
* 修复 部分大文档光标点击卡顿的bug
* 修复 emmet HTML中输入!后Tab不生成html结构的bug
* 新增 Git插件补充一批新命令
* 新增 重新识别项目类型功能（项目管理器，对项目点右键-重新识别项目类型）
* 新增 设置 Windows下支持指定文件默认使用HBuilderX打开
* 修复 Mac Mojave系统，无法删除文件的bug
* 修复 项目在本地删除后，操作时，在状态栏提示项目不存在
* 修复 智能双击 点击条件编译折叠开头无法双击选中折叠区域的bug
* 修复 日志文件打开时，浏览器频繁刷新的bug
* 修复 格式化 光标有时错跑到文档开头的bug
* 升级 格式化 升级prettier插件
* 修复 代码助手 css输入!或@, 代码助手回车后变成两个!或@的bug
* 修复 路径提示不支持绝对路径的bug
* 修复 某些情况下url转到定义识别不正确的bug
* 修复 设置界面中的文本输入框，修改时光标自动跳到最后的bug
* 修复 索引 某些情况下项目索引不全的bug
* 优化 索引 降低项目索引时CPU占用率
* 修复 App项目 打两次自定义基座包不会覆盖原来的包的bug
* 修复 5+项目 打包后，iphone xs max启动图不对的bug
* 新增 uni-app 注释菜单 【ctrl+alt+/】显示行注释、快注释、条件编译注释、条件编译注释-not。方便选中内容设置或反设置条件编译
* 新增 uni-app scss/less/stylus/typescript等预编译语言的条件编译，包括着色、注释菜单、智能双击
* 修复 uni-app 某些语言双击条件编译#ifdef、#ifndef、#endif等关键字时无法选中整体条件编译段落的bug
* 新增 uni-app 新建页面，增加less、scss、stylus、TypeScript等页面模板
* 新增 uni-app manifest可视化界面支持微信小程序权限配置
* 优化 uni-app 应用发布流程
* 修复 uni-app 同时运行2个手机时第二个手机资源同步不对的问题
* 【uni-app插件】
  + 【重要】变更 为加快调试速度，运行到微信小程序时取消代码压缩。正式发布，需点击发行菜单操作
  + 优化 首页未渲染时不关闭splash，避免白屏（手动设置延迟关闭splash不再生效）
  + 优化 减小编译器体积，精简依赖文件
  + 新增 支持字体及背景图片使用本地资源（编译器自动将其编译为base64方式，要求大小在40k以内）
  + 新增 新闻/资讯App模板，已上传[插件市场](https://ext.dcloud.net.cn/plugin?id=103)
  + 新增 底部tab带加号的模板，已上传[插件市场](https://ext.dcloud.net.cn/plugin?id=98)
  + 新增 一批跨各家小程序的API，如小程序间互跳、收货地址、发票抬头等，[详情](https://uniapp.dcloud.io/api/README)
  + 新增 less/scss/stylus/ts 等预编译语言支持条件编译 [详情](https://uniapp.dcloud.io/platform?id=%E6%A0%B7%E5%BC%8F%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
  + 新增 typescript 在vue里内联使用
  + 新增 支持通过 process.env.NODE_ENV 进行运行环境判断，并提供快捷代码块uEnvDev、uEnvProd，[详情](https://uniapp.dcloud.io/frame?id=运行环境判断)
  + 修复 uni-app 项目上层目录中含有 node_modules 目录时，模块依赖查找错误，导致运行到 H5 平台时页面白屏的bug
  + App平台 新增 TabBar 相关 API：setTabBarItem、setTabBarStyle、hideTabBar、showTabBar
  + App平台 修复 TabBar 在 iOS 平台左上角多显示一个小点的问题
  + App平台 修复 rich-text 组件无法解析部分富文本信息的问题
  + App平台 修复 map 组件动态改变 polyline 属性不生效的问题
  + App平台 修复 下拉刷新后页面点击事件第一次触发不正确的问题
  + H5平台 新增 组件：cover-view、cover-image
  + H5平台 优化 image 组件支持浏览器中的长按识别
  + H5平台 优化 reLaunch 及 redirectTo 实现，和其他端保持一致
  + H5平台 优化 TabBar 的 badge 位置与小程序表现一致
  + H5平台 优化 TabBar 的 icon 大小与 APP 端表现一致
  + H5平台 修复 选择文件后导致页面滚动的问题
  + H5平台 修复 页面 onUnload 不触发的 bug
  + H5平台 修复 选择节点时不包含当前页面节点的问题
  + H5平台 修复 节点操作 API 在 created 生命周期内调用报错的问题。
  + H5平台 修复 点击事件缺少的信息的问题
  + H5平台 修复 部分组件不能使用 hidden 属性控制显示状态的问题
  + H5平台 修复 uni.pageScrollTo 在微信内置浏览器无效的问题
  + H5平台 解决 swiper 组件设置 skipHiddenItemLayout 属性报错的问题
  + H5平台 修复 swiper 组件动态修改内容后自动播放停止的问题
  + H5平台 修复 swiper 组件同时显示多个 swiper-item 时指示器显示不正确的问题
  + H5平台 修复 swiper 组件上拖动导致父组件表现异常的问题
  + H5平台 修复 text 组件 selectable 属性无效的问题
  + H5平台 修复 map 组件 markertap 事件不触发的问题
  + H5平台 修复 map 组件 callout 点击事件不触发的问题
  + H5平台 修复 picker 组件 start 和 end 值不合法时表现异常的问题
  + H5平台 修复 picker 组件和 actionSheet 组件未使用时在 Safari 内可见的问题
  + H5平台 修复 web-view 组件 src 属性动态修改不生效的问题
  + H5平台 新增 video 组件开放 TBS 同层播放器相关配置
  + H5平台 修复 部分场景获取安卓手机型号出错的问题 [#134](https://github.com/dcloudio/uni-app/issues/134)
  + hello uni-app 百度小程序版已上架，[详情](https://m3w.cn/uniapp)
  + hello uni-app 新增 导航栏显示图片的示例
  + hello uni-app 新增 导航栏带红点和角标的示例
  + hello uni-app 新增 导航栏带城市选择的示例
  + hello uni-app 优化 顶部可拖动选项卡（原生）支持配置是否可拖动
  + hello uni-app 优化 H5 平台模板文件更名为 template.h5.html，避免文件名引发的误解
  + hello uni-app 更新 city.data.js，使用最新的城市区县数据
* 【5+App插件】
  + 新增 标题栏按钮（WebviewTitleNViewButtonStyles）支持红点、角标（用于通知）和向下箭头（常用于地域选择）
  + Android平台 修复 窗口中原生标题栏（titleNView）style为transparent样式时返回按钮图标不可见的问题
  + Android平台 修复 窗口中包含地图控件时切换动画可能出现白屏现象的问题
  + Android平台 修复 窗口设置显示进度条（progress）在页面跳转时可能不触发显示进度的问题
  + Android平台 修复 二维码扫描窗口无法全屏显示的问题（参考HelloH5模板应用的Barcode示例页面）
  + Android平台 修复 视频播放（VideoPlayer）控件断网恢复后可能无法继续播放的问题
  + Android平台 修复 设置应用启动图片为.9.png时有可能出现拉伸显示的问题
  + Android平台 修复 原生控件（NView）绘制图片是left/top属性值设置为auto时无法居中显示的问题
  + Android平台 修复 原生控件（NView）字体或背景颜色值使用rgba格式时无法容错解析空格的问题
  + Android平台 修复 百度地图在部分手机上可能出现闪黑的问题
  + Android平台 修复 推送消息传输透传数据时可能出现payload参数无法返回的问题
  + Android平台 更新 小米推送SDK版本为3.6.12
  + Android平台 修复 窗口使用circle样式下拉刷新时可能不触发H5中touchcancel事件的问题
  + Android平台 修复 nvue页面在非解压模式可能出现图片无法正常显示的问题
  + Android平台 修复 下载（Downloader）任务过多时暂停后可能无法再继续的问题
  + Android平台 修复 上传（Uploader）任务的地址为https时可能无法正常上传的问题
  + iOS平台 修复 原生控件（NView）可能出现点击事件不触发的问题（影响使用NView实现Tab切换页面功能）
  + iOS平台 修复 视频播放（VideoPlayer）控件隐藏后还继续播放的问题
  + iOS平台 修复 窗口使用UIWebview内核可能出现拦截资源不生效的问题
  + iOS平台 修复 地图控件缩放时可能出现标点漂移的问题
  + iOS平台 修复 地图控件的标点可能出现点击不生效的问题
  + iOS平台 修复 WAP2APP应用中小米推送可能接收不到消息的问题
  + iOS平台 修复 在8.x版本模拟器真机运行崩溃的问题（讯飞语音无法兼容8.x模拟器，模拟器上不再支持）
  + iOS平台 修复 nvue页面不支持websocket模块的问题
  + Hello H5+ 新增titleNView的按钮样式设置示例(webview-窗口标题栏)
* 【云端打包】
  + 修复 wap2app项目云端打包后底部选项卡不显示的问题，所有wap2app应用强制调整为释放资源模式（runmode=liberate）
  + 修复 iOS平台 uni-app项目云端打包后选择本地图片不显示的问题，uni-app应用默认调整为释放资源模式（runmode=liberate），请注意在manifest指定其他runmode仍会有此问题
* 【应用发布平台】
  + 新增 支付宝、百度小程序发布，可以一个地址发布6个平台版本，[参考](https://m3w.cn/uniapp)

## 1.4.1.20181228
* 修复 云打包在manifest配置有个推模块的情况下误报icons不能为空的bug
* 【uni-app插件】
  + 修复 CSS中条件编译导致运行至App和微信小程序失败的bug

## 1.4.0.20181227
* 【重要】新增 uni-app添加支付宝和百度小程序运行 [详情](https://ask.dcloud.net.cn/article/35393)
* 【重要】新增 uni-app插件市场，支持前端组件、js sdk、页面模板、项目模板、原生插件等多种类型 [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
* 【重要】新增 uni-app支持原生插件云打包
* 新增 vscode、sublime text快捷键方案切换【菜单-工具-快捷键切换】
* 新增 入门教程【菜单-帮助】
* 新增 普通web项目添加vue-cli默认项目模板，可在运行菜单执行npm命令，简化vue项目的开发配置过程
* 新增 设置 调整行高
* 新增 设置 选中整个单词才高亮其他相同词，即单字母选中不高亮其他字母
* 新增 设置 是否在资源管理器文件右键菜单显示"open with HBuilderX"
* 新增 后退前进光标，支持选区和多光标。Ctrl+=扩大选区后也可使用后退来恢复之前的选区
* 新增 在状态栏显示选区文字长度、行数及多选区数量。还可用于字数统计
* 新增 条件编译 代码语法提示
* 新增 条件编译 支持css和pages.json
* 新增 条件注释、块注释的折叠
* 新增 项目管理器 按Ctrl+鼠标多选文件，批量复制、删除
* 修复 项目管理器 文件名中带.造成文件图标显示错误的bug
* 优化 格式化 取消格式化插件的缩进单独配置，格式化时自动从编辑器设置中取缩进配置
* 修复 格式化 文件过长时格式化后出现内容不全的bug
* 修复 外部浏览器不会热刷新的bug
* 修复 js和html切换成es6模式时状态栏不显示语法提示库的bug
* 修复 双击选择英文单词在中英文混合时会一起选中中文的bug
* 修复 Ctrl+l连续选择行时，无法自动滚动屏幕的bug
* 优化 选择行支持多光标
* 修复 复制粘贴 如果复制内容中间有空行，粘贴后无法自动缩进的bug
* 修复 复制粘贴 在以空格替代tab缩进时，粘贴时把内容中的空格改成tab的bug
* 修复 复制粘贴 无法复制行首的空白字符的bug
* 修复 多光标操作后进行撤销、重做时，部分场景无法保留多光标状态的bug
* 修复 大纲视图在切换文件时不会自动刷新的bug
* 修复 vue中正则表达式着色异常的bug
* 修复 vue文件部分情况下折叠区域计算不正确的问题
* 优化 智能猜测Tab宽度的算法
* 修复 代码助手 backspace时不会自动回退的bug
* 修复 路径使用@/方式时，无法代码提示和转到定义的bug
* 修复 Markdown 同行多链接无法跳转链接的bug
* 修复 自定义代码块列表框偶发造成程序崩溃的bug
* 修复 外部命令 配置的快捷键初始化不生效的bug
* 修复 外部命令 重复打开终端的bug
* 新增 Mac 导入svn/git项目
* 优化 Mac svn/git插件使用体验，支持提交代码时输入commit信息
* 修复 Mac 打开设置时偶发崩溃的bug
* 修复 Mac 通过外部命令执行项目下npm命令时执行目录不对的bug
* 修复 Mac 块注释原快捷键和os冲突，改为command+alt+/
* 【uni-app插件】
	+ 【重要】新增 uni-app支持发行到支付宝和百度小程序 [详情](https://ask.dcloud.net.cn/article/35393)
	+ 新增 条件编译 static 支持平台目录，不同平台可定义自己的独有静态文件 [详情](https://uniapp.dcloud.io/frame?id=%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
	+ 新增 条件编译 支持多平台“或”运算符：||。例如： // #ifdef MP-WEIXIN || MP-BAIDU 代表在微信小程序和百度小程序均生效
	+ 新增 条件编译 pages.json 支持条件编译。pages.json里不引用的页面不会打包，可以更自由的管理不同平台文件的打包策略。
	+ 修复 条件编译 使用 ifndef 导致编译错误的问题
	+ 新增 manifest.json 中（mp-weixin 节点下） 新增 permission 配置，用于微信小程序接口权限相关设置
	+ 新增 蓝牙相关API [文档](https://uniapp.dcloud.io/api/system/bluetooth)
	+ 新增 低功耗蓝牙相关API [文档](https://uniapp.dcloud.io/api/system/ble)
	+ 新增 iBeacon相关API [文档](https://uniapp.dcloud.io/api/system/ibeacon)
	+ 优化 css 编译报错提示
	+ 修复 v-for item 部分写法编译失败的问题
	+ H5平台 新增 canvas 组件和相关 API
	+ H5平台 优化 导航栏自定义按钮支持 float 属性
	+ H5平台 修复 uni.showModal 内容过多显示超出屏幕的问题
	+ H5平台 修复 picker 组件未设置 value 属性值时报错的问题
	+ H5平台 修复 TabBar 页面 onHide 钩子函数不触发的问题
	+ H5平台 修复 map 组件中 marker 图像不显示的问题
	+ H5平台 修复 AudioContext 事件监听报错的问题
	+ H5平台 修复 swiper 组件动态设置 current 后 swiper 不切换的问题
	+ H5平台 修复 swiper 组件设置属性 previous-margin、next-margin 显示异常的问题
	+ H5平台 修复 picker 组件显示的选中项不正确的问题 [#103](https://github.com/dcloudio/uni-app/issues/103)
	+ H5平台 修复 picker 组件动态设置高度后显示异常的问题
	+ H5平台 修复 radio 组件设置 color 属性不生效的问题 [#119](https://github.com/dcloudio/uni-app/issues/119)
	+ H5平台 修复 picker 组件 columnchange 事件不触发的问题
	+ hello uni-app 优化 radio-group 组件的切换逻辑，兼容支付宝/百度小程序
	+ hello uni-app 优化 echarts 示例，兼容H5
	+ hello uni-app 修复 自定义懒加载占位图位置不正确的问题
	+ hello uni-app 优化 H5平台放开手势识别、图标裁剪等与 canvas 有关的示例
* 【5+App插件】 
  + 更新 nvue页面渲染内核，速度更快
  + Android平台 优化 应用图标角标设置支持华为手机、适配新版本小米手机
  + Android平台 优化 支持Android9.0查询是否为刘海屏设备（plus.navigator.hasNotchInScreen）
  + Android平台 修复 部分Android9.0设备上可能弹出"Detected problems with API compatibility"提示框问题
  + Android平台 修复 打包设置gargetSDKVersion大于26可能导致无法接收推送消息的问题
  + Android平台 修复 蓝牙读写二进制数据可能不正确的问题
  + Android平台 修复 Webview窗口的titleNView设置为transparent样式时可能直接显示文字的问题
  + Android平台 修复 Webview窗口的titleNView上按钮字体图标可能不居中显示的问题
  + iOS平台 新增 Webview窗口设置是否自动调整内容区域避免与安全区域或系统状态栏重合，[参考](http://ask.dcloud.net.cn/article/35386)
  + iOS平台 修复 图片压缩（plus.zip.compressImage）的overwrite参数不生效的问题
  + iOS平台 修复 保存图片到相册使用相对路径时可能导致程序异常的问题
  + iOS平台 修复 在WAP2APP应用中微信分享成功没有触发回调函数的问题
  + iOS平台 修复 视频播放控件（VideoPlayer）通过setStyle设置height属性不生效的问题
祝大家元旦快乐

## 1.3.2.20181214
* 修复 文件搜索列表/自定义代码块列表界面上下键无效的问题
* 修复 Mac Mojave系统下字体模糊的问题
* 修复 Mac Mojave系统下HBuilderX升级后卡顿的问题
* 修复 Mac 从一个分栏往另一个分栏拖拽文件不生效的问题
* 修复 创建新窗口时偶发崩溃的问题
* 修复 代码助手右侧选中内容后ctrl+c无法复制的问题
* 优化 快捷键冲突菜单增加【以后只选一个】，选择对应操作后自动解决冲突
* 删除 外部文件打开时的弹框提示

## 1.3.1.20181211
* 新增 支持Alt/Command+数字切换文档标签卡，如Alt+1切换到第一个文档（win版为alt，mac为Command）
* 优化 uniapp 编译微信小程序项目时自动清除缓存，避免缓存造成的错误
* 修复 win版通过SVN/Git导入项目时项目类型没有正确识别的问题
* 优化 将文件收藏功能突出显示在工具栏上，并优化收藏的细节体验
* 新增 通过多光标批量复制内容到新位置。如多光标选中A词和B词并复制，在新位置放置2个光标C和D，粘贴，即可在C处粘贴A、D处粘贴B
* 新增 win版支持Alt+hjkl移动光标的左下上右，方便不移动手腕操作光标
* 新增 主键盘右侧区的上下左右、Home、End、PageUp、PageDown等全面命令均可自定义快捷键，方便极客按需自定义，实现不移动手腕操作键盘
* 修复 列选择后移动光标，丢失多光标状态的bug
* 修复 复制列选择数据后，无法列粘贴数据的bug
* 新增 通过键盘进行向上列选择和向下列选择【Ctrl+Alt+Up/Down】
* 优化 跳转到行首行尾改为软行首和软行尾。即自动换行的行，按home、end时，先到换行后的行首或行尾，再按一次到真实行号的行首或行尾。如行首有缩进，先跳转到缩进后，再按home跳转到真实行首
* 新增 跳转 跳转到驼峰词前后、跳转到段落（以空行为段落分割）首尾、直接跳转真实行的首尾
* 新增 选择 选择至驼峰词前后、选择至段落（以空行为段落分割）首尾、直接选择至真实行的首尾
* 新增 删除 删除至驼峰词前后
* 优化 选左词和选右词支持了多光标选择
* 优化 markdown 预览的样式
* 修复 智能回车 markdown代码区、jsdoc、json数组中部分兼容问题
* 优化 升级 更新提示中可以查看升级日志了
* 修复 升级 因文件占用导致升级失败的问题，避免无限提示升级
* 修复 mac版某些机器打开文件所在目录卡慢的bug
* 修复 写js方法调用后在参数内输入{后回车跳转错误的bug
* 修复 win版某些情况下外部命令执行时路径不对的bug
* 修复 emmet html标签在有属性的情况下按TAB键无效的bug
* 修复 emmet 中文乱码的bug
* 修复 Mac下HX在APFS(区分大小写，加密)格式的磁盘下无法启动的问题
* 优化 运行菜单里的iOS模拟器列表移至到【iOS模拟器】子菜单，减少菜单长度
* 优化 vue部分代码提示
* 优化 项目别名样式
* 【uni-app插件】
	+ 优化 编译时提供更明确的错误提示
	+ 优化 支持在 main.js 引入 css 模块
	+ 修复 onReady 触发两次的问题
	+ 修复 number 类型的 input 组件设置 maxlength 无效的bug
	+ 修复 number 类型的 input 组件输入无效数值导致 placeholder 和数字重叠的bug
	+ App平台 优化 web-view 组件支持自定义进度条 progress
	+ App平台 优化 titleNView配置支持左右内边距（padding/padding-left/padding-right）和按钮的宽度（width）
	+ App平台 修复 video 组件静音属性不生效的问题
	+ App平台 修复 date 类型的 picker 组件未设置开始结束时间在部分设备不能选择日期的问题
	+ App平台 修复 TabBar 组件图像和文本均未设置的情况下报错的问题
	+ App平台 修复 引入小程序组件时获取当前 Webview 对象失败的问题
	+ App平台 修复 nvue 中 uni.getStorage 某些情况无法获取数据的问题
	+ App平台 修复 nvue 中 uni.setStorage 导致 iOS 设备崩溃的问题
	+ App平台 修复 在线打包过的应用某些情况下运行到真机报错的问题
	+ iOS平台 修复 canvas 组件保存到文件时绘制的图像不显示的问题
	+ iOS平台 修复 uni.request 方法 GET 请求无法使用 data 传参的问题
	+ H5平台 新增 组件 movable-area、movable-view、web-view
	+ H5平台 优化 文件上传时保留原始文件名
	+ H5平台 优化 input 和 textarea 组件在 iOS 设备上禁用状态颜色不一致的情况
	+ H5平台 修复 swiper 组件未包含子组件时显示异常的问题
	+ H5平台 修复 picker 组件可选择错误的日期的问题 [#89](https://github.com/dcloudio/uni-app/issues/89)
	+ H5平台 修复 uni.request GET 类型请求的 url 拼接不规范导致部分服务器无法识别参数的问题
	+ H5平台 修复 WebSocket 事件监听报错的bug
* 【5+App插件】 
	+ 【重要】新增 支持蓝牙模块 [详见](http://www.html5plus.org/doc/zh_cn/bluetooth.html)
	+ 新增 支持启动微信小程序（plus.share.ShareService.launchMiniProgram），同时需在manifest中配置navigateToMiniProgramAppIdList
	+ 新增 titleNView配置支持左右内边距（padding/padding-left/padding-right）和按钮的宽度（width）
	+ 新增 查询设备是否为刘海屏设备接口（plus.navigator.hasNotchInScreen）
	+ Android平台 更新 百度地图SDK（v5.2.1）及百度定位SDK（v7.5.0）
	+ Android平台 优化 从相册选择图片（plus.gallery.pick）界面交互体验，修复 在部分手机设置filter为video无效的问题
	+ Android平台 优化 二维码识别，修复部分二维码可能无法识别的问题
	+ Android平台 修复 全面屏设备上启动图顶部可能出现黑条的问题
	+ Android平台 修复 系统设置阿拉伯语时可能导致程序无法运行的问题
	+ Android平台 修复 Webview的默认下拉刷新样式可能显示不正常的问题
	+ Android平台 修复 Webview未显示时通过setStyle方法设置参数可能无法及时生效的问题
	+ Android平台 修复 Webview窗口多次关闭可能引起显示异常的问题
	+ Android平台 修复 视频控件（VideoPlayer）全屏/非全屏切换导致视频从头播放的问题
	+ Android平台 修复 视频控件（VideoPlayer）可能出现播放控件不自动消失的问题
	+ iOS平台 更新 支付宝App支付SDK（v15.5.7）
	+ iOS平台 修复 通过Scheme启动应用plus.runtime.arguments可能获取不到启动参数的问题
	+ iOS平台 修复 设置Storage数据（plus.storage.setItem）可能引起程序崩溃的问题
	+ iOS平台 修复 视频播放控件（VideoPlayer）播放某些视频最后几秒可能一直缓冲的问题
	+ iOS平台 修复 视频播放控件（VideoPlayer）拖动播放进度后修改src可能不会自动播放的问题
	+ iOS平台 修复 地图控件来回移动操作后可能导致标点对象（Marker）变形的问题
	+ iOS平台 修复 百度定位可能引起应用崩溃的问题
	+ Hello H5+ 新增 蓝牙、ibeacon、直播等示例

## 1.2.1.20181126
* 修复 manifest.json修改启动图延时参数时误报不是整数的问题
* 【uni-app插件】
	+ 修复 真机运行到不支持viewport-fit=cover属性的设备上时，控制台出现相关警告的问题

## 1.2.0.20181122
* 【重要】新增 uni-app支持运行到chrome，可使用chrome的手机审查模式，安装vue devtools插件，调试更方便
* 新增 5+App的webview免翻墙调试功能（菜单运行-运行到手机或模拟器-打开webview调试控制台，需要手机端启动可调试的App）
* 新增 文件对比功能（项目管理器按住Ctrl+鼠标选择2个文件-右键菜单中选择【对比选中的文件】）
* 新增 项目管理器，增加文件图标（可在项目管理器菜单选择图标类型，可在插件安装中增加图标插件）
* 新增 内置浏览器，增加二维码功能，方便在手机端扫码访问
* 优化 校验写入磁盘文件权限，提示以管理员身份启动
* 优化 预览时启动和刷新内置浏览器的速度
* 优化 代码助手服务因全局代理或防火墙设置导致无法启动的问题
* 优化 新建项目时项目模板下载逻辑
* 修复 格式化操作后，有时光标位置到了首行的问题
* 修复 某些情况下项目删除不了的问题
* 修复 某些情况下settings.json写入格式错误的问题
* 修复 真机运行时有可能会崩溃的问题
* 修复 部分机器启动语言服务时报缺失dll的问题
* 修复 项目管理器右键新建文件按Esc取消后没有删除列表项的问题
* 修复 css格式化自动为http://后面加空格的问题
* 修复 将项目内文件全部删除后再删除项目后崩溃的问题
* 修复 部分代码块内容不对的问题
* 修复 mac 解决在部分mac机器上，打包界面按钮被遮挡的问题
* 修复 mac 运行设置页面，无法选择微信开发者工具路径的问题
* 调整 暂时取消外部浏览器的保存自动刷新功能，此功能影响浏览速度并会造成项目无法删除，后续会继续优化
* 注意 mac mojave系统，升级后如遇到问题，请参考这里解决[http://ask.dcloud.net.cn/article/35244](http://ask.dcloud.net.cn/article/35244)
* 【uni-app插件】
    + 【重要】uni-app 支持发布到H5平台 注意事项参考[ask.dcloud.net.cn/article/35232](https://ask.dcloud.net.cn/article/35232)
	+ uni-app框架开源，欢迎大家star鼓励，[github地址](https://github.com/dcloudio/uni-app)
	+ uni-app支持通过vue-cli脚手架创建项目模板并运行到H5平台
	+ 新增 条件编译 #ifndef 代表非此平台的条件编译（如<!-- #ifndef H5 -->代表非H5平台，也就是uni-app目前支持的App及小程序平台）
	+ 新增 API tabBar支持设置红点和角标 参考[uni-app规范](http://uniapp.dcloud.io/api/ui/tabbar)
	+ 新增 API 监听网络状态变化，参考[uni-app规范](http://uniapp.dcloud.io/api/system/network?id=onnetworkstatuschange)
	+ 新增 button 组件的 open-type 属性支持 feedback 值域，参考[uni-app规范](http://uniapp.dcloud.io/component/button)
	+ 新增 manifest.json 配置 navigateToMiniProgramAppIdList 节点，可配置需需跳转的小程序列表
	+ 优化 web-view 组件 增加网页加载进度条
	+ 优化 web-view 组件 标题与页面 title 同步
	+ 修复 uni.request method 为 PUT、DELETE 时，参数信息丢失的问题
	+ 修复 picker 组件 cancel 事件不触发的问题
	+ 修复 复杂场景下组件数据渲染异常的问题
	+ 修复 uni.canvasToTempFilePath 方法设置参数destWidth、destHeight不生效的问题
	+ 优化 input 组件 type="number" 在 App 端支持输入小数点
	+ 新增 nvue 支持第三方weex ui库，参考[uni-app规范](http://uniapp.dcloud.io/use-weex?id=nvue-中使用-weex-第三方库)
	+ 新增 nvue 支持 bindingx
	+ 新增 nvue 支持顶部原生导航的 onNavigationBarButtonTap 事件
	+ 修复 nvue 初始化时得不到 storage 的问题
	+ 修复 nvue Android平台 不支持 Websocket 功能的问题
	+ 修复 nvue Android平台 页面未设置 titleNView 时可能显示不正常的问题
	+ 修复 nvue iOS平台 弹出软键盘后收回区域可能不对的问题
	+ 修复 nvue iOS平台使用 uni.request 不能设置data的问题
	+ 优化 hello uni-app web-view页面 增加和其它页面进行传参及跳转
	+ 优化 hello uni-app 示例，样式更统一，uni.css有较大升级，老项目升级时需注意测试
* 【5+App插件】 
	+ 新增 Webview窗口支持配置显示页面加载进度条（WebviewStyles的progress属性）
	+ Android平台 修复 Webview窗口嵌套时弹出软键盘可能引起显示错误的问题
	+ Android平台 修复 Webview窗口标题栏文字颜色可能显示不正确的问题
	+ Android平台 修复 从无法微信小程序启动的问题
	+ Android平台 优化 原生图片预览（plus.nativeUI.previewImage）的UI操作体验
	+ Android平台 修复 Webview窗口default样式下拉刷新不触发pullToRefresh事件的问题
	+ Android平台 修复 视频播放控件（VideoPlayer）在自动调节亮度模式进入全屏变黑的问题
	+ iOS平台 修复 从微信小程序启动应用时获取参数不正确的问题
	+ iOS平台 修复 应用升级后获取的版本号可能不更新的问题
	+ iOS平台 修复 iPhoneXS/Max设备状态栏高度适配不正确的问题
	+ iOS平台 修复 Webview窗口设置bounce后下拉刷新不生效的问题
	+ iOS平台 修复 iPhone8 plus设备指纹识别返回结果为不支持的问题
	+ iOS平台 修复 原生图片预览（plus.nativeUI.previewImage）界面可能引起应用崩溃的问题
	+ iOS平台 修复 无法从相册中选择大视频文件的问题
	+ iOS平台 修复 Webview窗口点击输入框弹出软键盘时可能出现自动滚动位置不正确的问题
	+ iOS平台 修复 视频播放控件（VideoPlayer）的autoplay属性可能不生效的问题
	+ iOS平台 优化 iPhoneX*（刘海屏）设备沉浸式适配方式，与H5保持一致（注意：iOS11及以上系统如果出现灰条，需在name="viewport"的meta节点content属性值中添加viewport-fit=cover）

## 1.1.0.20181030
* 新增 px转upx、px转rem转换。在设置中配置转换比例，代码中敲px时代码助手会列出计算过的upx/rem值
* 新增 项目管理器 对项目点右键，可设置项目别名
* 新增 项目管理器 对项目点右键，可折叠其它展开的项目
* 新增 项目管理器 鼠标移入本区域会在右上角出现功能菜单
* 修复 首次打开设置，源码视图异常的问题
* 修复 css/scss代码助手缺少提示的问题
* 修复 语法校验 错误位置在行首时，校验波浪线不显示的问题
* 优化 语法校验 规则区分warn和error
* 修复 只有一个标签卡时按Ctrl+tab造成崩溃的问题
* 修复 上下移动行后，缩进格式错乱及选择行尾回车符后移动时多移动了内容的问题
* 调整 去掉prettier-php插件
* 调整 Mac平台 删前词、删后词和撤销后的恢复，改为os默认的快捷键
* 修复 mac平台 右键菜单样式不正常及子菜单为空时，父菜单不显示的问题
* 新增 App 制作移动App资源升级包功能（包括5+App、wap2app）
* 新增 App 自定义基座功能，可配置三方sdk的appkey后调试运行
* 新增 App manifest可视化界面-模块权限配置中添加iOS隐私描述配置
* 优化 App 打包窗口，增加iOS证书申请指南的链接
* 优化 App 打包、微信开发者工具启动等环节的错误提示
* 【uni-app插件】
	+ 【重要】uni-app的官方视频教程发布了！ [参考](https://ke.qq.com/course/343370)
	+ 【重要】新增 web-view组件在App环境支持加载本地html文件，方便引用dom相关库及方便5+项目向uni-app分步迁移。[参考](https://uniapp.dcloud.io/component/web-view)
	+ 新增 自定义返回逻辑，点击手机back时可先关闭弹出类自定义组件。 [参考](http://ask.dcloud.net.cn/article/35120)
	+ 新增 cover-view,cover-image 组件（仅支持在 video,map 中使用，暂不支持互相嵌套）。[参考](http://uniapp.dcloud.io/component/cover-view)
	+ 优化 WebSocket 支持 ArrayBuffer 类型的数据通信
	+ 优化 uni.showToast 显示文字在 iOS 平台字体过小的问题
	+ 调整 sourcemap文件的生成目录，微信开发者工具发布小程序时不再提示忽略文件
	+ 修复 pages.json 调整部分内容时编译不生效的bug
	+ 修复 uni.saveFile 在Android平台保存文件后返回路径不正确的bug
	+ 修复 manifest.json文件中networkTimeout节点下 downloadFile、uploadFile 配置项有效值单位不正确的bug
	+ 修复 map 组件使用 v-show 切换时地图不显示的bug
	+ 修复 map 组件动态修改 scale 值不生效的bug
	+ 修复 video 组件的 timeupdate/fullscreenchange 事件回调中，event.detail 参数信息缺失的bug
	+ 修复 uni.getSystemInfo 在App平台下获取系统语言不正确的bug
	+ hello uni-app 优化顶部选项卡模板，vue/nvue 复用共同的js逻辑和css样式
	+ hello uni-app 新增 tag标签 模板
	+ hello uni-app 新增 web-view组件加载本地html的示例（仅App平台生效）
	+ hello uni-app 修复 问题反馈 模板 新增图片会覆盖前一张图片的bug
	+ hello uni-app 新增 倒计时 模板(感谢网友hcoder-深海)
	+ hello uni-app 新增 插屏弹窗 模板(感谢网友hcoder-深海)
	+ hello uni-app 新增 表单验证 模板(感谢网友hcoder-深海)
* 【5+App插件】
	+ 新增 iBeacon模块 [参考](http://www.html5plus.org/doc/zh_cn/ibeacon.html)
	+ Android平台 修复 uni-app中nvue页面可能出现背景透明显示的问题
	+ Android平台 修复 uni-app中nvue页面slider控件index无法更新的问题
	+ Android平台 修复 uni-app中nvue页面list组件的滚动条不显示的问题
	+ Android平台 修复 地图控件与二维码扫描页面同时存在可能出现显示异常的问题（需使用高德地图）
	+ Android平台 修复 地图控件对象关闭后可能引起异常崩溃的问题
	+ Android平台 修复 下载文件url存在重定向时可能引起下载失败的问题
	+ Android平台 修复 点击开屏广告进入广告页面后返回可能切换为全屏显示的问题
	+ Android平台 修复 自动消失提示框（plus.nativeUI.toast）设置图标可能不显示的问题
	+ Android平台 修复 设置屏幕亮度（plus.screen.setBrightness）可能不生效的问题
	+ Android平台 修复 原生窗口动画（plus.nativeObj.View.startAnimation）在全面屏设备异常的问题
	+ Android平台 修复 plus.io.resolveLocalFileSystemURL解析目录对象时回调的entry对象可能不正确的问题
	+ iOS平台 修复 iOS11.3+版本使用WKWebview内核无法主动设置焦点弹出软键盘的问题
	+ iOS平台 修复 视频播放（VideoPlayer）设置封面图片（poster）可能不生效的问题
	+ iOS平台 修复 Webview窗口无法通过getStyle获取titleNView样式的问题
	+ iOS平台 修复 百度语音识别对标点符号处理不正确的问题
	+ iOS平台 修复 地图控件调用show方法可能出现无法显示的问题
	+ iOS平台 修复 在真机运行环境中plus.storage.setItem保存的数据可能丢失的问题
	+ iOS平台 修复 在iOS8.x模拟器中原生图片预览可能引起应用异常崩溃的问题

## 1.0.1.20181012
* 修复 使用某些ES7语法时语法提示异常的问题
* 新增 代码助手底部左右翻页箭头
* 优化 json代码提示function的策略，支持选择es5的匿名函数或es6的箭头函数等
* 修复 链接中带中文时无法跳转的问题
* 修复 manifest.json配置百度语音sdk打包时不生效的问题
* 【uni-app插件】
	+ 优化 uni.chooseImage 在App平台补齐sizeType参数，可直接压缩图片，不需要使用plus api压缩了
	+ 修复 video组件 初始化时报错的问题
	+ 修复 video组件 poster属性不支持本地路径的问题
	+ 修复 地图API mapContext 的 getRegion,getScale 接口 success/fail 回调不触发的bug
	+ 修复 地图API uni.chooseLocation 在Android 4.4平台打开地图显示白屏的bug
	+ 修复 nvue无法在iOS模拟器渲染的问题，Android也仅支持谷歌官方模拟器
	+ 修复 部分手机桌面启动uni-app，首页偶发渲染白屏的bug
	+ 修复 canvas API uni.canvasToTempFilePath接口在canvas中含有图像时调用失败的bug
* 【5+App插件】 
	+ Android平台 修复 高德地图获取位置信息时可能不弹出系统权限询问框的问题
	
## 1.0.0.20181010
* 新增 滚动条信息点，支持在右侧标记书签、搜索结果、语法错误。切换跳转3种标记分别是F2、F3、F4
* 新增 选择所有相同词功能【Win:Ctrl+Alt+e Mac:Ctrl+Alt+d】
* 新增 跳过当前选择，选中下一个相同词 【Win:Alt+Shift+e Mac:Ctrl+Shift+d】
* 新增 右下角通知中心。补充升级提示
* 优化 新建项目时模板选择的体验
* 新增 JavaScript(ES6+)编辑器，可在编辑器右下角点击语言切换。现有着色遇到问题时可切换
* 新增 智能回车 markdown中在列表符后回车，把之前自动补的#、-等前缀去掉。体验同word
* 优化 智能回车 json行尾回车自动加逗号时，如果行尾有注释，不会把逗号加到注释后面
* 优化 智能回车 如果非多光标，json中回车后智能补的json逗号可单独撤销
* 新增 智能双击 双击选中markdown的图片、超链接、加粗、倾斜、单行代码、多行代码语法区开头，选中该语法区
* 新增 智能双击 双击选中markdown的>引用选中所有引用区
* 调整 智能双击 没有缩进的行首双击，不触发全选
* 修复 两侧包围 选中内容按引号括号包围后无法保持选区的bug
* 修复 两侧包围 多光标时插入引号、括号的选区丢失、撤销逻辑不符、绿光标位置不对等问题
* 新增 两侧包围 markdown 中选中内容，按`~_*等符号，自动在选区2侧加包围符号
* 优化 加包围【Ctrl+]】 如果没有触发其他包围设置，则自动在选区首尾加2个光标
* 优化 反包围【Ctrl+Shift+]】，选区2端是配对符号(如引号括号`~_等符号)时，删除包围符号，比如将[a]变成a 
* 新增 向2侧扩大选择、由2侧向内减少选择 【Win:Alt+Shit+→ 、Alt+Shit+←】【Mac:Ctrl++Shit+→ 、Ctrl++Shit+←】
* 新增 设置/取消markdown引用列表 【Ctrl+Atl+Shift+.】
* 优化 智能粘贴 不选内容直接Ctrl+c复制本行后，立即Ctrl+v，调整为插入相同行，而不是在光标位置后粘贴
* 修复 多选区复制后，在非HBuilderX的其他软件中粘贴，粘贴内容顺序与选择顺序相反的问题
* 修复 双引号中敲单引号，有时右引号丢失的问题
* 修复 css校验时，upx单位报错的问题
* 新增 生成离线打包App资源功能 【菜单-发行】
* 新增 真机运行运行到指定页面。[配置教程](http://uniapp.dcloud.io/collocation/pages?id=condition)
* 修复 代码助手在选中编辑器内容的情况下替换不正确的问题
* 修复 Android真机运行时有时候获取sdcard路径错误导致同步文件到错误目录下的问题
* 【uni-app插件】
    + 【重要】开放 uni-app支持原生sdk集成，离线打包，自由扩展原生能力 [参考](http://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/104)
	+ 【重要】开放 兼容微信小程序 JS SDK，丰富的小程序生态内容可直接引入uni-app并且3端通用 [参考文档及各种小程序SDK资源汇总](http://ask.dcloud.net.cn/article/35070)
	+ 【重要】开放 兼容微信小程序自定义组件并且3端通用 [参考](http://uniapp.dcloud.io/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)
    + 【重要】开放 nvue 原生渲染，引入weex，解决某些场景webview无法高性能实现的问题(如左右拖动的复杂tab列表) 注：暂不支持模拟器 [参考](http://uniapp.dcloud.io/use-weex)
    + 【重要】开放 npm 支持 [参考](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
    + 新增 web-view 组件里的网页支持使用uni跳转api跳转到指定路由页面 [参考](http://uniapp.dcloud.io/component/web-view)
    + 优化 发行到App平台时，自动完成js业务代码的混淆压缩
    + 新增 尺寸单位转换方法 uni.upx2px() [参考规范](http://uniapp.dcloud.io/frame?id=upx2px)
    + 修复 slot 内无法使用{{}}插入数据
    + 修复 slot 内使用自定义组件数据错乱
    + 修复 打开多个相同页面数据错乱，例如商品详情页面A跳转详情页面B
    + 调整 unifile:// 文件路径调整为5+识别的plus.io的目录结构，方便plus API继续操作文件
    + 修复 uni.login 无法切换登录账户的问题
    + 修复 uni.chooseLocation 定位不准的问题
    + 优化 pages.json 支持在 app-plus 节点下使用 upx 单位
    + 优化 condition 启动二级页面时支持back至首页
	+ 优化 App平台地图控件从腾讯地图调整为高德原生地图（使用时注意需要向高德申请Appkey）
	+ 优化 video组件 支持rtmp等非http协议的视频源
	+ 修复 video组件 设置 duration 属性无效的bug 
	+ 修复 真机调试时，修改main.js代码，未自动热更新的bug
    + hello uni-app 新增 原生nvue左右滑动选项卡示例
    + hello uni-app 新增 movable-area示例
    + hello uni-app 新增 小程序支付演示
	+ hello uni-app 新增 自定义导航栏组件支持下拉刷新
    + hello uni-app 新增 列表到详情模板中详情页底部增加小程序banner广告演示
    + hello uni-app 新增 时间轴timeline 模板示例
    + hello uni-app 新增 模板 步骤提示 (感谢网友hcoder-深海)
    + hello uni-app 新增 模板 滚动公告 (感谢网友hcoder-深海)
    + hello uni-app 新增 模板 评论列表 (感谢网友hcoder-深海)
	+ hello uni-app 修复 segmented-control 示例退出重进后数据未重置的问题
* 【5+App插件】 
    + 新增 百度语音识别，支持实时显示说话内容、默认界面更美观、支持自定义语音识别界面（plus.speech.SpeechRecoginzeEvents）
	+ 优化 录音格式支持：iOS新增支持mp3格式，Android平台新增支持aac&mp3格式。推荐使用aac格式 [参考](http://ask.dcloud.net.cn/article/35058)
    + Android平台 更新 高德地图及定位SDK（6.4.1），修复在部分手机上地图可能显示不出来的问题
    + Android平台 修复 首页titleNView的type为transparent可能显示不正常的问题
    + Android平台 修复 VideoPlayer无法播放本地路径视频资源的问题
    + Android平台 修复 VideoPlayer设置src为空时不触发错误回调的问题
	+ Android平台 修复 文件上传（plus.uploader.Upload）设置无效服务器地址不触发错误回调的问题
	+ iOS平台 更新 高德地图及定位SDK（6.4.0），修复在部分手机在最高缩放级别不显示内容的问题
	+ iOS平台 修复 在iOS12模拟器上无法运行的问题
	+ iOS平台 修复 Webview窗口快速侧滑操作可能引起显示异常的问题
	+ iOS平台 修复 应用前后台切换操作后页面中可能出现白条的问题
    + iOS平台 优化 应用从后台切换到前台可能Webview白屏的问题
    + iOS平台 修复 相册中选择HEIC格式图片可能无法使用的问题
    + iOS平台 修复 Wap2App应用设置应用角标（plus.runtime.setBadgeNumber）可能无效的问题
    + iOS平台 修复 原生图片轮播控件（ImageSilder）设置gif图片可能出现崩溃的问题
    + iOS平台 修复 安装应用资源差量升级（wgtu）可能出现崩溃的问题
    + iOS平台 修复 图片预览（plus.nativeUI.previewImage）在iPhoneX上标题显示不正确的问题
    + iOS平台 完善 下拉刷新雪花效果
* 【云服务】
	+ 云端打包支持渠道包 [参考](http://ask.dcloud.net.cn/article/13438)
	+ 优化发布平台，支持iOS、Android、小程序统一发布，一个短链发给用户多个版本 【菜单发行-发布到DCloud发布平台】


## 0.1.50.20180918-alpha
* 【uni-app插件】
    +  优化 下拉刷新配置
    +  修复 uploadFile 参数 files 不生效
    +  修复 组件内联 style 中使用 background-image 相对路径不生效
    +  修复 组件 picker-view 无法正确选中
    +  修复 部分历史创建的uni-app项目在iOS平台真机运行报错的bug
    +  修复 模板 索引列表在微信小程序平台，滑动右侧索引导致整体界面跟随滑动的bug

## 0.1.49.20180917
* 新增 设置提供可视化界面
* 调整 插件配置统一汇总到菜单【工具】-【插件配置】，所有插件包括内置的格式化插件jsbeaufy配置都调整到此入口
* 新增 Prettier插件，处理less、scss、php文件格式化
* 修复 插件安装后可能导致外部命令无法显示的问题
* 新增 wap2app 项目创建、打包、manifest可视化
* 新增 菜单文件-打开历史文件，支持打开历史项目
* 优化 全部保存的快捷键默认为【Ctrl+Alt+s】
* 修复 html的text区域无法输入中文书名号的问题。可选择是否转义
* 修复 光标在文件开头时格式化造成HBuilderX无响应的问题
* 修复 项目名称包含空格时代码助手图片预览失效的问题
* 优化 删除目录时该目录下已打开的文件自动关闭
* 优化 文件和文件夹内搜索过滤unpackage目录
* 修复 markdown 大纲层级不正确的问题
* 优化 运行菜单，在toolbar上点运行和Ctrl+r运行，统一下拉运行菜单。等待手机检测时可反复按Ctrl+r。点击菜单运行很低效，推荐点击toolbar或快捷键
* 修复 有时打包失败没有提示错误信息的问题
* 优化 真机运行崩溃的问题
* 修复 uni-app 编译添加node和npm环境变量，以免因为npm和node不统一造成编译失败的问题
* 修复 uni-app 小程序运行后，切换项目后点控制台的停止按钮无法停止的问题
* 优化 uni-app manifest可视化界面新增微信小程序配置（注意app的sdk里的微信设置和微信小程序设置是不同的）
* 修复 uni-app 微信开发者工具启动后无法查看源码的问题
* 修复 uni-app 相同appid和projectName时无法启动微信开发者项目的问题
* 修复 uni-app 修改manifest.json时有可能导致崩溃的问题
* 【uni-app插件】
    + 【重要】 新增 upx 作为响应式尺寸单位，px 变为传统的物理像素，历史项目升级参考 [教程](http://ask.dcloud.net.cn/article/35014)
    + 新增 支持注册全局组件 [文档](http://uniapp.dcloud.io/use?id=%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6)
    + 新增 pages.json app-plus 支持pullToRefresh配置 [文档](http://uniapp.dcloud.io/collocation/pages?id=下拉刷新)
    + 优化 iOS平台 从UIWebview切换为WKWebview，提升页面图片渲染速度
    + 新增 小程序平台 分包预下载（hello uni-app示例为方便分包调整了目录结构）
    + 修复 css 变量 var(--status-bar-height) 部分情况不生效 
    + 修复 组件嵌套 slot 无法传递 props
    + 优化 组件 input 支持focus属性，自动弹出键盘（目前iOS部分版本仍有兼容问题）
    + 优化 组件 input 支持confirm-type=search属性，键盘右下角显示为搜索样式
    + 优化 组件 swiper 在iOS平台屏幕边缘的滑动体验
    + 修复 uni.openLocation无法调用系统导航的问题
    + 修复 iOS setNavigationBarColor 改变frontColor时未修改状态栏颜色
    + 修复 组件 picker-view value属性不生效的bug
    + 修复 页面onLoad事件内立即执行reLaunch不生效的bug
    + 优化 back逻辑，优先关闭当前显示的 loading 或 toast，再关闭页面
    + hello uni-app 新增 input 示例新增自动弹出键盘、搜索框
    + hello uni-app 新增 侧滑导航示例
    + hello uni-app 新增 多列选择、联动选择示例（含城市选择）
    + hello uni-app 新增 自定义导航栏示例
    + hello uni-app 优化 导航栏示例中App原生按钮的写法和样式
    + hello uni-app 新增 load more（加载更多）示例
    + hello uni-app 新增 segment control（分段选择器）示例
    + hello uni-app 新增 indexed-list（索引列表）示例
    + hello uni-app 新增 图片懒加载示例
    + hello uni-app 新增 手势图片锁屏示例
    + hello uni-app 新增 IM chat示例（感谢网友xcecd@qq.com）
* 【5+App插件】
    + 新增 Webview窗口titleNView的按钮类型（type），内置支持"前进"、"后退"、"分享"、"收藏"、"主页"、"菜单"、"关闭"按钮图标
    + 完善 直播推流（LivePusher）控件，可支持推流前显示预览（preview）摄像头画面
    + 完善 Webview窗口下拉刷新支持通过WebviewStyles的pullToRefresh属性设置，添加"pullToRefresh"事件（下拉刷新时触发）
    + 修复 微信登录授权可能存在的安全隐患，补充authorize方法获取授权code避免泄露appsecret数据
    + Android平台 修复 云端打包自定义targetSdkVersion后可能无法获取定位信息的问题
    + Android平台 修复 部分设备可能出现无法通过微信分享图片的问题
    + Android平台 修复 视频播放控件timeupdate事件返回参数不正确的问题
    + Android平台 修复 视频播放控件缓冲事件仅触发一次的问题
    + Android平台 修复 视频播放控件全屏后可能显示虚拟键盘的问题
    + Android平台 修复 Webview配置titleNView分割线可能不显示的问题
    + Android平台 修复 地图resize后自动全屏显示的问题
    + Android平台 修复 调用plus.runtime.launchApplication方法将应用激活到前台不触发newintent事件的问题（新增参数newTask控制）
    + Android平台 修复 部分手机上可能出现二维码扫码崩溃的问题
    + Android平台 修复 多点触摸滑动操作可能引起应用假死的问题
    + iOS平台 新增 支持摄像头录像（plus.camera.startVideoCapture）设置视频长度（videoMaximumDuration）。Android视频录制时长控制请使用Native.js，[参考](http://ask.dcloud.net.cn/question/45756)
    + iOS平台 新增 支持分别设置Webview窗口顶部（backgroundColorTop）和底部（backgroundColorBottom）的回弹区域背景颜色
    + iOS平台 修复 视频播放控件不触发缓冲事件的问题
    + iOS平台 修复 系统相册选择文件不支持gif图片的问题
    + iOS平台 修复 原生View控件中使用富文本可能引起程序崩溃的问题
    + iOS平台 完善 Webview下拉刷新控件支持配置雪花和文字颜色（"pullToRefresh":{"color":"#ff0000"}）
    + iOS平台 修复 真机运行时可能出现数据（plus.storage.setItem）丢失的问题
    + iOS平台 修复 模拟器运行可能出现JS异常错误的问题
    + iOS平台 修复 使用WKWebview内核时页面中input无法主动设置焦点弹出软键盘的问题


## 0.1.48.20180906-alpha
* 【重要】新增 自动保存修改内容到临时文件的功能，停电、崩溃不再担心。这个机制不是保存正式文件，不会触发自动编译运行。自动保存间隔时间默认为30秒，可在设置里修改
* 新增 全部保存功能
* 新增 uni-app项目新建页面、组件的功能。新建页面会自动新建同名目录、vue文件及自动添加到pages.json最后
* 新增 在uni-app项目下打开的vue页面编辑器，右键添加转到pages.json对应节点的功能
* 优化 文件在外部被编辑后，提醒变更的逻辑
* 修复 git插件无法使用的问题
* 修复 拖动代码不能移动位置的问题
* 修复 黑色主题下，光标在括号旁边时，匹配括号的黑色小框看不清的问题
* 修复 js字符串中文字符转义的问题
* 修复 有些包含大量emoji字符的utf8文件编码识别错误的问题
* 修复 node插件升级时，如果已安装会重新安装的问题
* 修复 Ctrl+tab无法切换到预览文件的问题
* 修复 函数参数为function时不能自动补全圆括号的问题
* 修复 Mac上中文输入法有时出现多余字符的问题
* 修复 Mac上撤销操作偶发乱套的问题
* 调整 删除jshint校验js的逻辑，校验js请安装eslint插件
* 修复 真机运行菜单iOS设备的中文显示为乱码的问题
* 修复 真机运行菜单正在运行的设备对应的项目名称有可能显示不对的问题
* 修复 真机运行多个设备时有时候出现不同步文件的问题
* 修复 App打包界面选择的iphone、ipad打包时不生效的问题
* 【uni-app插件】
    + 更新 mpvue 相关插件至最新
    + 新增 小程序平台 分包加载，参考[pages.json配置说明](http://uniapp.dcloud.io/collocation/pages?id=subpackages)
    + 新增 TypeScript 预编译器支持，实现了 <script lang="ts" src="xx.ts"></script> 引用方式的自动识别
    + 新增 内置 autoprefixer ，自动处理css兼容性(iOS>=8,Android>=4)，修复iOS8上部分组件变形的问题
    + 新增 App平台 二级页面支持单独取消原生导航栏，支持定义导航栏为透明渐变模式
    + 新增 组件 picker-view，规范参考[picker-view](http://uniapp.dcloud.io/component/picker-view)
    + 修复 uni.switchTab跳转的bug，注意switchTab跳转后会关闭所有非tabbar页面。可用于初始页为欢迎页、登陆页，之后switchTab到业务首页的场景
    + 修复 uni.request 未返回 header 的问题
    + 修复 组件 textarea 有时无法输入汉字的问题
    + 修复 组件 input 数字类型无法输入小数点的问题
    + 修复 启动后立即切换tab，可能卡死的问题
    + hello uni-app 页面跳转 新增switchTab、reLaunch演示
    + hello uni-app 新增 EChart图标示例
    + hello uni-app 新增 可拖动九宫格示例
    + hello uni-app 新增 自定义导航栏（透明渐变、自定义按钮）示例
    + hello uni-app 优化 列表到详情模板 详情页改为透明渐变导航
    + hello uni-app 新增 图片、头像剪切示例（感谢网友杨大宝）
    + hello uni-app 新增 二维码生成示例（感谢网友诗小柒）
    + 更多三方扩展，参考[http://ask.dcloud.net.cn/explore/category-12__is_recommend-1](http://ask.dcloud.net.cn/explore/category-12__is_recommend-1)
    + 新增 应用模板：图片浏览App模板
    + 新增 应用模板：登录注册模板
    + 新增 [mpvue项目（组件）迁移指南、示例及资源汇总](http://ask.dcloud.net.cn/article/34945)
* 【5+App插件】
    + 修复 Webview窗口创建后无法动态添加titleNView的问题
    + Android平台 补充 录音支持aac音频格式文件
    + Android平台 优化 打开较多窗口后可能导致窗口动画掉帧的问题
    + Android平台 修复 微信小程序分享图片可能变虚的问题
    + Android平台 修复 无法上传中文名文件的问题
    + iOS平台 修复 模拟器不支持视频播放&直播推流控件的问题
    + iOS平台 修复 等待框自定义高度时垂直方向没有居中的问题
    + iOS平台 修复 微信分享可能不触发回调的问题
    + iOS平台 修复 操作storage可能引起卡顿的问题
    + iOS平台 修复 播放控件（VideoPlayer）不触发ended事件的问题
    + iOS平台 修复 在iPhoneX获取状态栏高度不正确的问题
    + iOS平台 修复 启用js原生混淆后使用Webview的appendJsFile方法失效的问题
    + iOS平台 修复 启用js原生混淆后使用wgt升级后无法运行的问题
    + iOS平台 优化 下拉刷新的样式改为与iOS邮件一致。下拉区域的背景色可在webviewStyle的bounceBackground设置
    + iOS平台 修复 Webview窗口titleNView更新标题文字颜色后返回按钮颜色没有同步更新的问题

## 0.1.47.20180823-alpha
* 【uni-app插件】
    + 修复 通过<style lang="less"></style>方式使用less、scss、stylus预编译语言开发，云端打包时编译报错的问题
* 【5+App插件】
    + 修复 Android平台修复真机运行uni-app录制音频可能引起崩溃的问题
    
## 0.1.47.20180821-alpha
* 添加 uniapp编译前先进行manifest.json和pages.json的语法校验的功能
* 添加 真机运行控制台添加重启、停止、启动的功能
* 优化 真机运行控制台焦点切换的问题
* 优化 代码提示时uni-app下js模块提示过滤掉pages.json下配置的页面
* 修复 node插件升级失败有可能导致崩溃的问题
* 修复 通过点击“Android模拟器端口设计”菜单导致端口丢失的问题
* 修复 正则搜索卡死的问题
* 修复 外部命令报node不可运行
* 修复 真机运行编译器报错无法跳转到对应文件的问题
* 修复 真机运行编译器日志错乱的问题
* 修复 升级时有些node插件不安装的问题
* 修复 manifest图形编辑器设置iphonex、iphonexl启动图的节点名称不对的问题
* 修复 内置浏览器渲染进程异常导致崩溃的问题
* 修复 项目管理器中操作文件小概率崩溃的问题
* 修复 manifest.json文件末尾为注释会导致App打包进度一闪而过的问题
* 修复 manifest可视化编辑器编辑时可能损坏包含//注释的manifest.json文件内容结构的问题
* 修复 创建项目时关闭新建界面导致崩溃的问题
* 修复 App打Android包没有提交xxxhdpi图标的问题
* 修复 mac下移除项目到回收站有时会失败的问题
* 修复 使用emmet的时候按下tab键后中文乱码
* 【uni-app插件】
    + 新增 支持vue里通过<style lang="less"></style>方式使用less、scss、stylus这3种预编译语言。需先在HBuilderX插件安装中安装对应编译插件
    + 新增 pages.json 中 globalStyle, style 节点支持分平台配置，可在App侧单独定义titleNView。[参考pages.json说明](http://uniapp.dcloud.io/collocation/pages?id=app-plus)
    + 新增 App中监听原生Title的按钮点击事件onNavigationBarButtonTap
    + 优化 编译的错误日志提示语
    + 补充 启动时指定关闭Splash的延时时间
    + 新增 uni.canvasToTempFilePath，可把canvas区域保存为图片
    + 支持 iPhone X 安全区域配置（默认：App 包含 tabBar 时，自动启用底部安全区域，背景色为 tabBar 背景色，无 tabBar 时，不启用安全区域。也可在App侧参考5+的manifest规范配置）
    + 修复 非首页配置 navigationBarTextStyle 不生效
    + 修复 组件 video show-play-center-btn 不生效
    + 修复 组件 input 标签属性 value="" 导致运行时显示为 true
    + 修复 组件 input 类型为 number 时输入报错
    + 修复 组件 input 在 iOS 平台焦点错乱，快速输入异常，删除时光标错乱
    + 修复 组件 input 数字类型输入非法字符时 placeholder 不消失
    + 修复 组件 map 的 translateMarker 方法不生效
    + 修复 uni.navigateBack delta 参数不生效
    + 修复 uni.getSystemInfo/uni.getSystemInfoSync 返回 platform 不正确
    + 修复 uni.reLaunch 参数丢失
    + 修复 onLoad 事件内立刻调用 uni.startPullDownRefresh 不生效
    + 修复 App 生命周期 onShow,onHide 在 app 切换到前台、后台不触发的问题
    + 新增 新项目模板默认添加 mp-weixin->appid 节点
    + hello uni-app：支持app端首页单独设置原生导航栏，并在右上角增加关于介绍按钮
    + hello uni-app：新增 接口 媒体 文件示例
    + hello uni-app：新增 模板 markdown渲染富文本（用于图文新闻、资讯、笔记快速渲染）
    + hello uni-app：新增 模板 问题反馈
* 【5+App插件】
    + 新增 视频播放控件支持视频长度（duration）、静音播放（muted）、是否显示视频中间的播放按钮（show-center-play-btn）等功能
    + Android平台 修复 拍照后返回可能引起卡顿的问题
    + Android平台 修复 系统等待框自定义Loading图片不支持相对路径的问题
    + Android平台 修复 真机运行修改css/js可能无法同步刷新的问题
    + iOS平台 补齐 支持不设置应用Splash图片时自动使用默认应用图标的开屏界面
    + iOS平台 新增 支持设置录音声道（channels）功能，调整默认录音为单声道
    + iOS平台 修复 使用高德地图后可能导致应用无法启动的问题
    + iOS平台 修复 不支持设置iPhone5&6横屏开屏图片的问题

## 0.1.46.20180810-alpha
* 新增 5+app项目的manifest图形化编辑器
* 新增 iOS真机运行保存时自动刷新手机的功能
* 修复 网络被劫持时插件下载失败的问题
* 修复 mac下休眠一段时间后HBuilderX卡死的问题
* 修复 在资源管理器中双击文件或通过打开方式启动应用后有时无法打开对应文件的问题
* 修复 css文件行注释异常的bug
* 修复 settings.json文件不合法导致启动就弹错误提示框，并且界面主题混乱的问题
* 优化 App打包时支持隐藏进度界面
* 新增 移除项目到回收站的功能
* 新增 uni-app项目光标在标签语句上按F1可打开组件帮助文档
* 补充 用户登录后每天自动签到加社区积分功能
* 优化 windows下自动检测微信开发者工具所在目录
* 优化 vue代码提示，支持自定义组件的属性提示
* 优化 双引号自动补全时绿光标结束点的逻辑
* 修复 有时弹出错误的快捷键冲突选择菜单的问题
* 修复 php自定义代码块不生效的问题
* 修复 有时启动崩溃的问题
* 修复 光标选到页首时，注释、加粗、加包围等操作可能引发崩溃的问题
* 【uni-app插件】
    + 修复 Android4.4、5.0的兼容问题
    + 修复 不支持iOS模拟器的问题
    + 优化 iOS上的运行性能，尤其是示例中模板tab示例的卡顿
    + 升级 mpvue至1.0.13
    + 修复 uniapp的appid为空时真机运行白屏的问题
    + 优化 部分手机上splash关闭过早造成白屏的问题
    + 新增 css变量var(—status-bar-height)，微信小程序固定为25px，App环境为真实状态栏高度，[详见](http://uniapp.dcloud.io/frame?id=css%E5%8F%98%E9%87%8F)
    + 修复 pages.json修改page的style不编译的问题
    + 优化 video组件从HTML5 video改为原生video
    + 修复 解决大部分情况下，页面data数据未重置导致的页面显示旧数据
    + 修复 reLaunch每次都会出现启动splash的问题
    + 更新 对接最新的5+分享接口，支持小程序分享
    + 修复 禁用 .babelrc 对编译器的影响
    + 更新 扫码支持 onlyFromCamera、scanType 参数
    + 修复 有时运行到微信模拟器未生成project.config.json的问题
    + 优化 previewImage
    + 优化 dns.js(localhost)报错提示
    + 更新 调整App运行时的userAgent
    + 更新 调整 input 组件数字输入，身份证输入，带小数点的数字键盘对应的类型
    + hello uni-app：新增商品列表模板
* 【5+App插件】
    + 新增 视频播放控件（plus.video.VideoPlayer）支持弹幕、设置全屏方向等功能
    + 更新 微信分享SDK，新增支持分享音频、视频、**小程序**等
    + 更新 新浪微博分享SDK，新增支持分享视频
    + 更新 QQ分享SDK，新增支持分享音乐
    + Android平台新增 不设置应用Splash图片时自动使用默认应用图标的开屏界面，取消大H Splash
    + Android平台修复 Webview为子窗口时通过无法通过setStyle更新大小及位置的问题
    + Android平台修复 获取文件信息（plus.io.File）返回的type类型不正确的问题
    + iOS平台修复 真机运行同步刷新页面引起程序卡死/崩溃的问题
    + iOS平台修复 百度地图无法显示内容的问题
    + iOS平台修复 设置状态栏样式可能不生效的问题
    + iOS平台修复 视频播放控件未设置自动播放时可能会自动播放的问题


## 0.1.45.20180728-alpha
* 【重要】新增uni-app，使用vue技术，开发一次，iOS、Android、微信小程序三端同时生成。[详见](http://uniapp.dcloud.io/)
* 【重要】调整uniapp策略，之前的原生渲染uniapp改为nml项目[详见](http://ask.dcloud.net.cn/article/13507)
* uni-app：新增条件编译，采用类似 //#ifdef APP-PLUS 的写法做平台条件编译，代码块名为ifdef，还可双击ifdef选中整体代码段落。[详见](http://uniapp.dcloud.io/platform)
* uni-app：新增u开头的各种组件和api的代码块，如urequest即可快速生成联网代码
* 【重要】语法校验
    + 新增html,vue,css,sass,less等语法验证插件【安装插件后默认是保存时校验，也可在工具菜单手动激活】
    + 优化语法校验，在代码中通过波浪线直接标识，支持F4跳转到下一个语法错误
    + json文件保存时，自动删除多余错误逗号
* 【重要】新增光标在api代码处，按F1打开对应的帮助文档。目前支持uni-app、plus、vue的api
* 优化新建菜单，增加文件模板及自定义模板
* 新增切换最近文件列表。Win:Ctrl+Tab；Mac:Alt+Tab。短按是在最近2个标签卡切换，长按可在列表中持续移动（逻辑同OS的切屏）
* 新增文件收藏功能，方便快速访问常用文件【Alt+Shift+f】
* 新增快捷键冲突时弹出选择菜单的功能
* 代码提示
    + 优化js中json语法的提示
    + 修复翻页可能错乱的bug
    + 补充vue指令的信息帮助及vuex框架语法库
    + 修复某些情况下框架语法库失效的问题
* Emmet：修复在css、php等文件中失效的bug
* 优化代码块教程，新增clogvar快捷打印变量的js代码块
* 优化vue转到定义
* 智能回车
    + json的键值对和数组后回车，自动补充行尾逗号
    + 优化js中/**回车处理
    + 修复回车时光标可能在屏幕外的问题
* 智能双击
    + 新增双击逗号左侧或右侧，选中数组或参数的前一个或后一个。大幅提升json的节点增删效率
    + 新增双击条件编译区的ifdef或endif关键字选中条件编译段落
    + 新增双击行尾行注释，选中注释段
    + 新增Alt+双击括号引号，把两侧的括号引号也选中
* 优化重复插入，不选内容时是重复插入当前行，选内容时是重复插入选区。Win:Ctrl+Insert；Mac:Command+Shift+r
* 优化缩进，支持空格、tab转换和长度调整，使用方式：菜单【编辑】-【缩进】
* 外部命令新增terminal类型，使用该类型的外部命令运行环境设定为内置终端
* 优化内置终端插件的使用体验
* 优化运行
    + 支持多设备运行到不同的控制台
    + 修复项目名含有+号等特殊字符时，无法在内置web服务器运行和预览的问题
    + 修复Mac无法自动识别已安装的浏览器的问题
    + 修复预览时web服务器启动慢导致无法使用web服务器预览的bug
* markdown
    + 粘贴外部图片到md文件时，自动整理到附件文件夹下，方便整体发行及预览
    + 修复非项目下的md文件预览时不能显示图片的bug
* 修复某些情况下，ctrl+f搜索会导致程序崩溃的问题
* 修复大量删除项目内文件可能会导致崩溃或项目列表清空的问题
* 【App插件】支持Mac真机运行同步文件
* 【App插件】新增manifest.json中（plus->arguments）配置应用默认启动参数功能
* 【App插件】新增toast的图标支持设置宽高（iconWidth/iconHeight）
* 【App插件】Android平台云端打包支持在manifest中指定targetSdkVersion版本（解决Google提交应用要求支持Android8.0+的问题）
* 【App插件】Android平台修复应用资源可能被清理工具删除的问题
* 【App插件】Android平台修复未配置震动权限时扫码成功引起应用崩溃的问题
* 【App插件】Android平台修复特定情况下状态栏高度计算不正确的问题
* 【App插件】Android平台修复二维码通过图片扫码识别（plus.barcode.scan）不触发回调的问题
* 【App插件】iOS平台修复自定义基座concole.log日志无法输出的问题
* 【App插件】iOS平台修复获取支付通道状态未及时更新的问题

## 0.1.43.20180625-alpha
* 修复内置浏览器、内置终端插件配置错误的问题
* 解决某些情况下编辑器右键"在项目管理器中定位"不生效的问题

## 0.1.42.20180623-alpha
* 【重要】新增内置终端【win: Alt+c；mac: Ctrl+c】
    + 支持多终端
    + 菜单运行支持解析package.json的命令直接运行到内置终端
* 优化代码块的自定义和显示
* 优化Vue2.x语法提示
* 插件外部命令支持保存自动执行，在插件配置中将"onDidSaveExecution": true, 重启生效。可用于保存时自动编译、压缩、提交svn等
* 优化格式化
* 修复粘贴时有时代码没有智能缩进的问题
* 解决外部命令运行有时会提示node异常的问题
* 调整代码助手数字选择默认策略为Alt+数字插入
* 【App插件】【重要】新增原生视频播放组件（支持flv、rtmp/hls/rtsp协议），新增直播推流组件（rtmp协议），规范参考 [http://www.html5plus.org/doc/zh_cn/video.html](http://www.html5plus.org/doc/zh_cn/video.html)
* 【App插件】【重要】直播开发指南，参见[http://ask.dcloud.net.cn/article/13416](http://ask.dcloud.net.cn/article/13416)
* 【App插件】解决wap2app打包原生时没有编译的问题
* 【App插件】Android平台修复高德定位使用缓存数据导致定位不准确的问题
* 【App插件】Android平台修复默认不支持媒体输入的问题
* 【App插件】Android平台修复Webview设置bottom属性横竖屏切换后可能不生效的问题
* 【App插件】iOS平台修复NView不能显示部分网络gif文件的问题
* 【App插件】iOS平台修复应用内支付（IAP）无法获取购买凭证的问题
* 【App插件】iOS平台修复无法直达支付宝的芝麻认证页面的问题
* 【云服务】云端打包校验应用属主权限，减少appid乱用，详见[http://ask.dcloud.net.cn/article/13413](http://ask.dcloud.net.cn/article/13413)

## 0.1.41.20180612-alpha
* 代码助手新增右侧详细信息
* 代码助手新增单击Alt切换数字插入状态的功能
* 新增中文输入免干扰功能，在特定语法区输入全角的分号逗号括号会自动替换为半角符号，减少错误，编写更顺畅。可在设置中配置开关
* 修复设置分栏为4宫格并关闭HBuilder X后，无法再次启动HBuilder X的问题
* 修复HTML文件不提示vue指令的问题
* 完善自定义代码块的帮助说明

##0.1.40.20180607-alpha
* 修复内置浏览器无法加载页面资源的问题
* 修复win10下浏览器运行-Edge提示找不到Edge浏览器的问题

##0.1.39.20180606-alpha
* 修复wxml的注释和智能选中的一些问题
* 修复某些情况下，格式化后滚动条位置不正确的问题

##0.1.38.20180605-alpha
* 紧急修复mac上部分文件格式化、外部命令菜单显示的若干bug

##0.1.37.20180605-alpha
* 新增内置浏览器预览，即老版的边改边看 【win: Alt+p；mac: Ctrl+p】
* 强化微信小程序支持，更好的小程序开发工具 [详见](http://ask.dcloud.net.cn/article/13373)
    + 支持新建微信小程序项目、文件
    + 支持小程序语法提示
    + 支持直接运行到微信开发工具的模拟器看效果和调试【菜单运行】
* 新增自定义代码块功能【菜单工具-自定义代码块】
* 补充mui代码块
* 默认支持格式化vue文件，并修复格式化后光标位置不正确的问题
* 修复某些情况下中文输入法卡的问题
* 修复vue中url跳转失效的问题
* 修复有时代码块失效或变卡的问题
* 修复Mac版代码提示经常失效的问题
* 修复真机运行有时崩溃的问题
* 修复es6编译无效果的问题
* 修复js压缩插件不支持es6的问题
* 修复文件内搜索时输入中文有时候会崩溃的问题
* 修复Mac下运行项目下的npm命令失效的问题
* 修复选中内容按左边括号，无法在2端加括号包围的问题。只支持大中小括号，不包含尖括号
* 修复输入左边引号括号智能补齐匹配引号括号不支持多光标的问题

##0.1.36.20180521-alpha
* 修复 UniApp真机运行失败的问题
* 强化折叠，见菜单跳转
    + 折叠单行【Alt+-】
    + 展开单行【Alt+=】
    + 折叠子行【Alt+Shift+-】
    + 展开子行【Alt+Shift+=】
    + 折叠所有行【Alt+Ctrl+Shift+-】
    + 展开所有行【Alt+Ctrl+Shift+=】
    + 折叠其他区域【Alt+Shift+o】
* 新增 选中当前行(不含首尾空白字符) 【鼠标双击行尾】【Ctrl+Shift+l】
* 智能双击强化 双击-、_、.这3个连字符，选中相连的词。例如class="mui-table-view mui-table-view-chevron"

## 0.1.35.20180519-alpha
* 紧急修复运行浏览器和真机的一些问题

## 0.1.34.20180519-alpha
* 【重要】新增App换量联盟，免费获得翻倍用户，[详见](http://ask.dcloud.net.cn/article/13300)
* 【重要】大幅强化vue，可能是最好的vue开发工具
* 优化less、scss语法提示
* 解析项目下package.json中npm命令，在运行和外部命令菜单提供快捷执行入口
* 优化浏览器运行的若干体验问题
* 配置语言类型关联，指定某后缀名文件使用某种语言编辑器打开（设置里files.associations节点）
* win版在根目录新增reset.bat，执行bat可清除HBuilderX所有数据配置
* 优化框架语法提示库的加载
* 优化插件部分体验问题
* 修复mac下外部命令shell模式无法打开终端的问题
* 优化文件保存无权限时的逻辑
* 智能双击新增选中折叠。鼠标双击折叠行前字符左侧可选中该折叠区域
* 优化扩大选区【Ctrl+=】
* markdown：新增markdown的浏览器运行预览【Ctrl+r】
* 【App插件】修复创建5+app项目后没有从服务器自动获取appid的问题
* 【App插件】优化manifest校验提示

## 0.1.33.20180505-alpha
* 新增插件管理
* 新增保存自动刷新浏览器功能（仅通过内置服务器打开的页面生效）
* 新增粘贴智能缩进，光标在行首缩进位置(不是顶格)时粘贴自动处理缩进
* 新增光标历史前进后退【Alt+←、Alt+→】及清空光标历史
* 支持拖拽标签卡到外部直接生成新窗体
* 分栏增加垂直分栏和四宫格模式
* 内置服务器首次启动策略修改为浏览器运行后启动，弹出权限询问框时请务必点允许
* 修改某些情况下格式化后光标错位的问题
* 修复新建窗体后项目管理器单击展开变双击的问题
* 新建项目时补充hello wap2app模板
* 优化酷黑主题的一些问题
* 修复文档结构图/大纲的中文兼容问题
* 修复临时文件标题不随着第一行内容变更的问题
* 优化HBuilderX文件目录结构，减少文件数量

## 0.1.32.20180424-alpha
* 新增Ctrl+鼠标右键移除点击位置的多光标/选区
* 新增js、css等分号结尾的语言中，双击分号选择该段内容的功能
* 修复酷黑主题搜索输入框字体颜色看不清的问题
* 修复某些情况下代码块不提示的问题
* 【App插件】修改某些情况下真机运行Uni-App/快应用时，修改单文件同步结果不正确的问题

## 0.1.31.20180420-alpha
* 新增文档结构图/大纲功能【Alt+w】（mac是Ctrl+w）
* 智能双击：HTML中新增双击=选中Tag属性、Css中新增双击类名左侧选中整个类、优化js中function等关键字双击末尾则选中该词
* 优化酷黑主题体验，修复nss,njs等文件酷黑主题下没有高亮的问题
* 新增Ctrl+鼠标滚轮缩放字体的开关配置项:editor.mouseWheelZoom
* 修复二进制文件预览的一些错误
* 修复某些情况下升级过慢的问题

## 0.1.30.20180418-alpha
* 新增黑色主题
* 新增编辑器分栏功能【Alt+Shift+1、Alt+Shift+2、Alt+Shift+3】
* 转到定义支持在另一分栏打开，方便并排查看【Ctrl+Alt+鼠标点击或Alt+Shift+D或windows下Shift+F12】
* 支持Alt+N将焦点移到编辑器的功能。至此完成：Alt+Q是左侧项目管理器，Alt+O是顶部工具栏，Alt+C是底部控制台，Alt+N是中间编辑器（mac下Alt改为Ctrl）
* 补充了mac下的文件复制移动删除等操作
* 增加历史剪切板【Ctrl+Alt+v】
* 优化搜索功能，搜不到的文字会变红，查找下一个循环到开头时会悬浮图标指示
* 在空白文档粘贴内容时，会自动检测待粘贴内容是否HTML或json，并自动切换语言类型和自动格式化
* 取消js文件保存时自动校验语法的默认设置，需要的开发者请手动在设置中调整jshint.onsave选项
* 修复某些情况tab缩进变成8的问题
* 修复某些情况重命名文件引发崩溃的问题
* 修复某些情况引号智能补全错乱的问题
* 修复某些情况JS跨文件转到定义不正确的问题
* 修复某些情况项目管理器目录层级错乱的问题
* 修复忘记密码后没有提示已发送邮件的问题
* 【App插件】Uni-App支持web组件引用本地html、js、css文件
* 【App插件】快应用/Uni-App真机运行基座升级到1.0.16

## 0.1.29.20180409-alpha
* 紧急更新某些情况下内置web服务器打开html显示404的问题
* 【App插件】小程序to快应用/Uni-App转换器增加最小版本描述，解决提交到快应用平台失败的问题

## 0.1.28.20180406-alpha
* 增加web服务器插件,仅支持HTML文件在浏览器运行时使用
* 文件夹内搜索添加全部替换的功能
* 修复未搜索到结果时，状态栏信息立即消失的问题
* 修复设置和搜索结果编辑器替换所有有时候未替换的问题
* 修复有时异常退出导致项目列表清空的问题
* 修复大文档在某些情况下折叠造成卡顿的问题
* 修复某些情况下大文档着色引发异常的问题
* 【mac版】解决finder里打开方式不能选择HbuilderX的问题
* 【mac版】修复部分快捷键失效的问题
* 【App插件】解决某些情况下，调试debug卡死的问题
* 【App插件】小程序to快应用/Uni-App转换器支持 url跳转参数传递,优化部分样式,组件转换
* 【App插件】快应用真机运行基座升级到1.0.15

##0.1.27.20180403-alpha
* 解决某些情况下App插件升级或安装失败的问题
* 解决某些情况下Mac版tab键失效的问题
* 【App插件】解决快应用/Uni-App真机运行时，修改部分文件提示编译失败的问题
* 【App插件】小程序to快应用/Uni-App转换器优化部分组件及样式转换，增加template的样式转换

## 0.1.26.20180401-alpha
*  搜索结果在状态栏增加提示
*  修复文件夹、项目无法重命名的问题
*  修复重命名文件时，如果该文件已打开，会打开两个标签卡的问题
*  修复某些情况下设置未成功保存的问题
*  修复某些语言文件在某些情况下的折叠异常问题
*  优化less、scss的着色，修复markdown某些字符导致的着色异常问题
*  Markdown：悬浮预览支持gif动画
* 【重要】【App插件】添加Uni-App/快应用打包Android apk的功能
* 【App插件】优化Uni-App/快应用调试流程，解决某些情况下调试器启动失败等问题
* 【App插件】小程序to快应用/Uni-App转换器优化import,template标签转换、修复部分样式转换问题
* 【App插件】快应用/Uni-App调试基座修复a标签点击不处理href、二维码扫描引起程序崩溃、video不居中显示等问题
* 【App插件】新建5+App时提供模板项目 

## 0.1.25.20180326-alpha
* 解决Mac无法浏览器运行的问题，并新增自动检测Chrome、Safari和FireFox
* 多光标模式支持上下移动行【Ctrl+Up/Down】、回车、反回车【Shift+Enter】等操作
* 添加Uni-App、快应用示例模板，新建项目时可选择
* 转义里新增了首字母大写，调整了大小写转换的快捷键【Alt+Shift+U/L/T】
* 修复搜索到折叠区域时，折叠不展开的bug
* 修复了代码助手在窗体右边缘时被遮挡、自闭合标签回车缩进错误等问题
* 修复了Mac版粘贴表格(numbers)内容到markdown文档时无法自动转换markdown表格的问题
* 【App插件】快应用真机运行基座升级到1.0.13
* 【App插件】更新小程序to快应用/Uni-App转换器
* 【重要】小程序to快应用/Uni-App转换器开源了！[GitHub地址](https://github.com/dcloudio/uni-migration)

## 0.1.24.20180323-alpha
* 控制台右键菜单增加复制
* 解决创建快应用项目目录结构不正确的问题
* 解决debug快应用或Uni-App后有时无法退出的问题
* 优化快应用调试
* 解决某些情况下真机运行无法启动的问题
* 解决真机运行/调试debug时，修改单个文件后，设备上显示白屏的问题
*【快应用开发插件】转换器修复部分样式不生效的问题

##0.1.23.20180320-alpha
* 【重要】新增快应用开发、运行、调试。[详见](http://quickapp.dcloud.io)
* 【重要】新增Uni-App开发、运行、调试。Uni-App是5+App的升级版，仍然支持5+webview，但界面主体由原生渲染引擎绘制。支持开发一次发布到更多平台。[详见](https://github.com/dcloudio/Uni-App)
* 【重要】新增微信小程序转换为快应用/Uni-App
* 【重要】新增mac版
* markdown：支持excel、wps、word、number中粘贴表格进来，自动转为markdown表格【特色】
* markdown：从内存中粘贴图片进md，自动创建md的附件文件夹（类似另存网页），将图片保存到文件夹并将链接展示到md中。保存md时，会自动清理无效图片【特色】
* markdown：鼠标移到图片语法区，悬浮显示本地图片。配套图片粘贴功能，进一步加强了对word、evernote的替代【特色】
* markdown：新增标题折叠【特色】
* markdown：修复了列复制无法按列粘贴的bug
* 补充了各种新语言的折叠
* 智能双击统一支持Ctrl添加新选区
* 智能双击新增双击选中HTML tag
* 新增HTML tag的包围和反包围【Ctrl+]】
* 新增HTML tag的起始、结束标签的套框指示
* 合并行支持多光标，支持去重空格【Ctrl+Shift+k】
* 优化了注释的体验，支持多光标注释
* 给选区首尾设置光标【Ctrl+\】。这样双击选中首尾tag或if块，按Ctrl+\，就可以把光标放到首尾，然后Ctrl+/就可以同时注释掉首行和尾行
* 根据语法选择相同词 【Ctrl+Shift+e】。传统的Ctrl+e选择相同词，在选择tag比如div时，会把子div也选中，而Ctrl+Shift+e则只会选中首尾的tag名称，方便一起改名
* 撤销最后一个多光标或选区【Ctrl+Shift+z】。用于最后一个光标或选区选错时，丢弃掉这个光标或选区
* 粘贴为HTML【Ctrl+Shift+v】可以在网页或excel里选内容，直接粘贴为HTML源码
* 优化转到定义【Alt+单击】
* 优化启动后代码提示引擎加载的速度
* js语法校验选项默认开启ES6
* 优化若干代码助手细节
* 运行浏览器时windows下自动检测chrome、firefox的路径，如果没有配置webserver地址就用file协议打开
* 自动修正常见的设置界面json语法错误
* 在快捷键设置界面新增HBuilderX快捷键的理念说明

## 0.1.22.20180302-alpha
* 新增若干语言的行注释【Ctrl+/】和块注释【Ctrl+shift+/】
* 新增if、for等关键字语法块包围【Ctrl+]】与反包围【Ctrl+Shift+]】
* 强化智能双击：双击if、for等选中函数块、双击注释选中注释块、双击行首空白选择相同缩进行
* 新增扩大选区【ctrl+=】，可连续扩大选区
* 复制行、删除行、剪切行，补充了多光标操作，大幅提升效率
* 新增互换2个选区或2行内容【Ctrl+shift+x】
* 新增去除行尾空格
* 优化了粘贴时自动缩进
* markdown：补充* 号无序列表【ctrl+alt+8】、+号无序列表【ctrl+alt+=】设置行首列表符的快捷键
* markdown：优化粘贴，自动生成url、图片等标签，自动过滤重复列表符
* markdown：支持格式化对齐表格【Ctrl+K】（暂未兼容不同字体和缩放条件变化）
* 解决大的js文件语法校验时卡顿的问题
* 解决修改软件路径导致文件关联失效的问题
* 解决文件内容过少导致无法正确获取编码的问题
* 解决纯净模式没有隐藏控制台的问题
* 优化文件夹内搜索

## 0.1.21.20180225-alpha
* 解决css提示内容不全的问题
* 解决jshint语法验证时，没有错误却弹出控制台的问题
* 解决有时HBuilderX退出时会报错的问题

## 0.1.20.20180212-alpha
* 新增App打包
* 新增js和json的语法校验
* 新增搜索分类、目录内搜索(Ctrl+Alt+F)
* 新增转到定义(F12)
* 新增纯净模式(双击标签卡)和免打扰模式(F11)
* 优化搜索菜单
* 新增块注释功能(Ctrl+Shift+/)
* 新增ejs、jade等前端模板语法高亮
* 新增为选区每行行首添加光标(Ctrl+Shift+\，也可以理解为Ctrl+|)
* 新增行首列表符设置：无序列表(Ctrl+Alt+-)，有序列表(Ctrl+Alt+1)，任务列表(Ctrl+Alt+1[)，已完成任务列表(Ctrl+Alt+])，并支持多光标设置
* 新增双击列表符-、*、+、[ ]、[x]，选中列表整段区域
* 新增双击#选中markdown标题段落
* [菜单-帮助-markdown语法帮助]中更新了操作技巧
* 解决配置文件包含中文可能导致视图菜单下的自动换行设置失败的问题
* 解决启动后项目管理器没有自动选中当前编辑器打开的文件的问题
* 解决markdown文件中删除空格有时会误删有序/无序列表符号的问题
祝大家新春快乐

## 0.1.17.20180122-alpha
* 【重要】需求墙上线了，喜欢HBuilder X的朋友们请移步[http://dev.dcloud.net.cn/wish/](http://dev.dcloud.net.cn/wish/)投票，提出你的想法
* 添加项目手动排序功能（通过鼠标拖动项目管理器里的项目上下移动）
* 添加项目管理器内文件拖拽移动功能
* 添加拖拽外部文件复制到项目管理器功能
* 解决高分屏下保存框字太大的问题
### App相关
* 【真机运行插件】解决真机运行手机失去连接后，保存代码有可能会导致崩溃的问题
* 【真机运行插件】解决某些情况下检测不到手机的问题
* 【真机运行插件】更新快应用调试基座

## 0.1.16.20180117-alpha
* 解决同名文件标签卡无法区分的问题
* 新建无标题文档并粘贴一段json后，文档格式将自动调整为json，同时格式化该文档
* 项目管理器里的文件，打开后HBuilderX标题栏显示其磁盘全路径url。
* 赞助者登录后，用户名处显示赞助信息

## 0.1.15.20180115-alpha
* 修复html文档中，tab不触发emmet的问题

## 0.1.14.20180112-alpha
* HBuilderX内测开始，欢迎大家使用。
