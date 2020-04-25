<template>
  <div class="enlace">
    <select
      v-model="selected"
      @change="changeLocale()"
      class="lang-switcher"
      aria-label="The current language is English but you can change it in this selector">
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
      this.$router.push(this.switchLocalePath(this.selected))
    }
  }
}
</script>
<style lang="scss">
select {
  border-radius: 0;
  color: #fff;
  opacity: .8;
  padding: 1rem 3rem 1rem 1rem;
  border: 1px solid transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  // font-family: 'Nunito';
  font-size: 1.5rem;
  font-weight: bold;
  // font-size: 1.3rem;
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 50'><polygon fill='rgb(202, 202, 202)' points='0,0 100,0 50,50'/></svg>") no-repeat;
  // background: rgba($color: $primary, $alpha: 0.7);
  background-size: 12px;
  background-color: $primary-darken;
  background-position: calc(100% - 1rem) center;
  border-radius: .5rem;
  background-repeat: no-repeat;
  text-transform: uppercase;
  transition: border-color .3s;
  cursor: pointer;

  &:hover {
    border-color: white;
  }
  
  &:focus {
    outline: none;
    // color: red;
  }

  @media (max-width: $screen-sm) {
    font-size: 1.8rem;
    border-radius: initial;
  }
}

option {
  color: #fff;
  opacity: .8;
  font-weight: bold;
  border-radius: .5rem;
}
</style>
