<script setup lang="ts">
import {Carousel, Slide, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

interface IProps {
  modelValue: number
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: 0
})

const breakpoints = {
  700: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}

const data = ref([
  {
    isShow: false,
    image: "/images/ben-pha-xac-song1.jpg",
  },
  {
    isShow: false,
    image: "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg",
  },
  {
    isShow: false,
    image: "/images/ben-pha-xac-song1.jpg",
  },
  {
    isShow: false,
    image: "/images/ben-pha-xac-song1.jpg",
  },
  {
    isShow: false,
    image: "/images/ben-pha-xac-song1.jpg",
  },
  {
    isShow: false,
    image: "/images/ben-pha-xac-song1.jpg",
  },
  {
    isShow: false,
    image: "/images/ben-pha-xac-song1.jpg",
  },
  {
    isShow: false,
    image: "/images/ben-pha-xac-song1.jpg",
  },
  {
    isShow: false,
    image: "/images/ben-pha-xac-song1.jpg",
  },
  {
    isShow: false,
    image: "/images/ben-pha-xac-song1.jpg",
  },
])

const model = ref(props.modelValue)
watchEffect(() => model.value = props.modelValue)

const isShow = ref(false)
</script>

<template>
  <Carousel v-bind="settings" :modelValue="model" :breakpoints="breakpoints">
    <Slide v-for="slide in data" :key="slide">
      <div class="relative">
        <div class="cursor-pointer relative z-20" @mouseover="slide.isShow = true" @mouseleave="isShow = slide.isShow = false">
          <div class="flex justify-center md-5">
            <img :src="slide.image" alt=""
                 class="h-96 rounded-lg object-cover">
          </div>
          <div class="text-center pt-2">
            <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-Futurab text-white">BẾN PHÀ XÁC SỐNG P16</h3>
          </div>
          <div
              class="w-8 h-8 flex items-center justify-center mx-auto my-1 border-[#fff] border-[2px]">
            <p class="font-Futurab font-medium text-[#fff] text-sm">2D</p>
          </div>
        </div>
        <div :class="{active: slide.isShow}" class="slide-item flex flex-col absolute top-0 left-0 bg-[#282828e0] w-full h-full p-6 z-30 border" @mouseover="slide.isShow = true" @mouseleave="isShow = slide.isShow = false" v-show="slide.isShow">
          <p class="text-white">
            Dựa trên tiểu thuyết có thật
          </p>
          <button class="text-white">
            Chi tiết
          </button>
          <button class="text-white">
            Xem trailer
          </button>
          <button class="text-white">
            Mua vé
          </button>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>