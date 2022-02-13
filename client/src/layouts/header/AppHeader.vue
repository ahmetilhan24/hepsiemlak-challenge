<template>
  <header class="header flex--row row--middle--center">
    <div class="header__in flex--row row--middle--center">
      <div class="header__in__left flex--row row--middle--center">
        <picture>
          <img
            src="https://www.hepsiemlak.com/_nuxt/img/logo-multi.9153507.svg"
            alt=""
          />
        </picture>
      </div>
      <div class="header__in__right flex--row row--middle--right">
        <router-link :to="{ name: 'Cart' }">
          <button class="primary-btn">
            <span class="cart-count-circle flex--column column--middle--center">
            </span>
            Basket
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  border-bottom: 1px solid $gray-one;
  &__in {
    padding: 12px 0;
    width: 100%;
    max-width: $max-width-one;
    justify-content: space-between;
    &__left {
      &__logo {
        img {
          height: 50px;
        }
      }
    }
  }
}
</style>
