<template>
  <div>
    <label class="switch">
      <input
        type="checkbox"
        v-model="englishLanguage"
        @change="changeLanguage()"
        aria-label="The current language is English but you can change it in this checkbox">
      <span class="slider round"></span>
    </label>
  </div>
  <!-- <div class="enlace">
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
  </div> -->
</template>

<script>
export default {
  name: 'LangSwitcher',
  props: {
    opt: Boolean
  },
  data () {
    return {
      selected: '',
      englishLanguage: true
    }
  },
  mounted () {
    this.englishLanguage = this.$i18n.locale === 'en';
  },
  methods: {
    changeLocale () { 
      this.$router.push(this.switchLocalePath(this.selected));
    },
    changeLanguage () {
      console.log(this.englishLanguage);
      console.log(this.$i18n.locales);
      this.$router.push(this.switchLocalePath(this.englishLanguage ? 'en' : 'es'));
    }
  }
}
</script>
<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background-image: url('../assets/images/icons/spainBtn.png');
  background-size: cover;
  background-position: center;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  // background-color: #2196F3;
  background-color: #ccc;
}

input:checked + .slider:before {
  background-image: url('../assets/images/icons/englandBtn.png');
  background-size: cover;
  background-position: center;
  -webkit-transform: translateX(28px);
  -ms-transform: translateX(28px);
  transform: translateX(28px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 30px;
}

.slider.round:before {
  border-radius: 50%;
}

select {
  border-radius: 0;
  color: #fff;
  opacity: .8;
  padding: 1rem 3rem 1rem 1rem;
  border: 1px solid transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  // font-size: 1.5rem;
  font-size: 1.3rem;
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 50'><polygon fill='rgb(202, 202, 202)' points='0,0 100,0 50,50'/></svg>") no-repeat;
  // background: rgba($color: $primary, $alpha: 0.7);
  background-size: 12px;
  background-position: calc(100% - 1rem) center;
  background-repeat: no-repeat;
  text-transform: uppercase;
  transition: border-color .3s;
  cursor: pointer;

  &:hover {
    border-color: white;
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
