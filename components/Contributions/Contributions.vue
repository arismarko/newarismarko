<template>
  <section :class="$style.lists">
    <div class="">
      <div class="columns">
        <div class="column is-12">
          <article>
            <div >
              <h2 :class="$style.heading2">{{title}}</h2>
            </div>
            <div :class="$style.messagebody">
              <div
                class="board-item"
                v-for="item in articles"
                :key="item.order"
              >
               <Item :info="item" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Item from "./Item/Item";   

  export default {
    name: "Contributions",
    props: {
      articles: Array,
      title: String
    },
  };
</script>

<style module src="./Contributions.css" />