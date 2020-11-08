<template>
  <article>
    <a :href="info.link">
      <h2 :class="$style.heading2">{{ info.title }}</h2>
    </a>
  </article>
</template>

<script>
export default {
  name: "Item",
  props: {
    info: Object,
  },
};
</script>

<style module src="./Item.css" />