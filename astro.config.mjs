import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
export default defineConfig({ site: 'https://research-notes-minh-260911.dariousdollars.chatgpt.site', integrations:[sitemap()], markdown:{remarkPlugins:[remarkMath],rehypePlugins:[rehypeKatex],shikiConfig:{themes:{light:'github-light',dark:'github-dark'}}}});


