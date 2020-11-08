<template>
  <div :class="$style.boardItemContent">
    <span
      ><strong
        >{{item.year}} <br />
        {{item.jobtitle}}</strong
      >
      <br />
      {{item.name}}</span
    >
  </div>
</template>

<script>
  export default {
    name: "ListItem",
    props: {
      item: Object,
    },
    computed: {
      
    },
  };
</script>

<style module src="./Lists.css" />