<template>
  <div class="page-index">
    <div class="container">
      <!-- {{ $t('contact.title') }} -->
      <form action="" method="get" class="form">
        <div class="form__item">
          <label for="name">Nombre: </label>
          <input type="text" name="name" id="name" placeholder="Juan Perez">
        </div>
        <div class="form__item">
          <label for="email">Correo Electrónico: </label>
          <input type="email" name="email" id="email" placeholder="juan@perez.com">
        </div>
        <div class="form__item">
          <label for="message">Mensaje: </label>
          <textarea name="message" id="message" cols="40" rows="5"></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'seccion'
}
</script>

<style lang="scss">
.form {
  
  &__item {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
}
</style>