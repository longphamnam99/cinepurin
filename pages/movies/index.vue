<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {ref} from 'vue'
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
  dangChieu.value = await useFetchApi('QuanLyPhim/LayDanhSachPhim?dangchieu=1')
  sapChieu.value = await useFetchApi('QuanLyPhim/LayDanhSachPhim?sapchieu=1')
  dacBiet.value = await useFetchApi('QuanLyPhim/LayDanhSachPhim?dacbiet=1')
}

useAsyncData("fetch", async () => {
  try {
    await getDataMovie()
  } catch (error) {
    console.error(error);
  }
})

const activeTab = ref('first')

useHead({title: "Phim"})

const handlePaneClick = (): void => {
  console.log("Click!")
  console.log("Click!")
}
const config = useRuntimeConfig()

const isShowTrailer = ref(false)
const enmbed = ref("")

const getVideoId = (url: string) => {
  const videoIdMatch = url.match(/[?&]v=([^&]+)/);
  return videoIdMatch ? videoIdMatch[1] : '';
};

const trailerHandler = (link: any): void => {
  isShowTrailer.value = true
  enmbed.value = `https://www.youtube.com/embed/${getVideoId(link)}?autoplay=1`;
}

const tabActive = ref(1)

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
  <div v-if="isShowTrailer">
    <div class="w-full h-full fixed z-10 top-0 left-0 bg-red-100">
      <button @click="isShowTrailer = false" class="z-20 absolute right-5 top-5 text-white text-[1rem]">close</button>
      <iframe width="100%" height="100%" :src="enmbed" title="Trót Trao Duyên - NB3 Hoài Bảo | OFFICIAL MUSIC VIDEO"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
    </div>
  </div>

  <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    <div>

    </div>
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
      <div class="flex justify-center items-center gap-x-10 py-10">
        <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out"
                   to="/">
          <img :src="useAsset('images/home/dolby.png')" :alt="useAsset('images/home/dolby.png')">
        </nuxt-link>
        <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out"
                   to="/">
          <img :src="useAsset('images/home/christie.png')" :alt="useAsset('images/home/christie.png')">
        </nuxt-link>
        <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out"
                   to="/">
          <img :src="useAsset('images/home/2d.png')" :alt="useAsset('images/home/2d.png')">
        </nuxt-link>
        <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out"
                   to="/">
          <img :src="useAsset('images/home/3d3.png')" :alt="useAsset('images/home/3d3.png')">
        </nuxt-link>
      </div>
      <div class="relative z-10 tabs-panel lg:font-bold md:font-semibold sm:font-light">
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
                  class="px-[10%] absolute flex justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                  class="px-[10%] absolute flex justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                  class="px-[10%] absolute flex justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

.tabs ul {
  justify-content: center;
}

.tabs ul li {
  background-color: #f18720;
  -webkit-transition: all 0.3s ease-in-out;
  box-shadow: 10px 0 0 rgba(0, 0, 0, 0.1);
}

.tabs ul li:nth-child(1) {
  border-radius: 30px 50px 50px 0;
  -webkit-border-radius: 30px 50px 50px 0;
}

.tabs li:nth-child(2) {
  border-radius: 0 50px 50px 0;
  -webkit-border-radius: 0 50px 50px 0;
  padding-left: 55px;
  margin-left: -80px;
}

.tabs ul li:nth-child(3) {
  padding-left: 55px;
  margin-left: -80px;
  border-radius: 0 30px 0 0;
  -webkit-border-radius: 0 30px 0 0;
}

.tabs ul li div {
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
</style>

<style scoped>
.text-shadow {
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
