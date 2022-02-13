<template>
  <header class="header flex--row row--middle--center">
    <div class="header__in flex--row row--middle--center">
      <div class="header__in__left flex--row row--middle--center">
        <router-link :to="{name: 'Products'}">
          <picture>
          <img
            src="https://www.hepsiemlak.com/_nuxt/img/logo-multi.9153507.svg"
            alt=""
          />
        </picture>
        </router-link>
      </div>
      <div class="header__in__right flex--row row--middle--right">
        <router-link class="primary-btn flex--row row--middle--center" :to="{ name: 'Cart' }">
            <span class="cart-count-circle flex--column column--middle--center">
              {{
                getCart().length
              }}
            </span>
            Basket 
        </router-link>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "AppHeader",
  methods: {
    ...mapGetters({
      getCart: "getCart"
    })
  }
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
    &__right{
      a{
        position: relative;
      }
    }
  }
}
</style>
