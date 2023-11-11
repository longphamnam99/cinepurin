
  
<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useMoviesStore } from '~/stores/movies';
import { useCategoriesStore } from "~/stores/categories"
import Multiselect from '@vueform/multiselect'

const moviesStore = useMoviesStore();
const categoriesStore = useCategoriesStore();

definePageMeta({
  layout: 'admin'
})

const resultMovie = reactive({});

const categories = ref([])

const actors = ref([
  {
    value: 1,
    label: 'Long Phạm'
  },
  {
    value: 2,
    label: 'Đạt Lê'
  }
])

const directors = ref([
  {
    value: 1,
    label: 'Long Phạm'
  },
  {
    value: 2,
    label: 'Đạt Lê'
  }
])

const getDataCata = async (): Promise<void> => {
  await categoriesStore.getCategories();
  categoriesStore.categories.forEach(e => {
    categories.value.push({
      label: e.name,
      value: e.id
    })
  });
}

const getDataMovie = async (): Promise<void> => {
  await moviesStore.getMovies();
  resultMovie.value = moviesStore.movies;
}

useAsyncData("fetch", async () => {
  try {
    await getDataCata()
    await getDataMovie()
  } catch (error) {
    console.error(error);
  }
});

const isEdit = ref(false)
const typeSubmit = ref("add")
const editId = ref()

const editHandler = (data: object): void => {
  typeSubmit.value = "edit"
  isEdit.value = true
  editId.value = data.id
  model.value.name = data.name
  model.value.description = data.description
  model.value.category = data.category
  model.value.price = data.price
  model.value.premiere = data.premiere
  model.value.actor = data.actor
  model.value.director = data.director
  model.value.type = data.type
  model.value.trailer = data.trailer
}

const showModal = ref(false)

const idDelete = ref()

const showModalDelete = (id: number | string): void => {
  showModal.value = true
  idDelete.value = id
}

interface ModelType {
  name: string | null;
  image: File | null;
  description: string | null;
  category: Array<number | string>,
  price: number,
  premiere: string | null,
  actor: Array<number | string>,
  director: Array<number | string>,
  type: number,
  trailer: string | null,
}

const model: Ref<ModelType> = ref({
  name: null,
  image: null,
  description: null,
  category: [],
  price: null,
  premiere: null,
  actor: [],
  director: [],
  type: 1,
  trailer: null,
})

const submitForm = async (): Promise<void> => {
  const response = await useApiBridge({
    url: typeSubmit.value == "add" ? "products" : "products/" + editId.value,
    method: typeSubmit.value == "add" ? "post" : "put",
    data: model.value,
    useToken: true,
    useUpload: true,
  })

  if (response.code === 200) {
    for (const key in model.value) {
      model.value[key] = null
    }
    getDataMovie()
  } else {
    alert("Cập nhật thất bại")
  }
}

const onFileChange = ($event: Event): void => {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    model.value.image = target.files[0];
  }
}

const acceptHandler = async (isAccept: boolean): Promise<void> => {
    const response = await useApiBridge({
        url: "products/" + idDelete.value,
        method: "delete",
        useToken: true
    })

    if (response.code === 200) getDataMovie()
}

</script>
<template>
  <div class="bg-white shadow-md rounded my-6 p-6">
    <h2 class="text-2xl font-semibold mb-4">Thêm phim</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="studentName" class="block text-sm font-medium text-gray-700">Tên phim</label>
        <input v-model="model.name" type="text" id="studentName" name="studentName"
          class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">Ảnh phim</label>
        <input accept="image/*" @change="onFileChange($event)" type="file" id="studentAge" name="studentAge"
          class="border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAddress" class="block text-sm font-medium text-gray-700">Mô tả</label>
        <input v-model="model.description" type="text" id="studentAddress" name="studentAddress"
          class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentName" class="block text-sm font-medium text-gray-700">Danh mục</label>
        <Multiselect mode="multiple" v-model="model.category" :options="categories" />
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">Giá</label>
        <input v-model="model.price" type="number" id="studentAge" name="studentAge"
          class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">Ngày khởi chiếu</label>
        <input v-model="model.premiere" type="date" id="studentAge" name="studentAge"
          class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">Diễn viên</label>
        <Multiselect mode="multiple" v-model="model.actor" :options="actors" />
      </div>
      <div>
        <label for="studentAddress" class="block text-sm font-medium text-gray-700">Đạo diễn</label>
        <Multiselect mode="multiple" v-model="model.director" :options="directors" />
      </div>
      <div>
        <label for="studentAddress" class="block text-sm font-medium text-gray-700">Kiểu</label>
        <select class="border border-gray-300 rounded p-2" v-model="model.type">
          <option value="1">2D</option>
          <option value="2">3D</option>
        </select>
      </div>
      <div>
        <label for="studentAddress" class="block text-sm font-medium text-gray-700">Trailer</label>
        <input v-model="model.trailer" type="text" id="studentAddress" name="studentAddress"
          class="w-full border border-gray-300 rounded p-2">
      </div>
      <div v-if="!isEdit">
        <button type="submit" class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Thêm</button>
      </div>
      <div v-else class="flex gap-2">
        <button type="submit" class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Sửa</button>
        <button class="bg-red-500 text-white font-semibold rounded p-2 hover:bg-blue-700"
          @click="isEdit = false">Huỷ</button>
      </div>
    </form>
  </div>

  <div class="bg-white shadow-md rounded my-6 text-center">
    <table class="min-w-full table-auto">
      <thead>
        <tr>
          <th class="bg-gray-200 text-gray-600 border border-gray-300 w-20">STT</th>
          <th class="bg-gray-200 text-gray-600 border border-gray-300 text-left pl-2">Tên phim</th>
          <th class="bg-gray-200 text-gray-600 border border-gray-300 w-40">Giá</th>
          <th class="bg-gray-200 text-gray-600 border border-gray-300 w-20">Chức Năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(movie, key) in resultMovie.value" :key="movie.id">
          <td class="border border-gray-300">{{ key + 1 }}</td>
          <td class="border border-gray-300 text-left pl-2">{{ movie.name }}</td>
          <td class="border border-gray-300">{{ movie.price }}</td>
          <td class="border border-gray-300 flex gap-2">
            <button class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700"
              @click="editHandler(movie)">Sửa</button>
            <button class="bg-red-500 text-white font-semibold rounded p-2 hover:bg-red-700"
              @click="showModalDelete(movie.id)">
              Xóa
            </button>
          </td>
        </tr>
        <!-- Thêm các hàng dữ liệu khác ở đây -->
      </tbody>
    </table>
  </div>
  <teleport to="body">
    <ModalConfirmDelete v-model:model-value="showModal" @accept="acceptHandler" />
  </teleport>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>