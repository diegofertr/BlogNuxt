<template>
  <div>
    <div class="social">
      <ul class="social__content">
        <li>
          <a
            class="social__content-button"
            href="https://github.com/diegofertr"
            target="_blank"
            rel="noopener"
            aria-label="Ver proyectos en github">
            <font-awesome-icon class="social__content-icon" :icon="['fab', 'github']"/>
          </a>
        </li>
        <li>
          <a
            class="social__content-button"
            href="https://www.linkedin.com/in/diegofertr/"
            target="_blank"
            rel="noopener"
            aria-label="Ver perfil en linkedin">
            <font-awesome-icon class="social__content-icon" :icon="['fab', 'linkedin']"/>
          </a>
        </li>
        <li>
          <a 
            class="social__content-button" 
            href="https://twitter.com/diegofertr" 
            target="_blank"
            rel="noopener"
            aria-label="Ver tweets">
            <font-awesome-icon class="social__content-icon" :icon="['fab', 'twitter']"/>
          </a>
        </li>
      </ul>
      <!-- <button><font-awesome-icon class="social__content-icon" :icon="['fas', 'code']"/></button> -->
    </div>
    <section class="contenedor">

      <Header :seccion="false" />

      <div class="contenido">
        <div class="contenido__descripcion">
          <h1 class="hello">{{ $t('banner.hello') }}</h1>
          <h2 class="titulo">{{ $t('banner.name') }}</h2>
          <h3 class="subtitulo">{{ $t('banner.subtitle') }}</h3>
          <p class="description">{{ $t('banner.description') }}</p>
        </div>
        <div class="contenido__img">
          <img class="image-carousel" src="../assets/images/devConcept.png" alt="Developer concept image">
        </div>
      </div>
      <div class="arrow">
        <a
          href="#about" 
          aria-label="Ver más contenido">
          <font-awesome-icon class="social__content-icon" :icon="['fas', 'angle-down']"/>
        </a>
      </div>
    </section>
    <div class="main-section page-index nuxt-content">
      <section id="about" class="about">
        <h2>{{ $t('content.about.title') }}</h2>
        <div class="about__content">
          <div class="about__content-description">
            <p>{{ $t('content.about.descriptionFirst') }}</p>
            <p>{{ $t('content.about.descriptionSecond') }}</p>
            <p>{{ $t('content.about.descriptionThird') }}</p>
          </div>
          <div class="about__content-avatar">
            <a href="https://github.com/diegofertr">
              <div class="about__content-img">
                <img src="../assets/images/myPic.png" alt="Foto personal">
              </div>
            </a>
          </div>
          <!-- <div >
          </div> -->
        </div>
        <!-- <BlogSection :blogs="blogs"/> -->
      </section>
      <section class="experience">
        <h2>Experiencia de Trabajo</h2>
        <ul class="experience__content">
          <li class="experience__item">
            <div class="experience__place-time">
              <div class="experience__place">
                La Paz, Bolivia
              </div>
              <div class="experience__time">
                <span>Sep´19 </span>
                <span class="experience__now">- now</span>
              </div>
            </div>
            <div class="experience__image" aria-label="">
              <div class="image-placeholder">
                <img src="../assets/images/digitalboost.png" alt="Logo Digitalboost">
              </div>
            </div>
            <div class="experience__panel">
              <div class="experience__position">
                <h3 class="experience__title">Ingeniero de Software freelance - <a href="https://digitalboost.com.bo/" target="_blank" rel="noopener">DIGITALBOOST</a></h3>
              </div>
              <div class="experience__description">
                Contribuyo con el desarrollo de diversas soluciones digitales con el objetivo de optimizar los procesos para las empresas cliente, me encargo desde la gestión, pasando por el diseño, análisis e implementación de los proyectos.
              </div>
            </div>
          </li>
          <li class="experience__item">
            <div class="experience__place-time">
              <div class="experience__place">
                La Paz, Bolivia
              </div>
              <div class="experience__time">
                <span>May´18 </span>
                <span>- Dic´19</span>
              </div>
            </div>
            <div class="experience__image" aria-label="">
              <div class="image-placeholder">
                <img src="../assets/images/agetic.jpg" alt="Logo Agetic">
              </div>
            </div>
            <div class="experience__panel">
              <div class="experience__position">
                <h3 class="experience__title">Consultor en Desarrollo de Sistemas - <a href="https://agetic.gob.bo/#/" target="_blank" rel="noopener">AGETIC</a></h3>
              </div>
              <div class="experience__description">
                Colaboré con el desarrollo de sistemas de gobierno electrónico orientados a la simplificación de trámites, apoyando tanto en la parte del backend como frontend de cada proyecto desarrollado.
              </div>
            </div>
          </li>
          <li class="experience__item">
            <div class="experience__place-time">
              <div class="experience__place">
                La Paz, Bolivia
              </div>
              <div class="experience__time">
                <span>Feb´17 </span>
                <span>- Jun´17</span>
              </div>
            </div>
            <div class="experience__image" aria-label="">
              <div class="image-placeholder">
                <img src="../assets/images/muserpol.png" alt="Logo Muserpol">
              </div>
            </div>
            <div class="experience__panel">
              <div class="experience__position">
                <h3 class="experience__title">Pasante en Desarrollo de Software - <a href="http://www.muserpol.gob.bo/" target="_blank" rel="noopener">MUSERPOL</a></h3>
              </div>
              <div class="experience__description">
                Colaboré con el desarrollo de la plataforma institucional para gestión de jubilaciones de los policías, con el objetivo de reducir los trámites y dar una mejor atención a los policías.
              </div>
            </div>
          </li>
          <li class="experience__item">
            <div class="experience__place-time">
              <div class="experience__place">
                La Paz, Bolivia
              </div>
              <div class="experience__time">
                <span>Ene´17 </span>
                <span>- Abr´17</span>
              </div>
            </div>
            <div class="experience__image" aria-label="">
              <div class="image-placeholder">
                <img src="../assets/images/tedxumsa.png" alt="Logo TEDX UMSA">
              </div>
            </div>
            <div class="experience__panel">
              <div class="experience__position">
                <h3 class="experience__title">Desarrollador Fullstack - <a href="https://www.ted.com/tedx/events/20177" target="_blank" rel="noopener">TEDXUMSA</a></h3>
              </div>
              <div class="experience__description">
                TED es un evento global en donde se reúnen distintas personalidades que exponen y comparten las ideas que están transformando al mundo. Colaboré con el desarrollo de sistemas de gobierno electrónico orientados a la simplificación de trámites, apoyando tanto en la parte del backend como frontend de cada proyecto desarrollado.
              </div>
            </div>
          </li>
          <li class="experience__item">
            <div class="experience__place-time">
              <div class="experience__place">
                La Paz, Bolivia
              </div>
              <div class="experience__time">
                <span>Oct´16 </span>
                <span>- Dic´16</span>
              </div>
            </div>
            <div class="experience__image" aria-label="">
              <div class="image-placeholder">
                <img src="../assets/images/agetic.jpg" alt="Logo Agetic">
              </div>
            </div>
            <div class="experience__panel">
              <div class="experience__position">
                <h3 class="experience__title">Pasante en Investigación de Software - <a href="https://agetic.gob.bo/#/" target="_blank" rel="noopener">AGETIC</a></h3>
              </div>
              <div class="experience__description">
                Colaboré con la investigación de nuevas tecnologías para desarrollo web, uso de nuevos frameworks de javascript así como también el uso de nuevos gestores de base de datos, también aprendí los inicios de docker para el manejo de contenedores.
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="education">
        <h2>Educación</h2>
        <ul class="experience__content">
          <li class="experience__item">
            <div class="experience__place-time">
              <div class="experience__place">
                La Paz, Bolivia
              </div>
              <div class="experience__time">
                <span>Agos´11 </span>
                <span>- Jun´17</span>
              </div>
            </div>
            <div class="experience__image" aria-label="">
              <div class="image-placeholder">
                <img src="../assets/images/informatica.jpg" alt="Logo Carrera de Informática">
              </div>
            </div>
            <div class="experience__panel">
              <div class="experience__position">
                <h3 class="experience__title">Licenciatura en Informática mención Ingeniería de Sistemas - <a href="https://informatica.edu.bo/" target="_blank" rel="noopener">INFORMÁTICA UMSA</a></h3>
              </div>
              <div class="experience__description">
                Estudié mi profesión como informático en la Universidad Mayor de San Andrés, la de mejor prestigio en Bolivia. 
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="hobby">
        <p>Información acerca de mi mayor hobby después de la programación.... El Fútbol</p>
      </section>
    </div>
  </div>
