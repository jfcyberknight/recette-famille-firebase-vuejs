<template>
  <div>
    <p>{{ $t("recipe.title") }} : {{ recipe.title }}</p>
    <p>{{ $t("recipe.ingredients") }} : {{ recipe.ingredients }}</p>
    <p>{{ $t("recipe.instructions") }} : {{ recipe.instructions }}</p>
    <p>{{ $t("recipe.time") }} : {{ recipe.time }}</p>
    <p>{{ $t("recipe.difficulty") }} : {{ recipe.difficulty }}</p>
    <p>{{ $t("recipe.servings") }} : {{ recipe.servings }}</p>
    <p>{{ $t("recipe.rating") }} : {{ recipe.rating }}</p>
    <van-cell-group>
      <van-field v-model="value" label="Label" placeholder="Text" />
    </van-cell-group>

    <van-image
      round
      width="400"
      height="400"
      fit="contain"
      lazy-load
      :src="recipe.image"
    />
  </div>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
};
</script>
