<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {ref} from 'vue'
import {Tabs, Tab} from 'flowbite-vue'

const activeTab = ref('first')

useHead({title: "Lịch chiếu"})
const handlePaneClick = (): void => {
  console.log("Click!")
}
</script>

<template>
  <div class="grid justify-center items-center bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative pt-8 pb-8">
    <div>
      <div class="grid grid-cols-2 gap-5 ">
        <select-search model-value=""
                       class="rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                       :options="[
                        { label: 'Chuyến xe cuối cùng', value: '1' },
                        { label: 'Shin - Cậu bé bút chì', value: '2' },
                        { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
                    ]" placeholder="Chọn rạp chiếu"/>
        <select-search model-value=""
                       class="rounded-tl-[24px] rounded-br-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                       :options="[
                        { label: 'Chuyến xe cuối cùng', value: '1' },
                        { label: 'Shin - Cậu bé bút chì', value: '2' },
                        { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
                    ]" placeholder="Chọn thời gian"/>
      </div>
    </div>
  </div>

  <!-- lich chieu -->
  <div class="bg-purple-400 px-12 py-5">
    <div class="flex px-3 lg:px-32 pt-3 pb-3 xl:flex-row flex-col">
      <div class="flex bg-orange-500 w-[550px] lg:w-[full] h-[315px]">
        <div class="w-[200px]">
          <div>
            <img src="/images/live1.jpg" alt="live-1" class="w-[full] h-[300px] pl-2 pt-3">
          </div>
        </div>
        <div class="w-[200px] pt-3">
          <div>
            <h3 class="text-white font-semibold text-2xl">LIVE: PHÁT TRỰC TIẾP (T18)</h3>
            <p class="text-white font-sans pt-2 pb-2 w-[full]">Phim Live - Phát Trực Tiếp do Khương Ngọc làm đạo diễn
              dựa
              trên những câu chuyện từ tập truyện ngắn "Đô Thị Linh Dị" của tác giả Nguyễn Ngọc Thạch. Cùng
              xem .</p>
            <img src="/images/2d.png" alt="" class="w-9 h-9">
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="pt-2 lg:pt-[115px]">
          <div class="bg-yellow-300 w-[90px] h-[90px]">
            <div>
              <h3 class="text-center pt-6 font-semibold">21/09 <br> 2023</h3>
            </div>
          </div>
        </div>
        <div class="pt-2.5 lg:pt-[117.5px]">
          <div class="flex bg-violet-300 w-[460px] lg:w-[600px] h-[85px]">
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">18:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">20:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">22:30</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex px-3 lg:px-32 pt-3 pb-3 xl:flex-row flex-col">
      <div class="flex bg-orange-500 w-[550px] lg:w-[full] h-[315px]">
        <div class="w-[200px]">
          <div>
            <img src="/images/live1.jpg" alt="live-1" class="w-[full] h-[300px] pl-2 pt-3">
          </div>
        </div>
        <div class="w-[200px] pt-3">
          <div>
            <h3 class="text-white font-semibold text-2xl">LIVE: PHÁT TRỰC TIẾP (T18)</h3>
            <p class="text-white font-sans pt-2 pb-2 w-[full]">Phim Live - Phát Trực Tiếp do Khương Ngọc làm đạo diễn
              dựa
              trên những câu chuyện từ tập truyện ngắn "Đô Thị Linh Dị" của tác giả Nguyễn Ngọc Thạch. Cùng
              xem .</p>
            <img src="/images/2d.png" alt="" class="w-9 h-9">
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="pt-2 lg:pt-[115px]">
          <div class="bg-yellow-300 w-[90px] h-[90px]">
            <div>
              <h3 class="text-center pt-6 font-semibold">21/09 <br> 2023</h3>
            </div>
          </div>
        </div>
        <div class="pt-2.5 lg:pt-[117.5px]">
          <div class="flex bg-violet-300 w-[460px] lg:w-[600px] h-[85px]">
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">18:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">20:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">22:30</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex px-3 lg:px-32 pt-3 pb-3 xl:flex-row flex-col">
      <div class="flex bg-orange-500 w-[550px] lg:w-[full] h-[315px]">
        <div class="w-[200px]">
          <div>
            <img src="/images/live1.jpg" alt="live-1" class="w-[full] h-[300px] pl-2 pt-3">
          </div>
        </div>
        <div class="w-[200px] pt-3">
          <div>
            <h3 class="text-white font-semibold text-2xl">LIVE: PHÁT TRỰC TIẾP (T18)</h3>
            <p class="text-white font-sans pt-2 pb-2 w-[full]">Phim Live - Phát Trực Tiếp do Khương Ngọc làm đạo diễn
              dựa
              trên những câu chuyện từ tập truyện ngắn "Đô Thị Linh Dị" của tác giả Nguyễn Ngọc Thạch. Cùng
              xem .</p>
            <img src="/images/2d.png" alt="" class="w-9 h-9">
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="pt-2 lg:pt-[115px]">
          <div class="bg-yellow-300 w-[90px] h-[90px]">
            <div>
              <h3 class="text-center pt-6 font-semibold">21/09 <br> 2023</h3>
            </div>
          </div>
        </div>
        <div class="pt-2.5 lg:pt-[117.5px]">
          <div class="flex bg-violet-300 w-[460px] lg:w-[600px] h-[85px]">
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">18:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">20:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">22:30</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex px-3 lg:px-32 pt-3 pb-3 xl:flex-row flex-col">
      <div class="flex bg-orange-500 w-[550px] lg:w-[full] h-[315px]">
        <div class="w-[200px]">
          <div>
            <img src="/images/live1.jpg" alt="live-1" class="w-[full] h-[300px] pl-2 pt-3">
          </div>
        </div>
        <div class="w-[200px] pt-3">
          <div>
            <h3 class="text-white font-semibold text-2xl">LIVE: PHÁT TRỰC TIẾP (T18)</h3>
            <p class="text-white font-sans pt-2 pb-2 w-[full]">Phim Live - Phát Trực Tiếp do Khương Ngọc làm đạo diễn
              dựa
              trên những câu chuyện từ tập truyện ngắn "Đô Thị Linh Dị" của tác giả Nguyễn Ngọc Thạch. Cùng
              xem .</p>
            <img src="/images/2d.png" alt="" class="w-9 h-9">
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="pt-2 lg:pt-[115px]">
          <div class="bg-yellow-300 w-[90px] h-[90px]">
            <div>
              <h3 class="text-center pt-6 font-semibold">21/09 <br> 2023</h3>
            </div>
          </div>
        </div>
        <div class="pt-2.5 lg:pt-[117.5px]">
          <div class="flex bg-violet-300 w-[460px] lg:w-[600px] h-[85px]">
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">18:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">20:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">22:30</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex px-3 lg:px-32 pt-3 pb-3 xl:flex-row flex-col">
      <div class="flex bg-orange-500 w-[550px] lg:w-[full] h-[315px]">
        <div class="w-[200px]">
          <div>
            <img src="/images/live1.jpg" alt="live-1" class="w-[full] h-[300px] pl-2 pt-3">
          </div>
        </div>
        <div class="w-[200px] pt-3">
          <div>
            <h3 class="text-white font-semibold text-2xl">LIVE: PHÁT TRỰC TIẾP (T18)</h3>
            <p class="text-white font-sans pt-2 pb-2 w-[full]">Phim Live - Phát Trực Tiếp do Khương Ngọc làm đạo diễn
              dựa
              trên những câu chuyện từ tập truyện ngắn "Đô Thị Linh Dị" của tác giả Nguyễn Ngọc Thạch. Cùng
              xem .</p>
            <img src="/images/2d.png" alt="" class="w-9 h-9">
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="pt-2 lg:pt-[115px]">
          <div class="bg-yellow-300 w-[90px] h-[90px]">
            <div>
              <h3 class="text-center pt-6 font-semibold">21/09 <br> 2023</h3>
            </div>
          </div>
        </div>
        <div class="pt-2.5 lg:pt-[117.5px]">
          <div class="flex bg-violet-300 w-[460px] lg:w-[600px] h-[85px]">
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">18:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">20:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">22:30</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex px-3 lg:px-32 pt-3 pb-3 xl:flex-row flex-col">
      <div class="flex bg-orange-500 w-[550px] lg:w-[full] h-[315px]">
        <div class="w-[200px]">
          <div>
            <img src="/images/live1.jpg" alt="live-1" class="w-[full] h-[300px] pl-2 pt-3">
          </div>
        </div>
        <div class="w-[200px] pt-3">
          <div>
            <h3 class="text-white font-semibold text-2xl">LIVE: PHÁT TRỰC TIẾP (T18)</h3>
            <p class="text-white font-sans pt-2 pb-2 w-[full]">Phim Live - Phát Trực Tiếp do Khương Ngọc làm đạo diễn
              dựa
              trên những câu chuyện từ tập truyện ngắn "Đô Thị Linh Dị" của tác giả Nguyễn Ngọc Thạch. Cùng
              xem .</p>
            <img src="/images/2d.png" alt="" class="w-9 h-9">
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="pt-2 lg:pt-[115px]">
          <div class="bg-yellow-300 w-[90px] h-[90px]">
            <div>
              <h3 class="text-center pt-6 font-semibold">21/09 <br> 2023</h3>
            </div>
          </div>
        </div>
        <div class="pt-2.5 lg:pt-[117.5px]">
          <div class="flex bg-violet-300 w-[460px] lg:w-[600px] h-[85px]">
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">18:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">20:30</h3>
              </nuxt-link>
            </div>
            <div class="pt-2 px-2">
              <nuxt-link to="#">
                <h3 class="w-[70px] h-[70px] bg-purple-700 pt-5 text-center">22:30</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- uu dai và tin tức -->
  <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    <div class="flex flex-col items-center justify-center">
      <!-- ưu đãi -->
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
                <img src="/images/c_monday.jpg" alt=""
                     class="w-120 h-120 rounded-lg object-cover mr-[16px]">
              </div>
            </Slide>
          </carousel>
        </div>
      </div>
      <!-- tin tức -->
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
</template>