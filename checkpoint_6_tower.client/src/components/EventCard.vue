<template>
  <!-- NOTE Routes to specific Event Page by Id -->
  <router-link class="selectable" :to="{ name: 'Event', params: { eventId: event.id } }">

    <div class="rounded card-bg" :style="{ backgroundImage: `url(${event.coverImg})` }">

      <div class="eventcard ">
        <div class="">
          <div class="cardtitle ">
            <div class="titlebackground rounded-bottom">



              <div class="px-1 titlewords">
                <b>{{ event.name }}</b><br>
                {{ event.location }}
                {{ event.startDate }}
                <div class="text-end pe-1">
                  Spots left
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </router-link>
</template>


<script>
import { Event } from "../models/Event.js";

export default {
  props: {
    event: { type: Event, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.eventcard {
  // background-color: rgb(201, 181, 181);
  height: 25vh;
  width: 25vh;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.cardtitleheight {
  max-height: 12vh;
}

.card-bg {
  // position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  // filter: blur(8px);
  // z-index: -1;
}

.titlewords {
  // position: absolute;
  // z-index: 2;
  color: aliceblue;
  text-shadow: 1px 1px 3px black;
}

.titlebackground {
  background-color: rgba(225, 225, 225, 0.162);
  position: sticky;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: top;
  backdrop-filter: blur(5px);

  // filter: blur(5px);
  // z-index: 1;

}

.cardtitle {
  background-color: rgba(255, 255, 255, 0);
  background-size: cover;
  background-position: top;


  // filter: blur(8px);

  // margin-bottom: 1rem;
}
</style>