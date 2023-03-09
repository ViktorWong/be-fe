import { defineConfig, type HeadConfig } from "vitepress";
import dotenv from "dotenv";
import mdFootnote from "markdown-it-footnote";
import * as data from "../data";

// @ts-check
/** @type {import('vitepress').UserConfig} */

dotenv.config();

const SIDEBAR_DEFAULT = [
    {
        text: "Vue 知识库",
        collapsible: true,
        collapsed: false,
        items: data.vueLinks,
    },
    {
        text: "React 知识库",
        collapsible: true,
        collapsed: false,
        items: data.reactLinks,
    },
    {
        text: "源码解读",
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
        text: "Web3",
        collapsible: true,
        collapsed: false,
        items: data.interviewLinks,
    },
    // {
    //     items: [{ text: "前端架构", link: "/api" }],
    // },
    // {
    //     items: [
    //         { text: "区块链", link: "/enterprise" },
    //         { text: "元宇宙", link: "/enterprise" },
    //     ],
    // },
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
    base: "/be-fe/",
    // Generate files as `/path/to/page.html` and URLs as `/path/to/page`
    cleanUrls: "without-subfolders",

    // Prevent builds when content has dead links
    ignoreDeadLinks: true,

    // Metadata
    lang: "en-US",
    title: data.title,
    description: data.description, //页面描述
    head: getHeadTags(process.env),

    themeConfig: {
        // siteTitle: false,
        logo: "/img/logos/logo.svg",
        // logo: {
        //     light: "/img/logos/light.png",
        //     dark: "/img/logos/dark.png",
        // },
        nav: [
            { text: "源码解读", link: "/source-code/introduction" },
            { text: "Vue 知识库", link: "/vue/introduction" },
            {
                text: "React 知识库",
                link: "/react/introduction",
            },
            { text: "面试八股", link: "/interview/introduction" },
            { text: "Web3", link: "/web3/introduction" },
            { text: "关于我", link: "/contact/me" },
        ],

        sidebar: {
            "/source-code/": SIDEBAR_DEFAULT,
            "/react/": SIDEBAR_DEFAULT,
            "/vue/": SIDEBAR_DEFAULT,
            "/interview/": SIDEBAR_DEFAULT,
            "/web3/": SIDEBAR_DEFAULT,
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/ViktorWong/be-fe" },
        ],

        editLink: {
            pattern: "https://pr.new/ViktorWong/be-fe/edit/main/docs/:path",
            text: "编辑这一页",
        },

        algolia: getAlgoliaConfig(process.env),
        lastUpdatedText: "最近更新",
        outlineTitle: "本页导航",
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
    },
    markdown: {
        config: (md) => {
            md.use(mdFootnote);
        },
    },
    lastUpdated: true,
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
        ["meta", { property: "og:title", content: "前端开发,前端,后端,全栈" }],
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
