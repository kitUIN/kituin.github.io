// 插件配置, 详见 https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html

import { UserPlugins } from "vuepress/config";
import fs from "fs";
import { resolve } from "path";
import type { SmPlayerPluginOption } from "vuepress-plugin-smplayer/types";
import dayjs from "dayjs";

// 配置插件，推荐使用 Babel 式, 根据自己插件情况修改插件配置
export default <UserPlugins>[
  [
    "sitemap",
    {
      hostname: `https://${fs.readFileSync(
        resolve(__dirname, "../public", "CNAME")
      )}`,
    },
  ],
  [
    "smplayer",
    {
      artplayer: {
        src: {
          playbackRate: true,
          whitelist: ["*"],
          moreVideoAttr: {
            preload: "auto",
          },
        },
      },
    } as SmPlayerPluginOption,
  ],
  ["pangu"],
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
           placeholder: "请留言(填写邮箱可在被回复时收到邮件提醒)"
         }
      }
    ],
];
