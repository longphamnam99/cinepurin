
  
<script setup lang="ts">
import { Toggle } from 'flowbite-vue';


const isShow = ref(false)

const toggleForm = () => {
  isShow.value = !isShow.value
}
</script>
<template>

  <!-- thêm tin tức -->
  <button @click="toggleForm">Thêm</button>
  <div v-if="isShow" class="bg-white shadow-md rounded my-6 p-6">
    <h2 class="text-2xl font-semibold mb-4">Thêm Tin Tức</h2>
    <form action="#" method="POST" class="space-y-4">
      <div>
        <label for="studentName" class="block text-sm font-medium text-gray-700">Tiêu Đề:</label>
        <input type="text" id="studentName" name="studentName" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">Nội Dung:</label>
        <input type="text" id="studentAge" name="studentAge" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAddress" class="block text-sm font-medium text-gray-700">Ngày Phát Hành:</label>
        <input type="text" id="studentAddress" name="studentAddress" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <button type="submit" class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Thêm</button>
      </div>
    </form>
  </div>

  <!-- Sửa tin tức -->
  <div v-if="isShow" class="bg-white shadow-md rounded my-6 p-6">
    <h2 class="text-2xl font-semibold mb-4">Sửa tin tức</h2>
    <form action="#" method="POST" class="space-y-4">
      <div>
        <label for="studentName" class="block text-sm font-medium text-gray-700">Tiêu Đề:</label>
        <input type="text" id="studentName" name="studentName" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAge" class="block text-sm font-medium text-gray-700">Nội Dung:</label>
        <input type="text" id="studentAge" name="studentAge" class="w-full border border-gray-300 rounded p-2">
      </div>
      <div>
        <label for="studentAddress" class="block text-sm font-medium text-gray-700">Ngày Phát Hành:</label>
        <input type="text" id="studentAddress" name="studentAddress" class="w-full border border-gray-300 rounded p-2">
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
        <th class="bg-gray-200 text-gray-600 border border-gray-300">Tiêu Đề</th>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">Nội Dung</th>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">Ngày Phát Hành</th>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">ID_Chính Sách</th>
        <th class="bg-gray-200 text-gray-600 border border-gray-300">Chức Năng</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300">1</td>
        <td class="border border-gray-300">John Doe</td>
        <td class="border border-gray-300">25</td>
        <td class="border border-gray-300">123 Main St</td>
        <td class="border border-gray-300">1</td>
        <td class="border border-gray-300">
          <button @click="toggleForm" class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Sửa</button>
          <button class="bg-red-500 text-white font-semibold rounded p-2 hover:bg-red-700">Xóa</button>
        </td>
      </tr>
      <tr>
        <td class="border border-gray-300">2</td>
        <td class="border border-gray-300">Jane Smith</td>
        <td class="border border-gray-300">28</td>
        <td class="border border-gray-300">456 Elm St</td>
        <td class="border border-gray-300">1</td>
        <td class="border border-gray-300">
          <button class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Sửa</button>
          <button class="bg-red-500 text-white font-semibold rounded p-2 hover-bg-red-700">Xóa</button>
        </td>
      </tr>
      <!-- Thêm các hàng dữ liệu khác ở đây -->
    </tbody>
  </table>
</div>
</template>