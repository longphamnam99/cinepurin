<script setup lang="ts">
import useAsset from "~/helpers/useAsset";
import {Carousel, Slide} from "vue3-carousel";

const dataSlide = ref([
  {
    image: '/images/sale1.jpg'
  },
  {
    image: '/images/sale2.jpg'
  },
  {
    image: '/images/sale3.jpg'
  },
])
</script>

<template>
  <div class="flex flex-col items-center justify-center overflow-auto px-5">
    <div class="w-[70%] flex gap-6 my-10 items-center">
      <div class="flex flex-col w-24 h-24">
        <h3 class="text-white uppercase font-avantgarde-demi lg:text-3xl md:text-base">
          ƯU ĐÃI
        </h3>
        <img class="w-[100px] h-[100px]" :src="useAsset('images/home/icon-promotion.png')" alt="promotion">
      </div>
      <nuxt-link to="/sales">
        <div>
        <carousel class="slideshow" :autoplay="3000" :wrapAround="true" :itemsToShow="3">
          <Slide v-for="slide in dataSlide" :key="slide">           
              <div class="p-2 bg-white border-[5px] rounded-tl-3xl rounded-br-3xl h-[170px] w-full border-[#723369] shadow-[7px 7px 0 rgba(0,0,0,0.2)]">
                <img :src="slide.image" alt="" class="h-[145px] w-[400px]">
              </div>
          </Slide>
        </carousel>
      </div>
      </nuxt-link>
      
    </div>
    <div class="w-[70%] flex gap-6 my-10 items-center">
      <div class="flex flex-col">
        <h3 class="text-white uppercase font-avantgarde-demi text-2xl">
          Giới Thiệu
        </h3>
        <p class="text-white font-MyriadRegular text-[10px] text-center pt-1">Các Rạp Chiếu Liên Kết</p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class=" grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-ee-3xl rounded-ss-3xl">
          <div class="text-white font-MyriadRegular">
            <nuxt-link to="/about-us">
              <h1 class=" mb-2 font-avantgarde-demi text-[19px]">
                Lotte Cinema
              </h1>
            </nuxt-link>
            <p class="text-sm">
              Địa chỉ : Tầng 3, TTTM Lotte, số 469 đường Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, TPHCM, Việt Nam .<br>
              Hotline: +(028) 3775 2524
              <nuxt-link to="https://www.facebook.com/lottecinema/"><img src="/images/scl_facebook.png" alt="" class="w-7 h-7"> </nuxt-link>
            </p>
          </div>
          <div class="w-full xl:h-full">
            <img src="/images/ltcnm.jpg" alt="" class="w-[full] h-full  rounded-br-3xl object-cover mr-[16px]">
          </div>
        </div>
        <div class=" grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-es-3xl rounded-se-3xl">
          <div class="text-white font-MyriadRegular">
            <nuxt-link to="/about-us">
              <h1 class=" mb-2 font-avantgarde-demi text-[19px]">
                BHD CineFlex
              </h1>
            </nuxt-link>
            <p class="text-sm">
              Địa chỉ: Maximark 3/2 (nay là Vincom 3/2)<br>
              <nuxt-link to="https://www.facebook.com/BHDStar"><img src="/images/scl_facebook.png" alt="" class="w-7 h-7"></nuxt-link>
            </p>
          </div>
          <div class="w-full h-full">
            <img src="/images/bhd.jpg" alt=""
                 class="w-full h-full rounded-tr-3xl object-cover mr-[16px] ">
          </div>
        </div>
        <div class=" grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-bl-3xl rounded-tr-3xl">
          <div class="text-white font-MyriadRegular">
            <nuxt-link to="/about-us">
              <h1 class=" mb-2 font-avantgarde-demi text-[19px]">
                CGV Cinemas VietNam
              </h1>
            </nuxt-link>
            <p class="text-sm">
              Địa chỉ: Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam <br>
              Hotline: 1900 6017
              <nuxt-link to="https://www.facebook.com/cgvcinemavietnam"><img src="/images/scl_facebook.png" alt="" class="w-7 h-7"></nuxt-link>
            </p>
          </div>
          <div class="w-full h-full">
            <img src="/images/cgv.jpg" alt=""
                 class="w-full h-full lg:h-[150px] lg:w-[300px] rounded-tr-3xl sm:rounded-bl-3xl sm:rounded-ee-3xl object-cover mr-[16px] pl-5">
          </div>
        </div>
        <div class=" grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-br-3xl rounded-tl-3xl sm:rounded-3xl">
          <div class="text-white font-MyriadRegular">
            <nuxt-link to="/about-us">
              <h1 class=" mb-2 font-avantgarde-demi text-[19px]">
                Galaxy Cinema
              </h1>
            </nuxt-link>
            <p class="text-sm">
              Địa chỉ: Toà nhà Bitexco Nam Long, 63A Võ Văn Tần, Phường 6, Quận 3, Tp. Hồ Chí Minh, Việt Nam<br>
              Hotline: +19002224
              <nuxt-link to="https://www.facebook.com/galaxycinevn">
                <img src="/images/scl_facebook.png" alt="" class="w-7 h-7"></nuxt-link>
            </p>

          </div>
          <div class="w-full h-full">
            <img src="/images/galaxy.jpg" alt=""
                 class="w-full h-full lg:h-[150px] lg:w-[300px] rounded-br-3xl sm:rounded-es-3xl sm:rounded-ee-3xl object-cover mr-[16px] pl-5">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>