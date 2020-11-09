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
            style="padding-top: 20px; padding-bottom: 30px"
          >
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column is-8 register">
                  <div class="columns">
                    <div class="column">
                      <h1 class="title is-1">About me</h1>
                     
                      <p>
                        A senior FullStack Developer with years of professional
                        experience gained working on a variety of web enterprise
                        projects in agile environment. I am specialised in front
                        and back-end web development, business applications and
                        project management.
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
               <Summary />
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


export default {};
</script>
