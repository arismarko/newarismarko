<template>
  <div class="columns is-centered">
    <div class="column">
      <div :class="$style.card" class="container">
        <div class="card-image">
          <figure class="image">
            <img src="/images/home1.webp" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Short Bio</p>
            </div>
          </div>

          <div class="content">
            A senior FullStack Developer with years of professional experience
            gained working on a variety of web enterprise projects in agile
            environment. I am specialised in front and back-end web development,
            business applications and project management.
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div :class="$style.card">
        <div class="card-image">
          <figure class="image">
            <img src="/images/home2.webp" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Work Experience (Current)</p>
              <p class="subtitle is-6">Senior Software Enginner</p>
            </div>
          </div>

          <div :class="$style.listings">
            <ul>
              <li>Visiting Lecturer @ City University of London</li>
              <li>Co-Founder Organiser / CityJSConf</li>
              <li>Organiser / JS Monthly Meetup London</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div :class="$style.card">
        <div class="card-image">
          <figure class="image">
            <img src="/images/home3.webp" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Community Contributions</p>
            </div>
          </div>

          <div :class="$style.listings">
            Following there are some online contributions like talks or other
            blog posts that I have added at various times. <br />
            <ul>
              <li><a href="/contributions">Talks</a></li>
              <li><a href="/contributions">Blogs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style module src="./Summary.css" />