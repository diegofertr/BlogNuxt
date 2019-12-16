<template>
  <li class="blog">
    <nuxt-link 
      :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})"
    >
      <ImageResponsive
        :imageURL="`blog/${blog.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="blog.cardAlt" />
      <div class="blog__content">
        <h3 class="blog__title">
          {{ blog.title }}
        </h3>
        <p class="blog__description">
          {{ blog.description }}
        </p>
      </div>
    </nuxt-link>
  </li>
</template>

<script lang="js">
  export default {
    props: {
      blog: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
.cardThumbnail {
  transition: all ease .75s;
  opacity: .7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &[lazy='loaded'] {
    opacity: 1;
  }
}

.blog {

  background: $background-lighter;
  // padding: 10px;
  border-radius: 10px;
  border: 1px solid $grey-3;

  @media (min-width: $screen-sm){
    padding-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &__content {
    padding: 10px;
  }

  &:hover {
    // background: #f1eeee;
    transform: scale(1.05);
    transition: all 0.1s ease-in 0.1s;

    .blog__title {
      color: $primary;
    }
  }

  &__title {
    font-family: 'Tiempos Headline', Arial, sans-serif;
    color: $secondary;
    padding-top: 1rem;
    font-size: 2.5rem;
    transition: color .3s;
  }

  &__description {
    margin: 0;
    color: $grey-2;
  }
}
</style>
