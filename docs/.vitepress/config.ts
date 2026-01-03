import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Mecha Cosplay Tutorial',
  description: 'Complete guide to building and crafting mecha cosplay costumes',
  
  // If deploying to a subdirectory, uncomment and set the base path
  // base: '/mecha-guide/',
  
  // Enable last updated text
  lastUpdated: true,
  
  themeConfig: {
    // Edit link to GitHub
    editLink: {
      pattern: 'https://github.com/SeaWalks/mecha-guide/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Gallery', link: '/gallery/' }
    ],
    sidebar: {
      '/tutorials/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/tutorials/' },
            { text: 'Tools & Materials', link: '/tutorials/tools-materials' }
          ]
        },
        {
          text: 'Planning',
          items: [
            { text: 'Proportions', link: '/tutorials/weapon-crafting' },
            { text: 'Patterning', link: '/tutorials/armor-building' },
          
          ]
        },
        {
          text: 'Construction',
          items: [
            { text: 'Armor Building', link: '/tutorials/armor-building' },
            { text: 'Weapon Crafting', link: '/tutorials/weapon-crafting' }
          ]
        },
        {
          text: 'Painting',
          items: [
            { text: 'Painting Basics', link: '/tutorials/painting-basics' },
            { text: 'Airbrushing Techniques', link: '/tutorials/airbrushing-techniques' }
          ]
        },
        {
          text: 'Strapping',
          items: [
            { text: 'Strapping Basics', link: '/tutorials/strapping-basics' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/eric.craftworks' },
      { icon: 'github', link: 'https://github.com/SeaWalks' }
    ],
    footer: {
      message: 'Made with ❤️ for the cosplay community',
      //copyright: 'Copyright © 2024 Mecha Cosplay Tutorial'
    }
  }
})
