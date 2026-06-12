import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IntegrAIQ',
  tagline: 'Integrating Intelligence. Empowering Operations.',
  favicon: 'img/aiq-icon.png',

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
      type: 'text/css',
    },
  ],

  future: {
    v4: true,
  },

  url: 'https://brock-t-wilson.github.io',
  baseUrl: '/integraiq-platform/',

  organizationName: 'Brock-T-Wilson',
  projectName: 'integraiq-platform',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/integraiq-logo.png',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'IntegrAIQ',

      logo: {
        alt: 'IntegrAIQ Logo',
        src: 'img/aiq-icon.png',
      },

      items: [
        {
          to: '/',
          label: 'Intelligence Hub',
          position: 'left',
        },

        {
          to: '/documentation',
          label: 'Documentation',
          position: 'left',
        },

        {
          to: '/quality',
          label: 'Quality',
          position: 'left',
        },

        {
          to: '/safety',
          label: 'Safety',
          position: 'left',
        },

        {
          to: '/training',
          label: 'Training',
          position: 'left',
        },

        {
          to: '/alerts',
          label: 'Alerts',
          position: 'left',
        },

        {
          to: '/workforce',
          label: 'Workforce',
          position: 'left',
        },

        {
  to: '/ai-integration',
  label: 'AI Integration',
  position: 'right',
  className: 'aiNav',
},

        {
          to: '/about',
          label: 'About',
          position: 'right',
        },

        {
          to: '/platform',
          label: 'Platform',
          position: 'right',
        },
      ],
    },

    footer: {
  style: 'light',

  links: [],

  copyright: `© ${new Date().getFullYear()} IntegrAIQ`,
},

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;