<script setup lang="ts">
definePageMeta({
  layout: 'register'
})

const formRegister = ref({
  email: "",
  hoTen: null,
  maLoaiNguoiDung: "KhachHang",
  maNhom: "GP09",
  matKhau: "",
  soDt: "",
  taiKhoan: ""
})

const submitForm = async () => {
  const data = await useApiBridge({
    url: "QuanLyNguoiDung/DangKy",
    method: "post",
    data: formRegister.value
  })

  if (data == 'Success') {
    alert('Đăng kí thành cong')
  }
  console.log(data)
}
</script>

<template>
  <!-- gioi thieu -->
  <Header :showBannerAndSearch="false"/>

  <div class="flex bg-[url('/images/bgAuth.a1f0f6cc05af1af82f9b.jpg')] px-[360px] py-[100px]">
    <div class="flex">
      <div>
        <img src="/images/th (1).jpg" alt="" class="w-[384px] h-[606px]">
      </div>
      <div class="bg-white w-[auto] h-[auto] ">
        <div class="bg-white p-8 rounded shadow-md w-96">
          <h2 class="text-2xl font-semibold mb-6">Đăng Ký</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Tài Khoản</label>
              <input v-model="formRegister.taiKhoan" required type="text" id="username" name="username"
                     class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-rose-500">
            </div>

            <div class="mb-4">
              <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Mật khẩu</label>
              <input v-model="formRegister.matKhau" required type="password" id="password" name="password"
                     class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-rose-500">
            </div>

            <div class="mb-6">
              <label for="confirm-name" class="block text-gray-700 text-sm font-bold mb-2">Họ tên</label>
              <input v-model="formRegister.hoTen" required type="text" id="confirm-name" name="confirm-name"
                     class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-rose-500">
            </div>

            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input v-model="formRegister.email" required type="email" id="email" name="email"
                     class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-rose-500">
            </div>

            <div class="mb-6">
              <label for="confirm-phone" class="block text-gray-700 text-sm font-bold mb-2">Số điện thoại</label>
              <input v-model="formRegister.soDt" required type="text" id="confirm-phone" name="confirm-phone"
                     class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-rose-500">
            </div>

            <button type="submit"
                    class="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-700 focus:outline-none focus:shadow-outline-rose">
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>
