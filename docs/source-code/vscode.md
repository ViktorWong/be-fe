---
title: &title 调试JS代码
description: &description 前端程序员必选的基本技能
head:
    - ["meta", { property: "og:title", content: *title }]
    - [
          "meta",
          {
              property: "og:image",
              content: "https://webcontainers.io/img/og/tutorial-1_build_your_first_webcontainer_app.png",
          },
      ]
    - ["meta", { name: "twitter:title", content: *title }]
    - ["meta", { name: "twitter:description", content: *description }]
---

# 面试官：调试项目

## 随便写写

VSCode 调试 JS 的方法有很多，目前比较推荐的就是无需配置的 auto-attach。

默认无需配置，超级好用

按 ctrl + shift + p，打开输入 >auto attach。默认是智能（smart）。如果不是，可以查看设置成智能，或者根据场景自行设置成其他的。
