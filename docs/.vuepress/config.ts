/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "kitUIN", //站点标题, 建议修改
    description: "鸽子是和平的象征ㄟ(≧◇≦)ㄏ", //描述, 建议修改
   }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
    {
      text: '项目', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
      items: [
        // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
        {
          text: '帮助手册',
          items: [
            { text: 'PicImageSearch', link: 'https://pic-image-search.kituin.fun/' },
            { text: 'BikaClient', link: 'https://bika-client.kituin.fun/' }
          ],
        }
      ],
    },
    {
      text: '文章',
      items: [
          {
            text: '推荐',
            items: [
              { text: 'pixiv画师推荐', link: '/text/recommend/pixiv/'}
            ]
          },
          {
            text: '技术大坑',
            items: [
              { text: 'Debain中使用pyppeteer走过的坑', link: '/text/tech/Debian/01/'},
              { text: '在红米AC2100上OpenWrt使用', link: '/text/tech/OpenWrt/01/'},
              { text: '创建nuget包(C++/WinRT)', link: '/text/tech/C++WinRT/01/'},
            ]
          },
          {
            text: 'Minecraft',
            items: [
              { text: '养老服务器', link: '/text/minecraft/old/01'}
            ]
          }
      ],
    },
    {
      text: '更多',
      items: [
        { text: '友情链接', link: '/friends/' },
        { text: '关于', link: '/about/' },
        { text: '音乐', link: '/music/'}
      ],
    },
    { text: '支持', link: '/sponsor/' },
    {
      text: '收藏',
      link: '/pages/beb6c0bd8a66cea6/',
      items: [
        { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
        { text: '资源', link: '/pages/eee83a9211a70f9d/' },
        { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
      ],
    },
    {
      text: '索引',
      link: '/archives/',
      items: [
        { text: '分类', link: '/categories/' },
        { text: '标签', link: '/tags/' },
        { text: '归档', link: '/archives/' },
      ],
    },

],
sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
logo: "/img/kit.jpg", // 导航栏Logo
repo: "kitUIN", // 导航栏右侧生成Github链接
searchMaxSuggestions: 10, // 搜索结果显示最大数
lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
docsDir: "docs", // 编辑的文件夹
editLinks: false, // 启用编辑
editLinkText: "编辑", // 编辑链接文字

//*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
archive: true, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
// bodyBgImg: [
//   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
//   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
//   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
// ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
// bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
// titleBadge: false, // 文章标题前的图标是否显示，默认true
// titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
//   '图标地址1',
//   '图标地址2'
// ],
// contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状
// rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
// sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
// pageButton: false, // 是否显示快捷翻页按钮，默认true

sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
sidebar: { mode: "structuring", collapsable: true }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义

updateBar: {
  // 最近更新栏
  showToArticle: false, // 显示到文章页底部，默认true
  moreArticle: "/archives", // “更多文章”跳转的页面，默认'/archives'
},

author: {
    name: 'kitUIN', // 必需
    link: 'https://github.com/kitUIN', // 可选的
  },


  // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: '/img/kit.jpg',
    name: 'KitUIN',
    slogan: '芜湖!正在摸鱼~',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:kulujun@gmail.com',
      },
      {
        iconClass: 'icon-bilibili',
        title: 'BILIBILI',
        link: 'https://space.bilibili.com/61924180',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/kitUIN',
      },
    ],
  },
  footer: {
    // 页脚信息
    createYear: 2021, // 博客创建年份
    copyrightInfo:
      'KitUIN | <a href="https://github.com/kitUIN/kituin.github.io/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
  },


    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'kitUIN',
        link: 'https://github.com/kitUIN'
      }
    },
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], //站点图标, 默认为 public/favicon.ico
  [
    'meta',
    {
      name: 'kitUIN',
      content: '个人技术博客,技术文档,学习,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }],
  ],


  // 插件配置
  plugins: <UserPlugins>[

    'vuepress-plugin-baidu-autopush', // 百度自动推送
    [
      "one-click-copy",
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: "复制成功",
        duration: 1000,
        showInMobile: false,
      },
    ],
    [
      "zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
    ["fulltext-search"],
    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
          transformer: (timestamp, lang) => {
            return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
          },
        },
    ],
    [
        'vuepress-plugin-cursor-effects',
        {
          // 点击特效
          size: 2, // size of the particle, default: 2
          shape: 'star', // shape of the particle, default: 'star'
          zIndex: 999999999, // z-index property of the canvas, default: 999999999
        },
      ],
      [
        'vuepress-plugin-dynamic-title',
        {
          // 网页头
          showIcon: '/favicon.ico',
          showText: '🕊️鸽子日记🕊️',
          hideIcon: '/favicon.ico',
          hideText: '👀看不到我👀',
          recoverTime: 2000,
        },
      ],
      [
        'vuepress-plugin-img-lazy', // 懒惰加载图片
        {
          useNative: true,
          selector: 'lazy',
          // rootMargin: '200px',
          // prefix: 'src => src && src.charAt(0) === \'/\' && !src.startsWith(ctx.base) ? ctx.base + src.slice(1) : src',
        },
      ],
    [
        'vuepress-plugin-comment-plus',
        {
         choosen: 'waline',
           // options选项中的所有参数，会传给Waline的配置
           options: {
             el: '#valine-vuepress-comment',
             serverURL: 'https://kituin-comments.vercel.app/', //  例如 "https://***.vercel.app/"
           path: '<%- frontmatter.commentid || frontmatter.permalink %>',
             emoji: [
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
              ],
             placeholder: "请留言"
           }
        }
      ],
  ],

  markdown: {
    lineNumbers: true,
  plugins: [
    "markdown-it-sub",
    "markdown-it-sup",
    "markdown-it-footnote",
    "markdown-it-task-lists",
    "markdown-it-attrs",
    "markdown-it-imsize",
    "markdown-it-mathjax3",
    "markdown-it-abbr",
    "markdown-it-ins",
    "markdown-it-multimd-table-ext",
  ],
  extendMarkdown: (md) => {
    md.set({ breaks: true });
  },
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
