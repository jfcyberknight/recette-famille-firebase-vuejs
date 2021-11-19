<template>
  <Recipe v-for="recipe in recipes" :key="recipe.GUID" :recipe="recipe" />
</template>

<script>
import Recipe from "../components/recipe/Recipe.vue";
export default {
  name: "RecipesPage",
  props: {
    recipes: Array,
  },
  components: {
    Recipe,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
