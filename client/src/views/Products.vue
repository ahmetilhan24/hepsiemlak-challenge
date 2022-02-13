<template>
  <section class="products flex--column column--middle--center">
    <search-area>
      <search-input @search="searchProduct" />
    </search-area>
    <div class="products__items flex--row row--middle--left">
      <product-card v-for="item in products" :key="item" :product="item" />
    </div>
    <!--Not result-->
    <p v-if="products.length === 0">Not result 🙁 ? data is retrieved</p>
    <!--Preloader-->
    <preloader :loader="loader" />
  </section>
</template>

<script>
import SearchArea from "@/components/SearchArea.vue";
import SearchInput from "@/components/SearchInput.vue";
import ProductCard from "../components/ProductCard.vue";
import { mapActions } from "vuex";
import Preloader from "../components/Preloader.vue";
export default {
  name: "Products",
  components: {
    SearchArea,
    SearchInput,
    ProductCard,
    Preloader,
  },
  data() {
    return {
      products: [],
      loader: true
    };
  },
  methods: {
    ...mapActions({
      allProducts: "allProducts",
    }),
    //get data for async await function or then and catch block
    async getData() {
      this.loader = true;
      let res = await this.allProducts();
      //to products data
      this.products = res.data;
      this.loader = false;
    },
    //Search product
    searchProduct(query) {
      console.log(query);
      let filtered = this.products?.filter((item) =>
        item.name.toString().toLowerCase().includes(query.toLowerCase())
      );
      this.products = filtered;
      //is not result get clear data
      if (filtered.length === 0) {
        setTimeout(() => {
          this.getData();
        }, 1800);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.products {
  width: 100%;
  &__items {
    max-width: $max-width-one;
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
