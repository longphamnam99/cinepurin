<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'
useHead({title: "Lịch chiếu"})
</script>

<template>
  

  <!-- lich chieu -->
  <div class="bg-purple-400 px-40 py-5 grid grid-cols-2 justify-center">
    <div class="flex px-3 lg:px-32 pt-3 pb-3 xl:flex-row flex-col">
      <div class="flex bg-orange-600 w-[550px] lg:w-[full] h-[315px]">
        <div class="w-[200px]">
          <div>
            <img src="/images/live1.jpg" alt="live-1" class="w-[full] h-[300px] pl-2 pt-3">
          </div>
        </div>
        <div class="w-[200px] pt-3 pl-1">
          <div>
            <h3 class="text-white font-semibold text-2xl">LIVE: PHÁT TRỰC TIẾP (T18)</h3>
            <p class="text-white font-sans pt-2 pb-2 w-[full]">Phim Live - Phát Trực Tiếp do Khương Ngọc làm đạo diễn
              dựa
              trên những câu chuyện từ tập truyện ngắn "Đô Thị Linh Dị" của tác giả Nguyễn Ngọc Thạch. Cùng
              xem .</p>
            <img src="/images/2d.png" alt="" class="w-9 h-9">
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="pt-2 lg:pt-[115px]">
          <div class="bg-yellow-300 w-[90px] h-[90px]">
            <div>
              <h3 class="text-center pt-6 font-semibold">21/12 <br> 2023</h3>
            </div>
          </div>
        </div>
        <div class="pt-2.5 lg:pt-[117.5px]">
          <div class="flex bg-violet-300 w-[460px] lg:w-[600px] h-[85px]">
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">18:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">20:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">22:30</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex px-3 lg:px-32 pt-3 pb-3 xl:flex-row flex-col">
      <div class="flex bg-orange-600 w-[550px] lg:w-[full] h-[315px]">
        <div class="w-[200px]">
          <div>
            <img src="/images/shin-cau-be-but-chi.jpg" alt="live-1" class="w-[full] h-[300px] pl-2 pt-3">
          </div>
        </div>
        <div class="w-[200px] pt-3 pl-1">
          <div>
            <h3 class="text-white font-semibold text-2xl">Shin - Cậu Bé Bút Chì</h3>
            <p class="text-white font-sans pt-2 pb-2 w-[full]">Hài hước vui nhộn, dành cho thiếu nhi.</p>
            <img src="/images/2d.png" alt="" class="w-9 h-9">
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="pt-2 lg:pt-[115px]">
          <div class="bg-yellow-300 w-[90px] h-[90px]">
            <div>
              <h3 class="text-center pt-6 font-semibold">21/09 <br> 2023</h3>
            </div>
          </div>
        </div>
        <div class="pt-2.5 lg:pt-[117.5px]">
          <div class="flex bg-violet-300 w-[460px] lg:w-[600px] h-[85px]">
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">18:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">20:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">22:30</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- uu dai và tin tức -->
  <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    <NewsAndPromotion />
  </div>
</template>