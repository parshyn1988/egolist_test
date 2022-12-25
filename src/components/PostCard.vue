<template>
  <div class="post-card">
    <span class="post-card__author">{{ author }}</span>
    <img
        src="https://via.placeholder.com/400"
        :data-src="imgSrc"
        alt=""
        class="lazy-loaded-image lazy"
    >
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    author: { type: String, default: '' },
    imgSrc: { type: String, default: '' },
  }
}
</script>
