import { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  base: '/blog_v2/',
  
  lang: 'zh-CN',
  title: '老白的驿站',
  description: '老白涮肉坊欢迎你，钱钱钱，没给钱呢！',

  themeConfig: {
    logo: '/images/hero.png',
    lastUpdatedText: '更新时间',
    contributorsText: '作者',

    sidebar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '学习笔记',
        // link: '/guide',
        children: [
          '/guide/1',
        ],
      },
      {
        text: '生活记录',
        children: [
          // {
          //   text: '如何发布一个NPM包',
          //   link: '/guide/12',
          // },
          '/life/21-12/1.md',
          '/life/21-12/2.md',
        ],
      },
    ]
  },
})