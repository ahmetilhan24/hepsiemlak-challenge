<template>
  <article class="product-card flex--column column--middle--center">
    <div class="product-card__poster flex--row row--middle--center">
      <picture class="flex--row row--middle--center">
        <img :src="product.image" :alt="product.name" />
      </picture>
    </div>
    <div class="product-card__title flex--row row--middle--center">
      <span>
        {{ product.name }}
      </span>
    </div>
    <div class="product-card__bottom flex--row row--middle--center">
      <span class="product-card__bottom__price">
        {{ product.price + product.currency }}
      </span>
      <button class="primary-btn small" @click="cartUpdate">
        {{
          isCarted ? "Remove basket" : "Add basket"
        }}
        </button>
    </div>
  </article>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isCarted: false,
    };
  },
  methods: {
    ...mapMutations({
      pushProduct: "pushProduct",
      removeProduct: "removeProduct",
    }),
    cartUpdate() {
      //item is on carted
      if (this.isCarted) {
        this.removeProduct(this.product.id);
        this.isCarted = false;
      } else {
        this.pushProduct(this.product);
        this.isCarted = true
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.product-card {
  width: calc(33.33% - 12px);
  margin: 6px;
  border: 1px solid $gray-one;
  padding: 10px 15px;
  margin-bottom: 6px;
  &__poster {
    width: 100%;
    picture {
      width: 100%;
      img {
        width: 100px;
        height: 180px;
        object-fit: contain;
      }
    }
  }
  &__title {
    width: 100%;
    text-align: center;
    span {
      color: $dark-two;
    }
  }
  &__bottom {
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;
    &__price {
      color: $dark-two;
      font-size: 20px;
    }
  }
}
</style>
