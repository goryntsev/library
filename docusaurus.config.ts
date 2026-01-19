import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkGfm from 'remark-gfm';

const config: Config = {
  title: 'Чтиво',
  favicon: 'books_black.svg',
  future: {
    v4: true,
  },

  // Развёртывание на github
  url: 'https://goryntsev.github.io',
  baseUrl: '/library/',
  organizationName: 'goryntsev',
  projectName: 'library',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    },
  },
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Локализация
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
    localeConfigs: {
      ru: {
        htmlLang: "ru-RU",
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: "/",
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkGfm],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '',
      hideOnScroll: true,
      items: [ ],
      logo: {
        alt: 'Библиотека',
        src: 'books_black.svg',
        srcDark: 'books_white.svg',
      },
    },
 
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },

    ],
  ],

};

export default config;
