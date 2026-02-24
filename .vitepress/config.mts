import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UltraDungeon',
  description: 'UltraDungeon Wiki — Minecraft Dungeon Plugin',
    base: '/UltraDungeon-Wiki/',

  head: [
      ['link', { rel: 'icon', href: '/UltraDungeon-Wiki/favicon.ico' }],
  ],

  // Multi-language (EN default, VI secondary)
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'Config', link: '/config/config-yml' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Installation', link: '/guide/installation' },
                { text: 'Commands', link: '/guide/commands' },
                { text: 'Permissions', link: '/guide/permissions' },
                { text: 'PlaceholderAPI', link: '/guide/placeholderapi' },
              ],
            },
            {
              text: 'Dungeon Setup',
              items: [
                { text: 'Creating a Dungeon', link: '/guide/creating-dungeon' },
                { text: 'Waves & Mobs', link: '/guide/waves' },
                { text: 'Boss System', link: '/guide/boss' },
                { text: 'Rewards', link: '/guide/rewards' },
                { text: 'Checkpoints', link: '/guide/checkpoints' },
                { text: 'Gates & Loot Chests', link: '/guide/gates-lootchests' },
              ],
            },
            {
              text: 'Features',
              items: [
                { text: 'Ticket System', link: '/guide/tickets' },
                { text: 'Progression System', link: '/guide/progression' },
                { text: 'Party System', link: '/guide/party' },
                { text: 'Scoring & Leaderboard', link: '/guide/scoring' },
                { text: 'Season System', link: '/guide/seasons' },
              ],
            },
            {
              text: 'Integrations',
              items: [
                { text: 'Vault (Economy)', link: '/guide/vault' },
                { text: 'MMOItems', link: '/guide/mmoitems' },
                { text: 'MMOCore', link: '/guide/mmocore' },
                { text: 'ItemsAdder / Oraxen', link: '/guide/custom-items' },
              ],
            },
          ],
          '/config/': [
            {
              text: 'Configuration',
              items: [
                { text: 'config.yml', link: '/config/config-yml' },
                { text: 'Room Files', link: '/config/room-files' },
                { text: 'Language Files', link: '/config/language' },
                { text: 'GUI Config', link: '/config/gui' },
              ],
            },
          ],
        },
      },
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      link: '/vi/',
      themeConfig: {
        nav: [
          { text: 'Hướng dẫn', link: '/vi/guide/getting-started' },
          { text: 'Cấu hình', link: '/vi/config/config-yml' },
        ],
        sidebar: {
          '/vi/guide/': [
            {
              text: 'Giới thiệu',
              items: [
                { text: 'Bắt đầu', link: '/vi/guide/getting-started' },
                { text: 'Cài đặt', link: '/vi/guide/installation' },
                { text: 'Lệnh', link: '/vi/guide/commands' },
                { text: 'Quyền', link: '/vi/guide/permissions' },
                { text: 'PlaceholderAPI', link: '/vi/guide/placeholderapi' },
              ],
            },
            {
              text: 'Thiết lập Dungeon',
              items: [
                { text: 'Tạo Dungeon', link: '/vi/guide/creating-dungeon' },
                { text: 'Waves & Mobs', link: '/vi/guide/waves' },
                { text: 'Hệ thống Boss', link: '/vi/guide/boss' },
                { text: 'Phần thưởng', link: '/vi/guide/rewards' },
                { text: 'Checkpoints', link: '/vi/guide/checkpoints' },
                { text: 'Gates & Loot Chests', link: '/vi/guide/gates-lootchests' },
              ],
            },
            {
              text: 'Tính năng',
              items: [
                { text: 'Hệ thống Ticket', link: '/vi/guide/tickets' },
                { text: 'Hệ thống Progression', link: '/vi/guide/progression' },
                { text: 'Hệ thống Party', link: '/vi/guide/party' },
                { text: 'Điểm & Bảng xếp hạng', link: '/vi/guide/scoring' },
                { text: 'Hệ thống Season', link: '/vi/guide/seasons' },
              ],
            },
            {
              text: 'Tích hợp',
              items: [
                { text: 'Vault (Economy)', link: '/vi/guide/vault' },
                { text: 'MMOItems', link: '/vi/guide/mmoitems' },
                { text: 'MMOCore', link: '/vi/guide/mmocore' },
                { text: 'ItemsAdder / Oraxen', link: '/vi/guide/custom-items' },
              ],
            },
          ],
          '/vi/config/': [
            {
              text: 'Cấu hình',
              items: [
                { text: 'config.yml', link: '/vi/config/config-yml' },
                { text: 'Room Files', link: '/vi/config/room-files' },
                { text: 'Language Files', link: '/vi/config/language' },
                { text: 'GUI Config', link: '/vi/config/gui' },
              ],
            },
          ],
        },
        outline: { label: 'Mục lục' },
        docFooter: { prev: 'Trang trước', next: 'Trang tiếp' },
        darkModeSwitchLabel: 'Giao diện',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Về đầu trang',
      },
    },
  },

  themeConfig: {
      logo: '/UltraDungeon-Wiki/logo.png',
    siteTitle: 'UltraDungeon',

    socialLinks: [
        { icon: 'github', link: 'https://github.com/hiiamken/UltraDungeon' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'UltraDungeon Wiki',
      copyright: '© 2026 MineKeo',
    },

    outline: { level: [2, 3] },
  },
})
