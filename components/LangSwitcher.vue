<template>
  <div class="enlace">
    <!-- <label for="language" class="labeel">Select Language: </label> -->
    <select v-model="selected" @change="changeLocale()" class="lang-switcher" aria-label="Select Language">
      <option :value="selected" :aria-label="$i18n.locale" selected>{{ $i18n.locale }}</option>
      <option v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :aria-label="locale.code" :key="locale.code" >
        {{ locale.code }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  props: {
    opt: Boolean
  },
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeLocale () { 
      this.$router.push(this.switchLocalePath(this.selected));
    } 
  }
}
</script>
<style lang="scss">
select {
  border-radius: 0;
  color: $primary;
  padding: 1rem 3rem 1rem 1rem;
  border: 1px solid transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 1.5rem;
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 50'><polygon fill='rgb(10, 24, 46)' points='0,0 100,0 50,50'/></svg>") no-repeat;
  // background: rgba($color: $primary, $alpha: 0.7);
  background-size: 12px;
  background-position: calc(100% - 1rem) center;
  background-repeat: no-repeat;
  text-transform: uppercase;
  transition: border-color .3s;
  cursor: pointer;

  &:hover {
    border-color: $primary-light;
  }
  
  &:focus {
    outline: none;
  }

  @media (max-width: $screen-sm) {
    font-size: 1.5rem;
  }
}

option {
  color: $primary;
  font-weight: bold;
}
</style>
