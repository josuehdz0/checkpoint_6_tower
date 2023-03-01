<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0 ">
          <!-- <Navbar /> -->
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 order-md-2 p-0 bg-dark">
          <Navbar />
        </div>
        <div class="col-md-10 order-md-1">
          <router-view />
        </div>


      </div>
    </div>

  </main>
  <footer>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
