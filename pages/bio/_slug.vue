<template>
    <main>
    <Hero />
    <div class="container">
    <section class="articles">
          <!-- END ARTICLE -->
          <!-- START ARTICLE -->
          <div
            class="card article"
            style="padding-top: 20px; padding-bottom: 30px"
          >
            <div class="card-content">
              <div class="columns is-multiline">
                <div class="column is-12 register">
                  <div class="columns">
                    <div class="column">
                      <h1 class="title is-1">Bio</h1>
                     
                      <p>
                        A senior FullStack Developer with years of professional
                        experience gained working on a variety of web enterprise
                        projects in agile environment. I am specialised in front
                        and back-end web development, business applications and
                        project management.
                      </p>

                      <Lists :items="jobs" />
                    
                    </div>
                  </div>
                </div>
              </div>
 
            </div>
          </div>
          <!-- END PROMO BLOCK -->
      </section>
    </div>
    </main>

    
</template>
<script>

  export default {
    async asyncData({ $content, params }) {
      const jobs = await $content('bio').fetch()

      return { jobs }
    }
  }
</script>




