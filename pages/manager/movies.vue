
  
<script setup lang="ts">
import { ref, Ref } from 'vue'; 

definePageMeta({
  layout: 'admin'
})

const resultCategories = reactive({});

useAsyncData("fetch", async () => {
  try {
    await getCategories()
  } catch (error) {
    console.error(error);
  }
});

const getCategories = async (): Promise<void> => {
  const response = await useApiBridge({
    url: "categories",
    method: "get",
  })
  if (response.code === 200) {
    resultCategories.value = response.data
  }
}

const isEdit = ref(false)
const typeSubmit = ref("add")
const editId = ref()

interface ModelType {
  name: string | null;
  image: File | null;
  description: string | null;
  category: Array<number | string>,
  price: number,
  primiere: string | null,
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
  primiere: null,
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
    useToken: true
  })
}

const onFileChange = ($event: Event): void => {
  const target = $event.target as HTMLInputElement;
  console.log("selected file",target.files[0])
  if (target && target.files) {
    model.value.image = target.files[0];
  }
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
        <select class="border border-gray-300 rounded p-2" multiple v-model="model.category">
          <option v-for="data in resultCategories.value" :key="data.id" :value="data.id">{{ data.name }}</option>
        </select>
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">Giá</label>
        <input v-model="model.price" type="number" id="studentAge" name="studentAge"
          class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">Ngày khởi chiếu</label>
        <input v-model="model.primiere" type="date" id="studentAge" name="studentAge"
          class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">Diễn viên</label>
        <select class="border border-gray-300 rounded p-2" multiple v-model="model.actor">
          <option value="1">Long Phạm</option>
          <option value="2">Đạt Lê</option>
        </select>
      </div>
      <div>
        <label for="studentAddress" class="block text-sm font-medium text-gray-700">Đạo diễn</label>
        <select class="border border-gray-300 rounded p-2" multiple v-model="model.director">
          <option value="1">Long Phạm</option>
          <option value="2">Đạt Lê</option>
        </select>
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
      <div>
        <button type="submit" class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Thêm</button>
      </div>
    </form>
  </div>

  <div class="bg-white shadow-md rounded my-6 text-center">
    <table class="min-w-full table-auto">
      <thead>
        <tr>
          <th class="bg-gray-200 text-gray-600 border border-gray-300">STT</th>
          <th class="bg-gray-200 text-gray-600 border border-gray-300">Tên phim</th>
          <th class="bg-gray-200 text-gray-600 border border-gray-300">Giá</th>
          <th class="bg-gray-200 text-gray-600 border border-gray-300">Chức Năng</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300">1</td>
          <td class="border border-gray-300">John Doe</td>
          <td class="border border-gray-300">25000</td>
          <td class="border border-gray-300">
            <button
              class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Sửa</button>
            <button class="bg-red-500 text-white font-semibold rounded p-2 hover:bg-red-700">Xóa</button>
          </td>
        </tr>
        <!-- Thêm các hàng dữ liệu khác ở đây -->
      </tbody>
    </table>
  </div>
</template>