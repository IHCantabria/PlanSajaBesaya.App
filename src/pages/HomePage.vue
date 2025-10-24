<script setup>
import { ref } from 'vue';
const source = ref([
  { number: 172, title: 'Puntos de interés', url: '/points' },
  { number: 24, title: 'Rutas representativas', url: '/routes' },
  { number: 39, title: 'Municipios' }
]);



</script>
<template>
  <div class="home-page" :class="$q.screen.gt.sm ? 'home-page--desktop' : ''">
    <!-- App information -->
    <div class="home-page home-page__info" :class="$q.screen.gt.sm ? 'home-page__info--desktop' : ''">
      <!-- Title -->
      <h1 class="title text-h3 text-weight-semibold mobile-only">Plan de Gestión Ambiental Integral
        de Cuencas Hidrográficas</h1>
      <h1 class="title text-h3 text-weight-bold desktop-only">Plan de Gestión Ambiental Integral<br />
        de Cuencas Hidrográficas <b>Saja-Besaya</b></h1>
      <!-- TODO: Add App version -->
      <p class="version text-subtitle2 text-primary desktop-only">V {{ $q.version }}</p>
    </div>

    <!-- Image -->
    <q-img src="~assets/images/home-image.jpg" alt="Imagen de un río" class="home-page home-page__image"
      :class="$q.screen.gt.sm ? 'home-page__image--desktop' : ''" />

    <div class="home-page home-page__content" :class="$q.screen.gt.sm ? 'home-page__content--desktop' : ''">
      <!-- App description -->
      <q-card-section class="home-page home-page__description text-justify"
        :class="$q.screen.gt.sm ? 'home-page__description--desktop' : ''">
        <h5 class="title text-h5 text-weight-bold text-grey-9">
          Descripción del proyecto
        </h5>
        <p class="subtitle text-body1 text-grey-9">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </q-card-section>

      <!-- indicators -->
      <q-card-section class="home-page home-page__indicators"
        :class="$q.screen.gt.sm ? 'home-page__indicators--desktop' : ''">
        <div v-for="item in source" :key="item.title" class="home-page home-page__indicators indicator">
          <div class="indicator">
            <span class="indicator indicator__number" :class="$q.screen.gt.sm ? 'indicator__number--desktop' : ''">
              {{ item.number }}
            </span>
            <span class="indicator indicator__title" :class="$q.screen.gt.sm ? 'indicator__title--desktop' : ''">
              {{ item.title }}
            </span>
            <q-btn v-if="item.url" flat dense rounded :to="item.url" class="indicator indicator__button"
              :class="$q.screen.gt.sm ? 'indicator__button--desktop' : ''">
              ver en mapa
            </q-btn>
          </div>

        </div>
      </q-card-section>
    </div>
  </div>
  <!-- Footer -->
  <footer reveal class="home-page__footer" :class="$q.screen.gt.sm ? 'home-page__footer--desktop' : ''">
    <!-- Logos & project references -->
    <div class="home-page__footer--left">
      <div class="logos row">
        <div class="col-auto q-mr-sm">
          <img src="~assets/logos-ih.png" alt="Gobierno de Cantabria" height="50" />
        </div>
        <div class="col-auto">
          <img src="~assets/gob_cantabria_logo.png" alt="Fundación Santander Creativa" height="50" />
        </div>
      </div>
      <span class="reference text-body2 text-grey-7">
        Trabajos co-financiados por la Dirección General de Medio Ambiente y Cambio Climático del Gobierno de Cantabria
      </span>
    </div>
    <!-- CopyRight -->
    <div class="home-page__footer--right">
      <span class="copyright text-grey-9">
        © 2025 <a href="https://ihcantabria.com" class="text-weight-bold no-underline">IHCantabria.</a>
      </span>
    </div>
  </footer>

</template>

<style lang="scss" scoped>
.home-page {
  &--desktop {
    max-width: 80vw;
    margin: 0 auto;
  }

  &__info {
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem;
    color: $primary;

    .title {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 1.75rem;
      font-weight: 300;
      line-height: 130%;
    }

    &--desktop {
      padding: 1.5rem 0;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      .title {
        font-size: 2.5rem;
        font-weight: 300;
        line-height: 130%;
        margin-top: 2rem;
        margin-bottom: 0;
      }

      .version {
        font-size: 1rem;
      }
    }
  }

  &__image {
    width: 100%;
    height: 50vh;

    &--desktop {
      height: 40vh;
      max-height: 400px;
      border-radius: 16px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;


    &--desktop {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 2rem;
      padding: 1.5rem 0;
    }
  }

  &__description {
    padding: 24px 20px;

    .title {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    &--desktop {
      width: 50%;
      padding: 0;

      .title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
      }

      .subtitle {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 160%;
        text-align: left;
      }
    }
  }

  &__indicators {
    padding: 24px 20px;
    background-color: $grey-2;

    .indicator {
      background-color: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      &__number {
        font-size: 2.75rem;
        font-weight: 700;
        color: $primary;
        margin: 0;

        &--desktop {
          font-size: 3.5rem;
          font-weight: 500;
        }
      }

      &__title {
        font-size: 1.1rem;
        font-weight: medium;
        color: $grey-8;
        margin: 0;
        text-transform: uppercase;

        &--desktop {
          font-size: 1.25rem;
          font-weight: 400;
        }
      }

      &__button {
        margin-top: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        color: $primary;
        text-transform: none;
        text-decoration: underline;

        &--desktop {
          font-size: 1.1rem;

          &:hover {
            background-color: transparent;
            text-decoration: none;
          }
        }
      }
    }

    &--desktop {
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      width: 50%;
      padding: 0;
    }
  }

  &__footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 16px 20px;
    border-top: 1px solid $grey-3;


    &--desktop {
      flex-direction: row;
      align-items: flex-end;
      margin: 0 auto;
      padding: 8px 10%;
      background-color: $grey-1;
    }

    &--left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;

      &--desktop {
        align-items: flex-start;
      }
    }

    &--right {
      display: flex;
      align-items: flex-start;

      &--desktop {
        align-items: flex-end;
      }
    }
  }
}
</style>
