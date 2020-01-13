<template>
  <section class="blogs">
    <div class="blogs__top">
      <div>
        <!-- <h2>{{ $t('posts') }}</h2> -->
        <h2>Blog</h2>
        <span class="emoji-title emoji--writing"/>
      </div>
    </div>
    <ul class="blogs__container">
      <blog-card
        v-for="blog in blogs"
        :key="blog.name"
        :blog="blog" />
    </ul>
  </section>
</template>
<script>
import BlogCard from "~/components/BlogCard.vue";

export default {
  components: { BlogCard },
  props: {
    blogs: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
.blogs {
  // margin-top: -110px;
  display: grid;
  justify-items: center;

  h2 {
    color: $primary;
  }

  &__container {
    margin: 0;
    // margin-top: -30px;
    
    @media (min-width: $screen-sm){
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 25px;
      display: grid;
    }
  
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      // margin-top: 4rem;
    }
  }
}

@media screen and (max-width: 768px){
  .blogs {
    margin-top: -60px;
    margin-left: auto;
    margin-right: auto;
    width: calc(100vw - 50px);
    &__top {
      display: none;
    }
  }
}
</style>

