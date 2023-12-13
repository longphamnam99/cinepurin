<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import {ref} from 'vue'

const activeTab = ref('first')

const id = useRoute().params.id;

const dataApi = reactive({})

useAsyncData("fetch", async () => {
  try {
    const response = await useApiBridge({
      url: "QuanLyRap/LayThongTinLichChieuPhim?MaPhim=" + id,
      method: "get",
    });

    dataApi.value = response

    useHead({title: dataApi?.value?.tenPhim})
  } catch (error) {
    console.error(error);
  }
})

const getNgay = (ngaychieu: string): string => {
  const dateTimeObject = new Date(ngaychieu);

  const ngay = dateTimeObject.getDate().toString().padStart(2, '0');
  const thang = (dateTimeObject.getMonth() + 1).toString().padStart(2, '0'); // Tháng trong JavaScript bắt đầu từ 0
  const nam = dateTimeObject.getFullYear().toString();

  return `${ngay}-${thang}-${nam}`;
}

const getGio = (ngaychieu: string) => {
  const dateTimeObject = new Date(ngaychieu);
  const gioChieu = dateTimeObject.toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute: '2-digit'});
  return gioChieu;
}
</script>

<template>
  <div class="grid justify-center items-center bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative pt-8 pb-8">
    <div>
      <div class="grid grid-cols-2 gap-5 ">
        <select-search model-value=""
                       class="rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                       :options="[
                        { label: 'cine', value: '1' },
                        { label: 'purin', value: '2' },
                        { label: 'cine', value: '3' },
                    ]" placeholder="Chọn rạp chiếu"/>
        <select-search model-value=""
                       class="rounded-tl-[24px] rounded-br-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                       :options="[
                        { label: 'cine', value: '1' },
                        { label: 'purin', value: '2' },
                        { label: 'cine', value: '3' },
                    ]" placeholder="Chọn thời gian"/>
      </div>
    </div>
  </div>

  <div class="flex justify-center bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    <div class=" flex flex-col-2  bg-[#f37520] gap-5 p-10">
      <div class="xl:border-[9px] border-solid border-[#fae2a2] lg:border-[0px] md:border-0 w-[40%] md:w-[400px] h-full hidden sm:block ">
        <img :src="dataApi?.value?.hinhAnh" alt="" class="md:h-[420px] sm:h-full object-cover">
      </div>

      <div class="relative w-full h-auto overflow-hidden mb-5 flex-1">
        <div class="image-container sm:hidden ">
          <img :src="dataApi?.value?.hinhAnh" alt="" class="w-full h-full object-cover">
        </div>
        <h3 class="text-[28px] uppercase text-white pb-3 font-Futurab cinema-item">{{ dataApi?.value?.tenPhim }}</h3>
        <template v-for="rapchieu in dataApi?.value?.heThongRapChieu" :key="rapchieu?.maHeThongRap">
          <div v-for="cumchieu in rapchieu?.cumRapChieu" :key="cumchieu?.maHeThongRap"
               class="cinema-item relative w-full h-auto overflow-hidden mb-[5px]">
            <h4>{{ cumchieu?.tenCumRap }}</h4>
            <div v-for="lichchieu in cumchieu?.lichChieuPhim" :key="lichchieu?.maLichChieu"
                 class="bg-[rgba(134,134,134,0.2)] h-[81px] mb-[1px] relative">
              <div class="row-date">
                      <span class="leading-[18px] inline-block align-middle -mt-[7px] text-[18px]">
                        {{ getNgay(lichchieu?.ngayChieuGioChieu) }}
                      </span>
              </div>
              <div class="row-hour">
                <ul class="leading-[60px]">
                  <!--                  -->
                  <li @click="useRouter().push(`/book-movie-tickets/${lichchieu.maLichChieu}`)" class="bg-custom">{{
                      getGio(lichchieu?.ngayChieuGioChieu)
                    }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>


  <!-- uu dai và tin tức -->
  <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    <NewsAndPromotion/>
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

.showdow-custom {
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);
}

.cinema-item h4 {
  font-family: 'Futurab';
  font-weight: normal;
  font-size: 24px;
  text-transform: uppercase;
  line-height: 30px;
  color: #fff;
  padding: 10px 25px 10px 20px;
  background: #f5c549;
  width: auto;
  display: inline-block;
  color: #000;
  position: relative;
  margin-bottom: 0;
}

.cinema-item h4::after {
  content: '';
  display: block;
  width: 40px;
  height: 100%;
  position: absolute;
  right: -19px;
  top: 0;
  background: #f5c549;
  transform: skew(32deg);
  -webkit-transform: skew(32deg);
}

.row-date {
  float: left;
  width: 170px;
  height: 100%;
  background: #f5c549;
  color: #000;
  font-family: 'Futurab';
  font-weight: normal;
  font-size: 18px;
  line-height: 81px;
  transform: skewX(-10deg);
  -webkit-transform: skewX(-10deg);
  text-align: center;
  margin-left: -20px;
  padding-left: 20px;
  position: absolute;
  left: -10px;
  top: 0;
}

.row-hour {
  margin-left: 170px;
  height: 100%;
  padding: 10px 0;
  min-height: 81px;
}

.row-hour li {
  display: inline-block;
  width: auto;
  color: #fff;
  height: 100%;
  font-family: 'Futurab';
  font-weight: normal;
  font-size: 16px;
  padding: 0 10px;
  margin: 0 -1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  margin: 1px -1px;
}

.bg-custom:hover {
  background-color: #f5c549 !important;
  color: #020230;
}

.bg-custom:nth-child(even) {
  background-color: #ba3469;
}

.bg-custom:nth-child(odd) {
  background-color: #7c2665;
}
</style>