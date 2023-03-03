<template>
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">New Event</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <form @submit.prevent="createEvent()">

      <div class="my-3 px-3">
        <label class="form-label">Name</label>
        <input v-model="editable.name" required type="text" class="form-control" id="name" aria-describedby="Name">
      </div>

      <div class="row px-3">

        <div class="col-6 mb-3 ">
          <label for="startDate" class="form-label">Date</label>
          <input v-model="editable.startDate" required type="date" class="form-control" id="startDate">
        </div>

        <div class="col-6 mb-3">
          <label for="capacity" class="form-label">Capacity</label>
          <input v-model="editable.capacity" required type="number" class="form-control" id="capacity">
        </div>

      </div>


      <div class="mb-3 px-3">
        <label for="location" class="form-label">Location</label>
        <input v-model="editable.location" required type="text" class="form-control" id="location">
      </div>

      <div class="mb-3 px-3">
        <label for="coverImg" class="form-label">Image URL</label>
        <input v-model="editable.coverImg" required type="url" class="form-control" id="coverImg">
      </div>

      <div class="mb-3 px-3">
        <label for="description" class="form-label">Example textarea</label>
        <textarea v-model="editable.description" required class="form-control" id="description" rows="2"></textarea>
      </div>





      <!-- <div class="mb-3 form-check px-5">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->

      <div class="mb-3 px-3">


        <label for="type" class="form-label">Category</label>
        <select v-model="editable.type" class="form-select mb-3 px-3" aria-label="Default select example" id="category">
          <option selected value="concert">Concert</option>
          <option value="convention">Convention</option>
          <option value="sport">Sport</option>
          <option value="digital">Digital</option>

        </select>

      </div>


      <div class="modal-footer">
        <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create Event</button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from "vue";
import { router } from "../router.js";
import { eventsService } from "../services/EventsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createEvent() {
        try {
          const formData = editable.value
          // await eventsService.createEvent(formData)
          const event = await eventsService.createEvent(formData)
          router.push({ name: 'Event', params: { eventId: event.id } })
        } catch (error) {
          logger.log(error)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>