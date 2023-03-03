<template>
  <!-- <div class="row p-0 m-0"> -->
  <!-- <div class="col-12 p-0"> -->


  <nav>

    <div
      class="navbar navbar-expand-lg navbar-light bg-light d-md-none justify-content-md-between px-3 sticky-top fixed-md-top">

      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center fs-1">
          <b class="mdi mdi-human p-0">ower</b>
        </div>
      </router-link>
      <button class="dropdown-toggle btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <!-- <ul class="navbar-nav me-auto">
          <li>
            <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
              About
            </router-link>
          </li>
        </ul> -->
        <!-- LOGIN COMPONENT HERE -->
        <Login />
      </div>
    </div>
    <div class="d-none d-md-grid my-3">
      <div class="d-flex justify-content-center py-2">
        <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
          <div>
            <i class="mdi mdi-home fs-1"></i>
          </div>
        </router-link>

      </div>

      <div class="d-flex justify-content-center py-3">
        <button class="btn btn-outline-dark text-uppercase my-2 my-lg-0" @click="login" v-if="!user.isAuthenticated">
          <b>Login</b>
        </button>
        <div v-else>


          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header bg-light text-center" id="flush-headingOne">
                <button class="btn collapsed p-0 " type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <div v-if="account.picture || user.picture">
                    <img :src="account.picture || user.picture" alt="account photo" height="70" class="myprofile" />
                  </div>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body bg-light p-0 m-0">

                  <div class="">
                    <router-link :to="{ name: 'Account' }">
                      <div class="text-center">
                        <b>
                          <br>
                          Account
                        </b>
                      </div>
                    </router-link>
                    <div @click="logout" class="text-center text-danger selectable">
                      <b>
                        <br>
                        <i class="mdi mdi-logout"></i>
                        logout
                      </b>
                    </div>
                    <button class="btn text-center pt-4" data-bs-toggle="modal" data-bs-target="#eventModal">
                      <b>
                        Create Event
                      </b>
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>


          <!-- <div class="dropdown  my-2 my-lg-0 ">
            <div type="button" class="bg-light border-0 selectable no-select" data-bs-toggle="dropdown"
              aria-expanded="false">
              <div v-if="account.picture || user.picture">
                <img :src="account.picture || user.picture" alt="account photo" height="40" class="rounded" />
              </div>
            </div>
            <div class="dropdown-menu dropdown-menu-lg-left p-0" aria-labelledby="authDropdown">
              <div class="list-group">
                <router-link :to="{ name: 'Account' }">
                  <div class="list-group-item dropdown-item list-group-item-action">
                    Manage Account
                  </div>
                </router-link>
                <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
                  <i class="mdi mdi-logout"></i>
                  logout
                </div>
              </div>
            </div>
          </div> -->

        </div>

      </div>


      <div class="d-flex justify-content-center py-3">

      </div>






    </div>


  </nav>


  <!-- </div> -->


  <!-- </div> -->
</template>

<script>
import Login from './Login.vue'
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'

export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.myprofile {
  border-radius: 50%;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
