---
title: &title 关于我
description: &description 对我感兴趣可以联系我
head:
    - ["meta", { property: "og:title", content: *title }]
    - [
          "meta",
          {
              property: "og:image",
              content: "https://webcontainers.io/img/og/contact.png",
          },
      ]
    - ["meta", { name: "twitter:title", content: *title }]
    - ["meta", { name: "twitter:description", content: *description }]
---

<script setup lang="ts">
import * as data from '../data';
</script>

# 合作联系 | CONTACT

<img src="./images/wexin.png" style="marginTop:14px;"/>

## 职业经历

我叫 {{data.name}}，目前定居在南昌，前端程序员，说不定你还使用过我参与开发的产品 😃。

爱好涉猎广泛，旅行摄影玩家和内容创作者，涉及<strong>科技 / 数码 / 旅行 / 生活方式</strong> 领域。

-   2020~至今 : [合思信息·易快报](https://hosecloud.com/) (南昌) / 前端主管
-   2018~2020: [平安陆金所](https://www.lu.com/) (深圳) / 资深前端工程师
-   2016-2018: [易仓科技有限公司](https://www.eccang.com/) (深圳) / 前端工程师
-   2012-2016: [太原科技大学](https://www.tyust.edu.cn/) (太原) / 本科

## 联系方式

你可从以下渠道联系我，期待与你的沟通与合作。

-   📩 个人邮箱: <victor318x@gmail.com>
-   📺 哔哩哔哩: [{{data.bilibibli}}](https://space.bilibili.com/401685966)
-   📟 个人微信: {{data.wechat}}
-   📼 公众号: {{data.wexin}}
