<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {ref, onMounted} from 'vue'
import {Tabs, Tab} from 'flowbite-vue'
import {useMoviesStore} from '~/stores/movies';

const moviesStore = useMoviesStore();

const resultMovie = reactive({});

const dangChieu = ref([])
const sapChieu = ref([])
const dacBiet = ref([])

const getDataMovie = async (): Promise<void> => {
  await moviesStore.getMovies();
  resultMovie.value = moviesStore.movies;
}
const dataSlide = ref()

useAsyncData("fetch", async () => {
  try {
    dataSlide.value = await useFetchApiByUrl('http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner')
    dangChieu.value = await useFetchApi('QuanLyPhim/LayDanhSachPhim?dangchieu=1')
    sapChieu.value = await useFetchApi('QuanLyPhim/LayDanhSachPhim?sapchieu=1')
    dacBiet.value = await useFetchApi('QuanLyPhim/LayDanhSachPhim?dacbiet=1')
  } catch (error) {
    console.error(error);
  }
})

onMounted(async () => await getDataMovie())

const config = useRuntimeConfig();

const activeTab = ref('first')

useHead({title: "Trang chủ"})

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

const tabActive = ref(1)

</script>

<template>
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
      <div>
        <div class="">
          <ul
              class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li @click="tabActive = 1">
              <div :class="{ active: tabActive == 1 }"
                   class="cursor-pointer inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500">
                Phim đang chiếu
              </div>
            </li>
            <li>
              <div :class="{ active: tabActive == 2 }" @click="tabActive = 2"
                   class="cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                Phim sắp chiếu
              </div>
            </li>
            <li @click="tabActive = 3">
              <div :class="{ active: tabActive === 3 }" @click="tabActive = 2"
                   class="cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                Suất chiếu đặc biệt
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="default-tab-content">
        <div v-if="tabActive == 1" class="bg-[#f18720] relative">
          <div
              class="2xl:px-[10%] xl:px-[3%] px-0 2xl:flex xl:flex absolute hidden justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
            <CarouselProduct v-model:model-value="slideshowCurrent" :data="dangChieu"/>
          </div>
        </div>
        <div v-if="tabActive == 2" class="bg-[#f18720] relative">
          <div
              class="2xl:px-[10%] xl:px-[3%] px-0 2xl:flex xl:flex absolute hidden justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
            <CarouselProduct v-model:model-value="slideshowCurrent" :data="sapChieu"/>
          </div>
        </div>
        <div v-if="tabActive == 3" class="bg-[#f18720] relative">
          <div
              class="2xl:px-[10%] xl:px-[3%] px-0 2xl:flex xl:flex absolute hidden justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
            <CarouselProduct v-model:model-value="slideshowCurrent" :data="dacBiet"/>
          </div>
        </div>
      </div>
      <NewsAndPromotion/>
    </div>
    <div class="absolute top-0 left-0 h-full w-full bg-no-repeat bg-center bg-[url('/images/bg-top.png')] z-1"></div>
  </div>
</template>
<style>
.tab-film {
  background: #f18720;
  border-radius: 0 30px 0 0;
  -webkit-border-radius: 30px 50px 50px 0;
}

.tab-film:first-child button {
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

.tab-film:nth-child(2) {
  z-index: 2;
  border-radius: 0 50px 50px 0;
  -webkit-border-radius: 0 50px 50px 0;
  padding-left: 55px;
  margin-left: -80px;
  font-family: 'avantgarde-demi';
  font-weight: normal;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 74px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}

.tabs-panel > div > div:first-child ul {
  justify-content: center;
  margin-bottom: 3px;
}

.tabs-panel > div > div:first-child ul li div {
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

.tabs-panel > div > div:first-child ul li {
  background-color: #f18720;
  -webkit-transition: all 0.3s ease-in-out;
  box-shadow: 10px 0 0 rgba(0, 0, 0, 0.1);
}

.tabs-panel > div > div:first-child ul li div {
  background: #f18720;
  border-radius: 0 30px 0 0;
  -webkit-border-radius: 30px 50px 50px 0;
}

.tabs-panel > div > div:first-child ul li div:hover {
  background: #fecf06 !important;
  color: #020230;
  border-radius: 0 30px 0 0;
  -webkit-border-radius: 30px 50px 50px 0;
}

.tabs-panel > div > div:first-child ul li .active {
  background: #fecf06 !important;
  color: #020230;
}

.tabs-panel > div > div:first-child ul li:first-child {
  z-index: 3;
  border-radius: 30px 50px 50px 0;
  -webkit-border-radius: 30px 50px 50px 0;
}

.tabs-panel > div > div:first-child ul li:nth-child(2) {
  z-index: 2;
  border-radius: 0 50px 50px 0;
  -webkit-border-radius: 0 50px 50px 0;
  padding-left: 55px;
  margin-left: -80px;
}

.tabs-panel > div > div:first-child ul li:nth-child(3) {
  z-index: 1;
  margin-left: -30px;
  border-radius: 0 30px 0 0;
  -webkit-border-radius: 0 50px 50px 0;
}

body {
  overflow-x: hidden;
}
</style>

<style scoped>
.text-shadow {
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>