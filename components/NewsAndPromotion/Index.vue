<template>
  <div class="flex flex-col items-center justify-center overflow-auto px-5">
    <div class="sm:w-[70%] w-full flex gap-6 my-10 items-center">
      <div class="flex flex-col w-24 h-24">
        <h3 class="text-white uppercase font-avantgarde-demi text-3xl">
          ƯU ĐÃI
        </h3>
        <img class="w-24 h-24" :src="useAsset('images/home/icon-promotion.png')" alt="promotion">
      </div>
      <div>
        <carousel class="slideshow" :autoplay="3000" :wrapAround="true" :itemsToShow="3">
          <Slide v-for="slide in 10" :key="slide">
            <div
                class="p-2 bg-white border-[5px] rounded-tl-3xl rounded-br-3xl border-[#723369] shadow-[7px 7px 0 rgba(0,0,0,0.2)]">
              <img src="/images/c_monday.jpg" alt="" class="w-120 h-120 rounded-lg object-cover mr-[16px]">
            </div>
          </Slide>
        </carousel>
      </div>
    </div>
    <div class="sm:w-[70%] w-full flex gap-6 my-10 items-center">
      <div class="flex flex-col w-24 h-24">
        <h3 class="text-white uppercase font-avantgarde-demi text-3xl">
          Tin tức
        </h3>
        <img class="w-24 h-24" :src="useAsset('images/home/icon-news.png')" alt="promotion">
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
        <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
          <div class="text-white font-MyriadRegular">
            <h1 class="text-base mb-2">
              Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
            </h1>
            <p class="text-sm hidden xl:block">
              Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
              Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
            </p>
          </div>
          <div class="w-full h-full">
            <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
          </div>
        </div>
        <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tl-3xl rounded-br-3xl">
          <div class="text-white font-MyriadRegular">
            <h1 class="text-base mb-2">
              Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
            </h1>
            <p class="text-sm hidden xl:block">
              Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
              Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
            </p>
          </div>
          <div class="w-full h-full">
            <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
          </div>
        </div>
        <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tl-3xl rounded-br-3xl">
          <div class="text-white font-MyriadRegular">
            <h1 class="text-base mb-2">
              Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
            </h1>
            <p class="text-sm hidden xl:block">
              Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
              Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
            </p>
          </div>
          <div class="w-full h-full">
            <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
          </div>
        </div>
        <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
          <div class="text-white font-MyriadRegular">
            <h1 class="text-base mb-2">
              Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
            </h1>
            <p class="text-sm hidden xl:block">
              Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
              Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
            </p>
          </div>
          <div class="w-full h-full">
            <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useAsset from "~/helpers/useAsset";
import {Carousel, Slide} from "vue3-carousel";
</script>