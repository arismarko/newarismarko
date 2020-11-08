<template>
  <section :class="$style.lists">
    <div class="">
      <div class="columns">
        <div class="column is-4">
          <article class="message is-black">
            <div class="message-header">
              <p>SW Development</p>
            </div>
            <div :class="$style.messagebody">
              <div
                class="board-item"
                v-for="item in devJobs"
                :key="item.order"
              >
                <ListItem :item="item" />
              </div>
            </div>
          </article>
        </div>
        <div class="column is-4 is-narrow">
          <article class="message is-black">
            <div class="message-header">
              <p>Teaching</p>
            </div>
            <div :class="$style.messagebody">
              <div
                class="board-item"
                v-for="item in teachingJobs"
                :key="item.order"
              >
                <ListItem :item="item" />
              </div>
            </div>
          </article>
        </div>
        <div class="column is-4 is-narrow">
          <article class="message is-black">
            <div class="message-header">
              <p>Community</p>
            </div>
           <div :class="$style.messagebody">
              <div
                class="board-item"
                v-for="item in communityJobs"
                :key="item.order"
              >
                <ListItem :item="item" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import ListItem from "./ListItem";   
  export default {
    name: "Lists",
    props: {
      items: Array,
    },
    computed: {
      teachingJobs() {
        return this.items.filter(item=>item.type === 'teaching')
        .sort((a, b) => a.order-b.order);
      },
      devJobs() {
        return this.items.filter(item=>item.type === 'development')
        .sort((a, b) => a.order-b.order);
      },
      communityJobs() {
        return this.items.filter(item=>item.type === 'community')
        .sort((a, b) => a.order-b.order);
      }
    },
  };
</script>

<style module src="./Lists.css" />