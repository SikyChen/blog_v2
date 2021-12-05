import { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  base: 'blog_v2',
  
  lang: 'zh-CN',
  title: '老白的驿站',
  description: '老白涮肉坊欢迎你，钱钱钱，没给钱呢！',

  themeConfig: {
    logo: '/images/hero.png',
  },
})