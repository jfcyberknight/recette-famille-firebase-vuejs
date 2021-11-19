<template>
  <RecipesPage :recipes="recipesJson" />
</template>

<script>
import RecipesPage from "./pages/RecipesPage.vue";
import recipesJson from "./assets/recipes.json";

export default {
  name: "App",
  data() {
    return {
      recipesJson: recipesJson,
    };
  },
  components: {
    RecipesPage,
  },
};
</script>

<style></style>
