<script setup lang="ts">
import {ref} from "vue";
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'
import useAsset from "~/helpers/useAsset";
import {useMoviesStore} from '~/stores/movies';

const moviesStore = useMoviesStore();

const dataSlide = ref()

useAsyncData("fetch", async () => {
  try {
    dataSlide.value = await useFetchApiByUrl('http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner')
    await moviesStore.getMovies();
    moviesStore.movies.forEach(e => {
      films.value.push({
        label: e.tenPhim,
        value: e.maPhim
      })
    })
  } catch (error) {
    console.error(error);
  }
})

const films = ref([])

const filmDachon = ref({})

const rap = ref([])

const chooseFilm = async (value: string) => {
  const response = await useFetchApi('QuanLyRap/LayThongTinLichChieuPhim?MaPhim=' + value)
  filmDachon.value = response
  response?.heThongRapChieu?.forEach(e => {
    e.cumRapChieu.forEach(rapchieu => {
      rap.value.push({
        value: rapchieu.maCumRap,
        label: rapchieu.tenCumRap
      })
    })
  })
}

const ngay = ref([])

const suatchieu = ref([])

const rapChon = ref()

const chooseRap = (value: string) => {
  const find = filmDachon.value.heThongRapChieu.flatMap(heThongRap => heThongRap.cumRapChieu)
      .find(cumRap => cumRap.maCumRap === value);
  rapChon.value = find
  find.lichChieuPhim.forEach(e => {
    const dateTimeString = e.ngayChieuGioChieu;
    const dateTimeObject = new Date(dateTimeString);
    const ngayChieu = dateTimeObject.toISOString().split('T')[0];
    const gioChieu = dateTimeObject.toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute: '2-digit'});
    ngay.value.push({
      value: e.maLichChieu,
      label: ngayChieu
    })

    suatchieu.value.push({
      value: e.maLichChieu,
      label: gioChieu
    })
  })
}

const redirectFilm = (value: any) => {
  useRouter().push('/book-movie-tickets/' + value)
}
</script>

<template>
  <carousel v-if="dataSlide?.data?.content?.length" :autoplay="3000" :wrap-around="true"
            class="relative slideshow w-full"
            ref="slideshow">
    <slide class="w-full" v-for="(item, index) in dataSlide?.data?.content" :key="index">
      <img class="w-full" :src="item?.hinhAnh" :alt="item?.hinhAnh"/>
    </slide>
    <template #addons>
      <navigation/>
      <pagination class="sm:block hidden"/>
    </template>
  </carousel>
  <div
      class="relative bg-[url('/images/pattern.png')] bg-repeat bg-top max-w-full flex flex-wrap items-center justify-center">
    <div class="relative w-full">
      <img class="w-full" src="/images/background-header.png" alt="Top header">
    </div>
    <div class="flex flex-wrap gap-x-32 gap-5 justify-center items-center py-5">
      <div class="flex items-center justify-between gap-x-10 relative">
        <div class="w-[114px] h-[130px] ">
          <img class="absolute -top-10 left-0" :src="useAsset('images/home/icon-ticket.png')" alt="ticket banner">
        </div>
        <h2 class="uppercase font-bold text-[#e00d7a] leading-[32px] text-[32px] text-shadow-xs text-shadow font-Futurab">
          mua vé <br>
          online
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-5 ">
        <select-search model-value="" @update:modelValue="chooseFilm"
                       class="rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] w-[300px] py-[10px] border-0 uppercase"
                       :options="films" placeholder="Chọn phim"/>
        <select-search model-value="" @update:modelValue="chooseRap"
                       class="rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] w-[300px] py-[10px] border-0 uppercase"
                       :options="rap" placeholder="Chọn rạp"/>
        <select-search model-value=""
                       class="rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] w-[300px] py-[10px] border-0 uppercase"
                       :options="ngay" placeholder="Chọn ngày"/>
        <select-search model-value="" @update:modelValue="redirectFilm"
                       class="rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] w-[300px] py-[10px] border-0 uppercase"
                       :options="suatchieu" placeholder="Chọn suất chiếu"/>
      </div>
    </div>
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

.slideshow .carousel__slide {
  display: block;
  max-height: 500px;
}
</style>