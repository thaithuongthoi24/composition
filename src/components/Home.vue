<template>
  <div id="app">
    <div class="container">
      <h1>LIST IMGAGE</h1>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 mb-4"
          v-for="item in items"
          v-bind="item"
          v-bind:key="item.id"
        >
          <div class="card">
            <router-link v-bind:to="'/photos/' + item.id">
              <div v-if="item.urls && item.urls.regular">
                <img :src="item.urls.regular" class="card-img-top" />
              </div>
              <div v-else>
                <img
                  src="https://mshoagiaotiep.com/theme/frontend/default/images/default-image%20.jpg"
                  class="card-img-top"
                />
              </div>
            </router-link>
            <div class="card-body">
              <p class="card-text">
                {{ item.alt_description }}
              </p>
              <p>
                <b>Author : </b
                ><router-link v-bind:to="'/users/' + item.user.username">
                  <p>{{ item.user.username }}</p>
                </router-link>
              </p>
            </div>
          </div>
        </div>
        <h1 class="error">{{ rate }}</h1>
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      <strong class="error">{{ message }}</strong>
      <h4 v-if="rate !== ''">
        You have exceeded the number of allowed requests of API Unplash, the
        limit is 30request / hour
      </h4>
    </div>
  </div>
</template>

<script>
// import Observer from './Observer'
import InfiniteLoading from 'vue-infinite-loading'
import { getAllPhotos } from '../compositions/allPhotos'
export default {
  name: 'App',
  components: {
    InfiniteLoading,
    // Observer,
  },
  setup(_, ctx) {
    console.log(event)
    if (!ctx.root.$route.query.page) {
      ctx.root.$router.push({ query: { page: 1 } })
    }
    const { items, rate, message, infiniteHandler } = getAllPhotos(ctx)
    return {
      items,
      rate,
      message,
      infiniteHandler,
    }
  },
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.error {
  color: red;
}
h1 {
  font-weight: bold;
  padding-bottom: 20px;
}
/* Prevent image stretching is it's resized */
.card-img-top {
  object-fit: cover;
}

/* Make all cards in row the same height */
.row {
  display: flex;
  flex-wrap: wrap;
}

.row > div[class*='col-'] {
  display: flex;
}

/* Hover effects */
.card {
  transition: -webkit-transform 0.3s ease;
}
.card:hover {
  transform: scale(1.01, 1.01);
}

/* Responsive design for image heights */
@media (min-width: 576px) {
  .card-img-top {
    height: 50vw;
  }
}

@media (min-width: 768px) {
  .card-img-top {
    height: 30vw;
  }
}

@media (min-width: 992px) {
  .card-img-top {
    height: 20vw;
  }
}

@media (min-width: 1200px) {
  .card-img-top {
    height: 20vw;
  }
}
</style>
