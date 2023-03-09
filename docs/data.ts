export const title = "Viktor 前端苦旅";
export const description = "世界很喧嚣，做你自己就好";
export const name = "Viktor";
export const email = "victor318x@gmail.com";
export const bilibibli = "前端苦旅";
export const wechat = "viktorhub";
export const wexin = "前端苦旅";

// 面试八股
export const interviewLinks = [
    { text: "1. 第一招", link: "/interview/introduction" },
];

// 源码学习
export const sourceCodeLinks = [
    {
        text: "0. 知识库介绍",
        link: "/source-code/introduction",
    },
    {
        text: "1. env 的原理",
        link: "/source-code/dotenv",
    },
    {
        text: "2. 前端调试",
        link: "/source-code/vscode",
    },
];

// Vue 知识库
export const vueLinks = [{ text: "0. 知识库介绍", link: "/vue/introduction" }];

// React 知识库
export const reactLinks = [
    { text: "0. 知识库介绍", link: "/react/introduction" },
    { text: "1. React", link: "/react/introduction" },
];

export const homeExternalLinks = [
    {
        title: "Community",
        description:
            "Join our supportive community on Discord, ask questions, and share your StackBlitz projects.",
        url: "https://discord.com/invite/EQ7uJQxC",
        large: true,
        bgImgLight: "/img/theme/link-bg-squares-light.png",
        bgImgDark: "/img/theme/link-bg-squares-dark.png",
    },
];

export const footerSections = [
    {
        title: "工作区",
        items: [
            {
                text: "热点",
                link: "https://stackblitz.com/?starters=popular",
            },
            {
                text: "前端",
                link: "https://stackblitz.com/?starters=frontend",
            },
            {
                text: "后端",
                link: "https://stackblitz.com/?starters=backend",
            },
            {
                text: "全栈",
                link: "https://stackblitz.com/?starters=fullstack",
            },
            { text: "Vite", link: "https://stackblitz.com/?starters=vite" },
        ],
    },
    {
        title: "开始一个练习",
        items: [
            {
                text: "从工作区",
                link: "https://stackblitz.com/?starters=popular",
            },
            {
                text: "从 GitHub Repo",
                link: "https://developer.stackblitz.com/guides/user-guide/importing-projects#import-from-github",
            },
        ],
    },
    {
        title: "内容平台",
        items: [
            {
                text: "稀土掘金",
                link: "https://juejin.cn/user/149189280672616",
            },
            { text: "数字尾巴", link: "https://www.dgtle.com/user" },
            { text: "BiliBili", link: "https://space.bilibili.com/401685966" },
            { text: "知乎", link: "https://www.zhihu.com/people/viktor-68" },
            { text: "InfoQ", link: "https://www.infoq.cn/u/viktorhub/publish" },
        ],
    },
    {
        title: "合作联系",
        items: [{ text: "联系我", link: "/contact/me" }],
    },
    {
        title: "友链",
        items: [
            { text: "若川的博客", link: "https://lxchuan12.gitee.io/" },
            { text: "全栈孤勇者", link: "http://www.fullstack.ren/" },
        ],
    },
];

export interface WCUsedBy {
    name: string;
    imgDark: string;
    imgLight: string;
}

// 公司链接
export const wcUsedBy: WCUsedBy[] = [
    {
        name: "StackBlitz",
        imgDark: "/img/logos/egghead-dark.svg",
        imgLight: "/img/logos/egghead-light.svg",
    },
    {
        name: "Google",
        imgDark: "/img/logos/egghead-dark.svg",
        imgLight: "/img/logos/egghead-light.svg",
    },
    {
        name: "Cloudflare",
        imgDark: "/img/logos/egghead-dark.svg",
        imgLight: "/img/logos/egghead-light.svg",
    },
    {
        name: "Shopify",
        imgDark: "/img/logos/egghead-dark.svg",
        imgLight: "/img/logos/egghead-light.svg",
    },
];

export interface TestimonialCardData {
    author: {
        name: string;
        title?: string;
    };
    imgPath?: {
        author?: string;
        logo?: string;
        logoDark?: string;
        logoLight?: string;
    };
    quote: string;
}

