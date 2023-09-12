<script setup>
import { ref } from 'vue'
import { Modal } from 'flowbite-vue'

const router = [
    {
        path: "/",
        name: "Phim",
    },
    {
        path: "/",
        name: "Lịch chiếu",
    },
    {
        path: "/",
        name: "Rạp và giá",
    },
    {
        path: "/",
        name: "Khuyến mãi",
    },
    {
        path: "/",
        name: "Hỏi và đáp",
    },
    {
        path: "/",
        name: "Tin tức",
    },
    {
        path: "/",
        name: "Giới thiệu",
    },
    {
        path: "/",
        name: "Liên hệ",
    },
]

const isShowModal = ref(false)
const closeModal = () => {
    isShowModal.value = false
}
const showModal = () => {
    isShowModal.value = true
}
</script>

<template>
    <nav>
        <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
            <div class="relative">
                <img src="/images/background-header.png" alt="Top header">
            </div>

            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-0 px-4">
                <nuxt-link to="/" class="flex items-center w-[220px] h-[110px] cursor-pointer">
                    <img src="/images/logo.png" class="z-10" alt="Flowbite Logo" />
                </nuxt-link>
                <div class="xl:flex flex-col gap-y-3 py-2 hidden md:w-auto justify-between items-end z-10">
                    <div class="flex gap-5">
                        <form @click.prevent class="relative">
                            <input
                                class="rounded-[30px] bg-[#000000] opacity-[0.7] border-0 pr-28 pl-[20px] py-3 placeholder-[#d1d1d1] text-sm text-[#d1d1d1] focus:ring-0 focus:placeholder-transparent placeholder:font-avantgarde"
                                type="text" placeholder="Tìm kiếm...">
                            <button type="submit" class="absolute top-1/2 right-0 transform -translate-y-1/2">
                                <img src="/images/icon-search.png" alt="search">
                            </button>
                        </form>
                        <button
                            class="rounded-[1000px] bg-[#ba3469] w-[39px] h-[39px] flex items-center justify-center text-white font-bold leading-[39px] text-sm">
                            EN
                        </button>
                    </div>
                    <div class="rounded-[30px] border border-[#e00d7a] p-1">
                        <ul class="nav z-20 bg-[#e00d7a] rounded-[30px] flex font-avantgarde-demi text-shadow">
                            <li v-for="item in router" :key="item.name"
                                class="hover:bg-[#f37520] transition-all duration-300 ease-in-out text-[18px] leading-[24px]">
                                <nuxt-link :to="item.path" class="block py-2 pl-3 pr-4 text-white uppercase">{{ item.name
                                }}</nuxt-link>
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
                    <div class="flex items-center gap-x-2 cursor-pointer" @click="isShowModal = true">
                        <img class="sm:w-auto sm:h-auto w-[30px]" src="/images/icon-register.png" alt="icon register">
                        <p class="uppercase text-[#e00d7a] font-bold sm:text-base text-xs font-avantgarde-demi">
                            Đăng ký thành viên
                        </p>
                    </div>
                    <div class="flex items-center gap-x-2 cursor-pointer" @click="isShowModal = true">
                        <img class="sm:w-auto sm:h-auto w-[30px]" src="/images/icon-login.png" alt="icon login">
                        <p class="uppercase text-[#e00d7a] font-bold sm:text-base text-xs font-avantgarde-demi">
                            Đăng nhập
                        </p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center gap-x-2 cursor-pointer">
                        <img class="sm:w-auto sm:h-auto w-[30px]" src="/images/icon-call.png" alt="icon call">
                        <p class="uppercase text-[#f37520] font-bold sm:text-[30px] text-2xl font-Futurab">
                            +84 123456789
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <teleport to="body">
        <Modal :size="size" v-if="isShowModal" @close="closeModal">
            <template #header>
                <div class="flex items-center text-lg">
                    Terms of Service
                </div>
            </template>
            <template #body>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its
                    citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                    meant to ensure a common set of data rights in the European Union. It requires organizations to notify
                    users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </template>
            <template #footer>
                <div class="flex justify-between">
                    <button @click="closeModal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        Decline
                    </button>
                    <button @click="closeModal" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        I accept
                    </button>
                </div>
            </template>
        </Modal>
    </teleport>
</template>

<style scoped>
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