// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/bitbug_favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'kitUIN',
      content: '个人技术博客,技术文档,学习,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
]
