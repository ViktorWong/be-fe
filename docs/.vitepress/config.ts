import { defineConfig, type HeadConfig } from "vitepress";
import dotenv from "dotenv";
import mdFootnote from "markdown-it-footnote";
import * as data from "../data";

// @ts-check
/** @type {import('vitepress').UserConfig} */

dotenv.config();

const SIDEBAR_DEFAULT = [
    {
        text: "源码学习",
        collapsible: true,
        collapsed: false,
        items: data.sourceCodeLinks,
    },
    {
        text: "面试八股",
        collapsible: true,
        collapsed: false,
        items: data.interviewLinks,
    },
    {
        text: "Vue 知识库",
        collapsible: true,
        collapsed: true,
        items: data.vueLinks,
    },
    {
        text: "React 知识库",
        collapsible: true,
        collapsed: true,
        items: data.reactLinks,
    },
    {
        items: [{ text: "前端架构", link: "/api" }],
    },
    {
        items: [
            { text: "区块链", link: "/enterprise" },
            { text: "元宇宙", link: "/enterprise" },
        ],
    },
    {
        items: [{ text: "关于我", link: "/contact" }],
    },
];

export default defineConfig({
    // 为 WebContainer 的运行添加 CORS 头信息
    vite: {
        plugins: [
            {
                name: "cross-origin-isolated-plugin",
                configureServer: (server) => {
                    server.middlewares.use((_, res, next) => {
                        res.setHeader(
                            "Cross-Origin-Embedder-Policy",
                            "require-corp"
                        );
                        res.setHeader(
                            "Cross-Origin-Opener-Policy",
                            "same-origin"
                        );
                        next();
                    });
                },
            },
        ],
    },
    srcDir: ".",
    outDir: "build",

    // Generate files as `/path/to/page.html` and URLs as `/path/to/page`
    cleanUrls: "without-subfolders",

    // Prevent builds when content has dead links
    ignoreDeadLinks: true,

    // Metadata
    lang: "en-US",
    title: "盗码笔记",
    description: "工作那几年的一些记录",
    head: getHeadTags(process.env),

    themeConfig: {
        siteTitle: false,
        logo: {
            light: "/img/logos/light.png",
            dark: "/img/logos/dark.png",
        },
        nav: [
            { text: "Vue 知识库", link: "/vue/introduction" },
            {
                text: "React 知识库",
                link: "/react/introduction",
            },
            { text: "关于我", link: "/contact" },
        ],

        sidebar: {
            "/source-code/": SIDEBAR_DEFAULT,
            "/react/": SIDEBAR_DEFAULT,
            "/vue/": SIDEBAR_DEFAULT,
            // "/contact": SIDEBAR_DEFAULT,
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],

        editLink: {
            pattern:
                "https://pr.new/stackblitz/webcontainer-docs/edit/main/docs/:path",
            text: "编辑这一页",
        },

        algolia: getAlgoliaConfig(process.env),
    },
    markdown: {
        config: (md) => {
            md.use(mdFootnote);
        },
    },
});

function getHeadTags(env: NodeJS.ProcessEnv): HeadConfig[] {
    const tags: HeadConfig[] = [
        [
            "link",
            { rel: "icon", type: "image/png", href: "/img/theme/favicon.png" },
        ],
        [
            "link",
            { rel: "icon", type: "image/svg", href: "/img/theme/favicon.svg" },
        ],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:title", content: "盗码笔记" }],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
        ["meta", { name: "twitter:title", content: "WebContainer API Docs" }],
        ["meta", { name: "twitter:site", content: "@StackBlitz" }],
    ];

    if (env.VITE_GTM_ID) {
        tags.push([
            "script",
            {
                src: `https://www.googletagmanager.com/gtag/js?id=${env.VITE_GTM_ID}`,
                async: "",
            },
        ]);
        tags.push([
            "script",
            {},
            `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag('js',new Date),gtag('config','${env.VITE_GTM_ID}',{anonymize_ip:true})`,
        ]);
    }

    return tags;
}

function getAlgoliaConfig(env: NodeJS.ProcessEnv) {
    if (env.VITE_ALGOLIA_ID && env.VITE_ALGOLIA_KEY) {
        return {
            indexName: "webcontainers",
            appId: env.VITE_ALGOLIA_ID,
            apiKey: env.VITE_ALGOLIA_KEY,
        };
    }
}
