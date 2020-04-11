<template lang="html">
  <div
    v-lazy-container="{ selector: 'img' }"
    :class="`image-placeholder ${isRounded} ${isRoundShadow}`">
    <img
      :data-src="imageRequired"
      :data-loading="imageRequired.placeholder"
      :width="width"
      :height="height"
      :class="classes"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String
    },
    alt: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    classes: {
      type: String
    },
    alt: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: false
    },
    roundShadow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageRequired () {
      return require(`../assets/images/${this.imageURL}`)
    },
    isRounded () {
      return this.rounded ? 'image-placeholder--rounded' : ''
    },
    isRoundShadow () {
      return this.roundShadow ? 'image-placeholder--roundShadow' : ''
    }
  }
}
</script>

<style scoped lang="scss">

.image-placeholder {
  overflow: hidden;
  line-height: 0;

  &--rounded {
    border-radius: 100%;
  }

  &--roundShadow {
    border-radius: 10px;
    // box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.85);
    box-shadow: 0 10px 40px 0 rgba(62,57,107,.2),0 2px 9px 0 rgba(62,57,107,.2);
  }
}

img {
  transition: all ease .3s;
  opacity: 0;
  object-fit: cover;

  &[lazy='loading'] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy='loaded'] {
    opacity: 1;
  }
}

</style>
