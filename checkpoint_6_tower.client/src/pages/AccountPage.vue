<template>
  <div class="containter-fluid">
    <div class="row ">
      <div class="about text-center pt-2">
        <h1>Welcome {{ account.name }} </h1>
        <img class=" myprofile " :src="account.picture" alt="" />
        <h2>Events I'm Attending</h2>
        <!-- <p>{{ account.email }}</p> -->
      </div>
    </div>
    <div class="row justify-content-center py-2">
      <div v-for="e in myEvents" :key="e.id" class="col-md-3 col-6 my-2 d-flex justify-content-center">
        <EventCard :event="e" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import EventCard from "../components/EventCard.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      myEvents: computed(() => AppState.myEvents)
    };
  },
  components: { EventCard }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

.myprofile {
  border-radius: 50%;
}
</style>
