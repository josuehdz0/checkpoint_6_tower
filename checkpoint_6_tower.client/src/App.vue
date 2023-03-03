<template >
  <header>
    <!-- <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0 ">
          <Navbar />
        </div>
      </div>
    </div> -->
  </header>
  <main class="mybg">
    <div class="container-fluid ">
      <div class="row">
        <div class="col-md-1 order-md-2 p-0 bg-light sticky-top">
          <Navbar />
        </div>
        <div class="col-md-11 order-md-1 ">
          <div class="row p-0 d-none d-md-flex">
            <h1 class="pt-2">
              <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
                <i class="mdi mdi-human p-0"></i>
                <b class="">ower</b>
              </router-link>
            </h1>
          </div>
          <div class="row p-0">

            <router-view />
          </div>
        </div>
      </div>
    </div>

  </main>
  <!-- <footer>
  </footer> -->

  <ModalComponent id="eventModal">
    <EventForm />
  </ModalComponent>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import EventForm from "./components/EventForm.vue"
import ModalComponent from "./components/ModalComponent.vue"
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, ModalComponent, EventForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

.fill {
  min-height: 100%;
  height: 100%;
}

* {
  font-family: 'Roboto', sans-serif;
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

.mybg {
  background-color: rgb(255, 215, 104);
}
</style>
