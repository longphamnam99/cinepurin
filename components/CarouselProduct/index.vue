<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


interface IProps {
  modelValue: number,
  data: Array<any>
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: 0,
  data: () => []
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

props.data.forEach(e => e.isShow = false)

const dataRef = ref(props.data)

const model = ref(props.modelValue)
watchEffect(() => {
  model.value = props.modelValue
  dataRef.value = props.data
})

const isShow = ref(false)

const config = useRuntimeConfig()

const showTrailer = ref(false)

const enmbed = ref("")

const getVideoId = (url: string) => {
  const videoIdMatch = url.match(/[?&]v=([^&]+)/);
  return videoIdMatch ? videoIdMatch[1] : '';
};

const trailerHandler = (link: any): void => {
  showTrailer.value = true
  enmbed.value = `https://www.youtube.com/embed/${getVideoId(link)}?autoplay=1`;
}
</script>

<template>
  <Carousel v-bind="settings" :modelValue="model" :breakpoints="breakpoints">
    <Slide v-for="slide in dataRef" :key="slide">
      <div class="relative">
        <div class="cursor-pointer relative z-20" @mouseover="slide.isShow = true"
          @mouseleave="isShow = slide.isShow = false">
          <div class="flex justify-center md-5">
            <img :src="config.public.baseURLDefault + slide.image" alt="" class="h-96 rounded-lg object-cover">
          </div>
          <div class="text-center pt-2">
            <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-Futurab text-white">{{ slide.name }}</h3>
          </div>
          <div class="w-8 h-8 flex items-center justify-center mx-auto my-1 border-[#fff] border-[2px]">
            <p v-if="slide.type == 1" class="font-Futurab font-medium text-[#fff] text-sm">2D</p>
            <p v-else-if="slide.type == 2" class="font-Futurab font-medium text-[#fff] text-sm">3D</p>
          </div>
        </div>
        <div :class="{ active: slide.isShow }"
          class="slide-item flex flex-col absolute top-0 left-0 bg-[#282828e0] w-full h-full p-6 z-30 border"
          @mouseover="slide.isShow = true" @mouseleave="isShow = slide.isShow = false" v-show="slide.isShow">
          <p class="text-white">
            {{ slide.description }}
          </p>
          <nuxt-link :to="`/movies/${slide.id}`" class="text-white">
            Chi tiết
          </nuxt-link>
          <button @click="trailerHandler(slide.trailer)" class="text-white">
            Xem trailer
          </button>
          <button class="text-white">
            Mua vé
          </button>
        </div>
      </div>
    </Slide>
  </Carousel>
  <div v-if="showTrailer">
    <div class="w-full h-full bg-red-500 fixed z-10 top-0 left-0">
      <button @click="showTrailer = false" class="z-20 absolute right-5 top-5 text-white text-[1rem]">close</button>
      <iframe width="100%" height="100%" :src="enmbed" title="Trót Trao Duyên - NB3 Hoài Bảo | OFFICIAL MUSIC VIDEO"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  </div>
</template>