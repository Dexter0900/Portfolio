import { isDevelopment } from 'std-env';
import GLSL from 'vite-plugin-glsl';
import SVGLoader from 'vite-svg-loader';
import { join } from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      titleTemplate: '%s | Preet Kumar',
      meta: [
        { lang: 'en' },
        { language: 'English' },
        { property: 'name', name: 'name', content: 'Preet Kumar' },
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { 'http-equiv': 'Reply-to', content: 'preet451383@gmail.com' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'all' },
        { name: 'theme-color', content: 'var(--surface-color)' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'copyrighted-site-verification', content: 'c552f044f4e41c2b' },
        {
          property: 'og:site_name',
          name: 'og:site_name',
          content: 'Preet Kumar',
        },
        { property: 'og:locale', name: 'og:locale', content: 'en' },
        { property: 'og:type', name: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/PK_favicon.svg' },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
          sizes: 'any',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      base: isDevelopment
        ? 'http://localhost:3000'
        : 'https://bogdankostyuk.xyz',
    },
  },

  imports: {
    imports: [{ name: 'on', from: 'rad-event-listener' }],
  },

  routeRules: {
    '/sitemap.xml': { prerender: true },
    '/_headers': { prerender: true },
  },

  sourcemap: isDevelopment,

  css: [
    'normalize.css/normalize.css',
    'locomotive-scroll/dist/locomotive-scroll.css',
    '~/assets/styles/fonts.css',
    '~/assets/styles/global.css',
  ],

  build: {
    transpile: ['gsap', 'std-env'],
  },

  nitro: {
    compatibilityDate: '2025-07-22',
    prerender: {
      crawlLinks: true,
      concurrency: 4,
    },
  },

  modules: ['@nuxt/content', '@nuxtjs/fontaine'],

  fontMetrics: {
    fonts: [
      {
        family: 'e-Ukraine',
        src: join(__dirname, 'public/fonts/e-Ukraine-Thin.woff2'),
        fallbacks: ['Arial'],
      },
    ],
  },

  vite: {
    plugins: [SVGLoader({ svgo: false }), GLSL({ compress: !isDevelopment })],
  },
});
