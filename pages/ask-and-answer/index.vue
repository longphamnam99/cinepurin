<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { ref } from 'vue'
import { Tabs } from 'flowbite-vue'
const activeTab = ref('first')

useHead({ title: "Hỏi và đáp" })

const slideshowCurrent = ref(0)

const actionSlide = (status: boolean): void => {
    if (status) {
        if (slideshowCurrent.value == 6) {
            return
        }
        slideshowCurrent.value += 1
    } else {
        if (slideshowCurrent.value == 0) {
            return
        }
        slideshowCurrent.value -= 1
    }
}
</script>



<template>
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">

    </div>

    <!-- câu hỏi -->
    <div class="mx-2 my-2" style="background-image: url(/images/hhv2dyu.jpg)">
        <div>
            <h1 class="text-center font-Futurab text-[30px] text-white py-[40px]">HỎI VÀ ĐÁP</h1>
        </div>
        <div class="font-MyriadBold pl-[10%]">
    <div class="bg-violet-500 w-[90%]">
        <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
            <!-- 11111 -->
            <h2 id="accordion-color-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <p class="pl-[20px] text-[#ededed]">01</p>
                    <span class="text-[#fff]">Làm thế nào để mua vé online?</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                        <!-- Nội dung của câu hỏi 1 -->
                    </p>
                </div>
            </div>
            <!-- 22222 -->
            <h2 id="accordion-color-heading-2">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="true" aria-controls="accordion-color-body-2">
                    <p class="pl-[20px] text-[#ededed]">02</p>
                    <span class="text-[#fff]">Thủ tục đặt vé online và phương thức thanh toán như thế nào?</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                        <!-- Nội dung của câu hỏi 2 -->
                    </p>
                </div>
            </div>
            <!-- 333333 -->
            <h2 id="accordion-color-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="true" aria-controls="accordion-color-body-3">
                    <p class="pl-[20px] text-[#ededed]">03</p>
                    <span class="text-[#fff]">Làm sao để được cấp thẻ thành viên?</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                        <!-- Nội dung của câu hỏi 3 -->
                    </p>
                </div>
            </div>
            <!-- 44444 -->
            <h2 id="accordion-color-heading-4">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-4" aria-expanded="true" aria-controls="accordion-color-body-4">
                    <p class="pl-[20px] text-[#ededed]">04</p>
                    <span class="text-[#fff]">Lợi ích khi tham gia thẻ thành viên là gì?</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
        </div>
    </div>
        </div>

        <div class="py-[40px] font-Futurab text-[30px] text-white text-center">
            <div>
                <h1>GỬI CÂU HỎI</h1>
            </div>
            <div class="font-MyriadLight">       
                <form class="max-w-sm mx-auto">
                    <div class="mb-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">HỌ TÊN (*)</label>
                        <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nhập họ tên" required>
                    </div>
                    <div class="flex gap-2">
                        <div class="mb-2">
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">ĐIỆN THOẠI (*)</label>
                            <input type="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                        <div class="mb-2">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">EMAIL (*)</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[230px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                    </div>
                    <div class="mb-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">NHẬP NỘI DUNG (*)</label>
                        <input type="name" id="name" class="bg-gray-50 h-[200px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <button type="submit" class="text-white bg-orange-500 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-Futurab rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GỬI</button>
                </form>
            </div>    
        </div>
    </div>
    
    <div>
        <!-- phim đang chiếu -->
        <div class="relative z-10 tabs-panel">
            <tabs ref="tabsref" variant="default" v-model="activeTab">
                <!-- <tab name="first" title="Các phim đang chiếu"> -->
                <div class="bg-[#f18720] relative">
                    <div
                        class="absolute flex justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                            @click="actionSlide(false)">
                            <img :src="useAsset('images/home/icon-start.png')" alt="prev">
                        </button>
                        <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                            @click="actionSlide(true)">
                            <img :src="useAsset('images/home/icon-start.png')" alt="next">
                        </button>
                    </div>
                    <h1 class="flex justify-center text-center font-bold text-white pt-5 text-2xl">CÁC PHIM ĐANG CHIẾU</h1>
                    <div class="mx-auto max-w-[1200px] py-5">
                        <CarouselProduct v-model:model-value="slideshowCurrent" />
                    </div>
                </div>
            </tabs>
        </div>
    </div>
</template>