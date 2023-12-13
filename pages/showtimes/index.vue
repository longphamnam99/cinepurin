<script setup lang="ts">
useHead({title: "Lịch chiếu"})
import {useMoviesStore} from '~/stores/movies';

const moviesStore = useMoviesStore();
const resultMovie = reactive({});
const getDataMovie = async (): Promise<void> => {
  await moviesStore.getMovies();
  resultMovie.value = moviesStore.movies;
}

useAsyncData("fetch", async () => {
  try {
    await getDataMovie()
  } catch (error) {
    console.error(error);
  }
})

const getThoiGian = (dateTimeString: string) => {
  const dateTimeObject = new Date(dateTimeString);

  const ngay = dateTimeObject.getDate();
  const thang = dateTimeObject.getMonth() + 1;
  const nam = dateTimeObject.getFullYear();

  const ngayChieu = `${ngay.toString().padStart(2, '0')}/${thang.toString().padStart(2, '0')}<br>${nam}`;

  const gio = dateTimeObject.getHours();
  const phut = dateTimeObject.getMinutes();

  const gioChieu = `${gio.toString().padStart(2, '0')}:${phut.toString().padStart(2, '0')}`;

  return {
    ngayChieu: ngayChieu,
    gioChieu: gioChieu,
  };
};
</script>

<template>


  <!-- lich chieu -->
  <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative px-40 py-5 justify-center items-center">
    <div v-for="movie in resultMovie.value" class="flex px-3 lg:px-32 pt-3 pb-3 xl:flex-row flex-col">
      <div class="flex bg-[#f18720] w-[550px] lg:w-[full] h-[315px]">
        <div class="w-[200px]">
          <div>
            <img :src="movie?.hinhAnh" alt="live-1" class="w-[full] h-[300px] pl-2 pt-3">
          </div>
        </div>
        <div class="w-[200px] p-3 pt-2">
          <div>
            <h3 class="text-white font-semibold text-2xl">{{ movie?.tenPhim }}</h3>
            <p class="text-white font-sans pt-2 pb-2 w-[full] line-clamp-6">Phim Live - Phát Trực Tiếp do Khương Ngọc
              làm đạo diễn
              {{ movie?.moTa }}
            </p>
            <img src="/images/2d.png" alt="" class="w-9 h-9">
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="pt-2 lg:pt-[115px]">
          <div class="bg-yellow-300 w-[90px] h-[90px]">
            <div class="text-center pt-6 font-Futurab text-[18px]"
                 v-html="getThoiGian(movie?.ngayKhoiChieu)?.ngayChieu"></div>
          </div>
        </div>
        <div class="pt-2.5 lg:pt-[117.5px]">
          <div class="flex bg-violet-300 w-[460px] lg:w-[500px] h-[85px]">
            <div class="pt-2 px-2">
              <nuxt-link :to="`/booking/${movie?.maPhim}`">
                <h3 class="w-[70px] h-[70px] bg-purple-700 flex justify-center items-center hover:bg-[#f5c549] hover:text-black text-white font-Futurab">
                  {{ getThoiGian(movie?.ngayKhoiChieu)?.gioChieu }}</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- uu dai và tin tức -->
  <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    <NewsAndPromotion/>
  </div>
</template>