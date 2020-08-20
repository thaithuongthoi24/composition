<template>
  <div class="container">
    <h1>LIST IMAGE OF USER</h1>
    <div class="row">
      <div class="intro">
        <div
          class="profile-img"
          v-if="info.profile_image && info.profile_image.large"
        >
          <img :src="info.profile_image.large" alt="" />
        </div>
        <div class="profile-img" v-else>
          <img
            src="https://mshoagiaotiep.com/theme/frontend/default/images/default-image%20.jpg"
            alt=""
          />
        </div>
        <h2>
          <b>Author : {{ info.name }}</b>
        </h2>
        <h4 class="font-yellow"></h4>
        <ul class="information margin-tb-30">
          <li>
            <b>Instagram :</b>
            {{ info.instagram_username }}
          </li>
          <li>
            <b>Twitter :</b>
            {{ info.twitter_username }}
          </li>
          <li>
            <b>Location : </b>
            {{ info.location }}
          </li>
        </ul>
      </div>
      <br />
      <div
        class="col-12 col-md-6 col-lg-4 mb-4"
        v-for="list in lists"
        v-bind="list"
        v-bind:key="list.id"
      >
        <div class="card">
          <router-link :to="'/photos/' + list.id"
            ><img :src="list.urls.regular" class="card-img-top"
          /></router-link>
          <div class="card-body">
            <p class="card-text">
              {{ list.alt_description }}
            </p>
          </div>
        </div>
      </div>
      <!-- <Observer v-on:intersect="intersected" /> -->
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    <strong>{{ message }} </strong>
  </div>
</template>

<script>
// import Observer from './Observer'
import InfiniteLoading from 'vue-infinite-loading'
import { getAllPhotosUser } from '../compositions/listImageUser'
export default {
  name: 'listimageuser',
  components: {
    InfiniteLoading,
    // Observer,
  },
  setup(_, ctx) {
    if (!ctx.root.$route.query.page) {
      ctx.root.$router.push({ query: { page: 1 } })
    }
    const { lists, info, infiniteHandler, rate, message } = getAllPhotosUser(
      ctx
    )
    return {
      lists,
      message,
      info,
      rate,
      infiniteHandler,
    }
  },
}
</script>
<style scoped>
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
.intro {
  padding: 0 20px;
  width: 100%;
  margin-top: 100px;
  text-align: center;
  background: rgba(87, 235, 255, 0.329);
}
div {
  display: block;
}
.intro .profile-img {
  height: 200px;
  width: 200px;
  border-radius: 100px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  top: -100px;
  margin-bottom: -70px;
}
.font-yellow {
  color: #ffa600;
}
.margin-tb-30 {
  margin-top: 30px;
  margin-bottom: 30px;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.intro .information > li {
  display: block;
  margin: 5px 0;
}
li {
  list-style: none;
  display: inline-block;
}
img {
  width: 100%;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
}
</style>
