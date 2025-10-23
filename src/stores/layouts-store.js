import { defineStore, acceptHMRUpdate } from 'pinia'

export const useLayoutsStore = defineStore('layouts', {
  state: () => ({
    eventsListExpanded: false,
  }),

  getters: {
    isItemsListExpanded: (state) => state.eventsListExpanded,
  },

  actions: {
    toggleItemsList() {
      this.eventsListExpanded = !this.eventsListExpanded
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutsStore, import.meta.hot))
}
