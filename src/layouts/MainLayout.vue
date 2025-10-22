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

const onEventClick = (eventId) => {
  router.push(`/points/${eventId}`)
}
const notifications = ref([
  {
    id: 1,
    title: 'Notification Title 1',
    description: 'Notification description 1',
    time: '2 mins ago',
    read: false
  },
  {
    id: 2,
    title: 'Notification Title 2',
    description: 'Notification description 2',
    time: '10 mins ago',
    read: true
  },
  {
    id: 3,
    title: 'Notification Title 3',
    description: 'Notification description 3',
    time: '1 hour ago',
    read: false
  },
  {
    id: 4,
    title: 'Notification Title 4',
    description: 'Notification description 4',
    time: 'Yesterday',
    read: true
  },
  {
    id: 5,
    title: 'Notification Title 5',
    description: 'Notification description 5',
    time: '2 days ago',
    read: false
  }, {
    id: 6,
    title: 'Notification Title 6',
    description: 'Notification description 6',
    time: 'Last week',
    read: true
  },
  {
    id: 7,
    title: 'Notification Title 7',
    description: 'Notification description 7',
    time: 'Last month',
    read: false
  },
  {
    id: 8,
    title: 'Notification Title 8',
    description: 'Notification description 8',
    time: 'Last year',
    read: true
  },
  {
    id: 9,
    title: 'Notification Title 9',
    description: 'Notification description 9',
    time: '2 years ago',
    read: false
  },
  {
    id: 10,
    title: 'Notification Title 10',
    description: 'Notification description 10',
    time: 'A long time ago',
    read: true
  }
]);

const markAllAsRead = () => {
  notifications.value.forEach(notification => {
    notification.read = true;
  });
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
    <q-header v-if="route?.path !== '/'" reveal bordered class="bg-white text-dark" height-hint="56">

      <!-- MOBILE ONLY -->
      <q-toolbar class="mobile-only navbar">
        <!-- Logo: visible only on home page -->
        <template v-if="route?.path === '/points'">
          <img src="~assets/SABE_logo_cuadrado.png" alt="Logo" class="logo--mobile navbar-icon cursor-pointer"
            aria-label="Home" @click="goToHome" />
        </template>

        <!-- GoBack button: visible only if not on home page -->
        <template v-else>
          <q-btn flat dense round icon="arrow_back" aria-label="Back" @click="goBack" />
        </template>
        <!-- Current page title -->
        <q-toolbar-title class="app-title">{{ route.meta.title ?? "" }}</q-toolbar-title>
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
        <div class="navbar navbar__start">
          <!-- Logo: redirect to home page -->
          <div>
            <img src="~assets/SABE_logo.png" alt="Logo" class="logo navbar-icon cursor-pointer" aria-label="Home"
              @click="goToHome" />
          </div>
          <q-separator vertical spaced />

          <!-- App name -->
          <div class="navbar navbar__start title-container q-px-sm">
            <q-toolbar-title class="app-title q-pr-xs">Plan Saja-Besaya</q-toolbar-title>
            <p class="app-version">v{{ $q.version }}</p>
          </div>
        </div>

        <!-- Menu -->
        <div class="navbar navbar__end">
          <!-- User info -->
          <q-card-section class="q-px-sm user-info">
            <p class="text-h7 text-right">John Doe</p>
            <p class="text-subtitle2 text-grey text-right">john.doe@example.com</p>
          </q-card-section>
          <!-- Buttons -->
          <q-btn flat dense round icon="person" aria-label="Profile" to="/profile" class="q-mx-xs" />
          <!-- Notifications popup-->
          <q-btn dense color="primary" round icon="notifications" class="q-ml-md">
            <q-badge color="red" floating v-if="notifications.length > 0">{{ notifications.length }}</q-badge>
            <q-menu fit>
              <!-- Notifications list -->
              <div v-if="notifications.length === 0" class="text-center" style="min-width: 250px">
                <q-item class="bg-grey-2">
                  <q-item-label>No new notifications</q-item-label>
                </q-item>
              </div>
              <div v-else>
                <div class="flex row justify-between q-pa-sm">
                  <q-item-label header class="text-body1 text-bold text-dark q-pa-sm">Notifications</q-item-label>
                  <q-btn flat dense label="Mark all as read" class="text-primary text-caption q-pa-sm"
                    @click="markAllAsRead" />
                </div>
                <q-list style="min-width: 300px; max-height: 400px; overflow-y: auto">
                  <q-separator />
                  <q-item v-for="notification in notifications" :key="notification.id" clickable v-ripple
                    @click="onEventClick(notification.id)" :class="notification.read ? 'bg-white' : 'bg-grey-2'">
                    <q-item-section>
                      <q-item-label class="text-weight-medium">
                        {{ notification.title }}
                      </q-item-label>
                      <q-item-label caption>{{ notification.description }}</q-item-label>
                    </q-item-section>
                    <q-item-section side top>
                      <q-item-label caption>{{ notification.time }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator />
                </q-list>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- BODY -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- FOOTER -->
    <q-footer v-if="route?.path !== '/'" reveal class="mobile-only text-white footer">
      <div class="full-width q-pa-xs flex justify-center items-center q-gutter-md">
        <!-- add active class to the current route -->
        <div class="button__icon" :class="{ 'button__icon--active': route.path === '/points' }"
          @click="router.push('/points')">
          <img src="~assets/icons/map.svg" viewBox="0 0 24 24" class="icon" />
          <!-- <span class="text">Puntos</span> -->
        </div>
        <div class="button__icon" :class="{ 'button__icon--active': route.path === '/routes' }"
          @click="router.push('/routes')">
          <img src="~assets/icons/routing.svg" viewBox="0 0 24 24" class="icon" />
          <!-- <span class="text">Rutas</span> -->
        </div>
        <div class="button__icon" :class="{ 'button__icon--active': route.path === '/about' }"
          @click="router.push('/about')">
          <img src="~assets/icons/menu.svg" viewBox="0 0 24 24" class="icon" />
          <!-- <span class="text">Menu</span> -->
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
    height: 50px;
    width: auto;

    &--mobile {
      height: 40px;
      width: auto;
    }
  }


  .app-title {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    &__start,
    &__end {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }

    &__start {
      .title-container {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        gap: 0.25rem;

      }
    }
  }
}

.footer {
  background: $primary-gradient;
  padding: 4px;

  .button {
    &__icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #ffffff20;
      border-radius: 8px;
      padding: 3px;
      height: 50px;
      width: 50px;
      transition: background-color 0.3s;

      &--active {
        background-color: #00000040;
      }



      .icon {
        width: 24px;
        height: 24px;
      }

      .text {
        font-size: 11px;
        letter-spacing: 1px;
        text-transform: capitalize;
        font-weight: 100;
      }
    }
  }
}
</style>
