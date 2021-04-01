<template>
  <div class="container-fluid p-0">
    <About />
    <Experience :selectedBlog="selectedBlog" :newComment="newComment" @onRemoveComment="removeComment" @onPostComment="postComment"/>
  </div>
</template>

<script>
import $ from "jquery";
import About from "./About.vue";
import Experience from "./Experience.vue";

export default {
  props: ['selectedBlog', 'newComment'],
  components: {About, Experience},
  methods: {
    removeComment(id) {
      this.$emit('onRemoveComment', id);
    },
    postComment() {
      this.$emit('onPostComment');
    }
  },
};
</script>
