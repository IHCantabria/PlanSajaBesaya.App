<script setup>
import { useLayoutsStore } from 'src/stores/layouts-store';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const layoutsStore = useLayoutsStore();

const router = useRouter();
const goBack = () => {
  router.go(-1);
}

const filters = ref(false);
const filter1 = ref(false);
const filter2 = ref(false);
const filter3 = ref(false);

</script>
<template>
  <!-- MAP -->
  <div class="map" :class="layoutsStore.isEventsListExpanded ? 'map--hidden' : ''">
    Map here
  </div>

  <!-- CONTENT -->
  <!-- MOBILE ONLY -->
  <div class="mobile-only content" :class="layoutsStore.isEventsListExpanded ? 'content--full-height' : ''">
    <router-view />
  </div>

  <!-- DESKTOP ONLY -->
  <div class="desktop-only content content--full-height">
    <q-toolbar class="navbar">
      <!-- Back button: show only if not on home page -->
      <q-btn v-if="route?.path !== '/'" flat dense round icon="arrow_back" aria-label="Back" @click="goBack" />
      <!-- Current page title -->
      <q-toolbar-title class="app-title">{{ route.meta.title ?? "" }}</q-toolbar-title>
      <!-- Filters button -->
      <q-btn flat dense round icon="filter_list" aria-label="Filters" class="filters-icon">
        <!-- Filters menu -->
        <q-menu anchor="top right" self="bottom right" v-model="filters" fit>
          <q-toolbar>
            <q-toolbar-title>Filters</q-toolbar-title>
            <q-btn flat dense round icon="close" aria-label="Close" @click="filters = false" />
          </q-toolbar>
          <q-separator />
          <q-list style="min-width: 300px">
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
          <div class="row justify-end q-pa-sm">
            <q-btn flat label="Reset" color="primary" @click="filter1 = false; filter2 = false; filter3 = false" />
            <q-btn flat label="Apply" color="primary" @click="filters = false" />
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.navbar {

  .app-title {
    font-weight: bold;
    font-size: 1rem;
    text-align: left;
  }
}

.map {
  position: absolute;
  top: 50px;
  height: calc(100% - 50px);
  width: 100%;
  background-color: $blue-grey-3;
  z-index: -5;
  transition: height 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &--hidden {
    height: 0;
    visibility: hidden;
  }
}

.content {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: auto;
  border-radius: 16px 16px 0 0;
  background-color: white;
  height: 40vh;
  transition: height 0.3s ease-in-out;

  &--full-height {
    bottom: 0;
    border-radius: 0;
    height: calc(100% - 70px);
    width: 350px;
  }
}
</style>
