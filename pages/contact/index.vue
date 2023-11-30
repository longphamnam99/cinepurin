<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'

useHead({title: "Liên hệ"})
</script>

<template>
  <!-- contact -->
  <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] py-[20px] relative"
       style="background-image: url(./images/nen.jpg);">
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
              <a href="https://www.facebook.com/Shu1906.cn" class="text-white hover:bg-[#404040]">
                https://www.facebook.com/Shu1906.cn</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- uu dai và tin tức -->
  <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    <NewsAndPromotion/>
  </div>
</template>