---
layout: page
title: 世界很喧嚣，做自己就好
head:
    - [
          "meta",
          {
              property: "og:image",
              content: "https://webcontainers.io/img/og/webcontainer_api.png",
          },
      ]
---

<script setup lang="ts">
import Home from '@theme/components/Home.vue';

import { homeExternalLinks, footerSections } from './data';
</script>

<Home
  :externalLinks="homeExternalLinks"
  :footerSections="footerSections"
/>
