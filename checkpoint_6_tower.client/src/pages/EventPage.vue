<template>
  <div class="EventPage container-fluid" v-if="event">
    <div class="row justify-content-center eventinfo">
      <!-- NOTE Event Details here -->
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
                    <ul class="dropdown-menu dropdowntext">
                      <li><a class="dropdown-item " href="#">Edit Event</a></li>
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
                <div class="col-md-4 col-6 d-flex justify-content-end">
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
    <!-- NOTE Profiles attending -->
    <div class="row justify-content-center py-2 ">

      <div v-if="attendees.length >= 1" v-for="a in attendees" class="col-11 py-2 border-top border-2 border-primary">
        <b>Attendees: </b>
        <img class="img-fluid profileimg" :src="a.picture" :alt="a.name + 'picture'" :title="a.name">
      </div>
      <div v-else class="col-11 py-2 border-top border-2 border-primary text-center">
        <b>Be the first to get tickets to this event!</b>
      </div>

    </div>
    <!-- NOTE Comments will and comment form -->
    <div class="row justify-content-center py-2 mb-2">
      <div class="col-11">
        <!-- NOTE Posting comment form -->
        <form>
          <div class="row p-3 justify-content-end">
            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 100px"></textarea>
              <label for="floatingTextarea2" class="ps-4">Comment here!</label>
            </div>
            <div class="col-md-3 d-flex justify-content-end">
              <button type="submit" class="btn btn-primary my-3 ">Post Comment</button>
            </div>
          </div>
          <div class="row">
            others comments?
          </div>
        </form>
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
import { attendeesService } from "../services/AttendeesService.js"
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

    async function getEventAttendees() {
      try {
        const eventId = route.params.eventId;
        await attendeesService.getEventAttendees(eventId)
      } catch (error) {
        Pop.error(error.message)
      }
    }


    watchEffect(() => {
      if (route.params.eventId) {
        getOneEventById();
        getEventAttendees();
      }
    })

    return {
      event: computed(() => AppState.event),
      attendees: computed(() => AppState.attendees)
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

.dropdowntext {
  text-shadow: 0px 0px 0px;
}

.infobackground {
  background-color: rgba(179, 179, 179, 0.147);
  backdrop-filter: blur(10px);
}

.profileimg {
  height: 8vh;
  width: 8vh;
  object-fit: cover;
  border-radius: 50%;
}
</style>