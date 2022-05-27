// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: '首页', link: '/' },
    {
      text: '项目', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
      items: [
        // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
        {
          text: '帮助手册',
          items: [
            { text: 'PicImageSearch', link: '/wiki/picimagesearch/' },
            { text: 'BikaClient', link: '/wiki/bikaclient/' }
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

];
