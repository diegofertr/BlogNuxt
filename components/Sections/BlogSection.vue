<template>
  <section class="blogs">
    <div class="blogs__top">
      <div>
        <!-- <h2>{{ $t('posts') }}</h2> 
        <span class="emoji-title emoji--writing"/> -->
        <!-- <span class="emoji-title emoji--art"/> 
        <span class="emoji-title emoji--thinking"/> 
        <span class="emoji-title emoji--girl-coding"/> 
        <span class="emoji-title emoji--nerd"/> 
        <span class="emoji-title emoji--loved"/> 
        <span class="emoji-title emoji--plane"/> 
        <span class="emoji-title emoji--rock-girl"/>  -->
      </div>
    </div>
    <ul class="blogs__container"> 
      <blog-card
        v-for="blog in blogs"
        :key="blog.name"
        :blog="blog"
        :tipo-card="tipo" />
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
    },
    tipo: {
      type: String
    }
  }
}
</script>
<style lang="scss">
.blogs {
  display: grid;
  justify-items: center;

  h2 {
    color: $primary;
  }

  &__container {
    // margin-left: -20px;
    // margin-right: -20px;
    margin-top: 2rem;
    
    @media (min-width: $screen-sm){
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
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
    // margin-top: -60px;
    margin-left: 15px;
    margin-right: 15px;

    &__container {
      display: initial;
    }
    // width: calc(100vw - 50px);
    // &__top {
    //   display: none;
    // }
  }
}
</style>

