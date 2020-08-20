
import { onMounted, reactive, toRefs } from '@vue/composition-api'
import { getDetailPhoto } from '../services/data'
import get from 'lodash.get';
export function detailImage(id) {
  const data = reactive({
    ids: null,
    width: null,
    height: null,
    alt_description: "",
    likes: null,
    regular: "",
    loading: false,
  })
  const getData = async () => {
    data.loading = true;
    try {
      const result = await getDetailPhoto(id)
      console.log(result)
      data.ids = get(result, 'id', '')
      data.width = get(result, 'width', '')
      data.height = get(result, 'height', '')
      data.alt_description = get(result, 'alt_description', '')
      data.likes = get(result, 'likes', '')
      data.regular = get(result, 'urls.regular', 'https://mshoagiaotiep.com/theme/frontend/default/images/default-image%20.jpg')

    } catch (error) {
      console.log({ error })
    } finally {
      data.loading = false
    }
  }

  onMounted(() => {
    getData()
  })
  const dataRef = toRefs(data)
  return {
    ...dataRef,
  }
}
