<script setup lang="ts">
import {ref, watch} from 'vue'
import {Modal} from 'flowbite-vue'
import {useAuthStore} from '~/stores/auth'
import Cookies from 'js-cookie'
import Directors from 'pages/manager/directors.vue';

interface IProps {
  showBannerAndSearch?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  showBannerAndSearch: true,
})

const router = [
  {
    path: "/movies",
    name: "Phim",
  },
  {
    path: "/showtimes",
    name: "Lịch chiếu",
  },
  {
    path: "/prices",
    name: "Rạp và giá",
  },
  {
    path: "/sales",
    name: "Khuyến mãi",
  },
  {
    path: "/about-us",
    name: "Giới thiệu",
  },
  {
    path: "/contact",
    name: "Liên hệ",
  },
]

const token = Cookies.get('token') || ""

const isShowModalRegister = ref(false)
const closeModal = () => {
  isShowModalRegister.value = false
}

const isShowModalLogin = ref(false)
const showModal = () => {
  isShowModalRegister.value = true
}

const form = ref({
  taiKhoan: null,
  matKhau: null
})

const formRegister = ref({
  gender: 0,
  fullname: null,
  birthday: null,
  address: null,
  idcard: null,
  phone: null,
  email: null,
  username: null,
  password: null,
  repassword: null,
})

const isShowLogin = ref(true)

watch(token, (newToken) => {
  if (token.length) {
    isShowLogin.value = false
  }
}, {
  immediate: true,
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
    isShowLogin.value = false
    isShowModalLogin.value = false
  }
}

const logout = async () => {
  Cookies.set('token', '')
  Cookies.set('userData', '')
  isShowLogin.value = true
}

const register = async () => {
  const data = await useApiBridge({
    url: "auth/signup",
    method: "post",
    data: formRegister.value
  })
  console.log(data)
}

const isOpen = ref(false)
</script>

