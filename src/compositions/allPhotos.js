
import { getAll } from "../services/data";
import { reactive, onMounted, toRefs } from "@vue/composition-api";

export function getAllPhotos(ctx) {

  const state = reactive({
    items: [],
    page: 0,
    message: "",
    rate: ""
  });

  onMounted(() => {
    const cc = ctx.root.$route.query.page;
    state.page = parseInt(cc, 10);
  });
  const infiniteHandler = async handlerState => {
    const items = await getAll(state.page);
    if (items.length) {
      state.page += 1
      state.items.push(...items)
      handlerState.loaded();
      ctx.root.$router.push({ query: { page: state.page - 1 } });
    }
    else {
      handlerState.complete();
      state.message = "Het roi"
    }
  }

  const dataRef = toRefs(state)
  return {
    ...dataRef,
    infiniteHandler
  }
}
