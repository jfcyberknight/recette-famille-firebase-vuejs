<template>
  <Recipes :recipes="recipesJson" />
  <van-button type="primary">Primary</van-button>
</template>

<script>
import Recipes from "./components/recipe/Recipes.vue";
import recipesJson from "./assets/recipes.json";

export default {
  name: "App",
  data() {
    return {
      recipesJson: recipesJson,
    };
  },
  components: {
    Recipes,
  },
};
</script>

<style></style>
