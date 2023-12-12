<script setup lang="ts">
import Cookies from 'js-cookie'
import {ref} from "vue";

definePageMeta({
  layout: 'register'
})

const token = Cookies.get("token")

if (token) {
  if (useRoute().query.page) {
    useRouter().push(`/${useRoute().query.page}`)
  } else {
    useRouter().push('/')
  }
}

const form = ref({
  matKhau: "",
  taiKhoan: ""
})

const userData = ref(Cookies.get('userData'))

const submitForm = async () => {
  const data = await useApiBridge({
    url: "QuanLyNguoiDung/DangNhap",
    method: "post",
    data: form.value
  })

  if (data.accessToken) {
    Cookies.set('token', data.accessToken)
    Cookies.set('userData', JSON.stringify(data))

    userData.value = Cookies.get('userData')
    form.value.taiKhoan = ""
    form.value.matKhau = ""
    if (useRoute().query.page) {
      useRouter().push(`/${useRoute().query.page}`)
    } else {
      useRouter().push('/')
    }
  }
}
</script>

<template>
  <!-- gioi thieu -->
  <Header :showBannerAndSearch="false"/>

  <div class="flex bg-[url('/images/bgAuth.a1f0f6cc05af1af82f9b.jpg')] px-[360px] py-[100px]">
    <div class="flex">
      <div>
        <img src="/images/th1.jpg" alt="" class="w-[384px] h-[606px]">
      </div>
      <div class="bg-white w-[auto] h-[auto] ">
        <div class="bg-white p-8 rounded shadow-md w-96">
          <h2 class="text-2xl font-semibold mb-6">Đăng Ký</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Tài Khoản</label>
              <input v-model="form.taiKhoan" required type="text" id="username" name="username"
                     class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-rose-500">
            </div>

            <div class="mb-4">
              <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Mật khẩu</label>
              <input v-model="form.matKhau" required type="password" id="password" name="password"
                     class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-rose-500">
            </div>

            <button type="submit"
                    class="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-700 focus:outline-none focus:shadow-outline-rose">
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>
