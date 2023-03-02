<template>
  <div class="EventPage container-fluid" v-if="event">
    <div class="row justify-content-center eventinfo">
      <div class="col-md-11 col-11 my-3 rounded" :style="{ backgroundImage: `url(${event.coverImg})` }">
        <div class="row infobackground rounded ">
          <div class="col-md-5 pt-4 pt-md-0 d-flex justify-content-center align-items-center">
            <img :src="event.coverImg" alt="" class="img-fluid eventimg rounded">
          </div>
          <div class="col-md-7 py-2 d-flex flex-column">

            <div>
              <div class="row justify-content-end">
                <div class="col-md-2  d-flex justify-content-end">
                  <div class="btn-group dropstart">
                    <button class="btn btn-primary btn-sm " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="mdi mdi-dots-horizontal"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Edit Event</a></li>
                      <li><a class="dropdown-item" href="#">Cancel Event</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row justify-content-between py-2 border-bottom border-3">
                <div class="col-md-6 col-6">
                  <h4>
                    <b>{{ event.name }}</b>
                  </h4>
                  <p>
                    <b>
                      {{ event.location }}
                    </b>
                  </p>

                </div>
                <div class="col-md-4 col-6">
                  <b>
                    {{ event.startDate }}
                  </b>
                </div>
              </div>
              <div class="row">
                <p>{{ event.description }}</p>
              </div>
            </div>

            <div class="mt-auto">
              <div class="row justify-content-between py-2">
                <div class="col-md-4 col-6">{{ event.capacity }} Spots left</div>
                <div class="col-md-4 col-6">Attend btn</div>
              </div>
            </div>


          </div>
        </div>
      </div>

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


<style lang="scss" scoped>
.eventimg {
  height: 45vh;
  width: 45vh;
  object-fit: cover;
  // border: 2px solid rgb(211, 211, 211);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  // position: relative;

}

.eventinfo {
  color: aliceblue;
  text-shadow: 1px 1px 1px black;
}

.infobackground {
  background-color: rgba(179, 179, 179, 0.147);
  backdrop-filter: blur(10px);

}
</style>