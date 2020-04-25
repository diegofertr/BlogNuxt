<template>
  <li class="blog">
    <div class="blog__category">
      <nuxt-link :to="localePath({ name: `${blog.category}-slug`, params: { slug: blog.name }})">
        {{ $t(`category.${blog.category}`) }}
      </nuxt-link>
    </div>
    <nuxt-link :to="localePath({ name: `${blog.category}-slug`, params: { slug: blog.name }})">
      <div class="blog__content">
        <h2 class="blog__title">
          {{ blog.title }}
        </h2>
        <p class="blog__description">
          {{ blog.description }}
        </p>
      </div>
    </nuxt-link>
    <div class="blog__footer">
      <img class="blog__techimage" :src="imageRequired" alt="technology">
      <div class="blog__extras">
        <div class="blog__tech">{{ blog.technology }}</div>
        <div class="blog__date">
          {{ $t('updated') }} {{ blog.year }}
        </div>
      </div>
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
  computed: {
    imageRequired () {
      return require(`../assets/images/icons/${this.blog.technology}.jpg`)
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

  @media (max-width: $screen-sm) {
    height: 15rem;
  }
}


.blog {
  line-height: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  justify-content: space-between;
  font-family: 'Nunito', Arial, sans-serif;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $grey-light;

  &:hover {
    box-shadow: 0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);
    border-radius: .5rem;
  }

  @media (min-width: $screen-sm){
    padding-bottom: 1rem;

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

  &__category {
    color: $primary-light;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem;
    margin-bottom: 0;

    @media (max-width: $screen-sm) {
      font-size: .8rem;
    }
  }

  &__content {
    padding: 10px;
  }

  a {
    transition: color .3s;
    &:hover {
      color: $primary-lighter !important;
    }
  }


  &__title {
    padding-top: .8rem;
    font-size: 2.2rem;
    transition: color .3s;
    margin-bottom: 1rem;

    @media (max-width: $screen-sm) {
      font-size: 2rem;
    }
  }

  &__description {
    margin: 0;
    // margin-top: -1rem;
    color: $grey-2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  &__footer {
    margin-bottom: 10px;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
  }

  &__techimage {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    // border: 1px solid red;
    // background-color: green;
    object-fit: cover;
  }

  &__extras {
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
    margin-top: 1rem;
  }

  &__tech {
    // color:black;
    color: $primary;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: .3rem;
  }

  &__date {
    // color: $primary-light;
    font-size: 1.3rem;
    text-transform: uppercase;

    @media (max-width: $screen-sm) {
      font-size: 1.2rem;
    }
  }
}
</style>
