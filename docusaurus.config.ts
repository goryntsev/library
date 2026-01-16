import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkGfm from 'remark-gfm';

const config: Config = {
  title: 'eduxio',
  tagline: 'Учись любить учиться!',
  favicon: 'img/favicon.ico',

  // Развёртывание на github
  url: 'https://eduxio.ru',
  baseUrl: '/',
  organizationName: 'goryntsev',
  projectName: 'eduxio',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

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
      title: '📖',
      hideOnScroll: true,
      items: [
        {
          type: 'doc',
          docId: 'brecht',
          position: 'left',
          label: "Библиотека",
        },
      ],
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