<template>
  <nav>
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
      <div class="relative">
        <img src="/images/background-header.png" alt="Top header">
      </div>

      <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-0 px-4">
        <nuxt-link to="/" class="logo flex items-center w-[220px] h-[110px] cursor-pointer">
          <img src="/images/logo.png" class="z-10" alt="Flowbite Logo"/>
        </nuxt-link>
        <button @click="isOpen = !isOpen" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center z-10 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#e00d7a] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="#f37520" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div :class="{'hidden': !isOpen, 'w-full relative': isOpen}"
             class="xl:flex flex-col gap-y-3 py-2 md:w-auto justify-between items-end z-10">
          <div class="lg:flex hidden gap-5">
            <form @click.prevent class="relative">
              <input
                  class="rounded-[30px] bg-[#000000] opacity-[0.7] border-0 pr-28 pl-[20px] py-3 placeholder-[#d1d1d1] text-sm text-[#d1d1d1] focus:ring-0 focus:placeholder-transparent placeholder:font-avantgarde"
                  type="text" placeholder="Tìm kiếm...">
              <button type="submit" class="absolute top-1/2 right-0 transform -translate-y-1/2">
                <img src="/images/icon-search.png" alt="search">
              </button>
            </form>
          </div>
          <div :class="{'absolute top-2 left-0 w-full': isOpen}" class="rounded-[30px] border border-[#e00d7a] p-1">
            <ul :class="{'flex-col flex-1': isOpen}"
                class="nav z-20 bg-[#e00d7a] rounded-[30px] flex font-avantgarde-demi text-shadow">
              <li v-for="item in router" :key="item.name"
                  class="hover:bg-[#f37520] transition-all duration-300 ease-in-out text-[18px] leading-[24px]">
                <nuxt-link :to="item.path" class="block py-2 pl-3 pr-4 text-white uppercase">{{
                    item.name
                  }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="absolute top-0 left-0 h-full w-full bg-no-repeat bg-center bg-[url('/images/bg-top.png')] z-1">
      </div>
    </div>
    <div class="bg-[url('/images/pattern.png')] bg-repeat bg-top max-w-full flex items-center justify-center">
      <div class="lg:w-[90%] w-full items-center flex flex-wrap lg:justify-between justify-center gap-x-10">
        <div class="flex items-center sm:gap-x-10 gap-x-8">
          <div class="flex items-center gap-x-2 cursor-pointer" @click="isShowModalRegister = true">
            <img class="sm:w-auto sm:h-auto w-[30px]" src="/images/icon-register.png" alt="icon register">
            <span class="cursor-pointer" @click="useRouter().push('/register')">
              <span v-if="isShowLogin"
                    class="uppercase text-[#e00d7a] font-bold sm:text-base text-xs font-avantgarde-demi">
                Đăng ký thành viên
              </span>
              <span v-else class="uppercase text-[#e00d7a] font-bold sm:text-base text-xs font-avantgarde-demi">
                                           {{ JSON.parse(userData)?.hoTen }}
              </span>
            </span>
          </div>
          <div class="flex items-center gap-x-2 cursor-pointer" @click="isShowModalLogin = true">
            <img class="sm:w-auto sm:h-auto w-[30px]" src="/images/icon-login.png" alt="icon login">
            <span v-if="isShowLogin"
                  class="uppercase text-[#e00d7a] font-bold sm:text-base text-xs font-avantgarde-demi">
              Đăng nhập
            </span>
            <span v-else @click="logout" class="uppercase text-[#e00d7a] font-bold sm:text-base text-xs
              font-avantgarde-demi">
              Đăng xuất
            </span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center gap-x-2 cursor-pointer">
            <img class="sm:w-auto sm:h-auto w-[30px]" src="/images/icon-call.png" alt="icon call">
            <p class="uppercase text-[#f37520] font-bold sm:text-[30px] text-2xl font-Futurab">
              +84 89010316
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <SlideAndSearch v-if="showBannerAndSearch"/>
  <teleport to="body">
    <!--đăng nhập -->

    <Modal v-if="isShowModalLogin" @close="isShowModalLogin = false" class="">
      <template #header>
        <div class="flex justify-center text-center items-center w-full flex-1">
          <p class="font-MyriadRegular text-[#707070] text-[18px]"> Vui lòng nhập tên người dùng(email) và mật khẩu</p>
        </div>
      </template>
      <template #body>
        <form @submit.prevent="submitForm">
          <div class="relative z-0 w-full mb-6 group">
            <div class="relative">
              <!-- Input với hình ảnh nền -->
              <input v-model="form.taiKhoan" type="text" name="floating_email" id="floating_email"
                     class="w-full pl-10 pr-4 py-2 border-1 border-solid border-rose-500 rounded-ss-[30px] rounded-se-[30px] rounded-ee-[30px] rounded-es-[30px]"
                     placeholder=" " required/>

              <!-- Hình ảnh nền cho input -->
              <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <img src="/images/icon-user.png" alt="Hình ảnh" class="h-6 w-6"/>
              </div>
            </div>
          </div>
          <!-- ... (cấu trúc tương tự cho trường mật khẩu) -->
          <div class="relative z-0 w-full mb-6 group">
            <div class="relative">
              <!-- Input với hình ảnh nền -->
              <input v-model="form.matKhau" type="password" name="floating_email" id="floating_email"
                     class="w-full pl-10 pr-4 py-2 border-1 border-solid border-rose-500 rounded-ss-[30px] rounded-se-[30px] rounded-ee-[30px] rounded-es-[30px]"
                     placeholder=" " required/>

              <!-- Hình ảnh nền cho input -->
              <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <img src="/images/icon-pass.png" alt="Hình ảnh" class="h-6 w-6"/>
              </div>
            </div>
          </div>
          <div class="flex ">
            <div class="flex items-start">
              <button type="submit"
                      class="bg-[#f37520] text-[#fff] font-Futurab text-[24px] px-[31px] py-[15px] rounded-ss-[30px] rounded-se-[30px] rounded-ee-[30px]">
                ĐĂNG NHẬP
              </button>
            </div>
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<style scoped>
.logo.active {
  background: transparent;
}

.active {
  background: #f37520;
}

.nav li:first-child > .active {
  border-top-left-radius: 30px !important;
  border-bottom-left-radius: 30px !important;
}

.nav li:last-child > .active {
  border-top-right-radius: 30px !important;
  border-bottom-right-radius: 30px !important;
}

.nav li:first-child {
  border-radius: 30px 0 0 30px;
  -webkit-border-radius: 30px 0 0 30px;
}

.nav li:last-child {
  border-radius: 0 30px 30px 0;
  -webkit-border-radius: 0 30px 30px 0;
}

.text-shadow {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>