export const testimonialCardData: TestimonialCardData[] = [
    {
        author: {
            name: "Rich Harris",
            title: "Principal Software Engineer, Vercel",
        },
        imgPath: {
            author: "/img/testimonials/avator.jpg",
            logo: "/img/logos/sveltekit-light.svg",
        },
        quote: `On the SvelteKit team, we've fantasized for years about being able to build fully interactive learning material for full stack frameworks.<strong><br/>With WebContainers it went from 'impossible' to 'easy' almost overnight.</strong>`,
    },
    {
        author: {
            name: "Vojta Holik",
            title: "Designer & Developer, Egghead.io",
        },
        imgPath: {
            author: "/img/testimonials/vojta_holik.png",
            logoDark: "/img/logos/egghead-dark.svg",
            logoLight: "/img/logos/egghead-light.svg",
        },
        quote: `<strong>As a team working on educational products, StackBlitz WebContainers has been an invaluable tool for us.</strong> The ability to embed full-stack applications with customisable, interactive coding environment directly into our products has greatly enhanced the learning experience for our users.`,
    },
    {
        author: {
            name: "swyx",
            title: "",
        },
        imgPath: {
            author: "/img/testimonials/swyx_shawn_wang.jpg",
        },
        quote: `WebContainers solve the final frontier in JavaScript developer experience - making full-stack Node.js projects run in the browser as lightweight and disposable and secure as frontend REPLs. <br/><strong>Every PR, every npm library maintainer, every devtool company with a Node.js SDK, can benefit from this!</strong>`,
    },
    {
        author: {
            name: "Abdellah Alaoui",
            title: "Fullstack hacker, Scrimba",
        },
        imgPath: {
            author: "/img/testimonials/abdellah_alaoui.png",
            logo: "/img/testimonials/scrimba.svg",
        },
        quote: `I have worked with Web container API for a couple of weeks at Scrimba to make a pooc of backend support. And I can say it's a solid piece of technology. Things just work, and it's also quite fast. <strong>I'm super excited about the GA since it will unlock so much opportunities for OSS projects and the industry at large.</strong>`,
    },
    {
        author: {
            name: "Atila Fassina",
            title: "DX Engineer at Xata",
        },
        imgPath: {
            author: "/img/testimonials/atila_fassina.png",
            logoDark: "/img/testimonials/xata.png",
            logoLight: "/img/testimonials/xata.png",
        },
        quote: `<strong>The WebContainer API is a landmark on the way we think docs.</strong> Creating interactive docs and snippets just became so much more feasible! With Server-side code running on the browser, setting up a playground to securely learn Node.js SDKs and compilers  became feasible and even fun!`,
    },
    {
        author: {
            name: "Nate Moore",
            title: "Senior Software Engineer, The Astro Technology Company",
        },
        imgPath: {
            author: "/img/testimonials/nate_moore.jpg",
            logo: "/img/testimonials/astro-full-light.svg",
        },
        quote: `<strong>WebContainers represent a fundamental shift in what is possible in the browser. I'm incredibly excited about the potential this tech unlocks,</strong> from secure, browser-based development environments to highly interactive educational content. `,
    },
    {
        author: {
            name: "Dan Jutan",
            title: "Technical writer and frontend developer",
        },
        imgPath: {
            author: "/img/testimonials/nate_moore.jpg",
        },
        quote: `The WebContainers API lets you use the magic behind Stackblitz to power your own experiments. <br/><strong>A huge step forward for dev education, documentation, and demos!</strong>`,
    },
    {
        author: {
            name: "Ramón Huidobro",
            title: "Developer Advocate at Suborbital Software Systems",
        },
        imgPath: {
            author: "/img/testimonials/nate_moore.jpg",
            logoDark: "/img/testimonials/suborbital.svg",
            logoLight: "/img/testimonials/suborbital.svg",
        },
        quote: `For such a powerful piece of tech I was so impressed by how clear to use the API is. Also running WebContainers inside WebContainers had me 🤯`,
    },
    {
        author: {
            name: "DJ",
            title: 'Founder & CEO @ <a href="https://retune.so/" target="_blank" rel="nofollow">re:tune</a>',
        },
        imgPath: {
            author: "/img/testimonials/retune-dj.jpg",
            logoDark: "/img/testimonials/retune.png",
            logoLight: "/img/testimonials/retune.png",
        },
        quote: `At re:tune, we have been building the missing frontend for GPT-3, on a mission to empower everyone to build AI-first software at the speed of thought. <strong>WebContainers set the stage for our AI-native IDE</strong> - with a copilot that can not only read and write code, but can also understand and operate in the full runtime context across server and client!`,
    },
    {
        author: {
            name: "Manus Nijhoff",
            title: 'Co-founder at <a href="https://touchystudios.com/" target="_blank" rel="nofollow">Touchy Studios</a> & full-stack developer at <a href="https://100k.studio/" target="_blank" rel="nofollow">100k</a>',
        },
        imgPath: {
            author: "/img/testimonials/manus_nijhoff.png",
        },
        quote: `Running chess in a terminal, running a terminal in the browser, check mate!<br/><strong>The best position to be in is a creative one and the StackBlitz WebContainers allow that.</strong>`,
    },
];

