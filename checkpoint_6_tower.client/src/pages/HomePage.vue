<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <!-- NOTE crazy marquee here -->
      <marquee behavior="" direction="">
        <div class="col-12 p-3 m-3">
          <h2>RESERVE YOUR SEAT WITH US </h2>
        </div>
      </marquee>
    </div>
    <!-- NOTE this is were type filter -->
    <div class="row justify-content-evenly sticky-md-top fixed-bottom py-2 px-md-2 px-3 ">
      <div class="btn-group filterbuttons p-0" role="group" aria-label="Basic example">
        <button @click="changeFilterType('')" type="button" class="btn btn-primary ">All</button>
        <button @click="changeFilterType('concert')" type="button" class="btn btn-primary ">Concerts</button>
        <button @click="changeFilterType('convention')" type="button" class="btn btn-primary ">Conventions</button>
        <button @click="changeFilterType('sport')" type="button" class="btn btn-primary ">Sports</button>
        <button @click="changeFilterType('digital')" type="button" class="btn btn-primary ">Digital</button>
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
import { onMounted, computed, ref } from "vue";
import Pop from "../utils/Pop.js";
import { eventsService } from "../services/EventsService.js";
import { AppState } from "../AppState.js";
import EventCard from "../components/EventCard.vue";


export default {
  setup() {
    const filterType = ref('')
    async function getAllEvents() {
      try {
        await eventsService.getAllEvents();
      } catch (error) {
        Pop.error(error, 'Getting all Events')
      }
    }

    onMounted(() => {
      getAllEvents();
    });

    return {
      events: computed(() => {
        if (!filterType.value) {
          return AppState.events
        }
        else {
          return AppState.events.filter(e => e.type == filterType.value)
        }
      }),

      // events: computed(() => AppState.events),
      account: computed(() => AppState.account),

      changeFilterType(type) {
        filterType.value = type
      }
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

.filterbuttons {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}
</style>
