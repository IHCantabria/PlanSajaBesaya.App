<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
const goBack = () => {
  router.go(-1);
}

const goToHome = () => {
  router.push('/');
}

const filters = ref(false);
const filter1 = ref(false);
const filter2 = ref(false);
const filter3 = ref(false);
const openFilters = () => {
  filters.value = true;
}
</script>
<template>
  <q-layout view="hHr LpR fFr">
    <!-- HEADER -->
    <q-header reveal bordered class="bg-white text-dark" height-hint="56">

      <!-- MOBILE ONLY -->
      <q-toolbar class="mobile-only navbar">
        <!-- Logo: visible only on home page -->
        <template v-if="route?.path === '/'">
          <img src="~assets/SABE_logo_cuadrado.png" alt="Logo" class="logo--mobile navbar-icon cursor-pointer"
            aria-label="Home" @click="goToHome" />
        </template>

        <!-- GoBack button: visible only if not on home page -->
        <template v-else>
          <q-btn flat dense round icon="arrow_back" aria-label="Back" @click="goBack" />
        </template>
        <!-- Current page title -->
        <q-toolbar-title class="app-title">{{ route.meta.title ?? "" }}</q-toolbar-title>
        <!-- App Version -->
        <span v-if="route?.path === '/'" class="app-version text-grey-7 text-body2 text-weight-medium">v{{ $q.version
        }}</span>

        <!-- Filters button -->
        <!-- Show only on points and routes pages -->
        <q-btn flat dense round icon="filter_list" aria-label="Filters" @click="openFilters"
          class="q-mr-sm filters-icon visible"
          :class="{ hidden: route?.path !== '/points' && route?.path !== '/routes' }">
        </q-btn>
      </q-toolbar>

      <!-- Filters drawer -->
      <q-drawer v-model="filters" side="right" overlay>
        <q-toolbar>
          <q-toolbar-title>Filters</q-toolbar-title>
          <q-btn flat dense round icon="close" aria-label="Close" @click="filters = false" />
        </q-toolbar>
        <q-separator />
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Filter 1</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-checkbox v-model="filter1" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Filter 2</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-checkbox v-model="filter2" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Filter 3</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-checkbox v-model="filter3" />
            </q-item-section>
          </q-item>
        </q-list>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Reset" color="primary" @click="filter1 = false; filter2 = false; filter3 = false" />
          <q-btn flat label="Apply" color="primary" @click="filters = false" />
        </q-card-actions>
      </q-drawer>

      <!-- DESKTOP ONLY -->
      <q-toolbar class="desktop-only navbar--desktop">
        <!-- Brand -->
        <div class="navbar">
          <!-- Logo -->
          <img src="~assets/SABE_logo.png" alt="Logo" class="logo q-mr-md" aria-label="Home" @click="goToHome" />
          <q-separator vertical spaced class="q-mx-md" />
          <!-- Menu -->
          <div class="menu--desktop q-px-sm">
            <div class="button" :class="{ 'button--active': route.path === '/' }" @click="router.push('/')">
              <span class="text">Inicio</span>
            </div>
            <div class="button" :class="{ 'button--active': route.path === '/points' }" @click="router.push('/points')">
              <span class="text">Puntos de interés</span>
            </div>
            <div class="button" :class="{ 'button--active': route.path === '/routes' }" @click="router.push('/routes')">
              <span class="text">Rutas representativas</span>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <!-- BODY -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- FOOTER -->
    <q-footer class="mobile-only text-white footer">
      <div class="menu--mobile">
        <div class="button__icon" @click="router.push('/')">
          <img v-if="route.path === '/'" src="~assets/icons/home-bold.svg" viewBox="0 0 24 24" class="icon" />
          <img v-else src="~assets/icons/home.svg" viewBox="0 0 24 24" class="icon" />
          <span class="text">Inicio</span>
        </div>
        <div class="button__icon" @click="router.push('/points')">
          <img v-if="route.path === '/points'" src="~assets/icons/map-bold.svg" viewBox="0 0 24 24" class="icon" />
          <img v-else src="~assets/icons/map.svg" viewBox="0 0 24 24" class="icon" />
          <span class="text">Puntos de interés</span>
        </div>
        <div class="button__icon" @click="router.push('/routes')">
          <img v-if="route.path === '/routes'" src="~assets/icons/routing-bold.svg" viewBox="0 0 24 24" class="icon" />
          <img v-else src="~assets/icons/routing.svg" viewBox="0 0 24 24" class="icon" />
          <span class="text">Rutas</span>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    cursor: pointer;
    height: 65px;
    width: auto;

    &--mobile {
      height: 40px;
      width: auto;
    }
  }

  .app-title {
    text-align: left;
    font-weight: 600;
    font-size: 1rem;
  }

  .filters-icon {
    min-height: 32px;
    min-width: 32px;

    &.visible {
      visibility: visible;
    }

    &.hidden {
      visibility: hidden;
    }
  }

  &--desktop {
    height: 70px;
    width: 100%;
  }
}

.menu {
  &--mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    .button {
      &__icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border-radius: 8px;
        padding: 3px;
        height: auto;
        width: auto;
        transition: background-color 0.3s;

        .icon {
          width: 24px;
          height: 24px;
        }

        .text {
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: capitalize;
          font-weight: 300;
        }
      }
    }
  }

  &--desktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 1.5rem;

    .button {
      cursor: pointer;
      padding: 8px 12px;
      color: $grey-8;
      border-bottom: 3px solid transparent;
      transition: ease-in-out 0.3s;

      &:hover {
        background-color: $grey-2;
      }

      &--active {
        color: $secondary;
        border-bottom: 3px solid $secondary;
      }

      .text {
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
}

.footer {
  display: flex;
  background: $primary-gradient;
  padding: 4px;
  height: 60px;
}
</style>
