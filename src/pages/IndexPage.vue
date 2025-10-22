<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    if (process.env.DEBUGGING) console.log('Notifications not supported.')
    return
  }

  const permission = await Notification.requestPermission()
  if (permission === 'granted') {
    if (process.env.DEBUGGING) console.log('Notification permission granted.')
    new Notification('QUASAR', { body: 'This is a test notification.' })
  } else {
    if (process.env.DEBUGGING) console.log('Notification permission denied.')
  }
}

onMounted(async () => {
  await requestNotificationPermission()

  setTimeout(() => {
    router.push('/points')
  }, 1000)
})

// const goToPoints = () => {
//   router.push('/points')
// }
</script>

<template>
  <div class="background">
    <q-img src="~assets/images/background.png" img-class="background__img">
      <div class="background__content">
        <img alt="App logo" src="~assets/SABE_logo_blanco.png" style="width: auto; height: 75px"
          class="background__logo" />
        <!-- <q-btn class="q-mt-xl" color="primary" label="Comenzar" @click="goToPoints" /> -->
      </div>
    </q-img>
  </div>
</template>

<style lang="scss" scoped>
.q-img {
  position: inherit;
}

.background {
  width: 100vw;
  height: 100vh;
  z-index: 10;

  &__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none;
    position: relative;
    height: 100%;
  }

}
</style>
