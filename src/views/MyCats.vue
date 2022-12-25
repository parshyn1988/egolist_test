<template>
  <div class="page my">
    <ul class="post-card__list">
      <li v-for="(post, index) in posts" :key="index">
        <post-card :author="post.author" :img-src="post.img" />
      </li>
    </ul>
  </div>
</template>

<script>
import { posts } from '@/mixins/posts';

export default {
  name: 'MyCats',

  mixins: [ posts ],

  created() {
    this.getPosts('?author=My');
  },
}
</script>

