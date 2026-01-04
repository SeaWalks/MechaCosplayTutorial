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
    editLink: {
      pattern: 'https://github.com/SeaWalks/MechaCosplayTutorial',
      text: 'Make a suggestion on GitHub'
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
            { text: 'Introduction', link: '/tutorials/get-started/intro.md' },
            { text: 'Tools', link: '/tutorials/get-started/tools.md' },
            { text: 'Materials', link: '/tutorials/get-started/materials.md'}
          ]
        },
        {
          text: 'Planning',
          items: [
            { text: 'Proportions', link: '/tutorials/planning/proportions.md' },
            { text: 'Patterning', link: '/tutorials/planning/patterning.md' },
          ]
        },
        {
          text: 'Building',
          items: [
            { text: 'EVA Foam Basics', link: '/tutorials/building/eva-foam-basics.md' },
            { text: 'Armor Building', link: '/tutorials/building/armor-building.md' },
            { text: 'Weapon Crafting', link: '/tutorials/building/weapon-crafting.md' }
          ]
        },
        {
          text: 'Strapping',
          items: [
            { text: 'Strapping Overview', link: '/tutorials/strapping/strapping-basics.md' },
            { text: 'Torso', link: '/tutorials/strapping/torsos.md' },
            { text: 'Backpack', link: '/tutorials/strapping/backpack.md' },
            { text: 'Skirt Armor', link: '/tutorials/strapping/legs.md' },
            { text: 'Legs', link: '/tutorials/strapping/arms.md' },
          ]
        },
        {
          text: 'Painting',
          items: [
            { text: 'Painting Basics', link: '/tutorials/painting/painting-basics.md' },
            { text: 'Advanced Techniques', link: '/tutorials/painting/airbrushing-techniques.md' }
          ]
        },
        {
          // TODO: Fill out the links
          text: 'At the Con',
          items: [
            { text: 'Ettiquette', link: '/tutorials/strapping/strapping-basics.md' },
            { text: 'Self Care', link: '/tutorials/strapping/torsos.md' },
            { text: 'Repairs', link: '/tutorials/strapping/backpack.md' },
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
