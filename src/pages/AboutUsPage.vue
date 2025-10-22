<script setup></script>
<template>
  <div class="about-page full-width">
    <q-card-section class="about-page about-page__info">
      <!-- App information -->
      <h4 class="text-h4 text-weight-semibold q-my-md q-mb-none">Plan
        Saja-Besaya</h4>
      <!-- TODO: Add App version -->
      <p class="text-subtitle2 text-accent">v {{ $q.version }}</p>
    </q-card-section>

    <!-- Image -->
    <q-img src="~assets/images/chris-liverani-W-4lE3MDItA-unsplash.jpg" alt="About Us Image"
      class="about-page about-page__image" contain></q-img>

    <!-- App description -->
    <q-card-section class="about-page about-page__description text-body1 text-justify">
      <p class="text-weight-bold">
        Descripción del proyecto
      </p>
      <!-- Ordered list -->
      <p class="text-weight-regular">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

    </q-card-section>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;

  &__info {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    color: $primary;
  }

  &__description {
    padding: 1rem;
  }

  &__image {
    width: 100%;
    height: 300px;
    margin: 16px 0;
  }


}
</style>
