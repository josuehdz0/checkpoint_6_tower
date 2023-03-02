<template>
  <div class="EventPage container-fluid" v-if="event">
    <div class="row justify-content-center">
      <div class="col-md-11 my-3" :style="{ backgroundImage: `url(${event.coverImg})` }">
        <div class="row infobackground ">
          <div class="col-md-5 d-flex justify-content-center align-items-center">
            <img :src="event.coverImg" alt="" class="img-fluid eventimg">
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
              <div class="row justify-content-between py-2">
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
                <div class="col-md-4 col-6">Spots left</div>
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
  // position: relative;

}

.infobackground {
  background-color: rgba(213, 213, 213, 0.309);

}

.img-blur {
  position: relative;
  display: inline-block;
}

.img-blur:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 10px 10px #ffffff;
}
</style>