export interface FeaturesCardData {
    title: string;
    description: string;
    bgImgDark: string;
    bgImgLight: string;
}

export const featuresCardData: FeaturesCardData[] = [
    {
        title: "React18+TS+Vite 进阶实战 阅读类App",
        description:
            "1套通用组件库设计 + 9个自定义Hooks封装 ，轻松驾驭复杂项目",
        bgImgDark: "/img/features/features-01-package_managers-dark.png",
        bgImgLight: "/img/features/features-01-package_managers-light.png",
    },
    {
        title: "Vue3+TS+Vite+Vant-UI 开发双端招聘APP",
        description: `商用级项目+业务能力+设计思维3重提升，打造差异化竞争力`,
        bgImgDark: "/img/features/features-02-browsers-dark.png",
        bgImgLight: "/img/features/features-02-browsers-light.png",
    },
    {
        title: "RN从0到1系统精讲与小红书APP实战",
        description: "30+小案例+2个实战项目，快人一步提升个职业竞争力",
        bgImgDark: "/img/features/features-03-frameworks-dark.png",
        bgImgLight: "/img/features/features-03-frameworks-light.png",
    },
    {
        title: "前端面试全家桶：从求职准备到面试演练",
        description: "双越老师带你体系化掌握大厂前端面试知识与流程",
        bgImgDark: "/img/features/features-04-webassembly-dark.png",
        bgImgLight: "/img/features/features-04-webassembly-light.png",
    },
];

export interface ProjectsUsingWCCardData {
    title: string;
    description: string;
    url?: string;
    urlTitle?: string;
    imgPath: {
        dark: string;
        light: string;
    };
}

export const projectsUsingWCCardData: ProjectsUsingWCCardData[] = [
    {
        title: "Vue3+TS+Vite+Vant-UI 开发双端招聘APP",
        description: `本课程以业务驱动技术栈，将真正的商用级项目复原在课程中，使用Vite、Vue3、TS、Vant3UI、Pinia和VueUse等多项前沿技术，从项目构建、研发、测试，完成整个全流程的学习。让你在掌握技术的同时，也能提升作为开发者的综合素养。项目功能相对完善，界面美观，手把手带你做出亮眼的作品。`,
        url: "https://coding.imooc.com/class/620.html",
        urlTitle: "前往学习",
        imgPath: {
            dark: `/img/features/vue3+ts.jpg`,
            light: `/img/features/vue3+ts.jpg`,
        },
    },
    {
        title: "自主搭建5个精品脚手架，玩转前端提效",
        description: `当下的前端开发，离不开脚手架。初级前端需会用脚手架，中高级前端应能够开发脚手架——掌握脚手架，就是贯穿初中高级前端生涯的核心竞争力之一。本课程集中讲解脚手架的设计思路和开发实践，并带你实现5个不同的脚手架项目，助力前端全流程提效，塑造个人竞争优势。`,
        url: "https://coding.imooc.com/class/607.html",
        urlTitle: "前往学习",
        imgPath: {
            dark: `/img/features/cli.jpg`,
            light: `/img/features/cli.jpg`,
        },
    },
    {
        title: "NestJS 入门到实战 前端必学服务端新趋势",
        description: `NestJS 在构建高效且可扩展的 Node.js 服务器端应用程序方面别具优势，越来越多的团队在大型 Node.js 服务端项目中使用 NestJS，非常值得前端学习。本课程是站内首门讲解 NestJS 的实战课，你将在 Brian 老师的带领下，顺滑地进入服务端开发领域，并掌握 NestJS 这项目技术的高效使用方法。`,
        url: "https://coding.imooc.com/class/617.html",
        urlTitle: "前往学习",
        imgPath: {
            dark: `/img/features/nestjs.jpg`,
            light: `/img/features/nestjs.jpg`,
        },
    },
];
