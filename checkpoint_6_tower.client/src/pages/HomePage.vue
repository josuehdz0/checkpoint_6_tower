<template>
  <div class="container-fluid">
    <div class="row">
      <h2>Home</h2>
    </div>
    <div class="row">
      <h1>SITE INTRO?</h1>
    </div>
    <!-- NOTE this is were categorycard component will go? -->
    <div class="row justify-content-evenly py-2 sticky-top">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">All</button>
        <button type="button" class="btn btn-primary">Concerts</button>
        <button type="button" class="btn btn-primary">Conventions</button>
        <button type="button" class="btn btn-primary">Sports</button>
        <button type="button" class="btn btn-primary">Digital</button>
      </div>
    </div>

    <!-- NOTE this is were the eventcard component will be! -->
    <div class="row justify-content-evenly">
      <div v-for="e in events" :key="e.id" class="col-md-3 col-6 my-2 d-flex justify-content-center">
        <EventCard :event="e" />
      </div>





    </div>
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { eventsService } from "../services/EventsService.js";
import { onMounted, computed } from "vue";
import { AppState } from "../AppState.js";
import EventCard from "../components/EventCard.vue";


export default {
  setup() {
    async function getAllEvents() {
      try {
        await eventsService.getAllEvents();
      } catch (error) {
        Pop.error(error, 'Getting all Events')
      }
    }

    onMounted(() => {
      getAllEvents();
    })
    return {

      events: computed(() => AppState.events),
      account: computed(() => AppState.account)
    }
  },
  components: { EventCard }
}
</script>





<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }

  }
}
</style>
