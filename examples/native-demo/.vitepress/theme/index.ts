// 站点身份走主题参数。一个"最小宿主站"至少要把这几项传成自己的：
// 不传就落到主题默认值（等于 fluxixix 本站的现值），刊头和页脚会写着别人的站名。
//
// 要传参数就得拆成两次 import，而且**顺序不能反**：主题样式靠"排在默认主题之后"
// 才压得住 VitePress 未分层的默认样式。图省事也可以用 `vitepress-theme-fluxixix/theme`
// 一次引完（顺序由包保证），代价是不能传参数。
import { fluxixixTheme } from 'vitepress-theme-fluxixix'
import 'vitepress-theme-fluxixix/styles/index.css'

export default fluxixixTheme({
  site: { name: 'Flux Demo', tagline: '主题示例站' },

  // 首页刊头的陈述句与索引行：只列这个站真有的页面
  home: {
    statement: 'a plain blog, nicely set',
    rows: [
      { num: '01', label: '文章', meta: '全格式总览 + 一篇随笔', href: '/posts/' },
      { num: '02', label: '归档', meta: '按时间倒序，适合顺着翻', href: '/archive' },
      { num: '03', label: '关于', meta: '这个示例站是怎么回事', href: '/about' }
    ]
  },

  // 页脚左侧署名缺省是「站名 · 标语」，这里只换掉右侧链接
  footer: {
    links: [{ text: '主题仓库', link: 'https://github.com/fluxixix/vitepress-theme-fluxixix' }]
  }
})
