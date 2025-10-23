<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useLayoutsStore } from '../stores/layouts-store'

const layoutsStore = useLayoutsStore()
const router = useRouter()
const onItemClick = (itemId) => {
  router.push(`/points/${itemId}`)
}

const items = ref([
  {
    id: 1,
    title: 'Nombre del punto',
    type: 'Árbol',
    color: 'light-green-2',
    textColor: 'light-green'
  },
  {
    id: 2,
    title: 'Nombre del punto',
    type: 'Natural',
    color: 'blue-2',
    textColor: 'blue'
  },
  {
    id: 3,
    title: 'Nombre del punto',
    type: 'Cultural',
    color: 'deep-purple-2',
    textColor: 'deep-purple'
  },
  {
    id: 4,
    title: 'Nombre del punto',
    type: 'Industrial',
    color: 'orange-2',
    textColor: 'orange'
  },
  {
    id: 5,
    title: 'Nombre del punto',
    type: 'Árbol',
    color: 'light-green-2',
    textColor: 'light-green'
  },
  {
    id: 6,
    title: 'Nombre del punto',
    type: 'Natural',
    color: 'blue-2',
    textColor: 'blue'
  },
  {
    id: 7,
    title: 'Nombre del punto',
    type: 'Cultural',
    color: 'deep-purple-2',
    textColor: 'deep-purple'
  },
  {
    id: 8,
    title: 'Nombre del punto',
    type: 'Industrial',
    color: 'orange-2',
    textColor: 'orange'
  },
  {
    id: 9,
    title: 'Nombre del punto',
    type: 'Árbol',
    color: 'light-green-2',
    textColor: 'light-green'
  },
  {
    id: 10,
    title: 'Nombre del punto',
    type: 'Natural',
    color: 'blue-2',
    textColor: 'blue'
  },
  {
    id: 11,
    title: 'Nombre del punto',
    type: 'Cultural',
    color: 'deep-purple-2',
    textColor: 'deep-purple'
  },
  {
    id: 12,
    title: 'Nombre del punto',
    type: 'Industrial',
    color: 'orange-2',
    textColor: 'orange'
  }
])

const toggleList = () => {
  layoutsStore.toggleItemsList()
}

const handleSwipe = () => {
  layoutsStore.toggleItemsList()
}
</script>

<template>
  <div v-touch-swipe.mouse.up.down="handleSwipe" class="q-px-md items-container"
    :class="layoutsStore.isItemsListExpanded ? 'full-height' : ''">
    <div class="swipe-button-container">
      <button @click="toggleList" class="swipe-button q-mb-sm mobile-only" aria-label="Expand/Collapse items list">
        <q-icon :name="layoutsStore.isItemsListExpanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'" />
      </button>
    </div>
    <q-list style="width: 100%; max-width: 360px">
      <q-item v-for="item in items" :key="item.id" clickable v-ripple @click="onItemClick(item.id)"
        class="item-card q-pa-md q-mb-sm">
        <q-item-section>
          <q-item-label caption class="item-card item-card__id">ID {{ item.id }}</q-item-label>
          <q-item-label class="item-card item-card__title text-grey-9">
            {{ item.title }}
          </q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-badge :color="item.color" :text-color="item.textColor" :label="item.type" class="q-px-sm q-py-xs" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<style lang="scss" scoped>
.full-height {
  height: 100%;
  overflow-y: auto;
}

.items-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .swipe-button-container {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .swipe-button {
    border: none;
    border-radius: 100%;
    background: none;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: $blue-grey-4;

    &:hover {
      color: $blue-grey-6;
      background-color: $blue-grey-2;
      transform: scale(1.05);
      transition: transform 0.2s;
    }
  }

  .item-card {
    background-color: $grey-2;
    border-radius: 8px;
    width: 100%;

    &__id {
      font-weight: 500;
      font-size: 0.9rem;
    }

    &__title {
      font-weight: 600;
      font-size: 1rem;
    }
  }
}
</style>
