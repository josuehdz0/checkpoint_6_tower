<template>
  <div class="EventPage container-fluid" v-if="event">
    <div class="row">
      test???
      {{ event.name }}
    </div>
  </div>
  <div v-else>
    loading
  </div>
</template>


<script>
import { watchEffect, computed } from "vue";
import { AppState } from "../AppState.js"
import { useRoute, useRouter } from "vue-router";
import { eventsService } from "../services/EventsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter;

    async function getOneEventById() {
      try {
        const eventId = route.params.eventId;
        await eventsService.getOneEventById(eventId);
      } catch (error) {
        Pop.error(error, 'Getting Event By Id Error');
        router.push("/")
      }
    };


    watchEffect(() => {
      if (route.params.eventId) {
        getOneEventById();
      }
    })

    return {
      event: computed(() => AppState.event),
    }
  }
}
</script>


<style lang="scss" scoped></style>