<template>
  <li class="blog">
    <nuxt-link
      :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})">
      <div class="blog__image">
        <ImageResponsive
          :imageURL="`blog/${blog.id}/_thumbnail.jpg`"
          :classes="'cardThumbnail'"
          :round-shadow="true"
          :alt="blog.cardAlt" /> 
      </div>
    </nuxt-link>
    <div class="blog__date" :style="`color: ${blog.color};`">
      <small>{{ blog.year }}</small>
    </div>
    <div class="blog__content">
      <h2 class="blog__title">
        <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})">
          {{ blog.title }}
        </nuxt-link>
      </h2>
      <p class="blog__description">
        {{ blog.description }}
      </p>
    </div>
    <div class="blog__footer">
      <!-- <button class="blog__button" @click="goToPost">
        Ver más
      </button> -->
    </div>
  </li>
</template>

<script lang="js">
export default {
  props: {
    blog: {
      type: Object
    }
  },
  methods: {
    goToPost () {
      this.$router.push(this.localePath({ name: 'blog-slug', params: { slug: this.blog.name }}));
    }
  }
}
</script>

<style lang="scss">
.cardThumbnail {
  // margin-left: auto;
  // margin-right: auto;
  width: 100%;
  height: 20rem;

  &[lazy='loaded'] {
    opacity: 1;
    border-radius: 1rem;
  }
}


.blog {
  border-radius: 10px;
  line-height: 1;
  box-shadow: 0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  justify-content: space-between;
  font-family: 'Nunito', Arial, sans-serif;

  @media (min-width: $screen-sm){
    padding-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &__image {
    margin: -20px 10px 0 10px;
    // padding-bottom: 0;
    display: block;
    // margin-top: -20px;
    transition: all .5s;
    background: #cacaca;
    border-radius: 10px;

    &:hover {
      // transform: scaleY(1.1);
      transform: translate(0, -15px);
    }
  }

  &__date {
    padding-left: 10px;
    padding-top: 5px;
  }

  &__content {
    padding: 10px;

    a {
      transition: color .3s;
      &:hover {
        color: $primary-lighter !important;
      }
    }
  }


  &__title {
    padding-top: .8rem;
    font-size: 2.2rem;
    // color: $secondary !important;
    transition: color .3s;
  }

  &__description {
    margin: 0;
    color: $grey-2;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  &__footer {
    // margin: 0;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    font-family: 'Nunito', Arial, sans-serif;
    background: transparent;
    border: 1px solid $primary;
    color: $primary;
    border-radius: 50px;
    padding: 0;
    padding-left: 20px;
    padding-right: 20px;

    
  }
}
</style>
