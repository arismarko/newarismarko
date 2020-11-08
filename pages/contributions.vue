<template>
  <div>
    <Hero />
    <div class="container">
      <!-- START ARTICLE FEED -->
      <section class="articles">
        <!-- END ARTICLE -->
        <!-- START ARTICLE -->
        <div
          class="card article"
          style="padding-top: 30px; padding-bottom: 30px"
        >
          <div class="card-content">
            <div class="columns is-multiline">
              <div class="column is-8 register">
                <div class="columns">
                  <div class="column">
                    <h1 class="title is-1">Contributions</h1>

                    <p>
                      You can find more about me on medium where I am writing my
                      articles, on my linkedin and also in conferences where I
                      am giving talks or organising them Some of those can be
                      seen below:
                    </p>

                    <Contributions :articles="contributions" title="Contributions" />

                    <Contributions :articles="conferences" title="Conferences" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END PROMO BLOCK -->
      </section>
    </div>
  </div>
</template>

<script>
import Summary from "../components/Summary/Summary";
import Hero from "../components/Hero/Hero";
import Contributions from "../components/Contributions/Contributions";

export default {
  async asyncData({ $content, params }) {
    const contributions = await $content("contributions").fetch();
    const conferences = await $content("conferences").fetch();

    return { contributions, conferences };
  },
};


</script>
