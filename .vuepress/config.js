module.exports = {
  title: "记录改变 - 我不是大神",
  description: '记录自己一点一点的改变',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'Tech',
        icon: 'reco-message',
        items: [
          { text: 'Unity', link: '/blogs/Unity/' },
          { text: 'Shader', link: '/blogs/Shader/' },
          { text: '设计模式', link: '/blogs/dm/' }
        ]
      },
      {
        text: '编程语言',
        icon: 'reco-message',
        items: [
          { text: 'C#', link: '/blogs/language/CSharp/' },
          { text: 'Javascript', link: '/blogs/language/Javascript/' },
          { text: 'C++', link: '/blogs/language/CPlusPlus/' },
          { text: 'Java', link: '/blogs/language/Java/' },
          { text: 'Lua', link: '/blogs/language/Lua/' },
          { text: 'OC', link: '/blogs/language/OC/' },
          { text: 'Python', link: '/blogs/language/Python/' }
        ]
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/xujingfire', icon: 'reco-github' },
          { text: 'Email', link: 'mailto:xujingfire@gmail.com', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      // '/docs/theme-reco/': [
      //   '',
      //   'theme',
      //   'plugin',
      //   'api'
      // ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      // category: {
      //   location: 2, // 在导航栏菜单中所占的位置，默认2
      //   text: 'Category' // 默认 “分类”
      // },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '兔窝窝',
        desc: '不收费，无水印的素材网站',
        email: 'xujingfire@qq.com',
        link: 'https://www.tuvovo.com'
      },
      {
        title:'vercel',
        desc:'vercel',
        link:'https://vercel.com/',
        email:'anchor@vercel.com'
      }
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Fire',
    // 作者头像
    authorAvatar: '/avatar.svg',
    // 备案号
    record: '京ICP备06060651号',
    // 项目开始时间
    startYear: '2022'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({
        html: true
      })
      md.use(require('markdown-it-katex'))
    }
  }
}  
