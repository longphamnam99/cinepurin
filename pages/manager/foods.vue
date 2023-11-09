
  
<script setup lang="ts">
import { Toggle } from 'flowbite-vue';


const isShow = ref(false)

const toggleForm = () => {
  isShow.value = !isShow.value
}
</script>
<template>
    <div>
        <h1 class="text-xl font-bold text-center pt-2">Quản lý combo foods</h1>
    </div>

  <!-- thêm tin tức -->
  <button @click="toggleForm">Thêm</button>
  <div v-if="isShow" class="bg-white shadow-md rounded my-6 p-6">
    <h2 class="text-2xl font-semibold mb-4">Thêm combo foods</h2>
    <form action="#" method="POST" class="space-y-4">
      <div>
        <label for="studentName" class="block text-sm font-medium text-gray-700">food_name:</label>
        <input type="text" id="studentName" name="studentName" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">description:</label>
        <input type="text" id="studentAge" name="studentAge" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAddress" class="block text-sm font-medium text-gray-700">price:</label>
        <input type="text" id="studentAddress" name="studentAddress" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentName" class="block text-sm font-medium text-gray-700">images:</label>
        <input type="text" id="studentName" name="studentName" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <button type="submit" class="bg-green-500 text-white font-semibold rounded p-2 hover:bg-green-700">Lưu</button>
      </div>
    </form>
  </div>

  <!-- Sửa tin tức -->
  <div v-if="isShow" class="bg-white shadow-md rounded my-6 p-6">
    <h2 class="text-2xl font-semibold mb-4">Sửa combo foods</h2>
    <form action="#" method="POST" class="space-y-4">
      <div>
        <label for="studentName" class="block text-sm font-medium text-gray-700">food_name:</label>
        <input type="text" id="studentName" name="studentName" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">description:</label>
        <input type="text" id="studentAge" name="studentAge" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAddress" class="block text-sm font-medium text-gray-700">price:</label>
        <input type="text" id="studentAddress" name="studentAddress" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentName" class="block text-sm font-medium text-gray-700">images:</label>
        <input type="text" id="studentName" name="studentName" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <button type="submit" class="bg-green-500 text-white font-semibold rounded p-2 hover:bg-green-700">Lưu</button>
      </div>
    </form>
  </div>

  <!-- nội dung  -->
  <div class="bg-white shadow-md rounded my-6 text-center">
  <table class="min-w-full table-auto">
    <thead>
      <tr>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">ID</th>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">food_name</th>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">description</th>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">price</th>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">images</th>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">Chức Năng</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300">1</td>
        <td class="border border-gray-300">bap rang bo</td>
        <td class="border border-gray-300">sieu ngon</td>
        <td class="border border-gray-300">2500</td>
        <td class="border border-gray-300">hình ảnh nè</td>
        <td class="border border-gray-300">
          <button @click="toggleForm" class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Sửa</button>
          <button class="bg-red-500 text-white font-semibold rounded p-2 hover:bg-red-700">Xóa</button>
        </td>
      </tr>
      <!-- Thêm các hàng dữ liệu khác ở đây -->
    </tbody>
  </table>
</div>
</template>