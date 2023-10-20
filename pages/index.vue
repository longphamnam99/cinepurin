<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'

const config = useRuntimeConfig();

const activeTab = ref('first')

const dataSlide = ref()

useAsyncData('fetch', async () => {
  try {
    dataSlide.value = await useFetchApi('slideshow')
  } catch (e) {
    console.error(e);
  }
});

useHead({ title: "Trang chủ" })

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
  <carousel v-if="dataSlide?.data.length" :autoplay="3000" :wrap-around="true" class="relative slideshow w-full" ref="slideshow">
    <slide class="w-full" v-for="(item, index) in dataSlide?.data" :key="index">
      <img class="w-full" :src="config.public.baseURLDefault + item?.url" :alt="config.public.baseURLDefault + item?.url" />
    </slide>
    <template #addons>
      <navigation />
      <pagination class="sm:block hidden" />
    </template>
  </carousel>
  <div
    class="relative bg-[url('/images/pattern.png')] bg-repeat bg-top max-w-full flex flex-wrap items-center justify-center">
    <div class="relative w-full">
      <img class="w-full" src="/images/background-header.png" alt="Top header">
    </div>
    <div class="flex flex-wrap lg:gap-x-32 gap-5 justify-center items-center py-5">
      <div class="flex items-center justify-between gap-x-10 relative">
        <div class="w-[114px] h-[130px] sm:block hidden">
          <img class="absolute -top-10 left-0" :src="useAsset('images/home/icon-ticket.png')" alt="ticket banner">
        </div>
        <h2 class="uppercase font-bold text-[#e00d7a] leading-[32px] text-[32px] text-shadow-xs text-shadow font-Futurab">
          mua vé <br>
          online
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <select-search model-value=""
          class="rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
          :options="[
            { label: 'Chuyến xe cuối cùng', value: '1' },
            { label: 'Shin - Cậu bé bút chì', value: '2' },
            { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
          ]" placeholder="Chọn phim" />
        <select-search model-value=""
          class="rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
          :options="[
            { label: 'Chuyến xe cuối cùng', value: '1' },
            { label: 'Shin - Cậu bé bút chì', value: '2' },
            { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
          ]" placeholder="Chọn rạp" />
        <select-search model-value=""
          class="rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
          :options="[
            { label: 'Chuyến xe cuối cùng', value: '1' },
            { label: 'Shin - Cậu bé bút chì', value: '2' },
            { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
          ]" placeholder="Chọn ngày" />
        <select-search model-value=""
          class="rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
          :options="[
            { label: 'Chuyến xe cuối cùng', value: '1' },
            { label: 'Shin - Cậu bé bút chì', value: '2' },
            { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
          ]" placeholder="Chọn suất chiếu" />
      </div>
    </div>
    <div>

    </div>
  </div>
  <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    <div class="flex justify-center items-center gap-x-10 py-10">
      <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out" to="/">
        <img :src="useAsset('images/home/dolby.png')" :alt="useAsset('images/home/dolby.png')">
      </nuxt-link>
      <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out" to="/">
        <img :src="useAsset('images/home/christie.png')" :alt="useAsset('images/home/christie.png')">
      </nuxt-link>
      <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out" to="/">
        <img :src="useAsset('images/home/2d.png')" :alt="useAsset('images/home/2d.png')">
      </nuxt-link>
      <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out" to="/">
        <img :src="useAsset('images/home/3d3.png')" :alt="useAsset('images/home/3d3.png')">
      </nuxt-link>
    </div>
    <div class="relative z-10 tabs-panel">
      <tabs ref="tabsref" variant="default" v-model="activeTab">
        <tab name="first" title="Phim đang chiếu">
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
            <div class="mx-auto max-w-[1200px] py-10">
              <CarouselProduct v-model:model-value="slideshowCurrent" />
            </div>
          </div>
        </tab>
        <tab name="second" title="Phim sắp chiếu">
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
            <div class="mx-auto max-w-[1200px] py-10">
              <CarouselProduct v-model:model-value="slideshowCurrent" />
            </div>
          </div>
        </tab>
        <tab name="third" title="Suất chiếu đặc biệt">
          <div class="bg-[#f18720] relative">
            <div
              class="absolute flex justify-between w-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                @click="actionSlide(false)">
                <img :src="useAsset('images/home/icon-start.png')" alt="prev">
              </button>
              <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                @click="actionSlide(true)">
                <img :src="useAsset('images/home/icon-start.png')" alt="next">
              </button>
            </div>
            <div class="mx-auto max-w-[1200px] py-10">
              <CarouselProduct v-model:model-value="slideshowCurrent" />
            </div>
          </div>
        </tab>
      </tabs>
      <div class="flex flex-col items-center justify-center">
        <div class="w-[70%] flex gap-6 my-10 items-center">
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
        <div class="w-[70%] flex gap-6 my-10 items-center">
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
    </div>
    <div class="absolute top-0 left-0 h-full w-full bg-no-repeat bg-center bg-[url('/images/bg-top.png')] z-1"></div>
  </div>
</template>
<style>
.slideshow .carousel__pagination {
  gap: 10px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.slideshow .carousel__prev,
.slideshow .carousel__next {
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  display: none;
}

.slideshow .carousel__pagination-button--active {
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  transform: translateY(0);
}

.slideshow .carousel__pagination-button::after {
  background-color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}

@media all and (max-width: 1024px) {
  .slideshow .carousel__pagination {
    right: auto;
    bottom: 10%;
    top: auto;
    left: 10px;
    transform: none;
  }

  .slideshow .carousel__pagination-button::after {
    height: 10px;
    width: 10px;
  }
}

.slideshow .carousel__pagination {
  display: flex;
}

@media all and (max-width: 767px) {
  .slideshow .carousel__pagination {
    display: none;
  }

  .slideshow .carousel__prev,
  .slideshow .carousel__next {
    display: flex;
  }
}

.tabs-panel>div>div:first-child ul {
  justify-content: center;
  margin-bottom: 3px;
}

.tabs-panel>div>div:first-child ul li div {
  font-family: 'avantgarde-demi';
  font-weight: normal;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 74px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  padding: 0 45px;
}

.tabs-panel>div>div:first-child ul li {
  background-color: #f18720;
  -webkit-transition: all 0.3s ease-in-out;
  box-shadow: 10px 0 0 rgba(0, 0, 0, 0.1);
}

.tabs-panel>div>div:first-child ul li div {
  background: #f18720;
  border-radius: 0 30px 0 0;
  -webkit-border-radius: 30px 50px 50px 0;
}

.tabs-panel>div>div:first-child ul li div:hover {
  background: #fecf06 !important;
  color: #020230;
  border-radius: 0 30px 0 0;
  -webkit-border-radius: 30px 50px 50px 0;
}

.tabs-panel>div>div:first-child ul li:first-child {
  z-index: 3;
  border-radius: 30px 50px 50px 0;
  -webkit-border-radius: 30px 50px 50px 0;
}

.tabs-panel>div>div:first-child ul li:nth-child(2) {
  z-index: 2;
  border-radius: 0 50px 50px 0;
  -webkit-border-radius: 0 50px 50px 0;
  padding-left: 55px;
  margin-left: -80px;
}

.tabs-panel>div>div:first-child ul li:nth-child(3) {
  z-index: 1;
  margin-left: -30px;
  border-radius: 0 30px 0 0;
  -webkit-border-radius: 0 50px 50px 0;
}

.slideshow .carousel__slide {
  display: block;
  margin-right: 16px;
}
</style>

<style scoped>.text-shadow {
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
}</style>