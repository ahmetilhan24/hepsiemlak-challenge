<template>
  <div class="preloader-container flex--row row--middle--center" v-if="loader">
    <div class="preloader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Preloader",
  props: {
    loader: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.preloader-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  .preloader {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 24px;
      height: 24px;
      margin: 8px;
      border: 2px solid transparent;
      border-radius: 50%;
      animation: preloader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: $primary transparent transparent transparent;
      &:nth-child(1) {
        animation-delay: -0.45s;
      }
      &:nth-child(2) {
        animation-delay: -0.3s;
      }
      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }
}
</style>
