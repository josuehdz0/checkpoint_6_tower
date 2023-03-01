<template>
  <div class="container-fluid">
    <div class="row">
      <h2>Home</h2>
    </div>
    <div class="row">
      <h1>SITE INTRO?</h1>
    </div>
    <div class="row justify-content-evenly py-2">
      <div class="col-1">cat</div>
      <div class="col-1">cat</div>
      <div class="col-1">cat</div>
      <div class="col-1">cat</div>
      <div class="col-1">cat</div>
      <div class="col-1">cat</div>
      <div class="col-1">cat</div>
    </div>
    <div class="row justify-content-evenly">
      <div class="col-3 p-0 my-2 eventcard">
        <h4 class="text-center">event</h4>
      </div>
      <div class="col-3 p-0 my-2 eventcard">
        <h4 class="text-center">event</h4>
      </div>
      <div class="col-3 p-0 my-2 eventcard">
        <h4 class="text-center">event</h4>
      </div>
      <div class="col-3 p-0 my-2 eventcard">
        <h4 class="text-center">event</h4>
      </div>
      <div class="col-3 p-0 my-2 eventcard">
        <h4 class="text-center">event</h4>
      </div>
      <div class="col-3 p-0 my-2 eventcard">
        <h4 class="text-center">event</h4>
      </div>
      <div class="col-3 p-0 my-2 eventcard">
        <h4 class="text-center">event</h4>
      </div>
      <div class="col-3 p-0 my-2 eventcard">
        <h4 class="text-center">event</h4>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.eventcard {
  background-color: rgb(172, 172, 172);
  height: 20vh;
  width: 20vh;
}

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