</template>

<script>
  import BlogSection from "~/components/Sections/BlogSection"
  import Header from '~/components/Sections/Header'

  import blogsEn from '~/contents/en/blogsEn.js'
  import blogsEs from '~/contents/es/blogsEs.js'

  export default {
    async asyncData ({app}) {

      const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs
      
      async function asyncImport (blogName) {
        const wholeMD = await import(`~/contents/${app.i18n.locale}/blog/${blogName}.md`)
        return wholeMD.attributes
      }

      return Promise.all(blogs.map(blog => asyncImport(blog)))
      .then((res) => {
        return {
          blogs: res
        }
      })
    },
    
    components: { BlogSection, Header },

    transition: {
      name: 'slide-fade'
    },

    head () {
      return {
        title: this.$t('indexPageHead.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Diego F. Ticona Ramos" },
          { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
          { property: "og:title", content: this.$t('indexPageHead.title') },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.$t('indexPageHead.description') },
          { name: "twitter:image", content: this.ogImage }
        ]
      };
    },

    data () {
      return {
        active: true
      }
    },

    computed: {
      ogImage: function () {
        return;
      }
    }
  }
</script>

<style lang="scss" scoped>
.social {
  // background: red;
  position: fixed;
  width: 30px;
  bottom: 0;
  left: 30px;
  right: auto;

  @media (max-width: $screen-sm) {
    display: none;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;

    &::after {
      content: '';
      width: 1px;
      display: block;
      height: 120px;
      margin: 0 auto;
      background-color: #0a182e;
    }

    li {
      // background: red;
      margin-bottom: 10px;
    }

    &-button {
      // background: rgba($color: $primary, $alpha: 0.3);
      // width: 5rem;
      color: #0a182e;
      font-size: 2.6rem;
      padding-bottom: 10px;
      // padding: 3px 15px;
      // display: grid;
      // justify-content: center;
      // border-bottom: 1px solid rgba($color: $primary, $alpha: 0.5);

      &:hover {
        color: #2762ba;
        transform: translate(1.5rem);
        transition: all 0.1s ease-in 0.1s;
      }
    }
  }
}

