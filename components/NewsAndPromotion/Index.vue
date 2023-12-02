<script setup lang="ts">
import useAsset from "~/helpers/useAsset";
import {Carousel, Slide} from "vue3-carousel";

const dataSlide = ref([
  {
    image: '/images/th2.jpg'
  },
  {
    image: '/images/th3.jpg'
  },
  {
    image: '/images/th4.jpg'
  },
])
</script>

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
          <Slide v-for="slide in dataSlide" :key="slide">
            <nuxt-link to="/sales">
              <div
                  class="p-2 bg-white border-[5px] rounded-tl-3xl rounded-br-3xl border-[#723369] shadow-[7px 7px 0 rgba(0,0,0,0.2)]">
                <img :src="slide.image" alt="" class="w-120 h-[190px] rounded-lg object-cover mr-[16px]">
              </div>
            </nuxt-link>

          </Slide>
        </carousel>
      </div>
    </div>
    <div class="sm:w-[70%] w-full flex gap-6 my-10 items-center">
      <div class="flex flex-col w-24 h-24">
        <h3 class="text-white uppercase font-avantgarde-demi text-2xl">
          Giới Thiệu
        </h3>
        <img class="w-24 h-24" :src="useAsset('/images/home/icon-news.png')" alt="promotion">
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
        <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
          <div class="text-white font-MyriadRegular">
            <h1 class=" mb-2 font-avantgarde-demi text-[19px] pb-[10px]">
              Cinepurin Lâm Đồng
            </h1>
            <p class="text-sm hidden xl:block">
              Địa chỉ : Tầng 4, Trung tâm Thương mại và Dịch vụ Tài chính Sacombank, 713 Quốc lộ 20, thị trấn Liên
              Nghĩa, huyện Đức Trọng, tỉnh Lâm Đồng. <br>
              Hotline: +84 (89) 010 316
              <nuxt-link to="https://www.facebook.com/Shu1906.cn"><p class="text-yellow-300">
                https://www.facebook.com/Shu1906.cn</p></nuxt-link>
            </p>
          </div>
          <div class="w-full h-full">
            <img src="/images/ld.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
          </div>
        </div>
        <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
          <div class="text-white font-MyriadRegular">
            <h1 class=" mb-2 font-avantgarde-demi text-[19px] pb-[10px]">
              Cinepurin Bình Dương
            </h1>
            <p class="text-sm hidden xl:block">
              Địa chỉ: Nhà Văn Hoá Sinh Viên, Khu đô thị ĐH Quốc Gia Tp. HCM, Tx. Dĩ An, Bình Dương <br>
              Hotline: +84 (89) 010 316
              <nuxt-link to="https://www.facebook.com/Shu1906.cn"><p class="text-yellow-300">
                https://www.facebook.com/Shu1906.cn</p></nuxt-link>
            </p>

          </div>
          <div class="w-full h-full">
            <img src="/images/cinestar-sinh-vien.jpg" alt=""
                 class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
          </div>
        </div>
        <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
          <div class="text-white font-MyriadRegular">
            <h1 class=" mb-2 font-avantgarde-demi text-[19px] pb-[10px]">
              Cinepurin Hồ Chí Minh
            </h1>
            <p class="text-sm hidden xl:block">
              Địa chỉ: 271 Nguyễn Trãi, P.Nguyễn Cư Trinh, Q. 1, TP.HCM <br>
              Hotline: +84 (89) 010 316
              <nuxt-link to="https://www.facebook.com/Shu1906.cn"><p class="text-yellow-300">
                https://www.facebook.com/Shu1906.cn</p></nuxt-link>
            </p>

          </div>
          <div class="w-full h-full">
            <img src="/images/52bdebd4335ef100a84f.jpg" alt=""
                 class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
          </div>
        </div>
        <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
          <div class="text-white font-MyriadRegular">
            <h1 class=" mb-2 font-avantgarde-demi text-[19px] pb-[10px]">
              Cinepurin Kiên Giang
            </h1>
            <p class="text-sm hidden xl:block">
              Địa chỉ: Lô A2 - Khu 2 Trung tâm Thương mại Rạch Sỏi, Đường Nguyễn Chí Thanh, Phường Rạch Sỏi, Thành phố
              Rạch Giá, Tỉnh Kiên Giang <br>
              Hotline: +84 (89) 010 316
              <nuxt-link to="https://www.facebook.com/Shu1906.cn"><p class="text-yellow-300">
                https://www.facebook.com/Shu1906.cn</p></nuxt-link>
            </p>

          </div>
          <div class="w-full h-full">
            <img src="/images/cinestar-kien-giang.jpg" alt=""
                 class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>