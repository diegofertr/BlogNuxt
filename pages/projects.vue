<template>
  <div class="page-index">
    <div class="container">
      <h2 class="titulo">{{ $t('projects.title') }}</h2>
      <!-- <BlogSection :blogs="blogs"/> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'seccion'
}
</script>

<style lang="scss" scoped>
.container { 
  margin-top: 3rem;

  .titulo {
    display: flex;
    justify-content: center;
  }
}
</style>