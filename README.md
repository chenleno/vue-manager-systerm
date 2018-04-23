# manage-system #
基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案。

## 前言 ##

参考项目：
[Vue2 后台管理系统解决方案](https://github.com/lin-xin/vue-manage-system)
[Vue2.0用户权限控制解决方案](https://refined-x.com/2017/11/28/Vue2.0%E7%94%A8%E6%88%B7%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/)

基于参考项目进行了个性化修改及配置，将后台模板同权限控制方案结合，供参考学习用。

## 功能 ##
- [x] Element UI
- [x] 登录/注销
- [x] 表格
- [x] 表单
- [x] 权限管理


## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|   |-- assets                       // 静态资源存放
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- Header.vue           // 公共头部
	|           |-- Home.vue           	 // 公共路由入口
	|           |-- Sidebar.vue          // 公共左边栏
	|		|-- page                   	 // 主要路由页面(原项目模板)
	|           |-- BaseCharts.vue       // 基础图表
	|           |-- BaseForm.vue         // 基础表单
	|           |-- BaseTable.vue        // 基础表格
	|           |-- Login.vue          	 // 登录
	|           |-- Markdown.vue         // markdown组件
	|           |-- Readme.vue           // 自述组件
	|           |-- Upload.vue           // 图片上传
	|           |-- VueEditor.vue        // 富文本编辑器
	|           |-- VueTable.vue         // vue表格组件
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|   |-- router                       // 路由配置
	|   |-- tools                        // 函数工具库
	|   |-- views                        // 主要路由页面(新增)
	|   |-- vuex                         // vuex配置文件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // git忽略文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明



## 安装步骤 ##

	git clone https://github.com/chenleno/vue-manager-systerm      // 把模板下载到本地
	cd vue-manager-systerm    // 进入模板目录
	npm install         // 安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:8083
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

## 权限控制
参考资料：
[VUE2.0 用户权限解决方案](https://refined-x.com/2017/11/28/Vue2.0%E7%94%A8%E6%88%B7%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/)

项目借鉴了该开源项目的权限控制思路，在此基础上增加了权限控制相关的配置

详细思路及说明参考个人博客[VUE后台系统权限控制](https://chenleno.github.io/2018/04/03/VUE%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6/#more)

