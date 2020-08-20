
import { getPhotoUser, getInfoUser } from "../services/data";
import { reactive, onMounted, toRefs } from "@vue/composition-api";
import get from 'lodash.get';
export function getAllPhotosUser(ctx) {
  const state = reactive({
    lists: [],
    info: {},
    page: 0,
    firstPage: true,
    hasMore: true,
    message: "",
    rate: ""
  });

  onMounted(() => {
    const cc = ctx.root.$route.query.page;
    state.page = parseInt(cc, 10);
    dd()
  });
  const dd = async () => {
    const infoUser = await getInfoUser(ctx.root.$route.params.username)
    get(infoUser, 'profile_image', '')
    get(infoUser, 'profile_image.large', 'https://mshoagiaotiep.com/theme/frontend/default/images/default-image%20.jpg')
    get(infoUser, 'name', 'No Information')
    get(infoUser, 'instagram_username', 'No Information')
    get(infoUser, 'twitter_username', 'No Information')
    get(infoUser, 'location', 'No Information')
    state.info = infoUser
  }
  const infiniteHandler = async handlerState => {
    const lists = await getPhotoUser(ctx.root.$route.params.username, state.page);
    if (lists.length) {
      state.page += 1
      state.lists.push(...lists)
      handlerState.loaded();
      ctx.root.$router.push({ query: { page: state.page - 1 } });
    }
    else {
      handlerState.complete();
      state.message = "Het roi"
    }
  }
  const dataRef = toRefs(state)
  console.log(dataRef)
  return {
    ...dataRef,
    // intersected,
    infiniteHandler,
    dd
  }
}
