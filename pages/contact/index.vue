<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'

useHead({ title: "Liên hệ" })
</script>

<template>
    <!-- contact -->
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] py-[20px] relative" style="background-image: url(./images/nen.jpg);">
        <div class="text-center">
            <div class="content-page">
                <div class="contact-info-content w-full h-auto relative">
                    <div class="section-title font-Futurab text-[30px] text-[#fff] text-center py-[40px]"><h2>LIÊN HỆ</h2></div>
                    <div class="contact-info-wrap">
                        <h3 class="font-Futurab text-[36px] text-[#fff] text-center py-[40px]">CINEPURIN CINEMAS</h3>
                        <h2><strong class="text-white text-[36px]">HỘI SỞ</strong></h2>
              
                        <h2><strong class="text-white text-[36px]">Địa chỉ: 71/43 P.Thạnh Lộc, Q.12 TP.HCM</strong></h2>
              
                        <h2><strong class="text-white text-[36px]">Hotline: +84 (01) 0316</strong></h2>
                    
                        <h2 class="flex justify-center gap-2 my-10">
                            <img src="/images/facebook_icon-icons.com_59205.png" class=" w-[20px] h-[20px] pt-0.5">
                            <a href="https://www.facebook.com/Shu1906.cn" class="text-white hover:bg-[#404040]"> https://www.facebook.com/Shu1906.cn</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- form -->
    <div class="bg-[#3366CC]">
        <div class="py-[40px] font-Futurab text-[30px] text-white text-center">
            <div>
                <h1>GỬI NỘI DUNG LIÊN HỆ</h1>
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



    <!-- uu dai và tin tức -->
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
        <NewsAndPromotion />
    </div>
</template>