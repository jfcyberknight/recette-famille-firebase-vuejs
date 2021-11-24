<template>
  <van-row>
    <van-col offset="12" span="12">
      <h2>{{ $t("recipe.actions.edit") }}</h2>
      <van-switch v-model="isEditableRecipe" />
    </van-col>
  </van-row>
  <van-row>
    <van-col>
      <van-field
        v-model="bindingRecipe.title"
        :label="$t('recipe.title')"
        placeholder="Text"
        :readonly="!isEditableRecipe"
        autosize
        show-word-limit
        maxlength="250"
        input-align="right"
      />
    </van-col>
  </van-row>

  <van-field
    v-model="bindingRecipe.ingredients"
    :label="$t('recipe.ingredients')"
    placeholder="Text"
    :readonly="!isEditableRecipe"
  />
  <van-field
    v-model="bindingRecipe.instructions"
    :label="$t('recipe.instructions')"
    placeholder="Text"
    :readonly="!isEditableRecipe"
  />
  <van-field
    v-model="bindingRecipe.time"
    :label="$t('recipe.time')"
    placeholder="Text"
    :readonly="!isEditableRecipe"
  />
  <van-field
    v-model="bindingRecipe.difficulty"
    :label="$t('recipe.difficulty')"
    placeholder="Text"
    :readonly="!isEditableRecipe"
  />
  <van-field
    v-model="bindingRecipe.servings"
    :label="$t('recipe.servings')"
    placeholder="Text"
    :readonly="!isEditableRecipe"
  />
  <van-field
    v-model="bindingRecipe.rating"
    :label="$t('recipe.rating')"
    placeholder="Text"
    :readonly="!isEditableRecipe"
  />

  <van-image
    round
    width="400"
    height="400"
    fit="contain"
    lazy-load
    :src="bindingRecipe.image"
  />
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
  data() {
    return {
      isEditableRecipe: false,
      bindingRecipe: this.recipe,
    };
  },
};
</script>
