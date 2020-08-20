<template>
  <div>
    <h2>{{ ids }}</h2>
    <h5>Width : {{ width }} px</h5>
    <h5>Height : {{ height }} px</h5>
    <h5>
      Description : <strong>{{ alt_description }}</strong>
    </h5>
    <h5>
      Likes : <strong>{{ likes }}</strong>
    </h5>
    <br />
    <img :src="regular" width="500px" height="500px" />
  </div>
</template>

<script>
// import { getDetailPhoto } from "../services/data";
import { detailImage } from "../compositions/detailImage";

// import { router } from "../router";
export default {
  name: "detailimage",
  setup(_, ctx) {
    const {
      ids,
      width,
      height,
      alt_description,
      likes,
      loading,
      regular,
    } = detailImage(ctx.root.$route.params.id);

    return {
      ids,
      width,
      height,
      alt_description,
      likes,
      loading,
      regular,
    };
  },
  //   name: "detailimage",
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //       info: {},
  //     };
  //   },
  //   async created() {
  //     // const res = await fetch(
  //     //   `https://api.unsplash.com/photos/${this.id}?client_id=sUV22DxAKlFhcqd51VsFin7iWwObGbNcZgfAgu_qGqY`
  //     // );
  //     // this.info = await res.json();
  //     this.info = await getDetailPhoto(this.id);
  //   },
};
</script>
