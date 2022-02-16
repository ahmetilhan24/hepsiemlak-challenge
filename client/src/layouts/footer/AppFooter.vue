<template>
  <footer class="app-footer flex--row row--middle--center">
    <div class="app-footer__in flex--row row--middle--center">
      <p>Frontend Developer || Ahmet İlhan</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
<style lang="scss" scoped>
.app-footer {
  width: 100%;
  margin-top: 30px;
  padding: 30px 0;
  background-color: $gray-two;
  &__in {
    max-width: $max-width-one;
  }
}
</style>
