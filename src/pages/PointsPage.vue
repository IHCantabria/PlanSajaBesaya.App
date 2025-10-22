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
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red'
  },
  {
    id: 2,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red'
  },
  {
    id: 3,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'grey-4',
    textColor: 'grey'
  },
  {
    id: 4,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red'
  },
  {
    id: 5,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'grey-4',
    textColor: 'grey'
  },
  {
    id: 6,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red'
  },
  {
    id: 7,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'grey-4',
    textColor: 'grey'
  },
  {
    id: 8,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red'
  },
  {
    id: 9,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'grey-4',
    textColor: 'grey'
  },
  {
    id: 10,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red'
  }
])

const toggleList = () => {
  layoutsStore.toggleEventsList()
}

const handleSwipe = () => {
  layoutsStore.toggleEventsList()
}
</script>

<template>
  <div v-touch-swipe.mouse.up.down="handleSwipe" class="q-pa-md items-container"
    :class="layoutsStore.isItemsListExpanded ? 'full-height' : ''">
    <!-- add expand items on swipe top -->
    <button @click="toggleList" class="my-button q-mb-sm mobile-only" aria-label="Expand/Collapse items list">
      <q-icon :name="layoutsStore.isItemsListExpanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'" />
    </button>
    <q-list style="width: 100%; max-width: 350px">
      <q-item v-for="item in items" :key="item.id" clickable v-ripple @click="onItemClick(item.id)"
        class="item-card q-pa-md q-mb-sm">
        <q-item-section>
          <q-item-label class="text-bold text-grey-9">
            {{ item.title }}
          </q-item-label>
          <q-item-label caption>{{ item.time }}</q-item-label>
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
}

.my-button {
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
}
</style>
