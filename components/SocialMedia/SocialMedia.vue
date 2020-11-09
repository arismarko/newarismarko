<template>

   <div :class="$style.socialmedia && isBlack? $style.isBlack : $style.isWhite">
		Follow me &nbsp; <a href="https://twitter.com/arismarko" target="_blank" class=" is-light is-large"><i class="fa fa-twitter" aria-hidden="true"></i></a>
		<a href="https://github.com/arismarko" target="_blank" class=" is-light is-large"><i class="fa fa-github" aria-hidden="true"></i></a>
		<a href="https://www.linkedin.com/in/aris-markogiannakis-95b2a5/" target="_blank" class=" is-light is-large"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
	</div>
</template>

<script>
export default {
 props: {
     isBlack: Boolean
 }
}
</script>

<style module src="./SocialMedia.css" />