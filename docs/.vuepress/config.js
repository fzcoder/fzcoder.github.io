module.exports = {
    base: '/',
    locales: {
        // en-US
        '/': {
            lang: 'en-US',
            title: 'FZ\'s Docs',
            description: 'This is a opensource project document website for fzcoder'
        },
        // zh-CN
        '/zh/': {
            lang: 'zh-CN',
            title: 'FZ\'s Docs',
            description: '这是fzcoder的开源项目文档网站'
        }
    },
    // default theme
    themeConfig: {
        // logo: '',
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en-US')
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./nav/zh-CN')
            }
        }
    },
    markdown: {},
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top'
    ]
}
