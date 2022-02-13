<template>
  <section class="search-area flex--column column--middle--center">
    <div class="search-area__content flex--column column--middle--center">
      <h1>Lorem Ipsum is simply dummy text</h1>
      <h6>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an
      </h6>
    </div>
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "SearchArea",
};
</script>
<style lang="scss" scoped>
.search-area {
  width: 100%;
  min-height: 480px;
  text-align: center;
  background: linear-gradient(#ff825815, transparent);
  &__content {
    max-width: 800px;
    margin-bottom: 50px;
    h1 {
      margin-bottom: 40px;
      @include golden-text(35);
    }
    h6 {
      @include golden-text(20);
      color: $dark-two;
      font-weight: 400;
    }
  }
}
</style>
