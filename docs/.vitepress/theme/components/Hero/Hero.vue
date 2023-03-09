<script setup lang="ts">
import CTAButton from "@theme/components/Buttons/CTAButton.vue";
import WCEmbed from "@theme/components/Examples/WCEmbed/WCEmbed.vue";
</script>

<template>
  <header>
    <div class="header-content">
      <h1 class="header-content-title">世界很喧嚣，<br />做你自己就好</h1>
      <p class="header-content-subtitle">
        扎实前端基础知识，熟练开发调试技巧；掌握主流框架 Vue 和
        React，从容应付面试八股； 借鉴源码核心思想，适宜设计前端架构。<br />
        <span> ---- “任他前端怎么变，勿焦虑，且随我静心学来”</span>
      </p>
      <div class="cta-buttons">
        <CTAButton href="/vue/introduction">开始苦修</CTAButton>
        <CTAButton
          href="https://stackblitz.com/?starters=frontend"
          layout="simple"
          >前往练习场</CTAButton
        >
      </div>
    </div>

    <div class="header-media">
      <WCEmbed />
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@theme/styles/vars";

header {
  position: relative;
  display: flex;
  gap: 84px;
  width: var(--content-max-width);
  max-width: 100%;
  margin: 0 auto 52px;
  padding: 0 52px;
  @media (max-width: 1280px) {
    gap: 64px;
    padding-right: 32px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 500px) {
    padding: 0 12px;
  }
}

.header-content {
  flex: 1.2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  @media (max-width: 1024px) {
    align-items: center;
  }

  &-title {
    font-family: THappy, SimSun, FangSong, STSong, STZhongsong, LiSu, KaiTi,
      "Microsoft YaHei";
  }
  &-subtitle {
    font-family: THappy, SimSun, FangSong, STSong, STZhongsong, LiSu, KaiTi,
      "Microsoft YaHei";
  }
}

.header-media {
  transform: translateY(-80px);
  max-height: 600px;
  max-width: 596px;
  width: 100%;
  @media (max-width: 1460px) {
    width: 44%;
  }
  @media (max-width: 1280px) {
    width: 48%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    transform: translateY(0);
  }
}

$icon-mask: linear-gradient(to bottom, #fff9 10%, #fffa 30%, #fff0 74%);

header .icon {
  width: 160px;
  height: 160px;
  color: var(--sb-foreground-highlight);
  -webkit-mask-image: $icon-mask;
  mask-image: $icon-mask;

  @media (prefers-contrast: more) {
    display: none;
  }

  @media (min-width: $bp-medium) {
    width: 200px;
    height: 200px;
  }
}

header h1 {
  margin-bottom: 0;
  font-family: Gilroy, var(--vp-font-family-base);
  line-height: 1.2;
  font-weight: 400;
  margin-top: -25px;
  font-size: 76px;
  letter-spacing: -2px;
  line-height: 1;
  color: #000;
  :root.dark & {
    color: #fff;
  }

  strong {
    font-weight: 600;
  }

  @media (max-width: 1400px) {
    font-size: 68px;
  }
  @media (max-width: 1280px) {
    font-size: 60px;
  }
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 960px) {
    margin-top: -15px;
    font-size: 40px;
  }
}

header p {
  max-width: 600px;
  margin: 0.75em 0 1.5em;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  @media (max-width: 1280px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 12px;
    text-align: center;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
}

.cta-buttons {
  display: flex;
  gap: 16px;
  width: 100%;
  @media (max-width: 1024px) {
    justify-content: center;
  }
}
</style>
