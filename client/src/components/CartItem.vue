<template>
  <div class="cart-item flex--row row--top--left">
    <div class="cart-item__left flex--column column--middle--center">
      <picture>
        <img :src="product.image" alt="" />
      </picture>
      <div class="cart-item__left__amount">
        <button>+</button>
        <input type="number" />
        <button>-</button>
      </div>
    </div>
    <div class="cart-item__right flex--column column--middle--right">
      <div class="cart-item__right__info flex--column column--middle--left">
        <h3>
          {{ product.name }}
        </h3>
        <span>
          <b>
            {{
              product.price + " " + product.currency
            }}
          </b>
        </span>
      </div>
      <button class="primary-btn small" @click="removeProduct(product.id)">Remove</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapMutations({
      removeProduct: "removeProduct"
    })
  }
};
</script>
<style lang="scss" scoped>
.cart-item {
  width: 100%;
  margin-bottom: 40px;
  border-bottom: 1px solid $gray-one;
  padding-bottom: 10px;
  &__left {
    margin-right: 20px;
    picture {
      margin-bottom: 10px;
      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
    }
    &__amount {
      input[type="number"] {
        width: 40px;
        height: 24px;
        border-radius: 3px;
        border: 1px solid $dark-two;
        margin: 0 5px;
      }
      button {
        width: 24px;
        height: 24px;
        border: 1px solid $dark-two;
        border-radius: 50%;
        background: transparent;
      }
    }
  }
  &__right {
    justify-content: space-between;
    min-height: 100px;
    width: 100%;
    &__info {
      width: 100%;
      h3 {
        color: $dark-two;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