.contenedor {
  // height: calc(100vh - 30px);
  height: 100vh;
  width: 100%;
  // display: grid;
  // grid-template-rows: auto 1fr;
  @media (max-width: $screen-sm) {
    height: calc(100vh - 300px);
    // background-color: rgba($color: red, $alpha: 0.6)
  }

  .arrow {
    text-align: center;
    font-size: 2.5rem;
    // @media (max-width: $screen-sm) { display: none }
  }

  .contenido {
    display: grid;
    justify-content: start;
    align-content: center;
    position: relative;
    // justify-items: ;
    // align-items: start;
    margin: 8rem 12rem 0;
    // text-align: left;
    grid-template-columns: 1fr 350px;
    // grid-gap: 10px;

    @media (max-width: $screen-sm) {
      margin: 7rem 2rem 0;
      // margin-top: 1rem;
      grid-template-columns: initial;
      position: initial;
    }

    &__descripcion {
      h1 {
        font-size: 2rem;
        color: $primary-lighter1;
        @media (max-width: $screen-sm) {
          font-size: 1.2rem;
        }
      }

      h2 {
        font-size: 6.5rem;
        color: $primary;
        @media (max-width: $screen-sm) {
          font-size: 5rem;
        }
      }

      h3 {
        color: rgba($color: white, $alpha: 0.8);
        font-size: 5rem;
        color: $primary-lighter1;
        @media (max-width: $screen-sm) {
          font-size: 3.5rem;
          // text-align: justify;
        }
      }

      p {
        margin-top: 4rem;
        font-size: 2rem;
        width: 60rem;
        color: $primary-lighter;

        @media (max-width: $screen-sm) {
          width: 100%;
          font-size: 1.8rem;
          text-align: justify;
        }
      }
    }

    &__img {
      position: relative;

      @media (max-width: $screen-sm) {
        display: none;
      }

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgba($color: white, $alpha: 0.6);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
      }

      img {
        width: 400px;
      }
    }

  }
}

.main-section {
  padding: 3rem 12rem 0;

  // About section
  .about {
    // position: relative;

    // &__title {
    //   color: $primary;
    // }

    &__content {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr 400px;
      // justify-content: space-between;
      // align-items: flex-start;
      // position: relative;

      &-description {
        font-size: 21px;
        color: $primary-light;
        text-align: justify;
        color: #767676;
      }

      &-avatar {
        display: grid;
        justify-content: center;

        .about__content-img {
          position: relative;

          &::after {
            content: '';
            display: block;
            border-bottom: 2px solid $primary-light;
            border-right: 2px solid $primary-light;
            border-radius: 10px;
            position: absolute;
            top: 15px;
            left: 15px;
            bottom: -10px;
            right: -10px;
          }

          img {
            border-radius: 10px;
            width: 300px;
            // position: absolute;
            // top: 0;
            // bottom: 0;
            // left: 0;
            // right: 0;
          }
        }
      }


    }
  }

  .experience {
    margin-top: 10rem;

    &__content {
      margin-top: 5rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        background: #cacaca;
        width: 2px;
        top: 0;
        left: 20rem;
        right: 0;
        bottom: 0;
      }
    }

    &__item {
      display: grid;
      grid-template-columns: 12% 8% 80%;
      justify-content: flex-start;
      align-items: center;
      grid-gap: 20px;
      margin-bottom: 7rem;
    }

    &__place-time {
      // background: rgba($color: red, $alpha: 0.2);
    }

    &__now {
      color: $primary-lighter;
      font-weight: 400;
    }

    &__place {
      color: $primary-darken;
      font-size: 1.8rem;
      margin-bottom: 8px;
    }

    &__time {

    }

    &__image {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #cacaca;
        border-radius: 100%;
      }

      .image-placeholder {
        display: grid;
        justify-content: center;

        img {
          border-radius: 100%;
          border: 2px solid #cacaca;
          width: 100%;
          height: auto;
        }
      }
    }

    &__panel {
      margin-left: 10px;
    }

    &__position {
    }

    &__title {
      color: $primary-light;
    }

    &__description {
      text-align: justify;
    }
  }

  .education {
    margin-top: 15rem;
  }
}

</style>
