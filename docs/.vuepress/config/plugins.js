// 插件配置
module.exports = [
  // 本地插件
  // [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#11a8cd', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  ['reading-progress'],
  ['fulltext-search'],
  [
      'vuepress-plugin-comment-plus',
      {
	     choosen: 'waline',
         // options选项中的所有参数，会传给Waline的配置
         options: {
           el: '#valine-vuepress-comment',
           serverURL: 'https://kituin-comments.vercel.app/', //  例如 "https://***.vercel.app/"
	       path: '<%- frontmatter.commentid || frontmatter.permalink %>'
         }
      }
    ],
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'vuepress-plugin-reading-progress',
    {
      // 阅读进度条
      readingDir: {posts1: 'top', posts2: 'bottom', posts3: 'left'},
      fixed:'botton',
      readingShow: false,
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
      showIcon: '/failure.ico',
      showText: '🕊️鸽子日记🕊️',
      hideIcon: '/failure.ico',
      hideText: '👀看不到我👀',
      recoverTime: 2000,
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
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
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '503f098e7e5b3a5b5d8c5fc2938af002',
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
