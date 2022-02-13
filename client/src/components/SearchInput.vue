<template>
  <div class="search-input">
    <input
      v-model="query"
      @keypress="handleSearch"
      type="text"
      placeholder="Search Products"
    />
    <search-icon :size="30" class="search-input__icon" />
  </div>
</template>
<script>
import SearchIcon from "@/components/icons/SearchIcon.vue";
export default {
  name: "SearchInput",
  components: {
    SearchIcon,
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("search", this.query);
    },
  },
};
</script>
<style lang="scss" scoped>
.search-input {
  width: 100%;
  max-width: 500px;
  height: 60px;
  position: relative;
  @media only screen and (max-width: $extra-small) {
    height: 50px;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    padding-left: 10px;
    border-radius: 20px;
    background-color: $white;
    border: 1px solid $gray-one;
    @media only screen and (max-width: $small) {
      border-radius: 10px;
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    
  }
}
</style>
