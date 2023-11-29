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
  <Carousel class="product-box" v-bind="settings" :modelValue="model" :breakpoints="breakpoints">
    <Slide v-for="slide in dataRef" :key="slide">
      <div :class="{ 'show': slide.isShow, 'hide': !slide.isShow }" class="movie-item relative mr-2">
        <div class="cursor-pointer relative z-20 p-4" @mouseover="slide.isShow = true"
          @mouseleave="isShow = slide.isShow = false">
          <div class="flex justify-center md-5">
            <img :src="slide.hinhAnh" alt="" class="h-96 rounded-lg object-cover">
          </div>
          <div class="text-center pt-2">
            <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-Futurab text-white">{{ slide.tenPhim }}
            </h3>
          </div>
          <div class="w-8 h-8 flex items-center justify-center mx-auto my-1 border-[#fff] border-[2px]">
            <p v-if="slide.dinhDang == '2D'" class="font-Futurab font-medium text-[#fff] text-sm">2D</p>
            <p v-else-if="slide.type == '3D'" class="font-Futurab font-medium text-[#fff] text-sm">3D</p>
          </div>
        </div>
        <!--  -->
        <div
          class="mouse-over shadow-md flex justify-center items-center flex-col absolute top-0 left-0 bg-[#282828e0] w-full h-full p-6 z-30 border"
          @mouseover="slide.isShow = true" @mouseleave="isShow = slide.isShow = false" v-show="slide.isShow">
          <p class="text-white">
            {{ slide.description }}
          </p>
          <nuxt-link :to="`/movies/${slide.maPhim}`"
            class="mb-10 text-white rounded-[1000px] bg-[#f18720] w-20 text-[18px] hover:bg-[#e00d7a] transition ease-in-out delay-50">
            Chi tiết
          </nuxt-link>
          <button @click="trailerHandler(slide.trailer)"
            class="text-white mb-2 rounded-tl-[1000px] rounded-tr-[1000px] rounded-br-[1000px] py-2 bg-[#f18720] w-[150px] text-[22px] hover:bg-[#e00d7a] transition ease-in-out delay-50">
            Xem trailer
          </button>
          <div class="relative group">
            <button @click="useRouter().push(`/booking/${slide.maPhim}`)"
              class="text-white rounded-tr-[1000px] rounded-br-[1000px] rounded-bl-[1000px] bg-[#e00d7a] w-[150px] text-[22px] py-2 group-hover:bg-[#f18720] transition ease-in-out delay-50">
              Mua vé
            </button>
            <img class="absolute -right-4 w-15 h-12 top-0 bg-[#f18720] group-hover:bg-[#e00d7a] rounded-[1000px]" src="/images/icon-start.png" alt="/images/icon-start.png">
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
  <div v-if="showTrailer">
    <div class="w-full h-full fixed z-10 top-0 left-0">
      <button @click="showTrailer = false" class="z-20 absolute right-5 top-5 text-white text-[1rem]">close</button>
      <iframe width="100%" height="100%" :src="enmbed" title="Trót Trao Duyên - NB3 Hoài Bảo | OFFICIAL MUSIC VIDEO"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  </div>
</template>

<style>
@-webkit-keyframes flipInX1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1.0);
  }
}

@keyframes flipInX1 {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1.0);
  }
}

@-webkit-keyframes flipOutX1 {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(0);
  }
}

@keyframes flipOutX1 {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0);
  }
}

/* .show {
  display: block;
}

.hide {
  display: none;
} */

.movie-item.show .mouse-over {
  animation: flipInX1 1s;
  opacity: 1;
}

.movie-item.hide .mouse-over {
  animation: flipOutX1 1s;
  opacity: 1;
}

.mouse-over {
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.5);
  border: 1px solid #fbdbbd;
  padding: 25px 20px;
  text-align: center;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  opacity: 0;
}</style>