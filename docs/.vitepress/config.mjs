import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Notes',
  description: 'Personal notes',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes/' }
    ],

    sidebar: [
      {
        text: 'Notes',
        items: [
          { text: 'All Notes', link: '/notes/' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Personal notes',
      copyright: '© 2026'
    }
  },

  markdown: {
    lineNumbers: true
  }
})