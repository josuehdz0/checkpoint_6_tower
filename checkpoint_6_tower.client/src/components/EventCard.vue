<template>
  <div class="rounded card-bg" :style="{ backgroundImage: `url(${event.coverImg})` }">

    <div class="eventcard  rounded">
      <div class="">
        <div class="cardtitle">
          <div class="titlebackground">
            <!-- NOTE trying to add this to title of card -->
            <!-- :style="{ backgroundImage: `url(${event.coverImg})` }"  -->


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
  height: 30vh;
  width: 30vh;
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
  background-color: rgba(202, 224, 224, 0.253);
  position: sticky;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: bottom;
  // filter: blur(5px);
  // z-index: 1;

}

.cardtitle {
  background-color: rgba(255, 255, 255, 0);
  background-size: cover;
  // filter: blur(8px);

  // margin-bottom: 1rem;
}
</style>