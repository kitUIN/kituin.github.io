import { HeadTags } from "vuepress/config";

export default <HeadTags>[
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
];
